import SUCCESS_SVG from 'svgs/ui/checkmark.svg?sprite';
import ERROR_SVG from 'svgs/ui/checkmark.svg?sprite';
import INFO_SVG from 'svgs/ui/checkmark.svg?sprite';
import WARNING_SVG from 'svgs/ui/checkmark.svg?sprite';

import type { ToastTheme } from './types';

export const THEME: ToastTheme = {
  info: {
    icon: INFO_SVG,
    bg: 'from-blue-400 to-blue-700',
  },
  success: {
    icon: SUCCESS_SVG,
    bg: 'bg-brand-700',
  },
  warning: {
    icon: WARNING_SVG,
    bg: 'from-grassland-200 to-grassland-400',
  },
  error: {
    icon: ERROR_SVG,
    bg: 'bg-red-600',
  },
};
