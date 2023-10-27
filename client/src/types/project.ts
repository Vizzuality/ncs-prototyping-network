import { ActionType, Pathway, ProjectCategory, ProjectPhase } from './generated/strapi.schemas';

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
    project_phases: ProjectPhase[];
    project_categories: ProjectCategory[];
  };
  popUpPosition: { x: number; y: number };
};
