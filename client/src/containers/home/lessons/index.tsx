import Image from 'next/image';

import Icon from 'components/icon';
import Wrapper from 'containers/wrapper';
import ARROW_SVG from 'svgs/ui/arrow.svg?sprite';
import { cn } from 'utils/cn';

import { LESSONS } from './constants';

const Lessons = (): JSX.Element => {
  return (
    <section>
      <div className="bg-indigo">
        <Wrapper>
          <div className="my-10 flex flex-col space-y-4 text-white">
            <h4 className="font-serif text-4xl font-semibold">Lessons Learned</h4>
            <p className="text-xl font-normal leading-9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit.
            </p>
          </div>
        </Wrapper>
      </div>

      {LESSONS.map((lesson) => (
        <div key={lesson.id} className="flex justify-between">
          <Image
            src={lesson.image}
            alt={lesson.title}
            height={500}
            width={700}
            style={{ objectFit: 'cover' }}
            className="w-1/2"
          />
          <div
            className={cn({
              'flex w-1/2 bg-background text-xl leading-9': true,
              '-order-1 justify-end': lesson.id % 2 === 0,
            })}
          >
            <div className="min-w-xl flex flex-col space-y-3 p-10 text-xl leading-9 xl:p-16">
              <h5 className="pb-4 font-serif text-2xl font-semibold text-indigo">{lesson.title}</h5>

              {lesson.points.map((point) => (
                <div key={point} className="flex items-start space-x-3">
                  <Icon icon={ARROW_SVG} className="mt-2 h-6 w-8 stroke-butternut stroke-2" />

                  <p className="w-5/6 font-sans text-lg font-light leading-9 text-text">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Lessons;
