import { atom } from 'recoil';

export const projectsViewAtom = atom<string>({
  key: 'projects-view',
  default: 'map',
});

const store = {
  projectsView: projectsViewAtom,
};

export default store;
