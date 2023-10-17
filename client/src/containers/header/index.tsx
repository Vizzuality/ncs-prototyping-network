'use client';
import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import NavigationTabs from 'containers/nav-tabs';
import Wrapper from 'containers/wrapper';
import { cn } from 'utils/cn';

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <div
      className={cn({
        'absolute top-0 w-full': !pathname.startsWith('/projects'),
        'bg-gradient-to-r from-midnight to-indigo':
          pathname === '/projects' || pathname === '/contact',
      })}
    >
      <Wrapper className="h-18 relative z-50 flex w-full flex-row items-center justify-between self-start">
        <Link className="flex cursor-pointer" href="/">
          <h1 className="font-sans text-2xl uppercase text-white">NCS Prototyping Network</h1>
        </Link>
        <NavigationTabs />
      </Wrapper>
    </div>
  );
};

export default Header;
