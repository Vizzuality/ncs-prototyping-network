import { motion } from 'framer-motion';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useRecoilState } from 'recoil';

import { TABS } from 'containers/projects/tabs/constants';
import { projectsViewAtom } from 'store';
import { cn } from 'utils/cn';

const Tabs = (): JSX.Element => {
  const [projectsView, setProjectsView] = useRecoilState(projectsViewAtom);

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
              layoutId="underline-view"
            />
          )}
          <div className="z-20 flex items-center space-x-2 px-[18.5px]">
            {tab.id === TABS[0].id && (
              <FaMapMarkerAlt
                size={16}
                className={cn({
                  'fill-indigo': true,
                  'fill-butternut': tab.id === projectsView,
                })}
              />
            )}
            {tab.id === TABS[1].id && (
              <BsFillGrid3X3GapFill
                size={16}
                className={cn({
                  'fill-indigo': true,
                  'fill-butternut': tab.id === projectsView,
                })}
              />
            )}
            <p
              className={cn({
                'font-sans text-sm text-indigo xl:text-base': true,
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
