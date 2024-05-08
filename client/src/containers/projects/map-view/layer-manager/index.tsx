import { useEffect, useMemo, useState } from 'react';

import { Source, Layer } from 'react-map-gl';

import bbox from '@turf/bbox';
import { GeoJSONSourceRaw, GeoJSONSourceOptions, LngLatBoundsLike, SymbolLayer } from 'mapbox-gl';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { useGetProjects } from '@/types/generated/project';

import { useSyncLocale } from '@/hooks/query/sync-query';

import { filteredBboxAtom, filtersAtom } from 'store';

const LayerManager = () => {
  const [locale] = useSyncLocale();

  const { data: projectsData } = useGetProjects({ populate: '*', locale });

  const [dataFiltered, setDataFiltered] = useState(projectsData?.data.data || []);

  const filters = useRecoilValue(filtersAtom);
  const setFilteredBbox = useSetRecoilState(filteredBboxAtom);

  useEffect(() => {
    const activedFilters = Object.values(filters).some((f) => f?.length > 0);
    const dataFinalFiltered = () => {
      const data = projectsData?.data?.data?.filter((project) => {
        if (filters.pathways.length > 0) {
          if (
            !filters.pathways.some((pw) =>
              project.attributes.pathways.data.map((pa) => pa.attributes.name).includes(pw)
            )
          )
            return false;
        }
        if (filters.project_phases.length > 0) {
          if (
            !filters.project_phases.some((pp) =>
              project.attributes.project_phases.data.map((pa) => pa.attributes.name).includes(pp)
            )
          )
            return false;
        }
        if (filters.action_types.length > 0) {
          if (
            !filters.action_types.some((at) =>
              project.attributes.action_types.data.map((pa) => pa.attributes.name).includes(at)
            )
          )
            return false;
        }
        if (filters.project_categories.length > 0) {
          if (
            !filters.project_categories.some((pc) =>
              project.attributes.project_categories.data
                .map((pa) => pa.attributes.name)
                .includes(pc)
            )
          )
            return false;
        }
        return true;
      });
      return data;
    };

    if (activedFilters) return setDataFiltered(dataFinalFiltered());

    if (!activedFilters) return setDataFiltered(projectsData?.data?.data || []);
  }, [filters, projectsData?.data?.data]);

  const GEOJSON = {
    type: 'FeatureCollection',
    features: dataFiltered.map((project) => ({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [project.attributes.centroid_lat, project.attributes.centroid_long],
      },
      properties: {
        id: project.id,
        name: project.attributes.project_name,
        pathways: project.attributes.pathways,
        action_types: project.attributes.action_types,
        project_phases: project.attributes.project_phases,
        project_categories: project.attributes.project_categories,
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
      paint: {},
      layout: {
        'icon-size': 0.75,
        'icon-image': 'marker',
        'icon-allow-overlap': true,
        'icon-keep-upright': true,
        'icon-anchor': 'bottom',
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
