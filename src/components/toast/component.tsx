import { useCallback, useEffect } from 'react';

import cx from 'classnames';
import { motion } from 'framer-motion';

import Icon from 'components/icon';

import CLOSE_SVG from 'svgs/ui/close.svg?sprite';

import { THEME } from './constants';
import type { ToastProps } from './types';

export const Toast: React.FC<ToastProps> = ({
  id,
  content,
  level = 'info',
  onDismiss,
}: ToastProps) => {
  const ICON = THEME[level || 'info'].icon;

  const handleDismiss = useCallback(() => {
    if (onDismiss) {
      onDismiss(id);
    }
  }, [id, onDismiss]);

  useEffect(() => {
    setTimeout(() => {
      handleDismiss();
    }, 5000);
  }, [handleDismiss]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 25 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{
        ease: 'anticipate',
        duration: 0.5,
      }}
    >
      <div
        className={cx({
          'flex w-full rounded-xl px-4 py-3 font-sans text-sm text-white shadow-md transition sm:text-base md:text-lg':
            true,
          [THEME[level]?.bg]: true,
        })}
      >
        <div className="flex grow items-center space-x-2.5">
          <Icon icon={ICON} className="h-7 w-7" />
          <div className="grow leading-10">{content}</div>
        </div>

        <button
          aria-label="close"
          type="button"
          className="ml-5 flex h-10 w-10 flex-shrink-0 items-center justify-center"
          onClick={handleDismiss}
        >
          <Icon icon={CLOSE_SVG} className="h-3 w-3" />
        </button>
      </div>
    </motion.div>
  );
};

export default Toast;
