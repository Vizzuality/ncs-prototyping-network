import { useMemo, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { VscQuote } from 'react-icons/vsc';

import Wrapper from 'containers/wrapper';

import Video from '@/components/video';
import Icon from 'components/icon';
import { PROJECTS } from 'data/projects';
import { Project } from 'types/project';
import { cn } from 'utils/cn';

import BIODIVERSITY_SVG from 'svgs/co-benefits/biodiversity.svg?sprite';
import ECOSYSTEM_SERVICES_SVG from 'svgs/co-benefits/ecosystem_services.svg?sprite';
import HUMAN_HEALTH_WELLBEING_SVG from 'svgs/co-benefits/human_health_wellbeing.svg?sprite';
import LIVELIHOODS_ECONOMIC_SVG from 'svgs/co-benefits/livelihoods_economic.svg?sprite';
import RESILIENCE_AND_ADAPTATION_SVG from 'svgs/co-benefits/resilience_and_adaptation.svg?sprite';
import ARROW_SVG from 'svgs/ui/arrow.svg?sprite';

import Card from '../card';

const ProjectDetail = ({ data }: { data: Project }): JSX.Element => {
  const [playing, setPlaying] = useState(false);

  const arrowAnimation = {
    hover: {
      x: -10,
      transition: { duration: 0.25, bounce: 0 },
    },
  };

  const similarProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      if (!project.pathways.some((pathway) => data.pathways.includes(pathway))) return false;
      return true;
    }).slice(0, 3);
  }, [data]);

  return (
    <>
      <div className="-z-10 -mt-20 h-[426px] bg-[url('/images/home/hero.png')] bg-cover bg-no-repeat" />
      <Wrapper className="relative flex w-full flex-row">
        <div className="flex w-2/3 flex-col items-start pt-6 pb-16">
          <motion.div whileHover="hover">
            <Link href="/projects" className="flex items-center space-x-1 pb-8">
              <motion.div variants={arrowAnimation}>
                <Icon icon={ARROW_SVG} className="h-4 w-8 rotate-180 stroke-butternut stroke-2" />
              </motion.div>
              <p className="font-sans text-xl font-medium text-butternut">Back to projects</p>
            </Link>
          </motion.div>
          <div className="flex flex-col items-center">
            <h2 className="mb-16 max-w-3xl font-serif text-[35px] font-medium leading-9 text-indigo">
              {data?.long_title}
            </h2>
            <div className="flex space-x-20 font-sans">
              <div className="flex flex-col items-center">
                <p className="pb-2 text-4xl font-bold text-spring">{data?.carbon_mitigation}</p>
                <div className="flex flex-col items-center text-m font-medium leading-6 text-text">
                  <p>Tons of Carbon</p>
                  <p>Mitigation Potential</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <p className="pb-2 text-4xl font-bold text-spring">{data?.hectares_impacted}</p>
                <p className="text-m font-medium text-text">Hectares Impacted</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="pb-2 text-4xl font-bold text-spring">{data?.people_supported}</p>
                <p className="text-m font-medium text-text">People Supported</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -right-16 -top-1/3 w-1/3">
          <Image
            src="/images/projects/project_detail.png"
            alt="Project Detail"
            height={486}
            width={300}
          />
        </div>
      </Wrapper>
      <Wrapper>
        <div className="flex justify-between border-t py-4 px-28 text-text">
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
      <section id="goals" className="flex bg-indigo">
        <div className="flex w-1/2 justify-end">
          <div className="flex max-w-2xl flex-col space-y-3 py-20 pr-20 text-white">
            <h4 className="font-serif text-4xl font-medium">Goals</h4>
            <p className="font-sans text-xl leading-9">{data?.project_goal}</p>
          </div>
        </div>
        <Image
          src="/images/projects/goals_placeholder.png"
          alt="Goals"
          height={280}
          width={500}
          style={{ objectFit: 'contain' }}
          className="w-1/2"
        />
      </section>

      <section className="py-16">
        <Wrapper className="space-y-10">
          <div>
            <h4 className="font-serif text-2xl font-medium text-indigo">Key Activities</h4>
            <div className="flex flex-col space-y-2 py-6 font-sans text-text">
              {data?.key_activities
                .split(/[.]+/)
                .filter((el, index) => {
                  return index % 2 === 1;
                })
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
          <div>
            <h4 className="font-serif text-2xl font-medium text-indigo">Summary</h4>
            <p className="pt-6 font-sans text-lg font-light text-text">
              Project Phase: {data.project_phase}
            </p>

            <p className="w-2/3 pt-4 font-sans text-m font-light leading-7 text-text">
              {data?.project_summary}
            </p>
          </div>
        </Wrapper>
      </section>
      <section id="why" className="bg-gradient-to-r from-midnight via-indigo to-midnight">
        <Wrapper>
          <div className="flex flex-col items-center space-y-4 py-16 text-white">
            <h4 className="pb-2 font-serif text-3xl font-semibold">Why This, Why Now</h4>
            <p className="max-w-3xl text-center font-sans text-xl font-light leading-9">
              {data?.why_content}
            </p>
          </div>
        </Wrapper>
      </section>
      <section className="bg-background py-16">
        <Wrapper>
          <div className="flex w-full space-x-16">
            <div className="aspect-video w-2/3">
              <Video
                playing={playing}
                loop
                url="https://youtu.be/shGJFJ1lgGY"
                height="100%"
                width="100%"
              />
            </div>
            <div className="w-1/3 space-y-4 py-4">
              <h4 className="font-serif text-2xl font-medium text-indigo">{data.video_caption}</h4>
              {/* //TODO: Use correct data here */}
              <p className="text-m text-text">
                Indigenous Women are becoming leaders for Thriving Ecosystem and we are proud to
                help enable that.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  className="mt-6 inline-flex h-14 items-center space-x-6 rounded-none bg-butternut px-10 text-white transition-colors hover:bg-background hover:text-butternut"
                >
                  <p className="text-base font-bold uppercase">Watch video</p>
                </button>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
      <section id="lessons">
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
              <tr className="border-b-[2px] [&>*]:py-10">
                <td className="w-1/4 font-serif text-2xl font-medium text-indigo">
                  {data?.lesson_1_category}
                </td>
                <td className="w-3/4 px-20 font-sans text-m leading-6 text-text">
                  {data?.lesson_1}
                </td>
              </tr>
              <tr className="border-b-[2px] [&>*]:py-10">
                <td className="w-1/4 pr-10 font-serif text-2xl font-medium text-indigo">
                  {data?.lesson_2_category}
                </td>
                <td className="w-3/4 px-20 font-sans text-m leading-6 text-text">
                  {data?.lesson_2}
                </td>
              </tr>
              <tr className="[&>*]:py-10">
                <td className="w-1/4 font-serif text-2xl font-medium text-indigo">
                  {data?.lesson_3_category}
                </td>
                <td className="w-3/4 px-20 font-sans text-m leading-6 text-text">
                  {data?.lesson_3}
                </td>
              </tr>
            </tbody>
          </table>
        </Wrapper>
      </section>
      <section id="science" className="flex flex-col">
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
                {data?.project_summary}
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <h5 className="text-lg font-light uppercase">CITATIONS</h5>
              <div className="space-y-2 text-2xs font-light">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat.{' '}
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-1/4 flex-col space-y-6">
            <p className="font-serif text-2xl font-medium text-indigo">Resources</p>
            <div className="flex flex-col font-sans text-xl font-light leading-9 text-text">
              <p>Download Fact Sheet</p>
              <p>Download 2</p>
              <p>Download 3</p>
            </div>
          </div>
        </Wrapper>
      </section>
      <section id="co-benefits" className="flex flex-col">
        <div className="bg-indigo py-6">
          <Wrapper>
            <div>
              <h4 className="font-serif text-3xl font-medium text-white">Co-Benefits</h4>
            </div>
          </Wrapper>
        </div>
        <Wrapper>
          <div className="w-3/4 py-10 font-light">
            {data?.cb_biodiversity && (
              <div className="flex flex-col space-y-2 py-6 font-sans text-text">
                <div className="flex items-center space-x-2">
                  <Icon icon={BIODIVERSITY_SVG} className="h-7 w-7" />
                  <p className="text-xl">Biodiversity</p>
                </div>
                <p className="text-m leading-6">{data?.cb_biodiversity}</p>
              </div>
            )}
            {data?.cb_ecosystem_services && (
              <div className="flex flex-col space-y-2 py-6 font-sans text-text">
                <div className="flex items-center space-x-2">
                  <Icon icon={ECOSYSTEM_SERVICES_SVG} className="h-7 w-7" />
                  <p className="text-xl">Ecosystem Services</p>
                </div>
                <p className="text-m leading-6">{data?.cb_ecosystem_services}</p>
              </div>
            )}
            {data?.cb_livelihood_econ && (
              <div className="flex flex-col space-y-2 py-6 font-sans text-text">
                <div className="flex items-center space-x-2">
                  <Icon icon={LIVELIHOODS_ECONOMIC_SVG} className="h-7 w-7" />
                  <p className="text-xl">Livelihoods & Economics</p>
                </div>
                <p className="text-m leading-6">{data?.cb_livelihood_econ}</p>
              </div>
            )}
            {data?.cb_health_well_being && (
              <div className="flex flex-col space-y-2 py-6 font-sans text-text">
                <div className="flex items-center space-x-2">
                  <Icon icon={HUMAN_HEALTH_WELLBEING_SVG} className="h-7 w-7" />
                  <p className="text-xl">Health & Well-being</p>
                </div>
                <p className="text-m leading-6">{data?.cb_health_well_being}</p>
              </div>
            )}
            {data?.cb_resilience_adapt && (
              <div className="flex flex-col space-y-2 py-6 font-sans text-text">
                <div className="flex items-center space-x-2">
                  <Icon icon={RESILIENCE_AND_ADAPTATION_SVG} className="h-7 w-7" />
                  <p className="text-xl">Resilience & Adaptation</p>
                </div>
                <p className="text-m leading-6">{data?.cb_resilience_adapt}</p>
              </div>
            )}
          </div>
        </Wrapper>
      </section>
      <section className="bg-gradient-to-r from-midnight via-indigo to-midnight">
        <Wrapper className="flex flex-col items-center space-y-6 py-20">
          <VscQuote className="fill-butternut" size={40} />
          <div className="flex justify-center">
            <p className="max-w-3xl text-center font-sans text-xl font-light leading-9 text-white">
              {data?.callout}
            </p>
          </div>
        </Wrapper>
      </section>
      <section>
        <Wrapper>
          <div className="space-y-4 border-b-[2px] py-14">
            <h4 className="font-serif text-3xl font-medium text-indigo">Partners</h4>
            <div
              className={cn({
                'font-light leading-8 text-text': true,
                'grid grid-cols-2': data?.primary_partners.split(/[,]+/).length > 5,
              })}
            >
              {data?.primary_partners.split(/[,]+/).map((partner) => (
                <p key={partner} className="mr-8">
                  {partner}
                </p>
              ))}
            </div>
          </div>
        </Wrapper>
      </section>

      <section className="py-16">
        <Wrapper className="flex flex-row space-x-20">
          <div className="w-3/4 space-y-6">
            <h4 className="font-serif text-3xl font-medium text-indigo">What’s Next</h4>
            <p className="font-sans text-m font-light leading-7 text-text">{data.whats_next}</p>
          </div>

          {!!(data.public_contact_name || data.public_contact_email) && (
            <div className="w-1/4 space-y-6 pt-16 ">
              <h5 className="font-serif text-2xl font-medium text-indigo">Contact Info</h5>
              <div className="text-m font-light">
                <p>MAIN CONTACT:</p>
                <p>{data.public_contact_name}</p>
                <p>{data.public_contact_email}</p>
              </div>
            </div>
          )}
        </Wrapper>
      </section>

      <section id="contact" className="bg-gradient-to-r from-midnight via-indigo to-midnight">
        <Wrapper>
          <div className="flex flex-col items-center space-y-4 py-16 font-sans text-white">
            <p className="text-2xl">WANT MORE INFORMATION?</p>
            <p className="text-center text-m">
              Reach out and we’ll connect you to the people who will be the most helpful for your
              questions.
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
      <section className="py-16">
        <Wrapper className="space-y-6">
          <h4 className="font-serif text-2xl font-medium text-indigo">Similar Projects</h4>
          <div className="flex justify-start space-x-6 2xl:space-x-10">
            {similarProjects.map((project, idx) => (
              <Card key={idx} data={project} />
            ))}
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default ProjectDetail;
