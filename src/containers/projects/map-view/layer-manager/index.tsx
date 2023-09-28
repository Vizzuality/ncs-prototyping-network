import { useMemo } from 'react';

import { Source, Layer } from 'react-map-gl';

import { GeoJSONSourceRaw, GeoJSONSourceOptions, CircleLayer } from 'mapbox-gl';
import { useRecoilValue } from 'recoil';

import { PROJECTS } from '@/data/projects';
import { filtersAtom } from '@/store';

const formattedData = {
  type: 'FeatureCollection',
  features: PROJECTS.map((project) => ({
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
};

const GEOJSON = formattedData as GeoJSON.FeatureCollection;
const SOURCE: GeoJSONSourceRaw & GeoJSONSourceOptions = {
  type: 'geojson',
  data: GEOJSON,
};

const LayerManager = () => {
  const filters = useRecoilValue(filtersAtom);

  const LAYER: CircleLayer = useMemo(() => {
    return {
      id: 'projects-layer',
      type: 'circle',
      // ...(!!pathways.length && {
      //   filter: ['any',
      //   ['in', pathways[0], ['get', 'pathways']]],
      // }),

      // ...(!!pathways.length && {
      //   filter: ['in', ['get', 'id'], ['literal', pathways]],
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <Source {...SOURCE}>
      <Layer {...LAYER} />
    </Source>
  );
};

export default LayerManager;
