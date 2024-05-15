import { createSerializer, parseAsStringEnum, parseAsString } from 'nuqs/server';

export enum Locale {
  en = 'en',
  es = 'es',
  pt = 'pt',
}

export const localeParser = parseAsStringEnum<Locale>(Object.values(Locale)).withDefault(Locale.en);

export const pathwayParser = parseAsString.withDefault('');

const searchQueryParams = {
  locale: localeParser,
  pathway: pathwayParser,
};

export const serialize = createSerializer(searchQueryParams);
