import React, { useMemo } from 'react';

import Image from 'next/image';
import { useParams } from 'next/navigation';

import { useLocale } from 'next-intl';

import { useGetMessages } from '@/types/generated/message';
import { useGetProjects, useGetProjectsId } from '@/types/generated/project';

import { Link } from '@/navigation';
import NavigationTabs from 'containers/nav-tabs';
import Wrapper from 'containers/wrapper';
import { cn } from 'utils/cn';

const DetailFooter: React.FC = () => {
  const { slug } = useParams();
  const locale = useLocale();

  const { data: projects } = useGetProjects({ populate: '*', locale });

  const id = useMemo(() => {
    return projects?.data?.data?.find((project) => project.attributes.slug === slug)?.id;
  }, [slug, projects?.data?.data]);

  const { data, isFetched } = useGetProjectsId(+id, { populate: '*' });
  const { data: dataMessages, isFetched: messagesIsFetched } = useGetMessages({ locale });

  const messages = messagesIsFetched && dataMessages.data.data[0]?.attributes;

  const getBackground = () => {
    if (id && data?.data?.data?.attributes.footer_photo.data?.attributes.url) {
      return `url(${data?.data?.data?.attributes.footer_photo.data?.attributes.url})`;
    }
  };

  return (
    isFetched &&
    !!data?.data?.data.id &&
    messages && (
      <div className="relative">
        {data?.data?.data?.attributes.footer_photo.data?.attributes.alternativeText && (
          <div className="absolute right-8 bottom-44 z-50">
            <div className="bg-white/40 py-2" style={{ writingMode: 'vertical-lr' }}>
              <p className="whitespace-nowrap text-xs text-black">
                {data?.data?.data?.attributes.footer_photo.data.attributes.alternativeText}
              </p>
            </div>
          </div>
        )}
        <div
          className={cn({
            "mt-auto bg-cover bg-top bg-no-repeat before:absolute before:top-0 before:left-0 before:h-44 before:w-full before:bg-gradient-to-t before:from-transparent before:to-white before:content-[''] after:absolute after:bottom-[72px] after:left-0 after:h-24 after:w-full after:bg-gradient-to-b after:from-transparent after:to-black/80 after:content-['']":
              true,
          })}
          style={{
            backgroundImage: getBackground(),
          }}
        >
          <Wrapper className="flex w-full flex-col self-end pt-[300px] text-white xl:pt-[350px] 2xl:pt-[450px]">
            <Link className="items-left flex cursor-pointer" href={'/'} locale={locale}>
              <h1 className="text-2xl font-semibold uppercase">{messages.main_title}</h1>
            </Link>

            <div className="z-10 flex justify-between">
              <div className="flex flex-col justify-between space-y-6">
                <NavigationTabs section="footer" />
              </div>

              <div className="flex flex-col space-y-6">
                <div className="flex h-20 items-center space-x-6">
                  <p className="uppercase">{messages.partners_sites}</p>
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

        <div className="bg-black text-white">
          <Wrapper>
            <div className="flex justify-between py-7 font-serif text-xs uppercase tracking-wide">
              <p>© 2023 All Rights Reserved</p>
              <p>This project is supported by a grant from the Bezos Earth Fund</p>
            </div>
          </Wrapper>
        </div>
      </div>
    )
  );
};

export default DetailFooter;
