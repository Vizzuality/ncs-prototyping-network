import AGROFORESTRY_SVG from 'svgs/pathways/agroforestry.svg?sprite';
import COASTAL_WETLANDS_SVG from 'svgs/pathways/coastal-wetlands.svg?sprite';
import PEATLANDS_SVG from 'svgs/pathways/peatlands.svg?sprite';
import { PATHWAYS } from 'utils/constants-projects';

export const COLORS = {
  [PATHWAYS.Agroforestry]: 'bg-iris',
  [PATHWAYS.CoastalWetlandsAvoidedImpacts]: 'bg-rust',
  [PATHWAYS.CoastalWetlandsRestoration]: 'bg-rust',
  [PATHWAYS.PeatlandsAvoidedImpacts]: 'bg-cirrus',
  [PATHWAYS.PeatlandsRestoration]: 'bg-cirrus',
};

export const ICONS = {
  [PATHWAYS.Agroforestry]: AGROFORESTRY_SVG,
  [PATHWAYS.CoastalWetlandsAvoidedImpacts]: COASTAL_WETLANDS_SVG,
  [PATHWAYS.CoastalWetlandsRestoration]: COASTAL_WETLANDS_SVG,
  [PATHWAYS.PeatlandsAvoidedImpacts]: PEATLANDS_SVG,
  [PATHWAYS.PeatlandsRestoration]: PEATLANDS_SVG,
};
