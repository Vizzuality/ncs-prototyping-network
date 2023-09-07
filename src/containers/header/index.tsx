import React from 'react';

import Link from 'next/link';

import NavigationTabs from 'containers/nav-tabs';
import Wrapper from 'containers/wrapper';

const Header: React.FC = () => {
  return (
    <Wrapper className="h-18 flex w-full flex-row items-center justify-between self-start border">
      <Link className="flex cursor-pointer" href="/">
        <h1 className="font-sans text-3xl font-bold uppercase">NCS Prototyping Network</h1>
      </Link>
      <NavigationTabs />
    </Wrapper>
  );
};

export default Header;
