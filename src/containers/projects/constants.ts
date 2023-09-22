import AGROFORESTRY_SVG from 'svgs/pathways/agroforestry.svg?sprite';
import COASTAL_WETLANDS_SVG from 'svgs/pathways/coastal-wetlands.svg?sprite';
import PEATLANDS_SVG from 'svgs/pathways/peatlands.svg?sprite';

export const COLUMNS = [
  {
    id: 'country',
    label: '',
    sorting: false,
  },
  {
    id: 'pathways',
    label: 'Pathway',
    sorting: false,
  },
  {
    id: 'action_types',
    label: 'Action Type',
    sorting: false,
  },
  {
    id: 'project_phase',
    label: 'Project Phase',
    sorting: true,
  },
  {
    id: 'project_category',
    label: 'Project Category',
    sorting: false,
  },
  {
    id: 'hectares_impacted',
    label: 'Area Impacted',
    sorting: true,
  },
  {
    id: 'people_supported',
    label: 'People Supported',
    sorting: true,
  },
  {
    id: 'carbon_mitigation',
    label: 'Mitigation Potencial',
    sorting: true,
  },
  {
    id: 'co-benefits',
    label: 'Co-Benefits',
    sorting: false,
  },
];

// !TODO: Read keys from types
export const CO_BENEFITS_ICONS = {
  Biodiversity: AGROFORESTRY_SVG,
  'Ecosystem Services': COASTAL_WETLANDS_SVG,
  'Reslience and adaptation': PEATLANDS_SVG,
  'Human Health/Well-Being': PEATLANDS_SVG,
  'Livelihoods/Economic': AGROFORESTRY_SVG,
};
