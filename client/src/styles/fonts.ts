import { Lora, Ubuntu } from '@next/font/google';

export const LoraFont = Lora({
  weight: ['400', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'block',
});

export const UbuntuFont = Ubuntu({
  weight: ['300', '400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-ubuntu',
  display: 'block',
});
