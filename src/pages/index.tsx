import { type NextPage } from 'next';

import Data from 'containers/home/data';
import Facts from 'containers/home/facts';
import Fields from 'containers/home/fields';
import Hero from 'containers/home/hero';
import Lessons from 'containers/home/lessons';
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
      <Facts />
      <Objectives />
      <Lessons />
      <Fields />
    </Layout>
  );
};

export default Home;
