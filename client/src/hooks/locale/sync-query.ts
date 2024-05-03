import { useQueryState } from 'nuqs';

import { localeParser } from '@/hooks/locale/query-parsers';

export const useSyncLocale = () => useQueryState('locale', localeParser);
