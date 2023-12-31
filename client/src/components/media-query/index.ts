import { createMedia } from '@artsy/fresnel';

import { screens } from 'styles/styles.config';
const typedScreens = screens as Record<string, string>;

const ExampleAppMedia = createMedia<
  { breakpoints: Record<string, number> },
  '0' | keyof typeof screens,
  never
>({
  breakpoints: Object.keys(screens).reduce(
    (res, key) => ({
      ...res,
      // We extract the pixel value of the breakpoint (e.g. `'1024px'` => `1024`)
      [key]: parseInt(typedScreens[key].match(/(\d+)px/)?.[1] ?? '0', 10),
    }),
    {
      // We need a breakpoint starting at 0 to target screens smaller than sm
      '0': 0,
    }
  ),
});

// Make styles for injection into the header of the page
export const mediaStyles = ExampleAppMedia.createMediaStyle();

export const { Media, MediaContextProvider } = ExampleAppMedia;
