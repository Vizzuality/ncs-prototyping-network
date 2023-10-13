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

//TODO: Type correctly
export type Media = {
  id: number;
  ext: '.png';
  url: string;
  hash: string;
  mime: 'image/png';
  name: string;
  size: number;
  type: 'asset';
  width: number;
  folder: null;
  height: number;
  caption: string;
  formats: {
    small: {
      ext: '.png';
      url: string;
      hash: string;
      mime: 'image/png';
      name: string;
      path: null;
      size: number;
      width: number;
      height: number;
    };
    thumbnail: {
      ext: '.png';
      url: string;
      hash: string;
      mime: 'image/png';
      name: string;
      path: null;
      size: number;
      width: number;
      height: number;
    };
  };
  provider: 'local';
  createdAt: Date;
  updatedAt: Date;
  folderPath: string;
  previewUrl: string | null;
  isSelectable: boolean;
  alternativeText: string | null;
  provider_metadata: null;
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
  pathways: Pathway[];
  action_types: ActionType[];
  cobenefits: CoBenefit[];
  carbon_mitigation: number;
  hectares_impacted: number;
  footer_photo: string;
  people_supported: number;
  project_phases: Phase[];
  project_categories: Category[];
  project_goal: string;
  project_summary: string;
  key_words: string;
  why_content: string;
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
  photo_1: 'https://app.box.com/folder/197132655122?s=wjmy8olrr5wgl4rgil0dyvb4an5af9sw';
  photo_1_caption: string;
  photo_2: 'https://app.box.com/folder/197130022488?s=85dqv97zumu69kjsh39mydlbprbpvuo4';
  photo_2_caption: string;
  photo_3: 'https://app.box.com/folder/197129292575';
  photo_3_caption: string;
  photo_4: string;
  photo_4_caption: string;
  video: 'https://app.box.com/folder/197132405895';
  video_caption: string;
  graphic_1: 'https://app.box.com/folder/197129650615?s=c746noi3vo5gccju2mcoqhltyfx1gblt';
  graphic_1_caption: string;
  graphic_2: 'https://app.box.com/folder/197130302681';
  graphic_2_caption: string;
  centroid_lat: number;
  centroid_long: number;
  project_site_description: string;
  project_size_ha: number;
  project_site_attribution: string;
  footer_img: string;
}

export type Total = {
  total_people_supported: number;
  total_area_ha_impacted: number;
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
