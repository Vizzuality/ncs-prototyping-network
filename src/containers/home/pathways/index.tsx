import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';

import Wrapper from 'containers/wrapper';

import Icon from 'components/icon/component';
import { cn } from 'utils/cn';

import ARROW_SVG from 'svgs/ui/arrow.svg?sprite';

import { PATHWAYS } from './constants';

const Pathways = (): JSX.Element => {
  return (
    <Wrapper>
      <section className="z-10 -mb-40 flex flex-col space-y-12 py-20">
        <h4 className="font-serif text-4xl font-semibold text-indigo">
          What we&apos;re field testing
        </h4>
        <p className="max-w-3xl text-xl text-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div>
          {PATHWAYS.map(({ id, icon, name, className }) => (
            <div key={id} className="flex items-center justify-between border-t-2 p-4">
              <div className="flex items-center space-x-10">
                <Image src={icon} alt={name} height={60} width={60} />
                <p
                  className={cn({
                    'font-sans text-[40px] font-light': true,
                    [className.text]: !!className.text,
                  })}
                >
                  {name}
                </p>
              </div>

              <Link
                href={{
                  pathname: '/projects',
                  query: { pathway: name },
                }}
              >
                <motion.div
                  className="flex h-full w-32 justify-center"
                  whileHover={{
                    x: 15,
                    transition: { duration: 0.25, bounce: 0 },
                  }}
                >
                  <Icon
                    icon={ARROW_SVG}
                    className={cn({
                      'h-8 w-12': true,
                      [className.arrow]: !!className.arrow,
                    })}
                  />
                </motion.div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default Pathways;
