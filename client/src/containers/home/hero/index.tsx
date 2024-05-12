import Markdown from 'react-markdown';

import remarkGfm from 'remark-gfm';

import { useGetMessages } from '@/types/generated/message';
import { useGetProjects } from '@/types/generated/project';

import { useSyncLocale } from '@/hooks/query/sync-query';

import Wrapper from 'containers/wrapper';

const Hero = (): JSX.Element => {
  const [locale] = useSyncLocale();
  const { data, isFetched: messagesIsFetched } = useGetMessages({ locale });
  const { data: projects, isFetched: projectsIsFetched } = useGetProjects({ locale });

  const messages = messagesIsFetched && data.data.data[0].attributes;

  return (
    <section className=" bg-[url('/images/home/hero.png')] bg-cover bg-no-repeat">
      <div className="absolute right-4 bottom-96 z-50">
        <div className="bg-white/40 py-2" style={{ writingMode: 'vertical-lr' }}>
          <p className="whitespace-nowrap text-xs text-black">© Geoffrey Lipsett-Moore/TNC</p>
        </div>
      </div>
      <Wrapper>
        <div className="mb-64 mt-44 flex flex-col items-center space-y-8 py-10 text-white">
          {projectsIsFetched && (
            <Markdown remarkPlugins={[remarkGfm]} className="font-serif text-4xl font-semibold">
              {`${projects.data.data.length} ${messages.hero_title}`}
            </Markdown>
          )}
          <Markdown
            remarkPlugins={[remarkGfm]}
            className="max-w-4xl text-center text-xl leading-9 xl:text-2xl"
          >
            {messages.hero_description}
          </Markdown>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
