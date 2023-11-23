'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { AnimatePresence, motion } from 'framer-motion';
import { useRecoilValue } from 'recoil';

import { headerStyleAtom } from '@/store';

import NavigationTabs from 'containers/nav-tabs';
import Wrapper from 'containers/wrapper';
import { cn } from 'utils/cn';

const Header: React.FC = () => {
  const pathname = usePathname();
  const headerStyle = useRecoilValue(headerStyleAtom);

  return (
    <div
      className={cn({
        'fixed z-50 w-full': true,
        'border-b bg-white': headerStyle === 'light',
        'top-0 w-full': !pathname.startsWith('/projects'),
        'bg-gradient-to-r from-midnight to-indigo':
          pathname === '/projects' || pathname === '/contact' || headerStyle === 'dark',
      })}
    >
      <Wrapper className="h-18 relative z-50 flex w-full flex-row items-center justify-between self-start">
        <div className="flex items-center space-x-4">
          <Link className="flex cursor-pointer" href="/">
            <h1
              className={cn({
                'font-sans text-2xl uppercase text-white': true,
                'text-indigo': headerStyle === 'light',
              })}
            >
              NCS Prototyping Network
            </h1>
          </Link>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.25, duration: 0.3 }}
              className={cn({
                'h-4 rounded-xl bg-white px-2 font-sans text-xs text-text': true,
                'bg-indigo text-white': headerStyle === 'light',
              })}
            >
              <p>BETA</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <NavigationTabs />
      </Wrapper>
    </div>
  );
};

export default Header;
