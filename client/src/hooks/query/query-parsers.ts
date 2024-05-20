import { createSerializer, parseAsString } from 'nuqs/server';

export const pathwayParser = parseAsString.withDefault('');

const searchQueryParams = {
  pathway: pathwayParser,
};

export const serialize = createSerializer(searchQueryParams);
