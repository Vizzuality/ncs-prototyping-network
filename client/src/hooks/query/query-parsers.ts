import { parseAsJson, createSerializer } from 'nuqs/parsers';

export type Locale = 'en' | 'pt' | 'es';

export const localeParser = parseAsJson<Locale>().withDefault('en');

export const pathwayParser = parseAsJson<string>().withDefault('');

// query params parsers
const searchQueryParams = {
  locale: localeParser,
  pathway: pathwayParser,
};

export const serialize = createSerializer(searchQueryParams);
