'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import { motion, useInView } from 'framer-motion';
import { BsArrowLeft } from 'react-icons/bs';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { VscQuote } from 'react-icons/vsc';
import { useSetRecoilState } from 'recoil';

import { headerStyleAtom } from '@/store';

import { useGetProjects, useGetProjectsId } from '@/types/generated/project';

import Button from 'components/ui/button';
import Video from 'components/video';
import Card from 'containers/projects/card';
import ExtentMap from 'containers/projects/detail/extent-map';
import Wrapper from 'containers/wrapper';
import { cn } from 'utils/cn';
import { toName, toSlug, toTBD } from 'utils/data';

const ProjectDetail = (): JSX.Element => {
  const { slug } = useParams();

  const ref = useRef();
  const inView = useInView(ref, {
    once: false,
    amount: 0.25,
  });

  const setHeaderStyle = useSetRecoilState(headerStyleAtom);

  const { data: projects } = useGetProjects({ populate: '*' });

  const id = useMemo(() => {
    return projects?.data?.data?.find((project) => project.attributes.project_name === toName(slug))
      ?.id;
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

  return (
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

      {isFetching && (
        <div className="flex h-64 w-full items-center justify-center">
          <p className="font-serif text-lg font-semibold text-indigo">Loading...</p>
        </div>
      )}

      {!isFetching && isFetched && !data && (
        <div className="flex h-64 w-full items-center justify-center">
          <p className="font-serif text-lg font-semibold text-indigo">No data available</p>
        </div>
      )}

      {isFetched && !!data?.data?.data && (
        <div>
          <Wrapper className="relative flex w-full flex-row justify-between">
            <div className="flex w-2/3 flex-col items-start pt-6 pb-16">
              <motion.div whileHover="hover">
                <Link href="/projects" className="flex items-center space-x-2 pb-8">
                  <motion.div variants={arrowAnimation}>
                    <BsArrowLeft className="fill-butternut" size={30} />
                  </motion.div>
                  <p className="font-sans text-xl font-medium text-butternut">Back to projects</p>
                </Link>
              </motion.div>

              <div className="flex max-w-2xl flex-col items-center">
                <h2 className="mb-16  font-serif text-[35px] font-medium leading-9 text-indigo">
                  {data?.data?.data?.attributes.long_title}
                </h2>
                <div className="flex min-h-[72px] space-x-10 font-sans xl:space-x-20">
                  <div className="flex flex-col items-center">
                    <p className="pb-2 text-4xl font-bold text-spring">
                      {toTBD(
                        Intl.NumberFormat().format(data?.data?.data?.attributes.hectares_impacted)
                      )}
                    </p>
                    <p className="text-center text-m font-medium text-text">Project Area (ha)</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <p className="pb-2 text-4xl font-bold text-spring">
                      {toTBD(
                        Intl.NumberFormat().format(data?.data?.data?.attributes.people_supported)
                      )}
                    </p>
                    <p className="text-center text-m font-medium text-text">People Supported</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <p className="pb-2 text-4xl font-bold text-spring">
                      {toTBD(
                        Intl.NumberFormat().format(data?.data?.data?.attributes.carbon_mitigation)
                      )}
                    </p>
                    <p className="max-w-[160px] text-center text-sm font-medium leading-5 text-text xl:text-base">
                      Mitigation Potential (tCO<sub>2</sub>e)<sup>*</sup>
                    </p>
                  </div>
                </div>
                <p className="mt-6 py-3 text-right text-xs font-normal text-text/50">
                  <span className="text-sm">*</span> Mitigation values presented may or may not be
                  equivalent to carbon credit potential depending on methodology and timeframe.
                </p>
              </div>
            </div>

            {data?.data?.data?.attributes.extent && (
              <div className="relative -mt-20">
                <ExtentMap extent={data?.data?.data?.attributes.extent} />
                {data?.data?.data?.attributes.extent_credits && (
                  <div className="absolute bottom-24 right-2 mb-1 bg-black/40 px-2">
                    <p className="text-xs text-white">
                      {data?.data?.data?.attributes.extent_credits}
                    </p>
                  </div>
                )}
              </div>
            )}
          </Wrapper>
          <section className="sticky top-[68px] z-30 w-full border-t border-b bg-white">
            <Wrapper>
              <div className="flex justify-between py-4 px-28 text-text">
                <a className="hover:text-butternut" href="#goals">
                  Overview
                </a>
                <a className="hover:text-butternut" href="#why">
                  Why This, Why Now
                </a>
                <a className="hover:text-butternut" href="#lessons">
                  Lessons Learned
                </a>
                <a className="hover:text-butternut" href="#science">
                  Science
                </a>
                <a className="hover:text-butternut" href="#co-benefits">
                  Co-benefits
                </a>
                <a className="hover:text-butternut" href="#contact">
                  Contact
                </a>
              </div>
            </Wrapper>
          </section>
          <section
            id="goals"
            className="relative flex scroll-mt-28 bg-gradient-to-r from-midnight via-indigo to-midnight"
          >
            <div className="flex w-1/2 justify-end">
              <div className="flex max-w-2xl flex-col justify-center space-y-3 py-10 pl-10 pr-10 text-white 2xl:py-20 2xl:pl-0 2xl:pr-20">
                <h4 className="font-serif text-3xl font-medium xl:text-4xl">Goals</h4>
                <p className="xl: font-sans text-base leading-7 xl:text-lg xl:leading-8 2xl:text-xl 2xl:leading-9">
                  {data?.data?.data?.attributes.project_goal}
                </p>
              </div>
            </div>

            <Image
              src={
                data?.data?.data?.attributes.goals_photo.data.attributes.url ||
                '/images/projects/goals_placeholder.png'
              }
              alt={data?.data?.data?.attributes.goals_photo.data.attributes.name || 'Goals'}
              height={280}
              width={500}
              style={{ objectFit: 'cover' }}
              className="max-h-[600px] w-1/2"
            />
            {data?.data?.data?.attributes.goals_photo.data.attributes.alternativeText && (
              <div className="absolute bottom-2 right-6 z-50 bg-white/40 px-2">
                <p className="text-xs text-black">
                  {data?.data?.data?.attributes.goals_photo.data.attributes.alternativeText}
                </p>
              </div>
            )}
          </section>

          <section className="py-16">
            <Wrapper className="space-y-10">
              {data?.data?.data?.attributes.key_activities && (
                <div>
                  <h4 className="font-serif text-2xl font-medium text-indigo">Key Activities</h4>
                  <div className="flex flex-col space-y-2 py-6 font-sans text-text">
                    {data?.data?.data?.attributes.key_activities
                      ?.split(';')
                      .map((activity, idx) => (
                        <div
                          key={idx}
                          className="flex items-start space-x-6 border-t border-accents py-4 last:border-b"
                        >
                          <span className="text-4xl font-bold text-butternut">{idx + 1}.</span>
                          <p className="mt-2 font-sans text-xl font-light text-text">{activity}</p>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              <div>
                <h4 className="font-serif text-2xl font-medium text-indigo">Summary</h4>
                <p className="pt-6 font-sans text-lg font-light text-text">
                  Project Phase:{' '}
                  {data?.data?.data?.attributes.project_phases.data
                    .map((pp) => pp.attributes.name)
                    .join(', ')}
                </p>

                <p className="w-2/3 pt-4 font-sans text-m font-light leading-7 text-text">
                  {data?.data?.data?.attributes.project_summary}
                </p>
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
                  <h4 className="pb-2 font-serif text-3xl font-semibold">Why This, Why Now</h4>
                  <p className="max-w-3xl text-center font-sans text-xl font-light leading-9">
                    {data?.data?.data?.attributes.why_this_why_now_callout}
                  </p>
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
                    <p className="text-m text-text">{data?.data?.data?.attributes.video_caption}</p>

                    <div className="pt-2">
                      <Button onClick={() => setPlaying(!playing)}>
                        <p className="text-base font-bold uppercase">
                          {playing ? 'Pause video' : 'Watch video'}
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
                      alt={data?.data?.data?.attributes?.fallback_photo.data?.attributes.name || ''}
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
                  <h4 className="font-serif text-3xl font-medium text-white">Lessons Learned</h4>
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
                      <td className="w-3/4 px-20 font-sans text-m font-light leading-6 text-text">
                        {data?.data?.data?.attributes.lesson_1}
                      </td>
                    </tr>
                  )}

                  {data?.data?.data?.attributes.lesson_2 && (
                    <tr className="border-b-[2px] [&>*]:py-10">
                      <td className="w-1/4 pr-10 font-serif text-2xl font-medium text-indigo">
                        {data?.data?.data?.attributes.lesson_2_category.data.attributes.name}
                      </td>
                      <td className="w-3/4 px-20 font-sans text-m font-light leading-6 text-text">
                        {data?.data?.data?.attributes.lesson_2}
                      </td>
                    </tr>
                  )}

                  {data?.data?.data?.attributes.lesson_3 && (
                    <tr className="[&>*]:py-10">
                      <td className="w-1/4 font-serif text-2xl font-medium text-indigo">
                        {data?.data?.data?.attributes.lesson_3_category.data.attributes.name}
                      </td>
                      <td className="w-3/4 px-20 font-sans text-m font-light leading-6 text-text">
                        {data?.data?.data?.attributes.lesson_3}
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
                  <h4 className="font-serif text-3xl font-medium text-white">Science</h4>
                </div>
              </Wrapper>
            </div>
            <Wrapper className="flex w-full flex-row space-x-20 py-16">
              <div className="flex w-3/4 flex-col space-y-10">
                <div className="flex-col space-y-6">
                  <p className="font-serif text-2xl font-medium text-indigo">Research Summary</p>
                  <p className="font-sans text-m font-light leading-7 text-text">
                    {data?.data?.data?.attributes.abstract}
                  </p>
                </div>
                {data?.data?.data?.attributes.citations && (
                  <div className="flex flex-col space-y-4">
                    <h5 className="text-lg font-light uppercase">CITATIONS</h5>
                    <div className="space-y-2 text-2xs font-light">
                      {data?.data?.data?.attributes.citations?.split(';').map((citation, idx) => (
                        <p key={idx}>{citation}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              {!!data?.data?.data?.attributes.resources.data.length && (
                <section className="flex w-1/4 flex-col space-y-6">
                  <p className="font-serif text-2xl font-medium text-indigo">Resources</p>

                  <div className="flex flex-col items-start font-sans text-xl font-light leading-9 text-text">
                    <button
                      type="button"
                      className="hover:font-medium"
                      // onClick={() => onDownload(data?.data?.data?.attributes.resources[0], 'Fact Sheet')}
                    >
                      <p>Download Fact Sheet</p>
                    </button>
                    <button
                      type="button"
                      className="hover:font-medium"
                      // onClick={() => onDownload(data?.data?.data?.attributes.resources[1], 'Download 2')}
                    >
                      <p>Download 2</p>
                    </button>
                    <button
                      type="button"
                      className="hover:font-medium"
                      // onClick={() => onDownload(data?.data?.data?.attributes.resources[2], 'Download 3')}
                    >
                      <p>Download 3</p>
                    </button>
                  </div>
                </section>
              )}
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
                  <h4 className="font-serif text-3xl font-medium text-white">Co-Benefits</h4>
                </div>
              </Wrapper>
            </div>
            <Wrapper>
              <div className="w-3/4 py-10 font-light">
                {data?.data?.data?.attributes.cb_biodiversity && (
                  <div className="flex flex-col space-y-2 py-6 font-sans text-text">
                    <div className="flex items-center space-x-2">
                      <Image
                        alt="Biodiversity"
                        src="/images/icons/co-benefits/biodiversity.svg"
                        height={24}
                        width={24}
                      />
                      <p className="text-xl">Biodiversity</p>
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
                      <p className="text-xl">Ecosystem Services</p>
                    </div>
                    <p className="text-m leading-6">
                      {data?.data?.data?.attributes.cb_ecosystem_services}
                    </p>
                  </div>
                )}

                {data?.data?.data?.attributes.cb_resilience_adapt && (
                  <div className="flex flex-col space-y-2 py-6 font-sans text-text">
                    <div className="flex items-center space-x-2">
                      <Image
                        alt="Resilience & Adaptation"
                        src="/images/icons/co-benefits/resilience_and_adaptation.svg"
                        height={24}
                        width={24}
                      />
                      <p className="text-xl">Resilience & Adaptation</p>
                    </div>
                    <p className="text-m leading-6">
                      {data?.data?.data?.attributes.cb_resilience_adapt}
                    </p>
                  </div>
                )}

                {data?.data?.data?.attributes.cb_health_well_being && (
                  <div className="flex flex-col space-y-2 py-6 font-sans text-text">
                    <div className="flex items-center space-x-2">
                      <Image
                        alt="Human Health & Well-being"
                        src="/images/icons/co-benefits/human_health_wellbeing.svg"
                        height={24}
                        width={24}
                      />
                      <p className="text-xl">Health & Well-being</p>
                    </div>
                    <p className="text-m leading-6">
                      {data?.data?.data?.attributes.cb_health_well_being}
                    </p>
                  </div>
                )}

                {data?.data?.data?.attributes.cb_livelihood_econ && (
                  <div className="flex flex-col space-y-2 py-6 font-sans text-text">
                    <div className="flex items-center space-x-2">
                      <Image
                        alt="Livehoods"
                        src="/images/icons/co-benefits/livelihoods_economic.svg"
                        height={24}
                        width={24}
                      />
                      <p className="text-xl">Livelihoods & Economics</p>
                    </div>
                    <p className="text-m leading-6">
                      {data?.data?.data?.attributes.cb_livelihood_econ}
                    </p>
                  </div>
                )}
              </div>
            </Wrapper>
          </section>
          {data?.data?.data?.attributes.callout && (
            <section className="bg-gradient-to-r from-midnight via-indigo to-midnight">
              <Wrapper className="flex flex-col items-center space-y-6 py-20">
                <VscQuote className="fill-butternut" size={40} />
                <div className="flex flex-col items-center justify-center space-y-5 font-sans text-white">
                  <p className="max-w-3xl text-center text-xl font-light leading-9">
                    {data?.data?.data?.attributes.callout}
                  </p>
                  <p className="uppercase">{data?.data?.data?.attributes.callout_author}</p>
                </div>
              </Wrapper>
            </section>
          )}
          {data?.data?.data?.attributes.primary_partners && (
            <section>
              <Wrapper>
                <div className="space-y-4 border-b-[2px] py-14">
                  <h4 className="font-serif text-3xl font-medium text-indigo">Partners</h4>
                  <div
                    className={cn({
                      'font-light leading-8 text-text': true,
                      'grid grid-cols-2':
                        data?.data?.data?.attributes.primary_partners?.split(';').length > 5,
                    })}
                  >
                    {data?.data?.data?.attributes.primary_partners?.split(';').map((partner) => (
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
              <div className="w-3/4 space-y-6">
                <h4 className="font-serif text-3xl font-medium text-indigo">What’s Next</h4>
                <p className="font-sans text-m font-light leading-7 text-text">
                  {data?.data?.data?.attributes.whats_next}
                </p>
              </div>

              {!!(
                data?.data?.data?.attributes.public_contact_name ||
                data?.data?.data?.attributes.public_contact_email
              ) && (
                <div className="w-1/4 space-y-6 pt-16">
                  <h5 className="font-serif text-2xl font-medium text-indigo ">Contact Info</h5>
                  <div className="text-m font-light text-gray-800">
                    <p>MAIN CONTACT:</p>
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
                <p className="text-2xl">WANT MORE INFORMATION?</p>
                <p className="text-center text-m">
                  Reach out and we’ll connect you to the people who will be the most helpful for
                  your questions.
                </p>
                <Link href="/contact">
                  <button className="mt-6 inline-flex h-14 items-center space-x-6 rounded-none bg-butternut px-7 text-white transition-colors hover:bg-background hover:text-butternut">
                    <p className="text-base font-bold uppercase">Contact us</p>
                    <HiArrowNarrowRight className="stroke-white hover:stroke-butternut" size={20} />
                  </button>
                </Link>
              </div>
            </Wrapper>
          </section>
          <section className="pt-16 pb-28">
            <Wrapper className="space-y-6">
              <h4 className="font-serif text-2xl font-medium text-indigo">Similar Projects</h4>
              <div className="flex justify-start space-x-6 2xl:space-x-10">
                {similarProjects?.map((project, idx) => (
                  <Card key={idx} id={project.id} slug={toSlug(project.attributes.project_name)} />
                ))}
              </div>
            </Wrapper>
          </section>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
