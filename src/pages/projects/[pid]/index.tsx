import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { type NextPage } from 'next';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';

import Wrapper from 'containers/wrapper';

import { PROJECTS } from '@/containers/projects/constants';
import Layout from 'layouts';
import { type PageQuery } from 'types/query';

const Project: NextPage = () => {
  const { query } = useRouter();
  const { pid } = query as PageQuery;

  const projectData = PROJECTS.find((p) => `${p.id}` === pid);

  return (
    <Layout>
      <Wrapper>
        <div className="flex w-2/3 flex-col items-start pt-6 pb-16">
          <Link href="/projects" className="flex items-center space-x-2 pb-8">
            <HiArrowNarrowLeft className="fill-butternut" size={30} />
            <p className="font-sans text-xl font-medium text-butternut">Back to projects</p>
          </Link>
          <div className="flex flex-col items-center">
            <h2 className="mb-16 max-w-3xl font-serif text-[35px] font-medium leading-9 text-indigo">
              Restoring Australia’s Mangroves: Building a Model of Blue Carbon Conservation and
              Sustainable Financing 2021–2024
            </h2>
            <div className="flex space-x-20 font-sans">
              <div className="flex flex-col items-center">
                <p className="pb-2 text-4xl font-bold text-spring">{projectData?.mitigation}</p>
                <div className="flex flex-col items-center text-[17px] font-medium leading-6 text-text">
                  <p>Tons of Carbon</p>
                  <p>Mitigation Potential</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <p className="pb-2 text-4xl font-bold text-spring">{projectData?.area}</p>
                <p className="text-[17px] font-medium text-text">Hectares Impacted</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="pb-2 text-4xl font-bold text-spring">{projectData?.people}</p>
                <p className="text-[17px] font-medium text-text">People Supported</p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      <Wrapper>
        <div className="flex justify-between border-t py-4 text-text ">
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
      <section id="goals" className="flex">
        <div className="flex w-1/2 justify-end bg-indigo">
          <div className="flex flex-col space-y-3 p-20 text-white">
            <h4 className="font-serif text-4xl font-medium">Goals</h4>
            <p className="max-w-xl font-sans text-xl leading-9">
              This project will demonstrate wetland restoration on up to 2,000 hectares of coastal
              wetlands in the state of South Australia and develop a model of sustainable financing
              and insurance to protect blue carbon ecosystems.
            </p>
          </div>
        </div>
        <Image
          src="/images/home/lessons/logistics.png"
          alt="Goals"
          height={300}
          width={600}
          style={{ objectFit: 'cover' }}
          className="w-1/2"
        />
      </section>
      <section id="why" className="bg-gradient-to-r from-midnight via-indigo to-midnight">
        <Wrapper>
          <div className="flex flex-col items-center space-y-4 py-16 text-white">
            <h4 className="pb-2 font-serif text-3xl font-medium">Why This, Why Now</h4>
            <p className="max-w-3xl text-center font-sans text-xl leading-9">
              Coastal wetlands (saltmarsh, mangrove and seagrass habitats) and their ecosystem
              services are being lost at alarming rates globally, and those in Australia are in a
              poor and deteriorating state. orem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut.
            </p>
            <p className="font-serif text-xs uppercase">
              (AUSTRALIAN STATE OF THE ENVIRONMENT, 2021)
            </p>
          </div>
        </Wrapper>
      </section>
      <section id="lessons">
        <div className="bg-gradient-to-r from-midnight via-indigo to-midnight py-6">
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
                  Field Logistics
                </td>
                <td className="w-3/4 px-20 font-sans text-[17px] leading-6 text-text">
                  COVID-19 hindered fieldwork and community and partner meetings which are critical
                  for planning, implementation, and ensuring community support. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim amen.
                </td>
              </tr>
              <tr className="border-b-[2px] [&>*]:py-10">
                <td className="w-1/4 pr-10 font-serif text-2xl font-medium text-indigo">
                  Community Engagement and Equity
                </td>
                <td className="w-3/4 px-20 font-sans text-[17px] leading-6 text-text">
                  Building relationship trust with communities is important to overcome perceptions
                  of distrust and/or suspicion towards foreign organizations. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </td>
              </tr>
              <tr className="[&>*]:py-10">
                <td className="w-1/4 font-serif text-2xl font-medium text-indigo">Institutional</td>
                <td className="w-3/4 px-20 font-sans text-[17px] leading-6 text-text">
                  Political instability can lead to project delays, through difficulties in
                  scheduling meetings and community engagement activities, safety concerns and field
                  site inaccessibility. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </td>
              </tr>
            </tbody>
          </table>
        </Wrapper>
      </section>
      <section id="science" className="flex flex-col">
        <div className="bg-gradient-to-r from-midnight via-indigo to-midnight py-6">
          <Wrapper>
            <div>
              <h4 className="font-serif text-3xl font-medium text-white">Science</h4>
            </div>
          </Wrapper>
        </div>
        <Wrapper>
          <div className="flex w-3/4 flex-col space-y-6 py-16">
            <p className="font-serif text-2xl font-medium text-indigo">Research Summary</p>
            <p className="font-sans text-[17px] leading-6 text-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>
        </Wrapper>
      </section>
      <section id="co-benefits" className="flex"></section>
      <section id="contact" className="bg-gradient-to-r from-midnight via-indigo to-midnight">
        <Wrapper>
          <div className="flex flex-col items-center space-y-4 py-16 font-sans text-white">
            <p className="text-2xl">WANT MORE INFORMATION?</p>
            <p className="text-center text-[17px]">
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
    </Layout>
  );
};

export default Project;
