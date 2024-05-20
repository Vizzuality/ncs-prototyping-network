import React from 'react';

import { usePathname } from 'next/navigation';

import { useLocale } from 'next-intl';
import { useRecoilValue } from 'recoil';

import { headerStyleAtom } from '@/store';

import { useGetMessages } from '@/types/generated/message';

import { Link } from '@/navigation';
import { cn } from 'utils/cn';

const NavigationTabs = ({ section }: { section?: string }): JSX.Element => {
  const locale = useLocale();

  const pathname = usePathname();
  const headerStyle = useRecoilValue(headerStyleAtom);

  const { data: dataMessages, isFetched: messagesIsFetched } = useGetMessages({ locale });

  const messages = messagesIsFetched && dataMessages.data.data[0]?.attributes;

  const NAV_TABS_HEADER = [
    {
      label: messages?.nav_1 || 'Home',
      href: '/',
    },
    {
      label: messages?.nav_2 || 'Projects',
      href: '/projects',
    },
  ];

  const NAV_TABS_FOOTER = [
    {
      label: messages?.nav_1 || 'Home',
      href: '/',
    },
    {
      label: messages?.nav_2 || 'Projects',
      href: '/projects',
    },
    {
      label: messages?.nav_3 || 'Contact',
      href: '/contact',
    },
  ];

  const NAV_TABS = section === 'footer' ? NAV_TABS_FOOTER : NAV_TABS_HEADER;

  return (
    <nav
      className={cn({
        'h-6 pt-5': section === 'footer',
      })}
    >
      <ul className="relative m-0 flex w-full items-center p-0">
        {messagesIsFetched &&
          NAV_TABS.map(({ label, href }, index) => (
            <Link
              key={index}
              className={cn({
                'flex cursor-pointer items-center px-4 first:pl-0 hover:opacity-80': true,
                'h-5 border-r-[3px] border-white last:border-none': section === 'footer',
              })}
              href={href}
              locale={locale}
            >
              <p
                className={cn({
                  'py-5 font-sans text-xl uppercase text-white': true,
                  'text-indigo': headerStyle === 'light' && section !== 'footer',
                  'font-bold': pathname === href && section !== 'footer',
                  'py-0 text-base font-normal': section === 'footer',
                })}
              >
                {label}
              </p>
            </Link>
          ))}
      </ul>
    </nav>
  );
};

export default NavigationTabs;
