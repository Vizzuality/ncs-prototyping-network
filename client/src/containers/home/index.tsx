'use client';
import { useEffect, useRef } from 'react';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useLocale } from 'next-intl';
import { useSetRecoilState } from 'recoil';

import { headerStyleAtom } from '@/store';

import { useGetMessages } from '@/types/generated/message';

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

  const locale = useLocale();
  const { data: dataMessages, isFetched } = useGetMessages({
    locale,
  });

  useEffect(() => {
    if (inView) {
      setHeaderStyle('default');
    }
    if (!inView) setHeaderStyle('light');
  }, [inView, setHeaderStyle]);

  return (
    <>
      {isFetched && dataMessages?.data.data.length === 0 && (
        <div className="flex h-screen w-screen items-center justify-center">
          <p className="font-serif text-lg font-semibold text-indigo">
            No content translate for this language
          </p>
        </div>
      )}
      {isFetched && !!dataMessages?.data.data.length && (
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
      )}
    </>
  );
};

export default HomePage;
