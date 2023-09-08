import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { cn } from 'utils/cn';

import { NAV_TABS_HEADER, NAV_TABS_FOOTER } from './constants';

const NavigationTabs = ({ section }: { section?: string }): JSX.Element => {
  const router = useRouter();
  const { pathname } = router;

  const NAV_TABS = section === 'footer' ? NAV_TABS_FOOTER : NAV_TABS_HEADER;

  return (
    <nav
      className={cn({
        'h-6 pt-5': section === 'footer',
      })}
    >
      <ul className="relative m-0 flex w-full items-center p-0">
        {NAV_TABS.map((tab) => (
          <Link
            key={tab.label}
            className={cn({
              'flex cursor-pointer px-5 first:pl-0': true,
              'border-r-[3px] border-white': section === 'footer',
            })}
            href={tab.href}
          >
            <p
              className={cn({
                'py-5 font-sans text-base uppercase text-white': true,
                'font-bold': pathname === tab.href && section !== 'footer',
                'py-0': section === 'footer',
              })}
            >
              {tab.label}
            </p>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationTabs;
