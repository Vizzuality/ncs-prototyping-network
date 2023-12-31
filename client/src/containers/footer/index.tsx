'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useRecoilValue } from 'recoil';

import NavigationTabs from 'containers/nav-tabs';
import Wrapper from 'containers/wrapper';
import { projectsViewAtom } from 'store';
import { cn } from 'utils/cn';

const Footer: React.FC = () => {
  const pathname = usePathname();

  const projectsView = useRecoilValue(projectsViewAtom);

  const getBackground = () => {
    if (pathname === '/') {
      return `url('/images/home/footer.png')`;
    }
    if (pathname.startsWith('/projects') && projectsView === 'map') {
      return `url('/images/projects/map/footer.png')`;
    }
    if (pathname.startsWith('/projects') && projectsView === 'metrics') {
      return `url('/images/projects/metrics/footer.png')`;
    }
    if (pathname === '/contact') {
      return `url('/images/contact/footer.jpg')`;
    }
  };

  return (
    <div className="relative">
      <div
        className={cn({
          "mt-auto  bg-cover bg-no-repeat after:absolute after:bottom-[72px] after:left-0 after:h-24 after:w-full after:bg-gradient-to-b after:from-transparent after:to-black/80 after:content-['']":
            true,
        })}
        style={{
          backgroundImage: getBackground(),
        }}
      >
        <Wrapper className="flex w-full flex-col self-end pt-[300px] text-white xl:pt-[350px] 2xl:pt-[450px]">
          <Link className="items-left flex cursor-pointer" href="/">
            <h1 className="text-2xl font-semibold uppercase">NCS Prototyping Network</h1>
          </Link>

          <div className="z-10 flex justify-between">
            <div className="flex flex-col justify-between space-y-6">
              <NavigationTabs section="footer" />
            </div>

            <div className="flex flex-col space-y-6">
              <div className="flex h-20 items-center space-x-6">
                <p className="hidden uppercase xl:block">Visit our partner sites:</p>
                <a href="https://www.naturebase.org" className="w-44">
                  <Image src="/images/logos/naturbase.svg" alt="Logo" width={150} height={20} />
                </a>
                <a href="https://www.naturebase.org" className="w-44">
                  <Image src="/images/logos/tnc.png" alt="Logo" width={150} height={20} />
                </a>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>

      <div className="bg-black text-white">
        <Wrapper>
          <div className="flex justify-between py-7 font-serif text-xs uppercase tracking-wide">
            <p>© 2023 All Rights Reserved</p>
            <p>This project is supported by a grant from the Bezos Earth Fund</p>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Footer;
