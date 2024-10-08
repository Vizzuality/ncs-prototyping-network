'use client';

import React from 'react';

import Markdown from 'react-markdown';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { useLocale } from 'next-intl';
import { useRecoilValue } from 'recoil';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

import { useGetMessages } from '@/types/generated/message';

import { Link } from '@/navigation';
import NavigationTabs from 'containers/nav-tabs';
import Wrapper from 'containers/wrapper';
import { projectsViewAtom } from 'store';
import { cn } from 'utils/cn';

const Footer: React.FC = () => {
  const locale = useLocale();

  const { data: dataMessages, isFetched: messagesIsFetched } = useGetMessages({
    populate: '*',
    locale,
  });

  const messages = messagesIsFetched && dataMessages.data.data[0]?.attributes;

  const pathname = usePathname();

  const projectsView = useRecoilValue(projectsViewAtom);

  const getBackground = () => {
    if (pathname.includes('/projects') && projectsView === 'map') {
      return `url(${messages?.map_view_footer_photo?.data?.attributes.url})` || '';
    }
    if (pathname.includes('/projects') && projectsView === 'metrics') {
      return `url(${messages?.metrics_footer_photo?.data?.attributes.url})` || '';
    }
    if (pathname.includes('/contact')) {
      return `url(${messages?.contact_us_footer_photo?.data?.attributes.url})` || '';
    }
    return `url(${messages?.home_footer_photo?.data?.attributes.url})` || '';
  };

  return (
    <div className="relative mt-auto">
      {messages?.home_footer_photo && (
        <div
          className={cn({
            "mt-auto bg-cover bg-no-repeat after:absolute after:bottom-[72px] after:left-0 after:h-24 after:w-full after:bg-gradient-to-b after:from-transparent after:to-black/80 after:content-['']":
              true,
          })}
          style={{
            backgroundImage: getBackground(),
          }}
        >
          <Wrapper className="flex w-full flex-col self-end pt-[300px] text-white xl:pt-[350px] 2xl:pt-[450px]">
            <Link className="items-left flex cursor-pointer" href={'/'} locale={locale}>
              <Markdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                className="text-2xl font-semibold uppercase"
              >
                {messages?.main_title}
              </Markdown>
            </Link>

            <div className="z-10 flex justify-between">
              <div className="flex flex-col justify-between space-y-6">
                <NavigationTabs section="footer" />
              </div>

              <div className="flex flex-col space-y-6">
                <div className="flex h-20 items-center space-x-6">
                  {messages?.partners_sites && (
                    <p className="hidden uppercase xl:block">{messages.partners_sites}</p>
                  )}
                  <a href="https://www.naturebase.org" className="w-44">
                    <Image src="/images/logos/naturbase.svg" alt="Logo" width={150} height={20} />
                  </a>
                  <a href="https://www.naturebase.org" className="w-44">
                    <Image src="/images/logos/tnc.png" alt="Logo" width={150} height={20} />
                  </a>
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
      )}

      {messages && (
        <div className="h-[72px] bg-black text-white">
          <Wrapper>
            <div className="flex justify-between py-7 font-serif text-xs uppercase tracking-wide">
              <p>{messages?.rights}</p>
              <p>{messages?.support}</p>
            </div>
          </Wrapper>
        </div>
      )}
    </div>
  );
};

export default Footer;
