import 'styles/globals.css';
import { Metadata } from 'next';

import Head from 'next/head';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import Providers from '@/app/[locale]/layout-providers';

import Header from 'containers/header';

export const metadata: Metadata = {
  viewport: 'width=1024',
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <Providers>
      <html lang={locale}>
        <body className="font-notes min-h-screen w-screen">
          <Head>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <NextIntlClientProvider messages={messages}>
            <main className="flex min-h-screen flex-col">
              <Header />

              {children}
            </main>
          </NextIntlClientProvider>
        </body>
      </html>
    </Providers>
  );
}
