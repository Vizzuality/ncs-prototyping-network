import { motion } from 'framer-motion';
import { useRecoilState } from 'recoil';

import { basemapAtom } from 'store';
import { cn } from 'utils/cn';

import { TABS } from './constants';

const MapTabs = (): JSX.Element => {
  const [basemap, setBasemap] = useRecoilState(basemapAtom);

  return (
    <div className="inline-flex h-7 flex-wrap space-x-1 rounded-3xl bg-background p-1">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          className="relative m-0 flex cursor-pointer items-center justify-between"
          onClick={() => setBasemap(tab.id)}
        >
          {tab.id === basemap && (
            <motion.div
              className="absolute left-0 right-0 -top-0.5 h-6 rounded-3xl bg-white"
              layoutId="underline"
            />
          )}
          <div className="z-20 flex items-center space-x-2 px-2.5">
            <p
              className={cn({
                'font-sans text-xs uppercase text-text': true,
                'text-cirrus': tab.id === basemap,
              })}
            >
              {tab.label}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default MapTabs;
