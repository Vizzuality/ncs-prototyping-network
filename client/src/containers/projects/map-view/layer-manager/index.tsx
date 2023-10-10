import { useEffect, useMemo, useState } from 'react';

import { Source, Layer } from 'react-map-gl';

import bbox from '@turf/bbox';
import { GeoJSONSourceRaw, GeoJSONSourceOptions, CircleLayer, LngLatBoundsLike } from 'mapbox-gl';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { PROJECTS } from 'data/projects';
import { filteredBboxAtom, filtersAtom } from 'store';
import { ActionTypes, Pathways, Project } from 'types/project';

const LayerManager = () => {
  const [dataFiltered, setDataFiltered] = useState<Project[]>(PROJECTS);

  const filters = useRecoilValue(filtersAtom);
  const setFilteredBbox = useSetRecoilState(filteredBboxAtom);

  useEffect(() => {
    const activedFilters = Object.values(filters).some((f) => f.length > 0);
    const dataFinalFiltered = () => {
      const data = PROJECTS.filter((project) => {
        if (filters.pathways.length > 0) {
          if (!filters.pathways.some((pw: Pathways) => project.pathways.includes(pw))) return false;
        }
        if (filters.project_phase.length > 0) {
          if (!filters.project_phase.includes(project.project_phase)) return false;
        }
        if (filters.action_types.length > 0) {
          if (!filters.action_types.some((at: ActionTypes) => project.action_types.includes(at)))
            return false;
        }
        if (filters.project_category.length > 0) {
          if (!filters.project_category.includes(project.project_category)) return false;
        }
        return true;
      });
      return data;
    };

    if (activedFilters) return setDataFiltered(dataFinalFiltered());

    if (!activedFilters) return setDataFiltered(PROJECTS);
  }, [filters]);

  const GEOJSON = {
    type: 'FeatureCollection',
    features: dataFiltered.map((project) => ({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [project.centroid_lat, project.centroid_long],
      },
      properties: {
        pathways: project.pathways,
        action_types: project.action_types,
        project_phase: project.project_phase,
        project_category: project.project_category,
      },
    })),
  } as GeoJSON.FeatureCollection;

  useEffect(() => {
    const bboxTurf = bbox(GEOJSON) as LngLatBoundsLike;
    setFilteredBbox(bboxTurf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataFiltered, setFilteredBbox]);

  const SOURCE: GeoJSONSourceRaw & GeoJSONSourceOptions = {
    type: 'geojson',
    data: GEOJSON,
  };

  const LAYER: CircleLayer = useMemo(() => {
    return {
      id: 'projects-layer',
      type: 'circle',
      // ...(activedFilters && {
      //   filter: [
      //     'all',
      //     ...(!!pathways.length
      //       ? [
      //           [
      //             'any',
      //             ...pathways.map((id) => {
      //               return ['in', id, ['get', 'pathways']];
      //             }),
      //           ],
      //         ]
      //       : []),
      //     ...(!!project_phase.length
      //       ? [
      //           [
      //             'any',
      //             ...project_phase.map((id) => {
      //               return ['in', id, ['get', 'project_phase']];
      //             }),
      //           ],
      //         ]
      //       : []),
      //     ...(!!action_types.length
      //       ? [
      //           [
      //             'any',
      //             ...action_types.map((id) => {
      //               return ['in', id, ['get', 'action_types']];
      //             }),
      //           ],
      //         ]
      //       : []),
      //     ...(!!project_category.length
      //       ? [
      //           [
      //             'any',
      //             ...project_category.map((id) => {
      //               return ['in', id, ['get', 'project_category']];
      //             }),
      //           ],
      //         ]
      //       : []),
      //   ],
      // }),
      paint: {
        'circle-color': '#1F51FF',
        'circle-opacity': 0.5,
        'circle-radius': 10,
      },
      layout: {
        visibility: 'visible',
      },
    };
  }, []);

  return (
    <Source {...SOURCE}>
      <Layer {...LAYER} />
    </Source>
  );
};

export default LayerManager;
