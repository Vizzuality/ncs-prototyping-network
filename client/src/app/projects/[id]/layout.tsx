'use client';
import 'styles/globals.css';
import Head from 'next/head';

import Providers from 'app/layout-providers';
import { Toaster } from 'components/ui/toaster';
import Header from 'containers/header';
import DetailFooter from 'containers/projects/detail/footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <html lang="en">
        <body className="font-notes min-h-screen w-screen">
          <Head>
            <title>TNC Prototype Dashboard</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className="flex min-h-screen flex-col">
            <Toaster />
            <Header />

            {children}
            <DetailFooter />
          </main>
        </body>
      </html>
    </Providers>
  );
}
