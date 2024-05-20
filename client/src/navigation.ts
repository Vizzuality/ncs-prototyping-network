import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'es', 'pt'];

const localePrefix = 'always';

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales,
  localePrefix,
});
