import Markdown from 'react-markdown';

import Image from 'next/image';

import remarkGfm from 'remark-gfm';

import { useGetMessages } from '@/types/generated/message';

import { useSyncLocale } from '@/hooks/query/sync-query';

import Icon from 'components/icon';
import Wrapper from 'containers/wrapper';
import ARROW_SVG from 'svgs/ui/arrow.svg?sprite';
import { cn } from 'utils/cn';

const Lessons = (): JSX.Element => {
  const [locale] = useSyncLocale();
  const { data: dataMessages, isFetched: messagesIsFetched } = useGetMessages({ locale });

  const messages = messagesIsFetched && dataMessages.data.data[0].attributes;

  const LESSONS = [
    {
      id: 1,
      title: messages.lessons_learned_1_title,
      points: [
        'In some countries, gender roles dictate project participation, with men often the primary participants. Additional arrangements may be required to effectively engage women.',
        '(Religious) holidays and traditions sometimes take precedence over business and operational activities.',
        'Restoration and mitigation projects span many years, requiring cross-generational engagement and participation to ensure project longevity and sustainability.',
        'Building relationship trust with communities is important to overcome perceptions of distrust and/or suspicion towards foreign organizations.',
      ],
      image: '/images/home/lessons/community.png',
      photoCredit: '©Roshni Lodhia',
    },
    {
      id: 2,
      title: messages.lessons_learned_2_title,
      points: [
        'Political instability can lead to project delays, through difficulties in scheduling meetings and community engagement activities, safety concerns and field site inaccessibility.',
        'Government, policy, and legislative turnover may hinder project continuity, field site accessibility, and/or project implementation.',
        'Bureaucracy, both external and internal, can cause administrative delays in contracting, hiring, permitting, and registering projects.',
      ],
      image: '/images/home/lessons/institutional.png',
      photoCredit: '©YKAN',
    },
    {
      id: 3,
      title: messages.lessons_learned_3_title,
      points: [
        'Many projects encountered data discrepancies, including mismatches between gathered field and goverment data, between remote sensing data and field surveys, and between internal and external analyses.',
        'Many research and methodological gaps remain. NCS projects are pioneering new solutions with little locally applicable data and methods.',
        'Limited technical capacity often leads to hiring difficulties and unavailability of technical laboratories for biogeochemical analyses.',
      ],
      image: '/images/home/lessons/science.png',
      photoCredit: '©Kristen Blann/TNC',
    },
    {
      id: 4,
      title: messages.lessons_learned_4_title,
      points: [
        'COVID-19 hindered fieldwork and community and partner meetings which are critical for planning, implementation, and ensuring community support.',
        'Sampling sites are often in remote locations, with difficult accessibility.',
        'Seasonal weather can further restrict field accessibility. Missing a sampling window can result in a one-year delay in data collection, so planning is imperative.',
        ' Some project areas are prone to safety risks, affecting infrastructure development and field access. This includes social and political considerations for accessing sampling sites.',
      ],
      image: '/images/home/lessons/logistics.png',
      photoCredit: '©Carlos Cifuentes/TNC',
    },

    {
      id: 5,
      title: messages.lessons_learned_5_title,
      points: [
        'Macroeconomic pressures have resulted in elevated budgetary requirements and high operational costs.',
        'Operating as a foreign entity can cause elevated contracting costs in certain areas.',
        ' Growing global and local interest in climate mitigation and environmental restoration are providing new opportunities for fundraising, partnerships, and improved government alignment.',
      ],
      image: '/images/home/lessons/resources.png',
      photoCredit: '©Eugene Wemin',
    },
  ];

  return (
    <section>
      <div className="bg-indigo">
        <Wrapper>
          <Markdown
            remarkPlugins={[remarkGfm]}
            className="my-10 flex flex-col space-y-4 text-white [&_h4]:font-serif [&_h4]:text-4xl [&_h4]:font-semibold [&_p]:text-xl [&_p]:font-normal [&_p]:leading-9"
          >
            {messages.lessons_learned_intro}
          </Markdown>
        </Wrapper>
      </div>

      {LESSONS.map((lesson) => (
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
              <h5 className="pb-4 font-serif text-2xl font-semibold text-indigo">{lesson.title}</h5>

              {lesson.points.map((point) => (
                <div key={point} className="flex items-start space-x-3 space-y-1.5">
                  <Icon icon={ARROW_SVG} className="mt-2 h-6 w-8 stroke-butternut stroke-2" />

                  <p className="w-5/6 font-sans text-m font-light leading-7 text-text">{point}</p>
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
