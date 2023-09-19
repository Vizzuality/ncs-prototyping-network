import { useState } from 'react';

import Select from 'components/ui/select';
import { Project } from 'types/project';

import Card from '../card';

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
    <div className="w-6/12">
      <div className="flex items-center justify-end space-x-6">
        <p className="font-sans text-xs text-text">SORT BY:</p>
        <Select type="sortBy" onValueChange={(v) => setSortedBy(v)} options={SORT_OPTIONS} />
      </div>
      <div className="grid grid-cols-2 gap-3">
        {sortedData.map((project) => (
          <div key={project.id}>
            <Card data={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapView;
