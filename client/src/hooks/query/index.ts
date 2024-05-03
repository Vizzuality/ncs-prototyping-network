'use client';

import { type Locale, serialize } from './query-parsers';
import { useSyncLocale } from './sync-query';

// Define a type for the data structure
type QueryParamsData = {
  locale: Locale;
};

// Define a type for the exclusion parameters
type ExcludeParams = {
  locale?: Locale;
};

export const useSyncQueryParams = (exclude: ExcludeParams = {}) => {
  const [locale] = useSyncLocale();

  // Construct the data object with correct typing
  const data: QueryParamsData = { locale };

  // Filter out excluded keys
  const result: Partial<QueryParamsData> = {};
  Object.keys(data).forEach((key) => {
    if (!(key in exclude && exclude[key as keyof ExcludeParams])) {
      // Use type assertion here to ensure keys are recognized as valid
      result[key as keyof QueryParamsData] = data[key as keyof QueryParamsData];
    }
  });

  // Return the serialized object
  return serialize(result);
};
