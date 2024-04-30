'use client';
import { useEffect, useRef } from 'react';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useSetRecoilState } from 'recoil';

import { headerStyleAtom } from '@/store';

import Footer from 'containers/footer';
import Data from 'containers/home/data';
import Facts from 'containers/home/facts';
import Hero from 'containers/home/hero';
import Lessons from 'containers/home/lessons';
import HomeMap from 'containers/home/map';
import Objectives from 'containers/home/objectives';
import Pathways from 'containers/home/pathways';
import Projects from 'containers/home/projects';

const HomePage = (): JSX.Element => {
  const ref = useRef();
  const inView = useInView(ref, {
    once: false,
    amount: 0.25,
    margin: '-100px 0px',
  });
  const setHeaderStyle = useSetRecoilState(headerStyleAtom);

  useEffect(() => {
    if (inView) {
      setHeaderStyle('default');
    }
    if (!inView) setHeaderStyle('light');
  }, [inView, setHeaderStyle]);

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.25, duration: 0.4 }}
        >
          <div ref={ref}>
            <Hero />
          </div>
          <HomeMap />
          <Data />
          <Projects />
          <Facts />
          <Objectives />
          <Lessons />
          <Pathways />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default HomePage;
