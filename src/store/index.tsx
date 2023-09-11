import { atom } from 'recoil';

type Filters = {
  pathway: string;
  action: string;
  phase: string;
  category: string;
};

export const projectsViewAtom = atom<string>({
  key: 'projects-view',
  default: 'map',
});

export const filtersAtom = atom<Filters>({
  key: 'filters',
  default: {
    pathway: '',
    action: '',
    phase: '',
    category: '',
  },
});

const store = {
  projectsView: projectsViewAtom,
  filters: filtersAtom,
};

export default store;
