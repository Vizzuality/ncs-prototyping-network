import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

import { Project } from 'types/project';

import { COLUMNS, PROJECTS } from '../constants';

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
            <tr className="text-left font-semibold [&>*]:px-4 [&>*]:py-2">
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
                  <div className="flex items-end">
                    {column.label}

                    {column.sorting && (
                      <span className="ml-2">
                        {sortedBy === column.id && direction === 'asc' && (
                          <HiChevronUp className="fill-butternut" size={20} />
                        )}
                        {sortedBy === column.id && direction === 'desc' && (
                          <HiChevronDown className="fill-butternut" size={20} />
                        )}
                        {sortedBy !== column.id && (
                          <HiChevronUp className="fill-butternut" size={20} />
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
                <tr key={project.id} className="text-text [&>*]:px-4 [&>*]:py-2">
                  <td>
                    <Link href={`/projects/${project.id}`} className="group flex space-x-3">
                      <Image alt={project.country} src={project.image} width={160} height={80} />
                      <div className="flex flex-col">
                        <p className="font-serif text-xl text-indigo group-hover:underline">
                          {project.country}
                        </p>
                        <p className="max-w-sm group-hover:opacity-80">{project.description}</p>
                      </div>
                    </Link>
                  </td>
                  <td>{project.pathway}</td>
                  <td>{project.action}</td>
                  <td>{project.phase}</td>
                  <td>
                    <div className="flex flex-col">
                      {project.categories.map((category) => (
                        <span key={category} className="mr-2">
                          {category}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td>{project.area}</td>
                  <td>{project.people}</td>
                  <td>{project.mitigation}</td>
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
