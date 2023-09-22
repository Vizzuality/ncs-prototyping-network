import { CO_BENEFITS } from 'utils/constants-projects';

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

export const CO_BENEFITS_ICONS = {
  [CO_BENEFITS.Biodiversity]: AGROFORESTRY_SVG,
  [CO_BENEFITS.EcosystemServices]: COASTAL_WETLANDS_SVG,
  [CO_BENEFITS.ReslienceAndAdaptation]: PEATLANDS_SVG,
  [CO_BENEFITS.HumanHealthWellBeing]: PEATLANDS_SVG,
  [CO_BENEFITS.LivelihoodsEconomic]: AGROFORESTRY_SVG,
};
