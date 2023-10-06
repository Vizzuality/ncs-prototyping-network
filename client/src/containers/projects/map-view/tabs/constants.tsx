import { Basemap } from 'store';

type Tab = {
  id: Basemap;
  label: string;
};

export const TABS: Tab[] = [
  { id: 'light', label: 'Map' },
  { id: 'satellite', label: 'Satellite' },
];
