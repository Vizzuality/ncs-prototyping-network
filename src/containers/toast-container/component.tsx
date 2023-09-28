import React from 'react';

import { PLACEMENTS } from 'hooks/toast/constants';
import { ToastContainerProps } from 'hooks/toast/types';

export const ToastContainer = ({ placement, ...props }: ToastContainerProps) => (
  <div
    className="fixed z-[60] max-h-full max-w-[320px] sm:max-w-[420px]"
    style={{
      ...PLACEMENTS[placement],
    }}
    {...props}
  />
);

export default ToastContainer;
