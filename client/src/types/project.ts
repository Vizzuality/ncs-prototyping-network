import { GeoJSONSourceOptions, GeoJSONSourceRaw } from 'mapbox-gl';

export type ActionType = 'Restore' | 'Protect' | 'Manage';

export type Category = 'Policy project' | 'Carbon project' | 'Goverment led' | 'Community based';

export type CoBenefit =
  | 'Biodiversity'
  | 'Ecosystem Services'
  | 'Resilience and adaptation'
  | 'Human Health/Well-Being'
  | 'Cultural Heritage'
  | 'Livelihoods/Economic';

export type Pathway =
  | 'Agroforestry'
  | 'Coastal Wetlands (Avoided Impacts)'
  | 'Coastal Wetlands (Restoration)'
  | 'Peatlands (Avoided Impacts)'
  | 'Peatlands (Restoration)';

export type Phase = 'Piloting' | 'Implementing' | 'Scaling';

type Format = {
  ext: string;
  hash: string;
  height: number;
  mime: string;
  name: string;
  path: null;
  size: number;
  url: string;
  width: number;
};

export type Media = {
  alternativeText: string;
  caption: string;
  createdAt: string;
  ext: string;
  formats: {
    small: Format;
    medium: Format;
    thumbnail: Format;
  };
  hash: string;
  height: number;
  mime: string;
  name: string;
  previewUrl: string;
  provider: string;
  provider_metadata: string;
  size: number;
  updatedAt: string;
  url: string;
  width: number;
};

export interface Project {
  id: number;
  project_name: string;
  long_title: string;
  public_contact_name: string;
  public_contact_email: string;
  region: string;
  country: string;
  biome: string;
  extent: GeoJSONSourceRaw & GeoJSONSourceOptions;
  pathways: Pathway[];
  action_types: ActionType[];
  cobenefits: CoBenefit[];
  carbon_mitigation: number;
  hectares_impacted: number;
  fallback_photo: Media;
  footer_photo: Media;
  people_supported: number;
  project_phases: Phase[];
  project_categories: Category[];
  project_goal: string;
  project_summary: string;
  key_words: string;
  why_this_why_now: string;
  key_activities: string;
  primary_partners: string;
  successes: string;
  lesson_1: string;
  lesson_1_category: string;
  lesson_2: string;
  lesson_2_category: string;
  lesson_3: string;
  lesson_3_category: string;
  cb_biodiversity: string;
  cb_ecosystem_services: string;
  cb_resilience_adapt: string;
  cb_health_well_being: string;
  cb_livelihood_econ: string;
  callout: string;
  whats_next: string;
  abstract: string;
  citations: string;
  resources: string;
  video: Media;
  goals_photo: Media;
  graphic_1: Media;
  graphic_2: Media;
  graphic_2_caption: string;
  centroid_lat: number;
  centroid_long: number;
  project_site_description: string;
  project_size_ha: number;
  project_site_attribution: string;
  footer_img: string;
  why_this_why_now_callout: string;
}

export type Total = {
  countries: number;
  partners: number;
  projects: number;
  total_people_supported: number;
  total_hectares_impacted: number;
  total_carbon_mitigation: number;
};

export type PopUp = {
  popup: number[];
  popupInfo: {
    id: number;
    name: string;
    pathways: Pathway[];
    action_types: ActionType[];
    project_phases: Phase[];
    project_categories: Category[];
  };
  popUpPosition: { x: number; y: number };
};
