'use client';

import Select from 'components/ui/select';

import { type Locale } from '@/hooks/query/query-parsers';
import { useSyncLocale } from '@/hooks/query/sync-query';

import { LOCALE_OPTIONS } from './constants';

const LanguageSwitcher: React.FC = () => {
  const [locale, setLocale] = useSyncLocale();

  const label = LOCALE_OPTIONS.find((option) => option.value === locale)?.label;

  return (
    <Select
      theme="tertiary"
      type={label}
      onValueChange={(value: Locale) => setLocale(value)}
      options={LOCALE_OPTIONS}
    />
  );
};

export default LanguageSwitcher;
