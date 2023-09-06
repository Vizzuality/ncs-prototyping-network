import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { cn } from 'utils/cn';

import { NAV_TABS } from './constants';

const NavigationTabs: React.FC = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <nav className="justify-self-center">
      <ul className="relative m-0 flex w-full items-center space-x-10 p-0">
        {NAV_TABS.map((tab) => (
          <Link key={tab.label} className="flex cursor-pointer" href={tab.href}>
            <p
              className={cn({
                'py-5 font-sans text-base text-black': true,
                'font-bold': pathname === tab.href,
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
