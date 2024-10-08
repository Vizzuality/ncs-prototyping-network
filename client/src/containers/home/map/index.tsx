import Markdown from 'react-markdown';

import Image from 'next/image';

import { useLocale } from 'next-intl';
import { HiArrowNarrowRight } from 'react-icons/hi';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

import { useGetMessages } from '@/types/generated/message';

import { Link } from '@/navigation';
import Button from 'components/ui/button';
import Wrapper from 'containers/wrapper';

const HomeMap = (): JSX.Element => {
  const locale = useLocale();

  const { data, isFetched: messagesIsFetched } = useGetMessages({ populate: '*', locale });

  const messages = messagesIsFetched && data.data.data[0]?.attributes;

  return (
    <Wrapper>
      <section className="-mt-44 mb-12 flex h-full items-center bg-white py-12 px-16">
        <div className="flex w-1/3 flex-col">
          <Markdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            className="prose prose-secondary text-base font-light leading-7 lg:text-lg xl:text-xl xl:leading-9"
          >
            {messages?.map_description}
          </Markdown>
          {messages?.projects && (
            <Link href={'/projects'} locale={locale}>
              <Button>
                <p className="text-base font-bold uppercase">{messages?.projects}</p>
                <HiArrowNarrowRight className="stroke-white hover:stroke-butternut" size={20} />
              </Button>
            </Link>
          )}
        </div>
        <div className="ml-20 flex h-full w-2/3 items-center justify-center xl:ml-0">
          {messages?.home_map_photo?.data?.attributes.url && (
            <Image
              src={messages.home_map_photo.data.attributes.url}
              alt="Map"
              width={678}
              height={338}
            />
          )}
        </div>
      </section>
    </Wrapper>
  );
};

export default HomeMap;
