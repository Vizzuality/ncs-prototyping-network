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
  abstract: string;
  action_types: ActionType[];
  biome: string;
  callout: string;
  carbon_mitigation: string;
  cb_biodiversity: string;
  cb_ecosystem_services: string;
  cb_health_well_being: string;
  cb_livelihood_econ: string;
  cb_resilience_adapt: string;
  centroid_lat: number;
  centroid_long: number;
  citations: string;
  cobenefits: CoBenefit[];
  country: string;
  extent: GeoJSONSourceRaw & GeoJSONSourceOptions;
  fallback_photo: Media;
  footer_photo: Media;
  goals_photo: Media;
  graphic: Media;
  header_photo: Media;
  hectares_impacted: string;
  key_activities: string;
  key_words: string;
  lesson_1: string;
  lesson_1_category: string;
  lesson_2: string;
  lesson_2_category: string;
  lesson_3: string;
  lesson_3_category: string;
  long_title: string;
  pathways: Pathway[];
  people_supported: string;
  primary_partners: string;
  project_categories: Category[];
  project_name: string;
  project_goal: string;
  project_phases: Phase[];
  project_site_attribution: string;
  project_site_description: string;
  project_size_ha: number;
  project_summary: string;
  public_contact_name: string;
  public_contact_email: string;
  region: string;
  resources: string;
  successes: string;
  whats_next: string;
  video: string;
  video_caption: string;
  why_this_why_now: string;
  why_this_why_now_callout: string;
}

export type Total = {
  total_people_supported: string;
  total_hectares_impacted: string;
  total_carbon_mitigation: string;
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
