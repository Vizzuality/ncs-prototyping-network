import { HiArrowNarrowRight } from 'react-icons/hi';

import Wrapper from 'containers/wrapper';

const Fields = (): JSX.Element => {
  return (
    <Wrapper>
      <section className="flex flex-col space-y-12 py-20">
        <h4 className="font-serif text-4xl font-semibold text-indigo">
          What we&apos;re field testing
        </h4>
        <p className="max-w-3xl text-xl text-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div>
          <div className="flex items-center justify-between border-t-2 p-4">
            <p className="text-4xl text-rust">Agroforestry</p>
            <button className="flex h-full w-32 justify-center">
              <HiArrowNarrowRight className="stroke-rust" size={40} />
            </button>
          </div>
          <div className="flex items-center justify-between border-t-2 p-4">
            <p className="text-4xl text-cirrus">Coastal Wetlands</p>
            <button className="flex h-full w-32 justify-center">
              <HiArrowNarrowRight className="stroke-cirrus" size={40} />
            </button>
          </div>
          <div className="flex items-center justify-between border-t-2 border-b-2 p-4">
            <p className="text-4xl text-iris">Petlands</p>
            <button className="flex h-full w-32 justify-center">
              <HiArrowNarrowRight className="stroke-iris" size={40} />
            </button>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Fields;
