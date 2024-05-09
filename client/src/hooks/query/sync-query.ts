import { useQueryState } from 'nuqs';

import { localeParser, pathwayParser } from '@/hooks/query/query-parsers';

export const useSyncLocale = () => useQueryState('locale', localeParser);

export const useSyncPathway = () => useQueryState('pathway', pathwayParser);
