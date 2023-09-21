import Image from 'next/image';
import Link from 'next/link';

import { HiArrowNarrowRight } from 'react-icons/hi';

import Wrapper from 'containers/wrapper';

const HomeMap = (): JSX.Element => {
  return (
    <Wrapper>
      <section className="-mt-44 mb-24 flex h-full bg-white py-12 px-16">
        <div className="flex w-1/3 flex-col">
          <p className="text-lg font-light leading-9 text-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>

          <Link href="/projects">
            <div className="mt-6 inline-flex h-14 items-center space-x-6 rounded-none bg-butternut px-7 text-white">
              <p className="text-base font-bold uppercase">View Projects</p>
              <HiArrowNarrowRight color="white" size={20} />
            </div>
          </Link>
        </div>
        <div className="mt-8 flex h-full w-2/3 items-center justify-center">
          <Image src="/images/home/map.png" alt="Map" width={678} height={338} />
        </div>
      </section>
    </Wrapper>
  );
};

export default HomeMap;
