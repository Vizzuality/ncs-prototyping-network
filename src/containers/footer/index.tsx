import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import NavigationTabs from 'containers/nav-tabs';

const Footer: React.FC = () => {
  return (
    <div className="mt-auto flex w-full flex-col self-end pb-10">
      <Link className="items-left flex cursor-pointer" href="/">
        <h1 className="text-2xl font-semibold uppercase">NCS Prototyping Network</h1>
      </Link>

      <div className="flex justify-between">
        <div className="flex flex-col justify-between space-y-6">
          <NavigationTabs section="footer" />
          <p className="font-serif text-xs">© 2023 All Rights Reserved</p>
        </div>

        <div className="flex flex-col space-y-6">
          <div className="flex h-20 items-center space-x-6">
            <p className="uppercase">Visit our partner sites:</p>
            <a href="https://www.naturebase.org" className="w-44">
              <Image src="/images/logo-naturbase.svg" alt="Logo" width={200} height={20} />
            </a>
            <a href="https://www.naturebase.org" className="w-44">
              <Image src="/images/logo-naturbase.svg" alt="Logo" width={200} height={20} />
            </a>
          </div>
          <p className="font-serif text-xs uppercase">
            This project is supported by a grant from the Bezos Earth Fund
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
