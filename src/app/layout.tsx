'use client';
import 'styles/globals.css';
import Head from 'next/head';

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

            {children}

            <Footer />
          </main>
        </body>
      </html>
    </Providers>
  );
}
