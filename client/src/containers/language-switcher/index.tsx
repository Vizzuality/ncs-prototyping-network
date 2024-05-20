'use client';

import { useRef, useState } from 'react';

import { useLocale } from 'next-intl';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import { useRecoilValue } from 'recoil';
import { useOnClickOutside } from 'usehooks-ts';

import { cn } from '@/lib/utils';

import { headerStyleAtom } from '@/store';

import { Link, usePathname, locales } from '@/navigation';

const LanguageSwitcher: React.FC = () => {
  const pathname = usePathname();
  const selectedLocale = useLocale();
  const headerStyle = useRecoilValue(headerStyleAtom);

  const [openSwitcher, setOpenSwitcher] = useState(false);
  const handleSwitcher = () => setOpenSwitcher(!openSwitcher);

  const ref = useRef(null);

  const handleClickOutside = () => {
    setOpenSwitcher(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <div
      ref={ref}
      className={cn({
        'w-16 rounded-lg border bg-transparent text-white': true,
        'bg-white text-indigo': headerStyle === 'light' || (headerStyle === 'dark' && openSwitcher),
      })}
    >
      <button
        className="flex h-9 w-full items-center justify-between space-x-2 px-2 uppercase"
        onClick={handleSwitcher}
      >
        <p>{selectedLocale}</p>
        {!openSwitcher && <MdArrowDropDown className="h-6 w-6" />}
        {openSwitcher && <MdArrowDropUp className="h-6 w-6" />}
      </button>

      {openSwitcher && (
        <div>
          {locales
            .filter((l) => l !== selectedLocale)
            .map((locale) => (
              <li
                key={locale}
                className={cn({
                  'flex h-9 w-full flex-col justify-center px-2 uppercase last:rounded-b-lg': true,
                  'hover:bg-gray-100': headerStyle === 'light' || headerStyle === 'dark',
                })}
              >
                <Link href={pathname} locale={locale}>
                  {locale}
                </Link>
              </li>
            ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
