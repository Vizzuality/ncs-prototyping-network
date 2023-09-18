import Wrapper from 'containers/wrapper';

import { OBJECTIVES } from './constants';

const Objectives = (): JSX.Element => {
  return (
    <Wrapper>
      <section className="flex flex-col space-y-12 py-16">
        <div className="flex flex-col space-y-4">
          <h4 className="font-serif text-4xl font-semibold text-indigo">What we do</h4>
          <p className="text-lg font-medium text-text">Local and global teams work together to: </p>
        </div>
        <div className="grid grid-cols-4 gap-x-10">
          {OBJECTIVES.map((o) => (
            <div key={o.id} className="flex flex-col space-y-1">
              <div className="h-1.5 w-20 rounded-xl bg-accents" />
              <p className="text-[40px] font-bold text-butternut">{o.id}</p>
              <p className="pt-2 text-xl font-light leading-8 text-text">{o.text}</p>
            </div>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default Objectives;
