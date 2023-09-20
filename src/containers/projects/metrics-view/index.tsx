/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

import Icon from '@/components/icon';
import { Project } from 'types/project';
import { cn } from 'utils/cn';

import { COLUMNS, PROJECTS, CO_BENEFITS_ICONS } from '../constants';

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
                  className="text-[13px] text-text [&>*]:border-b-[2px] [&>*]:px-4 [&>*]:py-4"
                >
                  <td className="w-3/12 !pl-0">
                    <Link href={`/projects/${project.id}`} className="group flex space-x-3">
                      <Image alt={project.country} src={project.image} width={100} height={100} />
                      <div className="flex flex-col">
                        <p className="font-serif text-2xl font-semibold text-indigo group-hover:underline">
                          {project.country}
                        </p>
                        <p className="max-w-sm text-[13px] text-text group-hover:opacity-80">
                          {project.description}
                        </p>
                      </div>
                    </Link>
                  </td>
                  <td className="bg-background">{project.pathway}</td>
                  <td>{project.action}</td>
                  <td className="bg-background">{project.phase}</td>
                  <td>
                    <div className="flex flex-col">
                      {project.categories.map((category) => (
                        <span key={category} className="mr-2">
                          {category}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="bg-background">{project.area}</td>
                  <td>{project.people}</td>
                  <td className="bg-background">{project.mitigation}</td>
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
