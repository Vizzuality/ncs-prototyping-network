'use client';

import { useRef, useState } from 'react';

import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import { useRecoilValue } from 'recoil';
import { useOnClickOutside } from 'usehooks-ts';

import { cn } from '@/lib/utils';

import { headerStyleAtom } from '@/store';

import { type Locale } from '@/hooks/query/query-parsers';
import { useSyncLocale } from '@/hooks/query/sync-query';

import { LOCALE_OPTIONS } from './constants';

const LanguageSwitcher: React.FC = () => {
  const [locale, setLocale] = useSyncLocale();
  const headerStyle = useRecoilValue(headerStyleAtom);

  const [openSwitcher, setOpenSwitcher] = useState(false);
  const handleSwitcher = () => setOpenSwitcher(!openSwitcher);

  const ref = useRef(null);

  const options = LOCALE_OPTIONS.filter((option) => option.value !== locale);

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
        <p>{locale}</p>
        {!openSwitcher && <MdArrowDropDown className="h-6 w-6" />}
        {openSwitcher && <MdArrowDropUp className="h-6 w-6" />}
      </button>

      {openSwitcher && (
        <div>
          {options.map(({ value }) => (
            <button
              key={value}
              className={cn({
                'flex h-9 w-full flex-col justify-center px-2 uppercase last:rounded-b-lg': true,
                'hover:bg-gray-100': headerStyle === 'light' || headerStyle === 'dark',
              })}
              onClick={() => setLocale(value as Locale)}
            >
              {value}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
