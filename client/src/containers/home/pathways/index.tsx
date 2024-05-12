import Markdown from 'react-markdown';

import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import remarkGfm from 'remark-gfm';

import { useGetMessages } from '@/types/generated/message';
import { useGetPathways } from '@/types/generated/pathway';
import { useGetProjects } from '@/types/generated/project';

import { useSyncQueryParams } from '@/hooks/query';
import { useSyncLocale } from '@/hooks/query/sync-query';

import Wrapper from 'containers/wrapper';
import { cn } from 'utils/cn';

const Pathways = (): JSX.Element => {
  const [locale] = useSyncLocale();

  const queryParams = useSyncQueryParams();

  const { data, isFetched } = useGetProjects({ populate: '*', locale });
  const { data: pathwaysData, isFetched: isPathwaysFetched } = useGetPathways({ locale });
  const { data: dataMessages, isFetched: messagesIsFetched } = useGetMessages({ locale });

  const messages = messagesIsFetched && dataMessages.data.data[0].attributes;

  const numberProjects = isFetched ? data?.data.data.length : 0;

  const PATHWAYS = [
    {
      id: 1,
      name: pathwaysData && pathwaysData.data.data[0]?.attributes.name,
      icon: '/images/pathways/agroforestry.png',
      className: { arrow: 'fill-rust', text: 'text-rust' },
      href: '',
    },
    {
      id: 2,
      name: pathwaysData && pathwaysData.data.data[1]?.attributes.name.replace(/\([^()]*\)/g, ''),
      icon: '/images/pathways/coastal-wetlands.png',
      className: { arrow: 'fill-cirrus', text: 'text-cirrus' },
      href: '',
    },
    {
      id: 3,
      name: pathwaysData && pathwaysData?.data.data[3]?.attributes.name.replace(/\([^()]*\)/g, ''),
      icon: '/images/pathways/peatlands.png',
      className: { arrow: 'fill-iris', text: 'text-iris' },
      href: '',
    },
  ];

  const arrowAnimation = {
    hover: {
      x: 15,
      transition: { duration: 0.25, bounce: 0 },
    },
  };

  return (
    <Wrapper>
      <section className="z-10 -mb-40 flex flex-col space-y-12 py-20">
        <Markdown
          remarkPlugins={[remarkGfm]}
          className="font-serif text-4xl font-semibold text-indigo"
        >
          {messages.what_we_are_field_testing_title}
        </Markdown>
        <Markdown
          remarkPlugins={[remarkGfm]}
          className="max-w-7xl text-xl font-light leading-7 text-text"
        >
          {`${numberProjects} ${messages.what_we_are_field_testing_description}`}
        </Markdown>
        <div>
          {isPathwaysFetched &&
            PATHWAYS.map(({ id, icon, name, className }) => (
              <motion.div
                key={id}
                className="flex border-t-2 p-4 hover:cursor-pointer"
                whileHover="hover"
              >
                <Link
                  className="flex w-full items-center justify-between"
                  href={`/projects/${queryParams}&pathway=${name}`}
                >
                  <div className="flex items-center space-x-10">
                    <Image src={icon} alt={name} height={60} width={60} />
                    <p
                      className={cn({
                        'font-sans text-[40px] font-light': true,
                        [className.text]: !!className.text,
                      })}
                    >
                      {name}
                    </p>
                  </div>

                  <motion.div
                    className="flex h-full w-32 items-center justify-center"
                    variants={arrowAnimation}
                  >
                    <BsArrowRight
                      size={45}
                      className={cn({
                        [className.arrow]: !!className.arrow,
                      })}
                    />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default Pathways;
