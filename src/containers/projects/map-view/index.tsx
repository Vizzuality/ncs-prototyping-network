import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import Card from 'containers/projects/card';

import Select from 'components/ui/select';
import { Project } from 'types/project';

import { SORT_OPTIONS } from './constants';

const MapView = ({ data }: { data: Project[] }): JSX.Element => {
  const [sortedBy, setSortedBy] = useState<string>('country');

  const getSortedData = (arr: Project[], sortedBy: string) => {
    if (!sortedBy) return arr;

    const sortedArr = [...arr].sort((a, b) => (a[sortedBy] < b[sortedBy] ? -1 : 1));

    return sortedArr;
  };

  const sortedData = getSortedData(data, sortedBy);

  return (
    <AnimatePresence>
      <motion.div
        className="z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.25, duration: 0.3 }}
      >
        {!sortedData.length && (
          <div className="flex h-64 w-full items-center justify-center">
            <p className="font-serif text-lg font-semibold text-indigo">No projects found</p>
          </div>
        )}
        {!!sortedData.length && (
          <div className="w-6/12">
            <div className="flex items-center justify-end space-x-6">
              <p className="font-sans text-xs text-text">SORT BY:</p>
              <div className="mb-1">
                <Select
                  theme="secondary"
                  type="Country"
                  onValueChange={(v) => setSortedBy(v)}
                  options={SORT_OPTIONS}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {sortedData.map((project) => (
                <div key={project.id}>
                  <Card data={project} />
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default MapView;
