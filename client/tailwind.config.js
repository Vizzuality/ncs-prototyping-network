/** @type {import('tailwindcss').Config} */

/* eslint-disable @typescript-eslint/no-var-requires */
const forms = require('@tailwindcss/forms');
const lineClamp = require('@tailwindcss/line-clamp');
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: ['class'],
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/containers/**/*.@(tsx|ts)',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-ubuntu)', ...fontFamily.sans],
        serif: ['var(--font-lora)', ...fontFamily.serif],
      },
      fontSize: {
        xxs: '0.625rem', // 10px
        '2xs': '0.813rem', // 13px
        m: '1.063rem', // 17px
      },
      colors: {
        butternut: '#e29717',
        spring: '#a0c04d',
        indigo: '#23487a',
        midnight: '#1C3038',
        text: '#454545',
        accents: '#d8d8d8',
        background: '#f2f2f2',
        rust: '#c85c19',
        cirrus: '#3a89b4',
        iris: '#46166b',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        foreground: 'hsl(var(--foreground))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            maxWidth: '100%',
          },
        },
        default: {
          css: {
            '--tw-prose-links': theme('colors.blue[600]'),
          },
        },
        primary: {
          css: {
            '--tw-prose-links': theme('colors.blue[600]'),
            '--tw-prose-body': theme('colors.indigo'),
            '--tw-prose-bold': theme('colors.indigo'),
          },
        },
        secondary: {
          css: {
            '--tw-prose-links': theme('colors.blue[600]'),
            '--tw-prose-body': theme('colors.text'),
            '--tw-prose-bold': theme('colors.text'),
          },
        },
        tertiary: {
          css: {
            '--tw-prose-links': theme('colors.blue[600]'),
            '--tw-prose-body': theme('colors.white'),
            '--tw-prose-bold': theme('colors.white'),
          },
        },
      }),
    },
  },
  plugins: [require('tailwindcss-animate'), forms, lineClamp, require('@tailwindcss/typography')],
};
