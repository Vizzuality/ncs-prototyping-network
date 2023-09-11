import Link from 'next/link';
import { useRouter } from 'next/router';

import { type NextPage } from 'next';

import Wrapper from 'containers/wrapper';

import Layout from 'layouts';
import { type PageQuery } from 'types/query';

const Project: NextPage = () => {
  const { query } = useRouter();
  const { pid } = query as PageQuery;

  return (
    <Layout>
      <Wrapper>
        <Link href="/projects">
          <p className="text-blue-500">Back to projects</p>
          <div>This is the page of project {pid}</div>
        </Link>
      </Wrapper>
    </Layout>
  );
};

export default Project;
