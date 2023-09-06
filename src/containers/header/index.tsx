import React from 'react';

import Link from 'next/link';

import NavigationTabs from 'containers/nav-tabs';
import Wrapper from 'containers/wrapper';

const Header: React.FC = () => {
  return (
    <Wrapper className="flex w-full flex-row items-center justify-between">
      <Link className="flex cursor-pointer" href="/">
        <h1 className="justify-self-start font-sans text-3xl font-bold uppercase">
          NCS Prototyping Network
        </h1>
      </Link>
      <NavigationTabs />
    </Wrapper>
  );
};

export default Header;
