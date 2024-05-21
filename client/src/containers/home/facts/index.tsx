import Markdown from 'react-markdown';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import { HiArrowNarrowRight } from 'react-icons/hi';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

import { useGetMessages } from '@/types/generated/message';

import Wrapper from 'containers/wrapper';

const Facts = (): JSX.Element => {
  const locale = useLocale();
  const { data: dataMessages, isFetched: messagesIsFetched } = useGetMessages({ locale });

  const messages = messagesIsFetched && dataMessages.data.data[0]?.attributes;

  const arrowAnimation = {
    hover: {
      x: 15,
      transition: { duration: 0.25, bounce: 0 },
    },
  };

  return (
    <section className="bg-gradient-to-r from-midnight via-indigo to-midnight">
      <Wrapper>
        {messages?.facts && (
          <div className="my-20 flex flex-col items-center space-y-4 font-sans text-white">
            <div className="max-w-4xl">
              <Markdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                className="prose prose-tertiary text-center text-xl leading-8"
              >
                {messages.facts}
              </Markdown>
            </div>
            <motion.div whileHover="hover">
              <a
                href="https://www.nature.org/en-us/what-we-do/our-insights/perspectives/natural-climate-solutions/"
                className="flex h-12 items-center space-x-6 px-6 text-white hover:bg-transparent hover:text-white"
                target="_blank"
              >
                <Markdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  className="prose prose-tertiary text-base font-light uppercase"
                >
                  {messages.learn_more_facts_caption}
                </Markdown>
                <motion.div variants={arrowAnimation}>
                  <HiArrowNarrowRight color="white" size={20} />
                </motion.div>
              </a>
            </motion.div>
          </div>
        )}
      </Wrapper>
    </section>
  );
};

export default Facts;
