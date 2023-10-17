import { motion } from 'framer-motion';
import { HiArrowNarrowRight } from 'react-icons/hi';

import Button from 'components/ui/button';
import Wrapper from 'containers/wrapper';

const Facts = (): JSX.Element => {
  const arrowAnimation = {
    hover: {
      x: 15,
      transition: { duration: 0.25, bounce: 0 },
    },
  };
  return (
    <section className="bg-midnight">
      <Wrapper>
        <div className="my-20 flex flex-col items-center space-y-4 font-sans text-xl  text-white">
          <p className="max-w-4xl text-center leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <motion.div whileHover="hover">
            <Button className="mt-6 flex h-12 space-x-6 bg-transparent px-6 text-white hover:bg-transparent hover:text-white">
              <p className="font-light uppercase">Learn more facts</p>
              <motion.div variants={arrowAnimation}>
                <HiArrowNarrowRight color="white" size={20} />
              </motion.div>
            </Button>
          </motion.div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Facts;
