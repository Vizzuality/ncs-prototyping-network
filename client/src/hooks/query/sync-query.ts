import { useQueryState } from 'nuqs';

import { localeParser } from '@/hooks/query/query-parsers';

export const useSyncLocale = () => useQueryState('locale', localeParser);
