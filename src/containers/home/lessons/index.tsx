import Image from 'next/image';

import { HiArrowNarrowRight } from 'react-icons/hi';

import Wrapper from 'containers/wrapper';

import { cn } from '@/utils/cn';

import { LESSONS } from './constants';

const Lessons = (): JSX.Element => {
  return (
    <section>
      <div className="bg-gradient-to-r from-midnight via-indigo to-midnight">
        <Wrapper>
          <div className="my-20 flex flex-col space-y-4 text-white">
            <h4 className="font-serif text-3xl font-semibold">Lessons Learned</h4>
            <p className="text-xl leading-9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>
        </Wrapper>
      </div>

      {LESSONS.map((lesson) => (
        <div key={lesson.id} className="flex justify-between">
          <Image
            src="https://dummyimage.com/700x500/000/fff&text=+"
            alt="placeholder"
            height={500}
            width={700}
            style={{ objectFit: 'cover' }}
            className="w-1/2"
          />
          <div
            className={cn({
              'flex w-1/2 text-xl leading-9': true,
              '-order-1 justify-end': lesson.id % 2 === 0,
            })}
          >
            <div className="min-w-xl flex flex-col space-y-3 p-16 text-xl leading-9">
              <h5 className="pb-4 font-serif text-2xl text-indigo">{lesson.title}</h5>

              {lesson.points.map((point) => (
                <div key={point} className="flex space-x-2">
                  <HiArrowNarrowRight className="stroke-butternut" size={40} />
                  <p className="text-lg leading-9 text-text">{point}</p>
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
