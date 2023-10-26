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

import { useProject, useProjects } from '@/hooks/projects';

import Button from 'components/ui/button';
import Video from 'components/video';
import Card from 'containers/projects/card';
import ExtentMap from 'containers/projects/detail/extent-map';
import Wrapper from 'containers/wrapper';
import { cn } from 'utils/cn';

const ProjectDetail = (): JSX.Element => {
  const params = useParams();
  const ref = useRef();
  const inView = useInView(ref, {
    once: false,
    amount: 0.25,
  });

  const setHeaderStyle = useSetRecoilState(headerStyleAtom);

  const projectQuery = useProject({ projectId: `${params.id}` });

  const projectsQuery = useProjects();

  const [playing, setPlaying] = useState(false);

  const arrowAnimation = {
    hover: {
      x: -10,
      transition: { duration: 0.25, bounce: 0 },
    },
  };

  const similarProjects = useMemo(() => {
    return projectsQuery.data
      ?.filter((project) => {
        if (!project.pathways.some((pathway) => projectQuery.data?.pathways?.includes(pathway)))
          return false;
        return true;
      })
      .slice(0, 3);
  }, [projectsQuery.data, projectQuery.data]);

  // const onDownload = async (resource: string, fileName: string) => {
  //   const blob = await fetch(resource).then((r) => r.blob());
  //   const url = window.URL.createObjectURL(new Blob([blob]));
  //   const link = document.createElement('a');
  //   link.href = url;
  //   link.setAttribute('download', `${fileName}`);
  //   document.body.appendChild(link);
  //   link.click();
  //   link.remove();
  // };

  useEffect(() => {
    if (inView) {
      setHeaderStyle('default');
    }
    if (!inView) {
      setHeaderStyle('dark');
    }
  }, [inView, setHeaderStyle]);

  return (
    <>
      <div
        className="-z-10 -mt-20 h-[426px] bg-[url('/images/home/hero.png')] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${projectQuery.data?.header_photo?.url})` || '',
        }}
        ref={ref}
      />
      {projectQuery.isFetched && !!Object.keys(projectQuery.data).length && (
        <div>
          <Wrapper className="relative flex w-full flex-row justify-between">
            <div className="flex w-2/3 flex-col items-start pt-6 pb-24">
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
                  {projectQuery.data?.long_title}
                </h2>
                <div className="flex min-h-[72px] space-x-10 font-sans xl:space-x-20">
                  <div className="flex flex-col items-center">
                    <p className="pb-2 text-4xl font-bold text-spring">
                      {projectQuery.data?.carbon_mitigation}
                    </p>
                    <div className="flex flex-col items-center text-center text-m font-medium leading-6 text-text">
                      <p>Tons of Carbon</p>
                      <p>Mitigation Potential</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <p className="pb-2 text-4xl font-bold text-spring">
                      {projectQuery.data?.hectares_impacted}
                    </p>
                    <p className="text-center text-m font-medium text-text">Hectares Impacted</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <p className="pb-2 text-4xl font-bold text-spring">
                      {projectQuery.data?.people_supported}
                    </p>
                    <p className="text-center text-m font-medium text-text">People Supported</p>
                  </div>
                </div>
              </div>
            </div>

            {projectQuery.data?.extent && (
              <div className="-mt-20">
                <ExtentMap extent={projectQuery.data?.extent} />
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
          <section id="goals" className="flex scroll-mt-28 bg-indigo">
            <div className="flex w-1/2 justify-end">
              <div className="flex max-w-2xl flex-col justify-center space-y-3 py-10 pl-10 pr-10 text-white 2xl:py-20 2xl:pl-0 2xl:pr-20">
                <h4 className="font-serif text-3xl font-medium xl:text-4xl">Goals</h4>
                <p className="xl: font-sans text-base leading-7 xl:text-lg xl:leading-8 2xl:text-xl 2xl:leading-9">
                  {projectQuery.data?.project_goal}
                </p>
              </div>
            </div>

            <Image
              src={projectQuery.data?.goals_photo?.url || '/images/projects/goals_placeholder.png'}
              alt={projectQuery.data?.goals_photo?.caption || 'Goals'}
              height={280}
              width={500}
              style={{ objectFit: 'cover' }}
              className="w-1/2"
            />
          </section>

          {projectQuery.data?.key_activities && (
            <section className="py-16">
              <Wrapper className="space-y-10">
                <div>
                  <h4 className="font-serif text-2xl font-medium text-indigo">Key Activities</h4>
                  <div className="flex flex-col space-y-2 py-6 font-sans text-text">
                    {projectQuery.data?.key_activities?.split(';').map((activity, idx) => (
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
                <div>
                  <h4 className="font-serif text-2xl font-medium text-indigo">Summary</h4>
                  <p className="pt-6 font-sans text-lg font-light text-text">
                    Project Phase: {projectQuery.data.project_phases}
                  </p>

                  <p className="w-2/3 pt-4 font-sans text-m font-light leading-7 text-text">
                    {projectQuery.data?.project_summary}
                  </p>
                </div>
              </Wrapper>
            </section>
          )}

          {projectQuery.data?.why_this_why_now && (
            <section
              id="why"
              className="scroll-mt-28 bg-gradient-to-r from-midnight via-indigo to-midnight"
            >
              <Wrapper>
                <div className="flex flex-col items-center space-y-4 py-16 text-white">
                  <h4 className="pb-2 font-serif text-3xl font-semibold">Why This, Why Now</h4>
                  <p className="max-w-3xl text-center font-sans text-xl font-light leading-9">
                    {projectQuery.data?.why_this_why_now}
                  </p>
                </div>
              </Wrapper>
            </section>
          )}

          {projectQuery.data?.video && (
            <section className="bg-background py-16">
              <Wrapper>
                <div className="flex w-full space-x-16">
                  <div className="aspect-video w-2/3">
                    <Video
                      playing={playing}
                      loop
                      url={projectQuery.data?.video}
                      height="100%"
                      width="100%"
                    />
                  </div>
                  <div className="w-1/3 space-y-4 py-4">
                    <p className="text-m text-text">{projectQuery.data?.video_caption}</p>

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

          {!projectQuery.data?.video && projectQuery.data?.fallback_photo && (
            <section className="bg-background py-16">
              <Wrapper>
                <div className="flex w-full justify-center">
                  <Image
                    alt={projectQuery.data?.fallback_photo.caption}
                    src={projectQuery.data?.fallback_photo.url}
                    width={600}
                    height={500}
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
                  {projectQuery.data?.lesson_1 && (
                    <tr className="border-b-[2px] [&>*]:py-10">
                      <td className="w-1/4 font-serif text-2xl font-medium text-indigo">
                        {projectQuery.data?.lesson_1_category}
                      </td>
                      <td className="w-3/4 px-20 font-sans text-m leading-6 text-text">
                        {projectQuery.data?.lesson_1}
                      </td>
                    </tr>
                  )}

                  {projectQuery.data?.lesson_2 && (
                    <tr className="border-b-[2px] [&>*]:py-10">
                      <td className="w-1/4 pr-10 font-serif text-2xl font-medium text-indigo">
                        {projectQuery.data?.lesson_2_category}
                      </td>
                      <td className="w-3/4 px-20 font-sans text-m leading-6 text-text">
                        {projectQuery.data?.lesson_2}
                      </td>
                    </tr>
                  )}
                  {projectQuery.data?.lesson_3 && (
                    <tr className="[&>*]:py-10">
                      <td className="w-1/4 font-serif text-2xl font-medium text-indigo">
                        {projectQuery.data?.lesson_3_category}
                      </td>
                      <td className="w-3/4 px-20 font-sans text-m leading-6 text-text">
                        {projectQuery.data?.lesson_3}
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
                    {projectQuery.data?.project_summary}
                  </p>
                </div>
                {projectQuery.data?.citations && (
                  <div className="flex flex-col space-y-4">
                    <h5 className="text-lg font-light uppercase">CITATIONS</h5>
                    <div className="space-y-2 text-2xs font-light">
                      {projectQuery.data?.citations?.split(';').map((citation, idx) => (
                        <p key={idx}>{citation}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              {!!projectQuery.data?.resources.length && (
                <section className="flex w-1/4 flex-col space-y-6">
                  <p className="font-serif text-2xl font-medium text-indigo">Resources</p>

                  <div className="flex flex-col items-start font-sans text-xl font-light leading-9 text-text">
                    <button
                      type="button"
                      className="hover:font-medium"
                      // onClick={() => onDownload(projectQuery.data?.resources[0], 'Fact Sheet')}
                    >
                      <p>Download Fact Sheet</p>
                    </button>
                    <button
                      type="button"
                      className="hover:font-medium"
                      // onClick={() => onDownload(projectQuery.data?.resources[1], 'Download 2')}
                    >
                      <p>Download 2</p>
                    </button>
                    <button
                      type="button"
                      className="hover:font-medium"
                      // onClick={() => onDownload(projectQuery.data?.resources[2], 'Download 3')}
                    >
                      <p>Download 3</p>
                    </button>
                  </div>
                </section>
              )}
            </Wrapper>
          </section>

          {projectQuery.data?.graphic && (
            <section className="bg-background py-16">
              <Wrapper>
                <div className="w-2/3 space-y-6">
                  <p className="font-serif text-2xl font-medium text-indigo">
                    {projectQuery.data?.graphic.caption}
                  </p>
                  <Image
                    src={projectQuery.data?.graphic.url}
                    alt={projectQuery.data?.graphic.caption}
                    height={700}
                    width={700}
                    style={{ objectFit: 'contain' }}
                    className="w-full"
                  />
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
                {projectQuery.data?.cb_biodiversity && (
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
                    <p className="text-m leading-6">{projectQuery.data?.cb_biodiversity}</p>
                  </div>
                )}

                {projectQuery.data?.cb_ecosystem_services && (
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
                    <p className="text-m leading-6">{projectQuery.data?.cb_ecosystem_services}</p>
                  </div>
                )}
                {projectQuery.data?.cb_livelihood_econ && (
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
                    <p className="text-m leading-6">{projectQuery.data?.cb_livelihood_econ}</p>
                  </div>
                )}
                {projectQuery.data?.cb_health_well_being && (
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
                    <p className="text-m leading-6">{projectQuery.data?.cb_health_well_being}</p>
                  </div>
                )}
                {projectQuery.data?.cb_resilience_adapt && (
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
                    <p className="text-m leading-6">{projectQuery.data?.cb_resilience_adapt}</p>
                  </div>
                )}
              </div>
            </Wrapper>
          </section>
          {projectQuery.data?.why_this_why_now_callout && (
            <section className="bg-gradient-to-r from-midnight via-indigo to-midnight">
              <Wrapper className="flex flex-col items-center space-y-6 py-20">
                <VscQuote className="fill-butternut" size={40} />
                <div className="flex justify-center">
                  <p className="max-w-3xl text-center font-sans text-xl font-light leading-9 text-white">
                    {projectQuery.data?.why_this_why_now_callout}
                  </p>
                </div>
              </Wrapper>
            </section>
          )}
          {projectQuery.data?.primary_partners && (
            <section>
              <Wrapper>
                <div className="space-y-4 border-b-[2px] py-14">
                  <h4 className="font-serif text-3xl font-medium text-indigo">Partners</h4>
                  <div
                    className={cn({
                      'font-light leading-8 text-text': true,
                      'grid grid-cols-2':
                        projectQuery.data?.primary_partners?.split(';').length > 5,
                    })}
                  >
                    {projectQuery.data?.primary_partners?.split(';').map((partner) => (
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
                  {projectQuery.data?.whats_next}
                </p>
              </div>

              {!!(
                projectQuery.data?.public_contact_name || projectQuery.data?.public_contact_email
              ) && (
                <div className="w-1/4 space-y-6 pt-16">
                  <h5 className="font-serif text-2xl font-medium text-indigo ">Contact Info</h5>
                  <div className="text-m font-light text-gray-800">
                    <p>MAIN CONTACT:</p>
                    <p>{projectQuery.data?.public_contact_name}</p>
                    <p>{projectQuery.data?.public_contact_email}</p>
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
                  <Card key={idx} data={project} />
                ))}
              </div>
            </Wrapper>
          </section>
        </div>
      )}
      {projectQuery.isFetched && Object.keys(projectQuery.data).length === 0 && (
        <div className="flex h-64 w-full items-center justify-center">
          <p className="font-serif text-lg font-semibold text-indigo">No data available</p>
        </div>
      )}
      {projectQuery.isFetching && (
        <div className="flex h-64 w-full items-center justify-center">
          <p className="font-serif text-lg font-semibold text-indigo">Loading...</p>
        </div>
      )}
    </>
  );
};

export default ProjectDetail;
