'use client';

import Markdown from 'react-markdown';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useRecoilValue } from 'recoil';

import { headerStyleAtom } from '@/store';

import { useGetMessages } from '@/types/generated/message';

import { useSyncQueryParams } from '@/hooks/query';
import { useSyncLocale } from '@/hooks/query/sync-query';

import LanguageSwitcher from '@/containers/language-switcher';

import NavigationTabs from 'containers/nav-tabs';
import Wrapper from 'containers/wrapper';
import { cn } from 'utils/cn';

const Header: React.FC = () => {
  const pathname = usePathname();

  const [locale] = useSyncLocale();
  const queryParams = useSyncQueryParams();

  const { data: dataMessages, isFetched: messagesIsFetched } = useGetMessages({ locale });

  const messages = messagesIsFetched && dataMessages.data.data[0]?.attributes;

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
            <Markdown
              className={cn({
                'font-sans text-2xl uppercase text-white': true,
                'text-indigo': headerStyle === 'light',
              })}
            >
              {messages.main_title}
            </Markdown>
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
        <div className="relative flex items-center pr-20">
          <NavigationTabs />
          <div className="absolute top-4 right-0">
            <LanguageSwitcher />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
