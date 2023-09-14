import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import NavigationTabs from 'containers/nav-tabs';
import Wrapper from 'containers/wrapper';

const Footer: React.FC = () => {
  return (
    <div>
      <div className="mt-auto bg-[url('/images/home/footer.png')] bg-cover bg-bottom bg-no-repeat">
        <Wrapper className="flex w-full flex-col self-end pt-44 pb-10 text-white">
          <Link className="items-left flex cursor-pointer" href="/">
            <h1 className="text-2xl font-semibold uppercase">NCS Prototyping Network</h1>
          </Link>

          <div className="flex justify-between">
            <div className="flex flex-col justify-between space-y-6">
              <NavigationTabs section="footer" />
            </div>

            <div className="flex flex-col space-y-6">
              <div className="flex h-20 items-center space-x-6">
                <p className="uppercase">Visit our partner sites:</p>
                <a href="https://www.naturebase.org" className="w-44">
                  <Image src="/images/logos/naturbase.png" alt="Logo" width={200} height={20} />
                </a>
                <a href="https://www.naturebase.org" className="w-44">
                  <Image src="/images/logos/tnc.png" alt="Logo" width={200} height={20} />
                </a>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
      <div className="bg-black text-white">
        <Wrapper>
          <div className="flex justify-between py-10 font-serif text-xs uppercase">
            <p>© 2023 All Rights Reserved</p>
            <p>This project is supported by a grant from the Bezos Earth Fund</p>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Footer;
