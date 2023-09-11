import Link from 'next/link';
import { useRouter } from 'next/router';

import { type NextPage } from 'next';
import { HiArrowNarrowLeft } from 'react-icons/hi';

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
        <Link href="/projects" className="flex items-center space-x-2">
          <HiArrowNarrowLeft className="fill-butternut" size={40} />
          <p className="text-butternut">Back to projects</p>
        </Link>
        <div>This is the page of {projectData.country} project</div>
      </Wrapper>
    </Layout>
  );
};

export default Project;
