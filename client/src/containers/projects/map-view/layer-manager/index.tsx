import { useEffect, useMemo, useState } from 'react';

import { Source, Layer } from 'react-map-gl';

import bbox from '@turf/bbox';
import { GeoJSONSourceRaw, GeoJSONSourceOptions, LngLatBoundsLike, SymbolLayer } from 'mapbox-gl';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { useProjects } from '@/hooks/projects';

import { filteredBboxAtom, filtersAtom } from 'store';
import { ActionType, Category, Pathway, Phase, Project } from 'types/project';

const LayerManager = () => {
  const projectsQuery = useProjects();
  const [dataFiltered, setDataFiltered] = useState<Project[]>(projectsQuery.data || []);

  const filters = useRecoilValue(filtersAtom);
  const setFilteredBbox = useSetRecoilState(filteredBboxAtom);

  useEffect(() => {
    const activedFilters = Object.values(filters).some((f) => f.length > 0);
    const dataFinalFiltered = () => {
      const data = projectsQuery.data?.filter((project) => {
        if (filters.pathways.length > 0) {
          if (!filters.pathways.some((pw: Pathway) => project.pathways.includes(pw))) return false;
        }
        if (filters.project_phases.length > 0) {
          if (!filters.project_phases.some((pp: Phase) => project.project_phases.includes(pp)))
            return false;
        }
        if (filters.action_types.length > 0) {
          if (!filters.action_types.some((at: ActionType) => project.action_types.includes(at)))
            return false;
        }
        if (filters.project_categories.length > 0) {
          if (
            !filters.project_categories.some((pc: Category) =>
              project.project_categories.includes(pc)
            )
          )
            return false;
        }
        return true;
      });
      return data;
    };

    if (activedFilters) return setDataFiltered(dataFinalFiltered());

    if (!activedFilters) return setDataFiltered(projectsQuery.data || []);
  }, [filters, projectsQuery.data]);

  const GEOJSON = {
    type: 'FeatureCollection',
    features: dataFiltered.map((project) => ({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [project.centroid_lat, project.centroid_long],
      },
      properties: {
        id: project.id,
        name: project.project_name,
        pathways: project.pathways,
        action_types: project.action_types,
        project_phases: project.project_phases,
        project_categories: project.project_categories,
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

  const LAYER: SymbolLayer = useMemo(() => {
    return {
      id: 'projects-layer',
      type: 'symbol',
      metadata: {
        position: 'top',
      },
      paint: {},
      layout: {
        'icon-size': 0.75,
        'icon-image': 'marker',
        'icon-allow-overlap': true,
        'icon-keep-upright': true,
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
