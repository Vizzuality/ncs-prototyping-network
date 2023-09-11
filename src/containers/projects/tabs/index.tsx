import { useState } from 'react';

import { motion } from 'framer-motion';
import { HiOutlineTable } from 'react-icons/hi';
import { HiMapPin } from 'react-icons/hi2';

import { cn } from '@/utils/cn';

import { TABS } from './constants';

const Tabs = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  return (
    <div>
      <div className="mt-20 inline-flex h-10 flex-wrap space-x-1 rounded-3xl border-2 bg-background p-1">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className="relative m-0 flex cursor-pointer items-center justify-between"
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.id === activeTab && (
              <motion.div
                className="absolute left-0 right-0 -top-0.5 h-8 rounded-3xl bg-white"
                layoutId="underline"
              />
            )}
            <div className="z-20 flex items-center space-x-2 px-[18.5px]">
              {tab.id === TABS[0].id && (
                <HiMapPin
                  className={cn({
                    'fill-black': true,
                    'fill-butternut': tab.id === activeTab,
                  })}
                  size={20}
                />
              )}
              {tab.id === TABS[1].id && (
                <HiOutlineTable
                  className={cn({
                    'stroke-black': true,
                    'stroke-butternut': tab.id === activeTab,
                  })}
                  size={20}
                />
              )}
              <p
                className={cn({
                  ' font-sans text-base text-black': true,
                  'text-butternut': tab.id === activeTab,
                })}
              >
                {tab.label}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
