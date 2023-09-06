import { type NextPage } from 'next';

// import Hero from 'containers/home/hero';

import Data from 'containers/home/data';
import Objectives from 'containers/home/objectives';
import Projects from 'containers/home/projects';

import Layout from 'layouts';

const Home: NextPage = () => {
  return (
    <Layout>
      <Data />
      <Projects />
      <Objectives />
    </Layout>
  );
};

export default Home;
