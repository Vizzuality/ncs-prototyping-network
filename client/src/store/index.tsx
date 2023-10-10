import { LngLatBoundsLike } from 'mapbox-gl';
import { atom } from 'recoil';

import { WORLD_BOUNDS } from '@/components/map/constants';
export type Basemap = 'light' | 'satellite';
export type Filters = {
  pathways: string[];
  action_types: string[];
  project_phase: string[];
  project_category: string[];
};

export const basemapAtom = atom<Basemap>({
  key: 'basemap',
  default: 'light',
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
    project_phase: [],
    project_category: [],
  },
});

export const filteredBboxAtom = atom<LngLatBoundsLike>({
  key: 'filtered-bbox',
  default: WORLD_BOUNDS,
});

const store = {
  projectsView: projectsViewAtom,
  filters: filtersAtom,
  basemap: basemapAtom,
  filteredBbox: filteredBboxAtom,
};

export default store;
