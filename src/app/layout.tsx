'use client';
import 'styles/globals.css';
import Head from 'next/head';

import { motion } from 'framer-motion';

import Footer from 'containers/footer';
import Header from 'containers/header';

import Providers from 'app/layout-providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <html lang="en">
        <body className="font-notes min-h-screen w-screen">
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
        </body>
      </html>
    </Providers>
  );
}
