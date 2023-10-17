'use client';
import 'styles/globals.css';

import { usePathname } from 'next/navigation';

import MetaTags from '@/containers/meta-tags';

import Providers from 'app/layout-providers';
import { Toaster } from 'components/ui/toaster';
import Header from 'containers/header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <Providers>
      <html lang="en">
        <body className="font-notes min-h-screen w-screen">
          <MetaTags
            name="NCS Prototyping Network"
            title="NCS Prototyping Network"
            description="The Nature Conservancy is partnering with on-the-ground practitioners to help activate natural climate solutions (NCS). This Prototyping Network is field testing and evaluating high-impact strategies to be scaled around the world."
            url={`${process.env.NEXT_PUBLIC_VERCEL_URL || process.env.NEXT_PUBLIC_URL}${pathname}`}
            type="article"
          />
          <main className="flex min-h-screen flex-col">
            <Toaster />
            <Header />

            {children}
          </main>
        </body>
      </html>
    </Providers>
  );
}
