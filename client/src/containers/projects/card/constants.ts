import AGROFORESTRY_SVG from 'svgs/pathways/agroforestry.svg?sprite';
import COASTAL_WETLANDS_SVG from 'svgs/pathways/coastal-wetlands.svg?sprite';
import PEATLANDS_SVG from 'svgs/pathways/peatlands.svg?sprite';

//TODO: Read constants from API
export const COLORS = {
  Agroforestry: 'bg-iris',
  'Coastal Wetlands (Avoided Impacts)': 'bg-rust',
  'Coastal Wetlands (Restoration)': 'bg-rust',
  'Peatlands (Avoided Impacts)': 'bg-cirrus',
  'Peatlands (Restoration)': 'bg-cirrus',
  Reforestation: 'bg-spring',
  Silvopasture: 'bg-midnight',
  'Avoided Deforestation': 'bg-iris',
  'Avoided Peat Impacts': 'bg-spring',
  'Grassland Management': 'bg-midnight',
};

export const ICONS = {
  Agroforestry: AGROFORESTRY_SVG,
  'Coastal Wetlands (Avoided Impacts)': COASTAL_WETLANDS_SVG,
  'Coastal Wetlands (Restoration)': COASTAL_WETLANDS_SVG,
  'Peatlands (Avoided Impacts)': PEATLANDS_SVG,
  'Peatlands (Restoration)': PEATLANDS_SVG,
};
