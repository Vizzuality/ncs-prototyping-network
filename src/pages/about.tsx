import { type NextPage } from 'next';

import Wrapper from 'containers/wrapper';

import Layout from 'layouts';

const About: NextPage = () => {
  return (
    <Layout>
      <Wrapper>
        <h2 className="text-3xl">About Page</h2>
      </Wrapper>
    </Layout>
  );
};

export default About;
