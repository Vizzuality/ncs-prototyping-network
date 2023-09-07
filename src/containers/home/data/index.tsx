import Wrapper from 'containers/wrapper';

import { DATA } from './constants';

const Data = (): JSX.Element => {
  return (
    <section className="bg-background">
      <Wrapper>
        <div className="mx-20 flex justify-between py-16">
          {DATA.map((d) => (
            <div key={d.id} className="flex flex-col items-center space-y-3">
              <p className="font-sans text-4xl font-bold text-spring">{d.quantity}</p>
              <p className="max-w-[160px] text-center text-xl leading-7 text-text">{d.unit}</p>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Data;
