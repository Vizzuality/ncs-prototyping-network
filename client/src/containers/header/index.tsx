'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useRecoilValue } from 'recoil';

import { headerStyleAtom } from '@/store';

import { useSyncQueryParams } from '@/hooks/query';

import LanguageSwitcher from '@/containers/language-switcher';

import NavigationTabs from 'containers/nav-tabs';
import Wrapper from 'containers/wrapper';
import { cn } from 'utils/cn';

const Header: React.FC = () => {
  const pathname = usePathname();

  const queryParams = useSyncQueryParams();

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
          <Link className="flex cursor-pointer" href={`/${queryParams}`}>
            <h1
              className={cn({
                'font-sans text-2xl uppercase text-white': true,
                'text-indigo': headerStyle === 'light',
              })}
            >
              NCS Prototyping Network
            </h1>
          </Link>

          <div
            className={cn({
              'h-4 rounded-xl bg-white px-2 font-sans text-xs text-text': true,
              'bg-indigo text-white': headerStyle === 'light',
            })}
          >
            <p>BETA</p>
          </div>
        </div>
        <div className="flex items-center space-x-20">
          <LanguageSwitcher />
          <NavigationTabs />
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
