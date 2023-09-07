import Wrapper from 'containers/wrapper';

import Button from '@/components/ui/button';

const HomeMap = (): JSX.Element => {
  return (
    <Wrapper>
      <section className="-mt-44 flex bg-white py-12 px-16">
        <div className="flex w-1/3 flex-col">
          <p className="text-xl font-light leading-9 text-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
          <Button className="mt-6 h-12 rounded-none bg-butternut text-white">Projects</Button>
        </div>
        <div className="h-96 w-2/3 border"></div>
      </section>
    </Wrapper>
  );
};

export default HomeMap;
