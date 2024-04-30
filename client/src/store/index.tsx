import { LngLatBoundsLike } from 'mapbox-gl';
import { atom } from 'recoil';

import { WORLD_BOUNDS } from '@/components/map/constants';

export type Basemap = 'outdoors' | 'satellite';

export type HeaderStyle = 'default' | 'light' | 'dark';

export type Locale = 'en' | 'es' | 'pt';

export type Filters = {
  pathways: string[];
  action_types: string[];
  project_phases: string[];
  project_categories: string[];
};

export const basemapAtom = atom<Basemap>({
  key: 'basemap',
  default: 'outdoors',
});

export const projectsViewAtom = atom<string>({
  key: 'projects-view',
  default: 'map',
});

export const filtersAtom = atom<Filters>({
  key: 'filters',
  default: {
    pathways: [],
    action_types: [],
    project_phases: [],
    project_categories: [],
  },
});

export const filteredBboxAtom = atom<LngLatBoundsLike>({
  key: 'filtered-bbox',
  default: WORLD_BOUNDS,
});

export const headerStyleAtom = atom<HeaderStyle>({
  key: 'headerStyle',
  default: 'default',
});

export const localeAtom = atom<Locale>({
  key: 'locale',
  default: 'en',
});

const store = {
  projectsView: projectsViewAtom,
  filters: filtersAtom,
  basemap: basemapAtom,
  filteredBbox: filteredBboxAtom,
  headerStyle: headerStyleAtom,
  locale: localeAtom,
};

export default store;
