import Wrapper from 'containers/wrapper';

import { DATA } from './constants';

const Data = (): JSX.Element => {
  return (
    <section className="bg-background">
      <Wrapper>
        <div className="mx-16 flex justify-between py-7 xl:mx-20">
          {DATA.map((d) => (
            <div key={d.id} className="flex flex-col items-center space-y-2">
              <p className="font-sans text-3xl font-bold text-spring xl:text-4xl">{d.quantity}</p>
              <p className="max-w-[120px] text-center text-base font-medium leading-7 text-text xl:max-w-[160px] xl:text-lg">
                {d.unit}
              </p>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Data;
