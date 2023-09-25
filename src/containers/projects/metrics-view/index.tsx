import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

import { COLUMNS, CO_BENEFITS_ICONS } from 'containers/projects/constants';

import Icon from 'components/icon';
import { PROJECTS } from 'data/projects';
import { Project } from 'types/project';
import { cn } from 'utils/cn';

type Direction = 'asc' | 'desc';

const MetricsView = ({ data }: { data: Project[] }): JSX.Element => {
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
    <>
      {PROJECTS.length > 0 && (
        <table className="text-xs">
          <thead className="h-12">
            <tr className="border-b border-indigo text-left [&>*]:px-4 [&>*]:py-2">
              {COLUMNS.map((column) => (
                <th
                  key={column.id}
                  className="cursor-pointer"
                  onClick={() => {
                    if (column.sorting) {
                      setSortedBy(column.id);
                      setDirection(direction === 'asc' ? 'desc' : 'asc');
                    }
                  }}
                >
                  <div
                    className={cn({
                      'mb-2 flex items-end font-sans text-[17px] font-normal leading-6 text-text':
                        true,
                      'text-indigo': column.sorting,
                    })}
                  >
                    <p>{column.label}</p>

                    {column.sorting && (
                      <span>
                        {sortedBy === column.id && direction === 'asc' && (
                          <HiChevronUp className="fill-butternut" size={25} />
                        )}
                        {sortedBy === column.id && direction === 'desc' && (
                          <HiChevronDown className="fill-butternut" size={25} />
                        )}
                        {sortedBy !== column.id && (
                          <HiChevronUp className="fill-butternut" size={25} />
                        )}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="[&>*]:h-10">
            {sortedData.map((project) => {
              return (
                <tr
                  key={project.id}
                  className="text-2xs text-text [&>*]:border-b-[2px] [&>*]:px-4 [&>*]:py-4"
                >
                  <td className="w-3/12 !pl-0">
                    <Link href={`/projects/${project.id}`} className="group flex space-x-3">
                      <Image
                        alt={project.photo_2_caption}
                        // !TODO: Change to photo_2 when we have media upload
                        src="https://dummyimage.com/330x290/000/fff&text=+"
                        width={100}
                        height={100}
                      />
                      <div className="flex flex-col">
                        <p className="font-serif text-2xl font-semibold text-indigo group-hover:underline">
                          {project.country}
                        </p>
                        <p className="max-w-sm text-2xs text-text group-hover:opacity-80">
                          {project.long_title}
                        </p>
                      </div>
                    </Link>
                  </td>
                  <td className="bg-background">
                    <div>
                      {project.pathways.map((pathway, idx) => (
                        <p key={idx}>{pathway}</p>
                      ))}
                    </div>
                  </td>
                  <td>
                    <div>
                      {project.action_types.map((at, idx) => (
                        <p key={idx}>{at}</p>
                      ))}
                    </div>
                  </td>
                  <td className="bg-background">{project.project_phase}</td>
                  <td>{project.project_category}</td>
                  <td className="bg-background">{project.hectares_impacted}</td>
                  <td>{project.people_supported}</td>
                  <td className="bg-background">{project.carbon_mitigation}</td>
                  <td>
                    {project.co_benefits.map((cb) => {
                      return <Icon icon={CO_BENEFITS_ICONS[cb]} className="h-7 w-7" key={cb} />;
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default MetricsView;
