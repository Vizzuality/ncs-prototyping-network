export type BasemapId = 'outdoors' | 'satellite';

type BasemapTypes = {
  id: BasemapId;
  type: 'basemap';
  name: string;
  url: string;
};

const BASEMAPS = [
  {
    id: 'outdoors',
    type: 'basemap',
    name: 'Outdoors',
    url: 'mapbox://styles/mapbox/outdoors-v10',
  },
  {
    id: 'satellite',
    type: 'basemap',
    name: 'Satellite',
    url: 'mapbox://styles/mapbox/satellite-streets-v10',
  },
] satisfies BasemapTypes[];

export default BASEMAPS;
