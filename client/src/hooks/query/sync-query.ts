import { useQueryState } from 'nuqs';

import { pathwayParser } from '@/hooks/query/query-parsers';

export const useSyncPathway = () => useQueryState('pathway', pathwayParser);
