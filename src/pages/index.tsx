import { type NextPage } from 'next';

import Data from 'containers/home/data';
import Hero from 'containers/home/hero';
import HomeMap from 'containers/home/map';
import Objectives from 'containers/home/objectives';
import Projects from 'containers/home/projects';

import Layout from 'layouts';

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <HomeMap />
      <Data />
      <Projects />
      <Objectives />
    </Layout>
  );
};

export default Home;
