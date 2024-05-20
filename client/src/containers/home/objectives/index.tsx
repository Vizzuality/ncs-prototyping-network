import Markdown from 'react-markdown';

import dynamic from 'next/dynamic';

import { useLocale } from 'next-intl';

import { useGetMessages } from '@/types/generated/message';

import Wrapper from 'containers/wrapper';

const Video = dynamic(() => import('@/components/video'), {
  ssr: false,
});

const Objectives = (): JSX.Element => {
  const locale = useLocale();

  const { data: dataMessages, isFetched: messagesIsFetched } = useGetMessages({ locale });
  const messages = messagesIsFetched && dataMessages.data.data[0]?.attributes;

  const OBJECTIVES = [
    {
      id: '01',
      text: messages?.what_we_do_1,
    },
    {
      id: '02',
      text: messages?.what_we_do_2,
    },
    {
      id: '03',
      text: messages?.what_we_do_3,
    },
    {
      id: '04',
      text: messages?.what_we_do_4,
    },
  ];

  return (
    <>
      <Wrapper>
        <section className="flex flex-col space-y-12 py-16">
          <div className="flex flex-col space-y-4">
            {messages?.what_we_do_title && (
              <Markdown className="prose prose-primary font-serif text-4xl font-semibold text-indigo">
                {messages.what_we_do_title}
              </Markdown>
            )}

            {messages?.what_we_do_description && (
              <Markdown className="prose prose-secondary text-lg font-medium">
                {messages.what_we_do_description}
              </Markdown>
            )}
          </div>

          {OBJECTIVES.map((o) => o.text).some((o) => o) && (
            <div className="grid grid-cols-4 gap-x-10">
              {OBJECTIVES.map((o) => (
                <div key={o.id} className="flex flex-col space-y-1">
                  <div className="h-1.5 w-20 rounded-xl bg-accents" />
                  <p className="text-[40px] font-bold text-butternut">{o.id}</p>
                  <p className="pt-2 text-xl font-light leading-8 text-text">{o.text}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      </Wrapper>
      {messages?.main_video && (
        <section className="bg-background py-16">
          <Wrapper>
            <div className="flex w-full justify-center">
              <div className="aspect-video w-2/3 px-5">
                <Video playing={false} loop url={messages.main_video} height="100%" width="100%" />
              </div>
            </div>
          </Wrapper>
        </section>
      )}
    </>
  );
};

export default Objectives;
