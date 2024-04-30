import Image from 'next/image';
import Link from 'next/link';

import Wrapper from 'containers/wrapper';
import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import { cn } from 'utils/cn';

import { PATHWAYS } from './constants';

const Pathways = (): JSX.Element => {
  const arrowAnimation = {
    hover: {
      x: 15,
      transition: { duration: 0.25, bounce: 0 },
    },
  };

  return (
    <Wrapper>
      <section className="z-10 -mb-40 flex flex-col space-y-12 py-20">
        <h4 className="font-serif text-4xl font-semibold text-indigo">
          What we&apos;re field testing
        </h4>
        <p className="max-w-7xl text-xl font-light leading-7 text-text">
          15 TNC-led projects are filling critical knowledge gaps that contribute to larger-scale
          expansion of NCS through the design and evaluation of peatland conservation and
          restoration, coastal wetland conservation and restoration, and agroforestry NCS projects.
        </p>
        <div>
          {PATHWAYS.map(({ id, icon, name, className }) => (
            <motion.div
              key={id}
              className="flex border-t-2 p-4 hover:cursor-pointer"
              whileHover="hover"
            >
              <Link
                className="flex w-full items-center justify-between"
                href={{
                  pathname: '/projects',
                  query: { pathway: name },
                }}
              >
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

                <motion.div
                  className="flex h-full w-32 items-center justify-center"
                  variants={arrowAnimation}
                >
                  <BsArrowRight
                    size={45}
                    className={cn({
                      [className.arrow]: !!className.arrow,
                    })}
                  />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default Pathways;
