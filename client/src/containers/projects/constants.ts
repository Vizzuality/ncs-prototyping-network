import BIODIVERSITY_SVG from 'svgs/co-benefits/biodiversity.svg?sprite';
import ECOSYSTEM_SERVICES_SVG from 'svgs/co-benefits/ecosystem_services.svg?sprite';
import HUMAN_HEALTH_WELLBEING_SVG from 'svgs/co-benefits/human_health_wellbeing.svg?sprite';
import LIVELIHOODS_ECONOMIC_SVG from 'svgs/co-benefits/livelihoods_economic.svg?sprite';
import RESILIENCE_AND_ADAPTATION_SVG from 'svgs/co-benefits/resilience_and_adaptation.svg?sprite';
import { CO_BENEFITS } from 'utils/constants-projects';

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
    id: 'project_phases',
    label: 'Project Phase',
    sorting: true,
  },
  {
    id: 'project_categories',
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
  [CO_BENEFITS.Biodiversity]: BIODIVERSITY_SVG,
  [CO_BENEFITS.EcosystemServices]: ECOSYSTEM_SERVICES_SVG,
  [CO_BENEFITS.ResilienceAndAdaptation]: RESILIENCE_AND_ADAPTATION_SVG,
  [CO_BENEFITS.HumanHealthWellBeing]: HUMAN_HEALTH_WELLBEING_SVG,
  [CO_BENEFITS.LivelihoodsEconomic]: LIVELIHOODS_ECONOMIC_SVG,
};
