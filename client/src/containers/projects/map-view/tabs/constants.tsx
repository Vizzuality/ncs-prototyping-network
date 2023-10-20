import { Basemap } from 'store';

type Tab = {
  id: Basemap;
  label: string;
};

export const TABS: Tab[] = [
  { id: 'outdoors', label: 'Map' },
  { id: 'satellite', label: 'Satellite' },
];
