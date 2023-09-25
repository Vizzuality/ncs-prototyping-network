import { useCallback, useEffect, useState } from 'react';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { GAPage } from 'lib/analytics/ga';

import { Lora, Ubuntu } from '@next/font/google';
import { QueryClient, QueryClientProvider, Hydrate } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';

import { MediaContextProvider } from 'components/media-query';

import 'styles/globals.css';

const LoraFont = Lora({
  weight: ['400', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'block',
});

const UbuntuFont = Ubuntu({
  weight: ['300', '400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-ubuntu',
  display: 'block',
});

type PageProps = {
  dehydratedState: unknown;
};

const MyApp = ({ Component, pageProps }: AppProps<PageProps>) => {
  const router = useRouter();

  // Never ever instantiate the client outside a component, hook or callback as it can leak data
  // between users
  const [queryClient] = useState(() => new QueryClient());

  const handleRouteChangeCompleted = useCallback((url: string) => {
    GAPage(url);
  }, []);

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChangeCompleted);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeCompleted);
    };
  }, [router.events, handleRouteChangeCompleted]);

  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-lora: ${LoraFont.style.fontFamily};
            --font-ubuntu: ${UbuntuFont.style.fontFamily};
          }
        `}
      </style>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <MediaContextProvider disableDynamicMediaQueries>
              <Component {...pageProps} />
            </MediaContextProvider>
          </Hydrate>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
};

export default MyApp;
