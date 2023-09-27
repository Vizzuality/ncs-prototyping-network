// import type { LayerComponentProps } from '../types';

import { Source, Layer } from 'react-map-gl';

import { GeoJSONSourceRaw, GeoJSONSourceOptions, CircleLayer } from 'mapbox-gl';

import { PROJECTS } from '@/data/projects';

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

const LAYER: CircleLayer = {
  id: 'projects-layer',
  type: 'circle',
  // filter: ['==', 'project_phase', 'Piloting'],
  paint: {
    'circle-color': '#1F51FF',
    'circle-opacity': 0.5,
    'circle-radius': 10,
  },
  layout: {
    visibility: 'visible',
  },
};

const LayerManager = () => (
  <Source {...SOURCE}>
    <Layer {...LAYER} />
  </Source>
);

export default LayerManager;
