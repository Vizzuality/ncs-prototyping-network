'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

import Markdown from 'react-markdown';

import Image from 'next/image';
import { useParams } from 'next/navigation';

import { motion, useInView } from 'framer-motion';
import { useLocale } from 'next-intl';
import { BsArrowLeft } from 'react-icons/bs';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { VscQuote } from 'react-icons/vsc';
import { useSetRecoilState } from 'recoil';

import { headerStyleAtom } from '@/store';

import { useGetMessages } from '@/types/generated/message';
import { useGetProjects, useGetProjectsId } from '@/types/generated/project';

import { Link } from '@/navigation';
import Button from 'components/ui/button';
import Video from 'components/video';
import Card from 'containers/projects/card';
import ExtentMap from 'containers/projects/detail/extent-map';
import Wrapper from 'containers/wrapper';
import { cn } from 'utils/cn';
import { toTBD } from 'utils/data';

const ProjectDetail = (): JSX.Element => {
  const { slug } = useParams();

  const ref = useRef();
  const inView = useInView(ref, {
    once: false,
    amount: 0.25,
  });

  const locale = useLocale();

  const setHeaderStyle = useSetRecoilState(headerStyleAtom);

  const { data: projects } = useGetProjects({
    populate: '*',
    locale,
  });

  const { data: dataMessages, isFetched: messagesIsFetched } = useGetMessages({
    populate: '*',
    locale,
  });

  const messages = messagesIsFetched && dataMessages.data.data[0]?.attributes;

  const id = useMemo(() => {
    return projects?.data?.data?.find((project) => project.attributes.slug === slug)?.id;
  }, [slug, projects?.data?.data]);

  const { data, isFetched, isFetching } = useGetProjectsId(+id, { populate: '*' });

  const [playing, setPlaying] = useState(false);

  const arrowAnimation = {
    hover: {
      x: -10,
      transition: { duration: 0.25, bounce: 0 },
    },
  };

  const similarProjects = useMemo(() => {
    const otherProjects = projects?.data?.data?.filter((project) => {
      if (project.id === id) return false;
      return true;
    });

    return otherProjects
      ?.filter((project) => {
        if (
          !project.attributes.pathways.data
            .map((p) => p.attributes.name)
            .some((pathway) =>
              data?.data?.data?.attributes.pathways.data
                .map((pp) => pp.attributes.name)
                .includes(pathway)
            )
        )
          return false;
        return true;
      })
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
  }, [projects?.data?.data, id, data?.data?.data?.attributes.pathways]);

  useEffect(() => {
    if (inView) {
      setHeaderStyle('default');
    }
    if (!inView) {
      setHeaderStyle('dark');
    }
  }, [inView, setHeaderStyle]);

  const KEY_ACTIVITIES = [
    data?.data?.data?.attributes.key_activity_1,
    data?.data?.data?.attributes.key_activity_2,
    data?.data?.data?.attributes.key_activity_3,
    data?.data?.data?.attributes.key_activity_4,
    data?.data?.data?.attributes.key_activity_5,
    data?.data?.data?.attributes.key_activity_6,
    data?.data?.data?.attributes.key_activity_7,
    data?.data?.data?.attributes.key_activity_8,
    data?.data?.data?.attributes.key_activity_9,
    data?.data?.data?.attributes.key_activity_10,
    data?.data?.data?.attributes.key_activity_11,
    data?.data?.data?.attributes.key_activity_12,
  ].filter((k) => k);

  return (
    <>
      {messagesIsFetched && dataMessages?.data.data.length === 0 && (
        <div className="flex h-screen w-screen items-center justify-center">
          <p className="font-serif text-lg font-semibold text-indigo">
            There is no translated content for this language
          </p>
        </div>
      )}
      {isFetched && !!dataMessages?.data.data.length && (
        <div>
          <div
            className="relative -z-10 -mt-20 h-[426px] bg-[url('/images/home/hero.png')] bg-cover bg-center bg-no-repeat lg:h-[500px] xl:h-[600px]"
            style={{
              backgroundImage:
                `url(${data?.data?.data?.attributes.header_photo.data.attributes.url})` || '',
            }}
            ref={ref}
          >
            {data?.data?.data?.attributes.header_photo.data.attributes.alternativeText && (
              <div className="absolute right-8 bottom-28 z-50">
                <div className="bg-white/40 py-2" style={{ writingMode: 'vertical-lr' }}>
                  <p className="whitespace-nowrap text-xs text-black">
                    {data?.data?.data?.attributes.header_photo.data.attributes.alternativeText}
                  </p>
                </div>
              </div>
            )}
          </div>

          {isFetching && messages && (
            <div className="flex h-64 w-full items-center justify-center">
              <p className="font-serif text-lg font-semibold text-indigo">{messages?.loading}</p>
            </div>
          )}

          {!isFetching && isFetched && !data && messages && (
            <div className="flex h-64 w-full items-center justify-center">
              <p className="font-serif text-lg font-semibold text-indigo">{messages.no_data}</p>
            </div>
          )}

          {isFetched && !!data?.data?.data && messages && (
            <div>
              <Wrapper className="relative flex w-full flex-row justify-between space-x-6 py-6">
                <div className="flex w-2/3 flex-col items-start">
                  <motion.div whileHover="hover">
                    <Link
                      href={'/projects'}
                      className="flex items-center space-x-2 pb-8"
                      locale={locale}
                    >
                      <motion.div variants={arrowAnimation}>
                        <BsArrowLeft className="fill-butternut" size={30} />
                      </motion.div>
                      <p className="font-sans text-xl font-medium text-butternut">
                        {messages.back_to_projects}
                      </p>
                    </Link>
                  </motion.div>

                  <div className="flex max-w-2xl flex-col items-center">
                    <div className="mb-16">
                      <Markdown className="prose prose-primary font-serif text-[35px] font-medium leading-9">
                        {data?.data?.data?.attributes.long_title}
                      </Markdown>
                    </div>
                    <div className="flex min-h-[72px] space-x-10 font-sans xl:space-x-20">
                      <div className="flex flex-col items-center">
                        <p className="pb-2 text-4xl font-bold text-spring">
                          {toTBD(
                            Intl.NumberFormat().format(
                              data?.data?.data?.attributes.hectares_impacted
                            ),
                            messages.tbd
                          )}
                        </p>
                        <p className="text-center text-m font-medium text-text">
                          {messages.project_area_unit}
                        </p>
                      </div>

                      <div className="flex flex-col items-center">
                        <p className="pb-2 text-4xl font-bold text-spring">
                          {toTBD(
                            Intl.NumberFormat().format(
                              data?.data?.data?.attributes.people_supported
                            ),
                            messages.tbd
                          )}
                        </p>
                        <p className="text-center text-m font-medium text-text">
                          {messages.people_supported}
                        </p>
                      </div>

                      <div className="flex flex-col items-center">
                        <p className="pb-2 text-4xl font-bold text-spring">
                          {toTBD(
                            Intl.NumberFormat().format(
                              data?.data?.data?.attributes.carbon_mitigation
                            ),
                            messages.tbd
                          )}
                        </p>
                        {messages.mitigation_potencial_unit && (
                          <p className="max-w-[160px] text-center text-sm font-medium leading-5 text-text xl:text-base">
                            {messages.mitigation_potencial_unit}
                            <sup>*</sup>
                          </p>
                        )}
                      </div>
                    </div>
                    {messages.disclaimer && (
                      <div className="mt-8 flex w-full items-end justify-end">
                        <span className="mr-1 h-full text-xs font-normal text-text/50">*</span>
                        <Markdown className="prose prose-default text-left text-xs font-normal text-text/50">
                          {messages.disclaimer}
                        </Markdown>
                      </div>
                    )}
                  </div>
                </div>

                {data?.data?.data?.attributes.extent && (
                  <div className="relative">
                    <ExtentMap extent={data?.data?.data?.attributes.extent} />
                    {data?.data?.data?.attributes.extent_credits && (
                      <div className="absolute bottom-2 right-2 mb-1 bg-black/40 px-2">
                        <Markdown className="prose prose-tertiary text-xs text-white">
                          {data?.data?.data?.attributes.extent_credits}
                        </Markdown>
                      </div>
                    )}
                  </div>
                )}
              </Wrapper>
              <section className="sticky top-[68px] z-30 w-full border-t border-b bg-white">
                <Wrapper>
                  <div className="flex justify-between py-4 px-28 text-text">
                    <a className="hover:text-butternut" href="#goals">
                      {messages.overview}
                    </a>
                    <a className="hover:text-butternut" href="#why">
                      {messages.why_this_why_now_title}
                    </a>
                    <a className="hover:text-butternut" href="#lessons">
                      {messages.lessons_learned}
                    </a>
                    <a className="hover:text-butternut" href="#science">
                      {messages.science}
                    </a>
                    <a className="hover:text-butternut" href="#co-benefits">
                      {messages.co_benefits}
                    </a>
                    <a className="hover:text-butternut" href="#contact">
                      {messages.contact}
                    </a>
                  </div>
                </Wrapper>
              </section>

              <section
                id="goals"
                className="relative flex scroll-mt-28 bg-gradient-to-r from-midnight via-indigo to-midnight"
              >
                {data?.data?.data?.attributes.project_goal && (
                  <div className="flex w-1/2 justify-end">
                    <div className="flex max-w-2xl flex-col justify-center space-y-3 py-10 pl-10 pr-10 text-white 2xl:py-20 2xl:pl-0 2xl:pr-20">
                      <h4 className="font-serif text-3xl font-medium xl:text-4xl">
                        {messages.goals_title}
                      </h4>
                      <Markdown className="prose prose-tertiary text-base leading-7 xl:font-sans xl:text-lg xl:leading-8 2xl:text-xl 2xl:leading-9">
                        {data?.data?.data?.attributes.project_goal}
                      </Markdown>
                    </div>
                  </div>
                )}

                <Image
                  src={
                    data?.data?.data?.attributes.goals_photo.data?.attributes.url ||
                    '/images/projects/goals_placeholder.png'
                  }
                  alt={data?.data?.data?.attributes.goals_photo.data?.attributes.name || 'Goals'}
                  height={280}
                  width={500}
                  style={{ objectFit: 'cover' }}
                  className="max-h-[600px] w-1/2"
                />
                {data?.data?.data?.attributes.goals_photo.data?.attributes.alternativeText && (
                  <div className="absolute bottom-2 right-6 z-50 bg-white/40 px-2">
                    <p className="text-xs text-black">
                      {data?.data?.data?.attributes.goals_photo.data?.attributes.alternativeText}
                    </p>
                  </div>
                )}
              </section>

              <section className="py-16">
                <Wrapper className="space-y-10">
                  {!!KEY_ACTIVITIES.length && (
                    <div>
                      <h4 className="font-serif text-2xl font-medium text-indigo">
                        Key Activities
                      </h4>
                      <div className="flex flex-col space-y-2 py-6 font-sans text-text">
                        {KEY_ACTIVITIES.map((activity, idx) => (
                          <div
                            key={idx}
                            className="flex items-start space-x-6 border-t border-accents py-4 last:border-b"
                          >
                            <span className="text-4xl font-bold text-butternut">{idx + 1}.</span>
                            <div className="mt-2">
                              <Markdown className="prose prose-secondary font-sans text-xl font-light">
                                {activity}
                              </Markdown>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    {data?.data?.data?.attributes.project_summary && (
                      <h4 className="font-serif text-2xl font-medium text-indigo">
                        {messages.summary_title}
                      </h4>
                    )}
                    {!!data?.data?.data?.attributes.project_phases.data.length && (
                      <p className="pt-6 font-sans text-lg font-light text-text">
                        {messages.project_phase}:{' '}
                        {data?.data?.data?.attributes.project_phases.data
                          .map((pp) => pp.attributes.name)
                          .join(', ')}
                      </p>
                    )}
                    <div className="w-2/3 pt-4">
                      <Markdown className="prose prose-secondary font-sans text-m font-light leading-7">
                        {data?.data?.data?.attributes.project_summary}
                      </Markdown>
                    </div>
                  </div>
                </Wrapper>
              </section>

              {data?.data?.data?.attributes.why_this_why_now_callout && (
                <section
                  id="why"
                  className="scroll-mt-28 bg-gradient-to-r from-midnight via-indigo to-midnight"
                >
                  <Wrapper>
                    <div className="flex flex-col items-center space-y-4 py-16 text-white">
                      <h4 className="pb-2 font-serif text-3xl font-semibold">
                        {messages.why_this_why_now_title}
                      </h4>
                      <div className="max-w-3xl">
                        <Markdown className="prose prose-tertiary text-center font-sans text-xl font-light leading-9">
                          {data?.data?.data?.attributes.why_this_why_now_callout}
                        </Markdown>
                      </div>
                      <p className="uppercase">
                        {data?.data?.data?.attributes.why_this_why_now_author}
                      </p>
                    </div>
                  </Wrapper>
                </section>
              )}

              {data?.data?.data?.attributes.video && (
                <section className="bg-background py-16">
                  <Wrapper>
                    <div className="flex w-full space-x-16">
                      <div className="aspect-video w-2/3">
                        <Video
                          playing={playing}
                          loop
                          url={data?.data?.data?.attributes.video}
                          height="100%"
                          width="100%"
                        />
                      </div>
                      <div className="w-1/3 space-y-4 py-4">
                        <Markdown className="prose prose-secondary text-m">
                          {data?.data?.data?.attributes.video_caption}
                        </Markdown>

                        <div className="pt-2">
                          <Button onClick={() => setPlaying(!playing)}>
                            <p className="text-base font-bold uppercase">
                              {playing ? messages.pause_video : messages.watch_video}
                            </p>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Wrapper>
                </section>
              )}

              {!data?.data?.data?.attributes.video &&
                data?.data?.data?.attributes.fallback_photo.data && (
                  <section className="bg-background py-16">
                    <Wrapper>
                      <div className="flex w-full justify-center">
                        <Image
                          alt={
                            data?.data?.data?.attributes?.fallback_photo.data?.attributes.name || ''
                          }
                          src={data?.data?.data?.attributes?.fallback_photo.data?.attributes.url}
                          width={360}
                          height={180}
                        />
                      </div>
                    </Wrapper>
                  </section>
                )}

              <section id="lessons" className="scroll-mt-28">
                <div className="bg-indigo py-6">
                  <Wrapper>
                    <div>
                      <h4 className="font-serif text-3xl font-medium text-white">
                        {messages.lessons_learned}
                      </h4>
                    </div>
                  </Wrapper>
                </div>
                <Wrapper>
                  <table>
                    <tbody>
                      {data?.data?.data?.attributes.lesson_1 && (
                        <tr className="border-b-[2px] [&>*]:py-10">
                          <td className="w-1/4 font-serif text-2xl font-medium text-indigo">
                            {data?.data?.data?.attributes.lesson_1_category.data.attributes.name}
                          </td>
                          <td className="w-3/4 px-20">
                            <Markdown className="prose prose-secondary font-sans text-m font-light leading-6">
                              {data?.data?.data?.attributes.lesson_1}
                            </Markdown>
                          </td>
                        </tr>
                      )}

                      {data?.data?.data?.attributes.lesson_2 && (
                        <tr className="border-b-[2px] [&>*]:py-10">
                          <td className="w-1/4 pr-10 font-serif text-2xl font-medium text-indigo">
                            {data?.data?.data?.attributes.lesson_2_category.data.attributes.name}
                          </td>
                          <td className="w-3/4 px-20">
                            <Markdown className="prose prose-secondary font-sans text-m font-light leading-6">
                              {data?.data?.data?.attributes.lesson_2}
                            </Markdown>
                          </td>
                        </tr>
                      )}

                      {data?.data?.data?.attributes.lesson_3 && (
                        <tr className="[&>*]:py-10">
                          <td className="w-1/4 font-serif text-2xl font-medium text-indigo">
                            {data?.data?.data?.attributes.lesson_3_category.data.attributes.name}
                          </td>
                          <td className="w-3/4 px-20">
                            <Markdown className="prose prose-secondary font-sans text-m font-light leading-6">
                              {data?.data?.data?.attributes.lesson_3}
                            </Markdown>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </Wrapper>
              </section>

              <section id="science" className="flex scroll-mt-28 flex-col">
                <div className="bg-indigo py-6">
                  <Wrapper>
                    <div>
                      <h4 className="font-serif text-3xl font-medium text-white">
                        {messages.science}
                      </h4>
                    </div>
                  </Wrapper>
                </div>
                <Wrapper className="flex w-full flex-row space-x-20 py-16">
                  <div className="flex w-3/4 flex-col space-y-10">
                    {data?.data?.data?.attributes.abstract && (
                      <div className="flex-col space-y-6">
                        <p className="font-serif text-2xl font-medium text-indigo">
                          {messages.research_summary_title}
                        </p>
                        <Markdown className="prose prose-secondary font-sans text-m font-light leading-7">
                          {data?.data?.data?.attributes.abstract}
                        </Markdown>
                      </div>
                    )}
                    {data?.data?.data?.attributes.citations && (
                      <div className="flex flex-col space-y-4">
                        <h5 className="text-lg font-light uppercase">{messages.citations}</h5>

                        <div className="space-y-2">
                          <Markdown className="prose prose-default text-2xs font-light">
                            {data?.data?.data?.attributes.citations}
                          </Markdown>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* {!!data?.data?.data?.attributes.resources.data.length && (
                <section className="flex w-1/4 flex-col space-y-6">
                  <p className="font-serif text-2xl font-medium text-indigo">
                    {messages.resources}
                  </p>

                  <div className="flex flex-col items-start font-sans text-xl font-light leading-9 text-text">
                    <button
                      type="button"
                      className="hover:font-medium"
                      onClick={() => onDownload(data?.data?.data?.attributes.resources[0], 'Fact Sheet')}
                    >
                      <p>Download Fact Sheet</p>
                    </button>
                    <button
                      type="button"
                      className="hover:font-medium"
                      onClick={() => onDownload(data?.data?.data?.attributes.resources[1], 'Download 2')}
                    >
                      <p>Download 2</p>
                    </button>
                    <button
                      type="button"
                      className="hover:font-medium"
                      onClick={() => onDownload(data?.data?.data?.attributes.resources[2], 'Download 3')}
                    >
                      <p>Download 3</p>
                    </button>
                  </div>
                </section>
              )} */}
                </Wrapper>
              </section>

              {data?.data?.data?.attributes.graphic_1.data && (
                <section className="bg-background py-16">
                  <Wrapper>
                    <div className="relative w-4/6 space-y-6">
                      <p className="font-sans text-xl font-light text-text">
                        {data?.data?.data?.attributes.graphic_1.data.attributes.name}
                      </p>
                      <Image
                        src={data?.data?.data?.attributes.graphic_1.data.attributes.url}
                        alt={data?.data?.data?.attributes.graphic_1.data.attributes.caption}
                        height={500}
                        width={500}
                        style={{ objectFit: 'contain' }}
                        className="w-full"
                      />
                      {data?.data?.data?.attributes.graphic_1.data.attributes.alternativeText && (
                        <div className="absolute bottom-2 right-2 bg-black/40 px-2">
                          <p className="text-xs text-white">
                            {data?.data?.data?.attributes.graphic_1.data.attributes.alternativeText}
                          </p>
                        </div>
                      )}
                    </div>
                  </Wrapper>
                </section>
              )}

              <section id="co-benefits" className="flex scroll-mt-28 flex-col">
                <div className="bg-indigo py-6">
                  <Wrapper>
                    <div>
                      <h4 className="font-serif text-3xl font-medium text-white">
                        {messages.co_benefits}
                      </h4>
                    </div>
                  </Wrapper>
                </div>
                <Wrapper>
                  <div className="w-3/4 py-10 font-light">
                    {data?.data?.data?.attributes.cb_biodiversity && (
                      <div className="flex flex-col space-y-2 py-6 font-sans text-text">
                        <div className="flex items-center space-x-2">
                          <Image
                            alt={messages.biodiversity}
                            src="/images/icons/co-benefits/biodiversity.svg"
                            height={24}
                            width={24}
                          />
                          <p className="text-xl">{messages.biodiversity}</p>
                        </div>
                        <p className="text-m leading-6">
                          {data?.data?.data?.attributes.cb_biodiversity}
                        </p>
                      </div>
                    )}

                    {data?.data?.data?.attributes.cb_ecosystem_services && (
                      <div className="flex flex-col space-y-2 py-6 font-sans text-text">
                        <div className="flex items-center space-x-2">
                          <Image
                            alt="Ecosystem"
                            src="/images/icons/co-benefits/ecosystem_services.svg"
                            height={24}
                            width={24}
                          />
                          <p className="text-xl">{messages.ecosystem_services}</p>
                        </div>

                        <Markdown className="prose prose-default text-m leading-6">
                          {data?.data?.data?.attributes.cb_ecosystem_services}
                        </Markdown>
                      </div>
                    )}

                    {data?.data?.data?.attributes.cb_resilience_adapt && (
                      <div className="flex flex-col space-y-2 py-6 font-sans text-text">
                        <div className="flex items-center space-x-2">
                          <Image
                            alt={messages.resilience_and_adaptation}
                            src="/images/icons/co-benefits/resilience_and_adaptation.svg"
                            height={24}
                            width={24}
                          />
                          <p className="text-xl">{messages.resilience_and_adaptation}</p>
                        </div>
                        <Markdown className="prose prose-default text-m leading-6">
                          {data?.data?.data?.attributes.cb_resilience_adapt}
                        </Markdown>
                      </div>
                    )}

                    {data?.data?.data?.attributes.cb_health_well_being && (
                      <div className="flex flex-col space-y-2 py-6 font-sans text-text">
                        <div className="flex items-center space-x-2">
                          <Image
                            alt={messages.health_and_well_being}
                            src="/images/icons/co-benefits/human_health_wellbeing.svg"
                            height={24}
                            width={24}
                          />
                          <p className="text-xl">{messages.health_and_well_being}</p>
                        </div>
                        <Markdown className="prose prose-default text-m leading-6">
                          {data?.data?.data?.attributes.cb_health_well_being}
                        </Markdown>
                      </div>
                    )}

                    {data?.data?.data?.attributes.cb_livelihood_econ && (
                      <div className="flex flex-col space-y-2 py-6 font-sans text-text">
                        <div className="flex items-center space-x-2">
                          <Image
                            alt={messages.livelihoods_and_economics}
                            src="/images/icons/co-benefits/livelihoods_economic.svg"
                            height={24}
                            width={24}
                          />
                          <p className="text-xl">{messages.livelihoods_and_economics}</p>
                        </div>
                        <Markdown className="prose prose-default text-m leading-6">
                          {data?.data?.data?.attributes.cb_livelihood_econ}
                        </Markdown>
                      </div>
                    )}
                  </div>
                </Wrapper>
              </section>
              {data?.data?.data?.attributes.callout && (
                <section className="bg-gradient-to-r from-midnight via-indigo to-midnight">
                  <Wrapper className="flex flex-col items-center space-y-6 py-20">
                    <VscQuote className="fill-butternut" size={40} />
                    <div className="flex max-w-3xl flex-col items-center justify-center space-y-5 font-sans text-white">
                      <Markdown className="prose prose-tertiary text-center text-xl font-light leading-9">
                        {data?.data?.data?.attributes.callout}
                      </Markdown>
                      <p className="uppercase">{data?.data?.data?.attributes.callout_author}</p>
                    </div>
                  </Wrapper>
                </section>
              )}
              {data?.data?.data?.attributes.primary_partners && (
                <section>
                  <Wrapper>
                    <div className="space-y-4 border-b-[2px] py-14">
                      <h4 className="font-serif text-3xl font-medium text-indigo">
                        {messages.partners}
                      </h4>
                      <div
                        className={cn({
                          'font-light leading-8 text-text': true,
                          'grid grid-cols-2':
                            data?.data?.data?.attributes.primary_partners?.split(';').length > 5,
                        })}
                      >
                        {data?.data?.data?.attributes.primary_partners
                          ?.split(';')
                          .map((partner) => (
                            <p key={partner} className="mr-8">
                              {partner}
                            </p>
                          ))}
                      </div>
                    </div>
                  </Wrapper>
                </section>
              )}

              <section className="py-16">
                <Wrapper className="flex flex-row space-x-20">
                  {data?.data?.data?.attributes.whats_next && (
                    <div className="w-3/4 space-y-6">
                      <h4 className="font-serif text-3xl font-medium text-indigo">
                        {messages.whats_next}
                      </h4>
                      <Markdown className="prose prose-secondary font-sans text-m font-light leading-7">
                        {data?.data?.data?.attributes.whats_next}
                      </Markdown>
                    </div>
                  )}

                  {!!(
                    data?.data?.data?.attributes.public_contact_name ||
                    data?.data?.data?.attributes.public_contact_email
                  ) && (
                    <div className="w-1/4 space-y-6 pt-16">
                      <h5 className="font-serif text-2xl font-medium text-indigo ">
                        {messages.contact_info}
                      </h5>
                      <div className="text-m font-light text-gray-800">
                        <p className="uppercase">{messages.main_contact}</p>
                        <p>{data?.data?.data?.attributes.public_contact_name}</p>
                        <p>{data?.data?.data?.attributes.public_contact_email}</p>
                      </div>
                    </div>
                  )}
                </Wrapper>
              </section>
              <section
                id="contact"
                className="scroll-mt-28 bg-gradient-to-r from-midnight via-indigo to-midnight"
              >
                <Wrapper>
                  <div className="flex flex-col items-center space-y-4 py-16 font-sans text-white">
                    <Markdown className="prose prose-tertiary pb-4 text-2xl uppercase">
                      {messages?.more_information_title}
                    </Markdown>
                    <Markdown className="prose prose-tertiary text-center text-center text-m">
                      {messages?.more_information}
                    </Markdown>

                    {messages?.contact_us && (
                      <Link href={'/contact'} locale={locale}>
                        <button className="mt-6 inline-flex h-14 items-center space-x-6 rounded-none bg-butternut px-7 text-white transition-colors hover:bg-background hover:text-butternut">
                          <p className="text-base font-bold uppercase">{messages?.contact_us}</p>
                          <HiArrowNarrowRight
                            className="stroke-white hover:stroke-butternut"
                            size={20}
                          />
                        </button>
                      </Link>
                    )}
                  </div>
                </Wrapper>
              </section>
              <section className="pt-16 pb-28">
                <Wrapper className="space-y-6">
                  <h4 className="font-serif text-2xl font-medium text-indigo">
                    {messages?.similiar_projects}
                  </h4>
                  <div className="grid grid-cols-3 gap-6 xl:grid-cols-4 2xl:gap-10">
                    {similarProjects?.map((project, idx) => (
                      <Card key={idx} id={project.id} slug={project.attributes.slug} />
                    ))}

                    {similarProjects.length === 0 && (
                      <div className="flex h-64 w-full items-center justify-center">
                        <p className="font-serif text-lg font-semibold text-indigo">
                          {messages?.no_projects}
                        </p>
                      </div>
                    )}
                  </div>
                </Wrapper>
              </section>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ProjectDetail;
