import { useEffect, useMemo, useState } from 'react';

import { Source, Layer } from 'react-map-gl';

import { GeoJSONSourceRaw, GeoJSONSourceOptions, CircleLayer } from 'mapbox-gl';
import { useRecoilValue } from 'recoil';

import { PROJECTS } from 'data/projects';
import { filtersAtom } from 'store';
import { ActionTypes, Pathways, Project } from 'types/project';

const LayerManager = () => {
  const filters = useRecoilValue(filtersAtom);
  const [dataFiltered, setDataFiltered] = useState<Project[]>(PROJECTS);
  const { pathways, project_phase, action_types, project_category } = filters;

  useEffect(() => {
    const activedFilters = Object.values(filters).some((f) => f.length > 0);
    const dataFinalFiltered = () => {
      return PROJECTS.filter((project) => {
        if (!!pathways.length) {
          if (!pathways.some((pw: Pathways) => project.pathways.includes(pw))) return false;
        }
        if (!!project_phase.length) {
          if (!project_phase.includes(project.project_phase)) return false;
        }
        if (!!action_types.length) {
          if (!action_types.some((at: ActionTypes) => project.action_types.includes(at)))
            return false;
        }
        if (!!project_category.length) {
          if (!project_category.includes(project.project_category)) return false;
        }
        return true;
      });
    };

    if (activedFilters) return setDataFiltered(dataFinalFiltered());

    if (!activedFilters) return setDataFiltered(PROJECTS);
  }, [action_types, filters, pathways, project_category, project_phase]);

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

  const SOURCE: GeoJSONSourceRaw & GeoJSONSourceOptions = {
    type: 'geojson',
    data: GEOJSON,
  };

  const LAYER: CircleLayer = useMemo(() => {
    return {
      id: 'projects-layer',
      type: 'circle',
      // filter: [
      //   'any',
      //   ...pathways.map((id) => {
      //     return ['in', id, ['get', 'pathways']];
      //   }),
      //   ...project_phase.map((id) => {
      //     return ['in', id, ['get', 'project_phase']];
      //   }),
      // ],

      paint: {
        'circle-color': '#1F51FF',
        'circle-opacity': 0.5,
        'circle-radius': 10,
      },
      layout: {
        visibility: 'visible',
      },
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <Source {...SOURCE}>
      <Layer {...LAYER} />
    </Source>
  );
};

export default LayerManager;
