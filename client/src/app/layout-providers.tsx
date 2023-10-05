'use client';

import { PropsWithChildren, useState } from 'react';

import { MapProvider } from 'react-map-gl';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';

import { MediaContextProvider } from 'components/media-query';
import { LoraFont, UbuntuFont } from 'styles/fonts';
import 'styles/mapbox.css';

export default function Providers({ children }: PropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient());

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
          <MediaContextProvider disableDynamicMediaQueries>
            <MapProvider>{children}</MapProvider>
          </MediaContextProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}
