import { atom } from 'recoil';

type Filters = {
  pathways: string[];
  action_types: string[];
  project_phase: string[];
  project_category: string[];
};

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

const store = {
  projectsView: projectsViewAtom,
  filters: filtersAtom,
};

export default store;
