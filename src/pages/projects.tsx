import { type NextPage } from 'next';

import Tabs from 'containers/projects/tabs';
import Wrapper from 'containers/wrapper';

import Layout from 'layouts';

const Projects: NextPage = () => {
  return (
    <Layout>
      <Wrapper>
        <Tabs />
      </Wrapper>
    </Layout>
  );
};

export default Projects;
