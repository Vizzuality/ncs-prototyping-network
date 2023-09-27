// import type { LayerComponentProps } from '../types';

import { Source, Layer } from 'react-map-gl';

import { GeoJSONSourceRaw, GeoJSONSourceOptions, CircleLayer } from 'mapbox-gl';

import data from './data.json';

const GEOJSON = data as GeoJSON.FeatureCollection;
const SOURCE: GeoJSONSourceRaw & GeoJSONSourceOptions = {
  type: 'geojson',
  data: GEOJSON,
};

const LAYER: CircleLayer = {
  id: 'projects-layer',
  type: 'circle',
  paint: {
    'circle-color': ['interpolate', ['linear'], ['get', 'scalerank'], 2, '#FF3131', 9, '#1F51FF'],
    'circle-opacity': 0.5,
    'circle-radius': 5,
    'circle-stroke-color': [
      'interpolate',
      ['linear'],
      ['get', 'scalerank'],
      2,
      '#FF3131',
      9,
      '#1F51FF',
    ],
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
