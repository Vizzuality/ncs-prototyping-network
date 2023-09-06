import { PropsWithChildren } from 'react';

import Head from 'next/head';

import { motion } from 'framer-motion';

import Header from 'containers/header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <>
      <Head>
        <title>TNC Prototype Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full flex-col items-center">
        <Header />

        <motion.div
          className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {children}
        </motion.div>
      </main>
    </>
  );
};

export default Layout;
