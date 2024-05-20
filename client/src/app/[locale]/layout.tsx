import 'styles/globals.css';
import { Metadata } from 'next';

import Head from 'next/head';

import Header from 'containers/header';

import Providers from './layout-providers';

export const metadata: Metadata = {
  viewport: 'width=1024',
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <Providers>
      <html lang={locale}>
        <body className="font-notes min-h-screen w-screen">
          <Head>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className="flex min-h-screen flex-col">
            <Header />

            {children}
          </main>
        </body>
      </html>
    </Providers>
  );
}
