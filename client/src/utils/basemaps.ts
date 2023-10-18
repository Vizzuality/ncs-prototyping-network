export type BasemapId = 'light' | 'satellite';

type BasemapTypes = {
  id: BasemapId;
  type: 'basemap';
  name: string;
  url: string;
};

const BASEMAPS = [
  {
    id: 'light',
    type: 'basemap',
    name: 'Light',
    url: 'mapbox://styles/mapbox/light-v10',
  },
  {
    id: 'satellite',
    type: 'basemap',
    name: 'Satellite',
    url: 'mapbox://styles/mapbox/satellite-streets-v10',
  },
] satisfies BasemapTypes[];

export default BASEMAPS;
