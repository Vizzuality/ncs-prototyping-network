import { Pathways } from 'types/project';

export const getGeneralPathwayName = (pathway: Pathways) => {
  switch (pathway) {
    case 'Agroforestry':
      return 'Agroforestry';
    case 'Peatlands (Restoration)':
      return 'Peatlands';
    case 'Peatlands (Avoided Impacts)':
      return 'Peatlands';
    case 'Coastal Wetlands (Restoration)':
      return 'Coastal Wetlands';
    case 'Coastal Wetlands (Avoided Impacts)':
      return 'Coastal Wetlands';
  }
};

export const getEspecificPathwayName = (pathway) => {
  switch (pathway) {
    case 'Agroforestry':
      return ['Agroforestry'];
    case 'Peatlands':
      return ['Peatlands (Restoration)', 'Peatlands (Avoided Impacts)'];
    case 'Coastal Wetlands':
      return ['Coastal Wetlands (Restoration)', 'Coastal Wetlands (Avoided Impacts)'];
  }
};
