import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import { useRecoilState } from 'recoil';

import { useGetMessages } from '@/types/generated/message';

import { Basemap, basemapAtom } from 'store';
import { cn } from 'utils/cn';

const MapTabs = (): JSX.Element => {
  const locale = useLocale();
  const { data: dataMessages, isFetched: messagesIsFetched } = useGetMessages({
    populate: '*',
    locale,
  });

  const messages = messagesIsFetched && dataMessages.data.data[0]?.attributes;

  const [basemap, setBasemap] = useRecoilState(basemapAtom);

  const TABS = [
    { id: 'outdoors', label: messages?.map },
    { id: 'satellite', label: messages?.satellite },
  ];

  return (
    <div className="inline-flex h-7 flex-wrap space-x-1 rounded-3xl bg-background p-1">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          className="relative m-0 flex cursor-pointer items-center justify-between"
          onClick={() => setBasemap(tab.id as Basemap)}
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
