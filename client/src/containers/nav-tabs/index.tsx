import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useRecoilValue } from 'recoil';

import { headerStyleAtom } from '@/store';

import { cn } from 'utils/cn';

import { NAV_TABS_HEADER, NAV_TABS_FOOTER } from './constants';

const NavigationTabs = ({ section }: { section?: string }): JSX.Element => {
  const pathname = usePathname();
  const headerStyle = useRecoilValue(headerStyleAtom);

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
              'flex cursor-pointer items-center px-4 first:pl-0 hover:opacity-80': true,
              'h-5 border-r-[3px] border-white last:border-none': section === 'footer',
              // TODO: remove this when the about and resources pages are ready
              'pointer-events-none': tab.href === '/about' || tab.href === '/resources',
            })}
            href={tab.href}
          >
            <p
              className={cn({
                'py-5 font-sans text-xl uppercase text-white': true,
                'text-indigo': headerStyle === 'light' && section !== 'footer',
                'font-bold': pathname === tab.href && section !== 'footer',
                'py-0 text-base font-normal': section === 'footer',
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
