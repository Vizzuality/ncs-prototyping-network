import { motion } from 'framer-motion';
import { useSetRecoilState, useRecoilValue } from 'recoil';

import Icon from 'components/icon/component';
import { projectsViewAtom } from 'store';
import { cn } from 'utils/cn';

import MARKER_SVG from 'svgs/ui/marker.svg?sprite';
import METRICS_SVG from 'svgs/ui/metrics.svg?sprite';

import { TABS } from './constants';

const Tabs = (): JSX.Element => {
  const projectsView = useRecoilValue(projectsViewAtom);
  const setProjectsView = useSetRecoilState(projectsViewAtom);

  return (
    <div className="mt-5 inline-flex h-10 flex-wrap space-x-1 rounded-3xl border-2 bg-background p-1">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          className="relative m-0 flex cursor-pointer items-center justify-between"
          onClick={() => setProjectsView(tab.id)}
        >
          {tab.id === projectsView && (
            <motion.div
              className="absolute left-0 right-0 -top-0.5 h-8 rounded-3xl bg-white"
              layoutId="underline"
            />
          )}
          <div className="z-20 flex items-center space-x-2 px-[18.5px]">
            {tab.id === TABS[0].id && (
              <Icon
                icon={MARKER_SVG}
                className={cn({
                  'h-4 w-4 fill-indigo': true,
                  '!fill-butternut': tab.id === projectsView,
                })}
              />
            )}
            {tab.id === TABS[1].id && (
              <Icon
                icon={METRICS_SVG}
                className={cn({
                  'h-4 w-4 fill-indigo': true,
                  '!fill-butternut': tab.id === projectsView,
                })}
              />
            )}
            <p
              className={cn({
                'font-sans text-base text-black': true,
                'text-butternut': tab.id === projectsView,
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

export default Tabs;
