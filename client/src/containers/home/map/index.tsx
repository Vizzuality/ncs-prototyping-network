import Image from 'next/image';
import Link from 'next/link';

import { HiArrowNarrowRight } from 'react-icons/hi';

import Button from 'components/ui/button';
import Wrapper from 'containers/wrapper';

const HomeMap = (): JSX.Element => {
  return (
    <Wrapper>
      <section className="-mt-44 mb-24 flex h-full items-center bg-white py-12 px-16">
        <div className="flex w-1/3 flex-col">
          <p className="text-base font-light leading-7 text-text lg:text-lg xl:text-xl xl:leading-9">
            The Nature Conservancy’s NCS Prototyping Network, part of a broader NCS Activation
            Toolkit funded by the Bezos Earth Fund, is bringing together field staff and scientists
            from 15 existing TNC projects using NCS interventions in peatlands, coastal wetlands,
            and agroforestry systems. Each project is a means to field test the impact and efficacy
            of different approaches.
          </p>

          <Link href="/projects">
            <Button>
              <p className="text-base font-bold uppercase">Projects</p>
              <HiArrowNarrowRight className="stroke-white hover:stroke-butternut" size={20} />
            </Button>
          </Link>
        </div>
        <div className="ml-20 flex h-full w-2/3 items-center justify-center xl:ml-0">
          <Image src="/images/home/map.png" alt="Map" width={678} height={338} />
        </div>
      </section>
    </Wrapper>
  );
};

export default HomeMap;
