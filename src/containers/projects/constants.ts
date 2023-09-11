import { Project } from '@/types/project';

export const COLUMNS = [
  {
    id: 'country',
    label: '',
    sorting: false,
  },
  {
    id: 'pathway',
    label: 'Pathway',
    sorting: false,
  },
  {
    id: 'action',
    label: 'Action Type',
    sorting: false,
  },
  {
    id: 'phase',
    label: 'Project Phase',
    sorting: true,
  },
  {
    id: 'category',
    label: 'Project Category',
    sorting: false,
  },
  {
    id: 'area',
    label: 'Area Impacted',
    sorting: true,
  },
  {
    id: 'people',
    label: 'People Supported',
    sorting: true,
  },
  {
    id: 'mitigation',
    label: 'Mitigation Potencial',
    sorting: true,
  },
  {
    id: 'co-benefits',
    label: 'Co-Benefits',
    sorting: false,
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    country: 'Australia',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo.',
    pathway: 'Coastal Wetland',
    action: 'Protect',
    phase: 'Early stage',
    categories: ['Community-based', 'Carbon Project', 'Policy Project'],
    area: '2,300 ha',
    people: '6,000',
    mitigation: '1,000,000 tCO2e',
    co_benefits: ['Biodiversity', 'Resilience/Adaptation', 'Livelihoods/Economic'],
    image: 'https://dummyimage.com/330x290/000/fff&text=+',
  },
  {
    id: 2,
    country: 'Angola',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo.',
    pathway: 'Coastal Wetland',
    action: 'Protect',
    phase: 'Late stage',
    categories: ['Community-based', 'carbon-project', 'policy-project'],
    area: '2,000 ha',
    people: '2,500',
    mitigation: '1,000,000 tCO2e',
    co_benefits: ['Biodiversity', 'Resilience/Adaptation', 'Livelihoods/Economic'],
    image: 'https://dummyimage.com/330x290/000/fff&text=+',
  },
  {
    id: 3,
    country: 'Brazil',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo.',
    pathway: 'Coastal Wetland',
    action: 'Protect',
    phase: 'Last stage',
    categories: ['Community-based', 'carbon-project', 'policy-project'],
    area: '2,000 ha',
    people: '4,000',
    mitigation: '1,000,000 tCO2e',
    co_benefits: ['Biodiversity', 'Resilience/Adaptation', 'Livelihoods/Economic'],
    image: 'https://dummyimage.com/330x290/000/fff&text=+',
  },
  {
    id: 4,
    country: 'Kenia',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo.',
    pathway: 'Coastal Wetland',
    action: 'Protect',
    phase: 'Early stage',
    categories: ['Community-based', 'carbon-project', 'policy-project'],
    area: '2,000 ha',
    people: '6,000',
    mitigation: '1,000,000 tCO2e',
    co_benefits: ['Biodiversity', 'Resilience/Adaptation', 'Livelihoods/Economic'],
    image: 'https://dummyimage.com/330x290/000/fff&text=+',
  },
  {
    id: 5,
    country: 'Tanzania',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo.',
    pathway: 'Coastal Wetland',
    action: 'Protect',
    phase: 'Early stage',
    categories: ['Community-based', 'carbon-project', 'policy-project'],
    area: '2,000 ha',
    people: '7,000',
    mitigation: '1,000,000 tCO2e',
    co_benefits: ['Biodiversity', 'Resilience/Adaptation', 'Livelihoods/Economic'],
    image: 'https://dummyimage.com/330x290/000/fff&text=+',
  },
  {
    id: 6,
    country: 'Costa Rica',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo.',
    pathway: 'Coastal Wetland',
    action: 'Protect',
    phase: 'Early stage',
    categories: ['Community-based', 'carbon-project', 'policy-project'],
    area: '2,000 ha',
    people: '8,000',
    mitigation: '1,000,000 tCO2e',
    co_benefits: ['Biodiversity', 'Resilience/Adaptation', 'Livelihoods/Economic'],
    image: 'https://dummyimage.com/330x290/000/fff&text=+',
  },
];