import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import NavigationTabs from 'containers/nav-tabs';
import Wrapper from 'containers/wrapper';

import { cn } from 'utils/cn';

const Header: React.FC = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div
      className={cn({
        'absolute top-0 w-full': !pathname.startsWith('/projects'),
        'bg-gradient-to-r from-midnight to-indigo':
          pathname.startsWith('/projects') || pathname === '/contact',
      })}
    >
      <Wrapper className="h-18 flex w-full flex-row items-center justify-between self-start">
        <Link className="flex cursor-pointer" href="/">
          <h1 className="font-sans text-3xl uppercase text-white">NCS Prototyping Network</h1>
        </Link>
        <NavigationTabs />
      </Wrapper>
    </div>
  );
};

export default Header;
