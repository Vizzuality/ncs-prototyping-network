import { PropsWithChildren } from 'react';

import Head from 'next/head';

import { motion } from 'framer-motion';

import Footer from 'containers/footer';
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
      <main className="flex min-h-screen flex-col">
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
        <Footer />
      </main>
    </>
  );
};

export default Layout;
