import { Project } from '@/types/project';

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
      'Restoring Australia’s Mangroves: Building a Model of Blue Carbon Conservation and Sustainable Financing 2021 –2024',
    pathway: 'Peatlands',
    action: 'Manage',
    phase: 'Implementing',
    category: 'Community-based',
    area: '2,300 ha',
    people: '6,000',
    mitigation: '1,000,000 tCO2e',
    co_benefits: ['Biodiversity', 'Resilience/Adaptation', 'Livelihoods/Economic'],

    image: 'https://dummyimage.com/100x100/000/fff&text=+',
  },
  {
    id: 2,
    country: 'Angola',
    description:
      'Restoring Australia’s Mangroves: Building a Model of Blue Carbon Conservation and Sustainable Financing 2021 –2024',
    pathway: 'Peatlands',
    action: 'Restore',
    phase: 'Piloting',
    category: 'Carbon project',
    area: '2,000 ha',
    people: '2,500',
    mitigation: '1,000,000 tCO2e',
    co_benefits: [
      'Biodiversity',
      'Ecosystem Services',
      'Resilience/Adaptation',
      'Human Health/Well-Being',
      'Livelihoods/Economic',
    ],
    image: 'https://dummyimage.com/100x100/000/fff&text=+',
  },
  {
    id: 3,
    country: 'Brazil',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.',
    pathway: 'Agroforestry',
    action: 'Restore',
    phase: 'Piloting',
    category: 'Carbon project',
    area: '2,000 ha',
    people: '4,000',
    mitigation: '1,000,000 tCO2e',
    co_benefits: ['Ecosystem Services', 'Resilience/Adaptation', 'Human Health/Well-Being'],
    image: 'https://dummyimage.com/100x100/000/fff&text=+',
  },
  {
    id: 4,
    country: 'Kenia',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.',
    pathway: 'Coastal Wetlands',
    action: 'Manage',
    phase: 'Implementing',
    category: 'Policy project',
    area: '2,000 ha',
    people: '6,000',
    mitigation: '1,000,000 tCO2e',
    co_benefits: ['Biodiversity', 'Ecosystem Services'],
    image: 'https://dummyimage.com/100x100/000/fff&text=+',
  },
  {
    id: 5,
    country: 'Tanzania',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.',
    pathway: 'Agroforestry',
    action: 'Protect',
    phase: 'Scaling',
    category: 'Community-based',
    area: '2,000 ha',
    people: '7,000',
    mitigation: '1,000,000 tCO2e',
    co_benefits: ['Biodiversity', 'Livelihoods/Economic'],
    image: 'https://dummyimage.com/100x100/000/fff&text=+',
  },
  {
    id: 6,
    country: 'Costa Rica',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.',
    pathway: 'Agroforestry',
    action: 'Manage',
    phase: 'Scaling',
    category: 'Policy project',
    area: '2,000 ha',
    people: '8,000',
    mitigation: '1,000,000 tCO2e',
    co_benefits: ['Resilience/Adaptation', 'Livelihoods/Economic'],
    image: 'https://dummyimage.com/100x100/000/fff&text=+',
  },
];

export const CO_BENEFITS_ICONS = {
  Biodiversity: AGROFORESTRY_SVG,
  'Ecosystem Services': COASTAL_WETLANDS_SVG,
  'Resilience/Adaptation': PEATLANDS_SVG,
  'Human Health/Well-Being': PEATLANDS_SVG,
  'Livelihoods/Economic': AGROFORESTRY_SVG,
};
