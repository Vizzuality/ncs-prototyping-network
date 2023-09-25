'use client';
import { type NextPage } from 'next';

import Data from 'containers/home/data';
import Facts from 'containers/home/facts';
import Hero from 'containers/home/hero';
import Lessons from 'containers/home/lessons';
import HomeMap from 'containers/home/map';
import Objectives from 'containers/home/objectives';
import Pathways from 'containers/home/pathways';
import Projects from 'containers/home/projects';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <HomeMap />
      <Data />
      <Projects />
      <Facts />
      <Objectives />
      <Lessons />
      <Pathways />
    </>
  );
};

export default Home;
