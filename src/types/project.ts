export type CoBenefits =
  | 'Biodiversity'
  | 'Ecosystem Services'
  | 'Resilience/Adaptation'
  | 'Human Health/Well-Being'
  | 'Cultural Heritage'
  | 'Livelihoods/Economic';

export interface Project {
  id: number;
  country: string;
  description: string;
  pathway: string;
  action: string;
  phase: string;
  categories: string[];
  area: string;
  people: string;
  mitigation: string;
  co_benefits: CoBenefits[];
  image: string;
}
