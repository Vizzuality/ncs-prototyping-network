import { ArrowRight } from 'lucide-react';

import Wrapper from 'containers/wrapper';

import Button from '@/components/ui/button';

const Facts = (): JSX.Element => {
  return (
    <section className="bg-gradient-to-r from-midnight via-indigo to-midnight">
      <Wrapper>
        <div className="my-20 flex flex-col items-center space-y-4 text-white">
          <p className="max-w-4xl text-center text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div>
            <Button className="mt-6 flex h-12 space-x-6 bg-transparent px-6 text-white hover:bg-transparent">
              <p className="text-xl uppercase">Learn more facts</p>
              <ArrowRight color="white" size={20} />
            </Button>
          </div>{' '}
        </div>
      </Wrapper>
    </section>
  );
};

export default Facts;
