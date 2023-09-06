import React from 'react';

import Link from 'next/link';

import NavigationTabs from 'containers/nav-tabs';

const Header: React.FC = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <Link className="flex cursor-pointer" href="/">
        <h1 className="justify-self-start font-sans text-3xl font-bold uppercase">
          NCS Prototyping Network
        </h1>
      </Link>
      <NavigationTabs />
    </div>
  );
};

export default Header;
