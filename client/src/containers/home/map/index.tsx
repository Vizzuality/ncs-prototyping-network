import Markdown from 'react-markdown';

import Image from 'next/image';
import Link from 'next/link';

import { HiArrowNarrowRight } from 'react-icons/hi';
import remarkGfm from 'remark-gfm';

import { useGetMessages } from '@/types/generated/message';

import { useSyncQueryParams } from '@/hooks/query';
import { useSyncLocale } from '@/hooks/query/sync-query';

import Button from 'components/ui/button';
import Wrapper from 'containers/wrapper';

const HomeMap = (): JSX.Element => {
  const [locale] = useSyncLocale();
  const queryParams = useSyncQueryParams();
  const { data, isFetched: messagesIsFetched } = useGetMessages({ locale });

  const messages = messagesIsFetched && data.data.data[0]?.attributes;

  return (
    <Wrapper>
      <section className="-mt-44 mb-12 flex h-full items-center bg-white py-12 px-16">
        <div className="flex w-1/3 flex-col">
          <Markdown
            remarkPlugins={[remarkGfm]}
            className="text-base font-light leading-7 text-text lg:text-lg xl:text-xl xl:leading-9"
          >
            {messages?.map_description}
          </Markdown>
          {messages?.projects && (
            <Link href={`/projects${queryParams}`}>
              <Button>
                <p className="text-base font-bold uppercase">{messages?.projects}</p>
                <HiArrowNarrowRight className="stroke-white hover:stroke-butternut" size={20} />
              </Button>
            </Link>
          )}
        </div>
        <div className="ml-20 flex h-full w-2/3 items-center justify-center xl:ml-0">
          <Image src="/images/home/map.png" alt="Map" width={678} height={338} />
        </div>
      </section>
    </Wrapper>
  );
};

export default HomeMap;
