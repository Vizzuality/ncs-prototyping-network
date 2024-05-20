import Markdown from 'react-markdown';

import Image from 'next/image';

import { useLocale } from 'next-intl';
import { BsArrowRight } from 'react-icons/bs';

import { useGetMessages } from '@/types/generated/message';

import Wrapper from 'containers/wrapper';
import { cn } from 'utils/cn';

const Lessons = (): JSX.Element => {
  const locale = useLocale();
  const { data: dataMessages, isFetched: messagesIsFetched } = useGetMessages({
    populate: '*',
    locale,
  });

  const messages = messagesIsFetched && dataMessages.data.data[0]?.attributes;

  const LESSONS = [
    {
      id: 1,
      title: messages?.lessons_learned_1_title,
      points: [
        messages?.lessons_learned_1_issue_1,
        messages?.lessons_learned_1_issue_2,
        messages?.lessons_learned_1_issue_3,
        messages?.lessons_learned_1_issue_4,
      ],
      image: messages?.lessons_learned_1_photo?.data?.attributes.url,
      photoCredit: messages?.lessons_learned_1_photo?.data?.attributes.alternativeText,
    },
    {
      id: 2,
      title: messages?.lessons_learned_2_title,
      points: [
        messages?.lessons_learned_2_issue_1,
        messages?.lessons_learned_2_issue_2,
        messages?.lessons_learned_2_issue_3,
      ],
      image: messages?.lessons_learned_2_photo?.data?.attributes.url,
      photoCredit: messages?.lessons_learned_2_photo?.data?.attributes.alternativeText,
    },
    {
      id: 3,
      title: messages?.lessons_learned_3_title,
      points: [
        messages?.lessons_learned_3_issue_1,
        messages?.lessons_learned_3_issue_2,
        messages?.lessons_learned_3_issue_3,
      ],
      image: messages?.lessons_learned_3_photo?.data?.attributes.url,
      photoCredit: messages?.lessons_learned_3_photo?.data?.attributes.alternativeText,
    },
    {
      id: 4,
      title: messages?.lessons_learned_4_title,
      points: [
        messages?.lessons_learned_4_issue_1,
        messages?.lessons_learned_4_issue_2,
        messages?.lessons_learned_4_issue_3,
        messages?.lessons_learned_4_issue_4,
      ],
      image: messages?.lessons_learned_4_photo?.data?.attributes.url,
      photoCredit: messages?.lessons_learned_4_photo?.data?.attributes.alternativeText,
    },

    {
      id: 5,
      title: messages?.lessons_learned_5_title,
      points: [
        messages?.lessons_learned_5_issue_1,
        messages?.lessons_learned_5_issue_2,
        messages?.lessons_learned_5_issue_3,
      ],
      image: messages?.lessons_learned_5_photo?.data?.attributes.url,
      photoCredit: messages?.lessons_learned_5_photo?.data?.attributes.alternativeText,
    },
  ];

  return (
    <section>
      {messages?.lessons_learned_intro && (
        <div className="bg-indigo">
          <Wrapper className="flex w-full flex-col space-y-4 py-10">
            <h4 className="font-serif text-4xl font-semibold font-normal leading-9 text-white">
              {messages?.lessons_learned}
            </h4>
            <Markdown className="prose prose-primary flex flex-col text-xl font-normal leading-9 text-white">
              {messages?.lessons_learned_intro}
            </Markdown>
          </Wrapper>
        </div>
      )}

      {messages &&
        LESSONS.map((lesson) => (
          <div key={lesson.id} className="relative flex justify-between">
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
                'absolute bottom-20 z-10': true,
                'right-8': lesson.id % 2 === 0,
                'left-4': lesson.id % 2 !== 0,
              })}
            >
              <div className="bg-white/40 py-2" style={{ writingMode: 'vertical-lr' }}>
                <p className="whitespace-nowrap text-xs text-black">{lesson.photoCredit}</p>
              </div>
            </div>
            <div
              className={cn({
                'flex w-1/2 bg-background text-xl leading-9': true,
                '-order-1 justify-end': lesson.id % 2 === 0,
              })}
            >
              <div className="min-w-xl flex flex-col space-y-3 p-10 text-xl leading-9 xl:p-16">
                <div className="pb-4">
                  <Markdown className="prose prose-primary font-serif text-2xl font-semibold">
                    {lesson.title}
                  </Markdown>
                </div>

                {lesson.points.map((point) => (
                  <div key={point} className="flex items-start space-x-3 space-y-1.5">
                    <BsArrowRight
                      size={36}
                      className="mt-0.5 fill-butternut stroke-butternut stroke-[0.4px]"
                    />
                    <div className="w-5/6">
                      <Markdown className="prose prose-secondary font-sans text-m font-light leading-7">
                        {point}
                      </Markdown>
                    </div>
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
