import {
  PATHWAYS,
  ACTION_TYPES,
  PROJECT_PHASES,
  PROJECT_CATEGORIES,
} from 'utils/constants-projects';

export const PATHWAYS_OPTIONS = [
  { value: PATHWAYS.Agroforestry, label: PATHWAYS.Agroforestry, disabled: false },
  {
    value: PATHWAYS.CoastalWetlandsAvoidedImpacts,
    label: PATHWAYS.CoastalWetlandsAvoidedImpacts,
    disabled: false,
  },
  {
    value: PATHWAYS.CoastalWetlandsRestoration,
    label: PATHWAYS.CoastalWetlandsRestoration,
    disabled: false,
  },
  {
    value: PATHWAYS.PeatlandsAvoidedImpacts,
    label: PATHWAYS.PeatlandsAvoidedImpacts,
    disabled: false,
  },
  {
    value: PATHWAYS.PeatlandsRestoration,
    label: PATHWAYS.PeatlandsRestoration,
    disabled: false,
  },
];

export const ACTION_TYPES_OPTIONS = [
  { value: ACTION_TYPES.Protect, label: ACTION_TYPES.Protect, disabled: false },
  { value: ACTION_TYPES.Manage, label: ACTION_TYPES.Manage, disabled: false },
  { value: ACTION_TYPES.Restore, label: ACTION_TYPES.Restore, disabled: false },
];

export const P_PHASE_OPTIONS = [
  { value: PROJECT_PHASES.Piloting, label: PROJECT_PHASES.Piloting, disabled: false },
  { value: PROJECT_PHASES.Implementing, label: PROJECT_PHASES.Implementing, disabled: false },
  { value: PROJECT_PHASES.Scaling, label: PROJECT_PHASES.Scaling, disabled: false },
];

export const P_CATEGORY_OPTIONS = [
  {
    value: PROJECT_CATEGORIES.CommunityBased,
    label: PROJECT_CATEGORIES.CommunityBased,
    disabled: false,
  },
  {
    value: PROJECT_CATEGORIES.GovermentLed,
    label: PROJECT_CATEGORIES.GovermentLed,
    disabled: false,
  },
  {
    value: PROJECT_CATEGORIES.CarbonProject,
    label: PROJECT_CATEGORIES.CarbonProject,
    disabled: false,
  },
  {
    value: PROJECT_CATEGORIES.PolicyProject,
    label: PROJECT_CATEGORIES.PolicyProject,
    disabled: false,
  },
];
