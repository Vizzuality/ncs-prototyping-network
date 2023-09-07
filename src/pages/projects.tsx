import { type NextPage } from 'next';

import Wrapper from 'containers/wrapper';

import Layout from 'layouts';

const Projects: NextPage = () => {
  return (
    <Layout>
      <Wrapper>
        <h2 className="h-96 text-3xl">Projects Page</h2>
      </Wrapper>
    </Layout>
  );
};

export default Projects;
