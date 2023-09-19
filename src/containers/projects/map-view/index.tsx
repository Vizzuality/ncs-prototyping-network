import { useState } from 'react';

import { Project } from '@/types/project';

import Card from '../card';

type Direction = 'asc' | 'desc';

const MapView = ({ data }: { data: Project[] }): JSX.Element => {
  const [sortedBy, setSortedBy] = useState<string>('country');

  const [direction, setDirection] = useState<Direction>('asc');

  const getSortedData = (arr: Project[], sortedBy: string, direction: Direction) => {
    if (!sortedBy) return arr;

    const sortedArr = [...arr].sort((a, b) => (a[sortedBy] < b[sortedBy] ? -1 : 1));

    if (direction === 'desc') return sortedArr.reverse();

    return sortedArr;
  };

  const sortedData = getSortedData(data, sortedBy, direction);

  return (
    <div>
      <div className="grid w-6/12 grid-cols-2 gap-3">
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
