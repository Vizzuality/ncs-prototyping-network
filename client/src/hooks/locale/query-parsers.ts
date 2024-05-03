import { parseAsJson, createSerializer } from 'nuqs/parsers';

export type Locale = 'en' | 'pt' | 'es';

export const localeParser = parseAsJson<Locale>().withDefault('en');

// query params parsers
const searchQueryParams = {
  locale: localeParser,
};

export const serialize = createSerializer(searchQueryParams);
