import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { AnimatePresence, motion } from 'framer-motion';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

import Icon from 'components/icon';
import { COLUMNS, CO_BENEFITS_ICONS } from 'containers/projects/constants';
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
    <AnimatePresence>
      <motion.div
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
                        'mb-2 flex items-end font-sans text-m font-normal leading-4 text-text':
                          true,
                        'text-indigo': column.sorting,
                      })}
                    >
                      <p>{column.label}</p>

                      {column.sorting && (
                        <span>
                          {sortedBy === column.id && direction === 'asc' && (
                            <HiChevronUp className="-mb-1 fill-butternut" size={25} />
                          )}
                          {sortedBy === column.id && direction === 'desc' && (
                            <HiChevronDown className="-mb-1 fill-butternut" size={25} />
                          )}
                          {sortedBy !== column.id && (
                            <HiChevronUp className="-mb-1 fill-butternut" size={25} />
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
                    <td className="max-w-[140px]  !pl-0 xl:w-3/12 xl:max-w-0">
                      <Link
                        href={`/projects/${project.id}`}
                        className="group flex flex-col space-y-3 xl:flex-row xl:space-y-0 xl:space-x-3"
                      >
                        <Image
                          alt={project.fallback_photo?.caption}
                          src={
                            project.fallback_photo?.url ||
                            'https://dummyimage.com/110x110/000/fff&text=+'
                          }
                          style={{ objectFit: 'cover', height: '100px', width: '100px' }}
                          height={110}
                          width={110}
                        />

                        <div className="flex w-[100px] flex-col xl:w-auto">
                          <p className="-mt-1 font-serif text-lg font-semibold leading-6 text-indigo group-hover:underline xl:text-2xl xl:leading-7">
                            {project.project_name}
                          </p>
                          <p className="overflow-hidden text-2xs text-text group-hover:opacity-80">
                            {project.long_title}
                          </p>
                        </div>
                      </Link>
                    </td>
                    <td className="space-y-1 bg-background">
                      {project.pathways.map((pathway, idx) => (
                        <p key={idx}>{pathway}</p>
                      ))}
                    </td>
                    <td>
                      <div>
                        {project.action_types.map((at, idx) => (
                          <p key={idx}>{at}</p>
                        ))}
                      </div>
                    </td>
                    <td className="space-y-1 bg-background">
                      {project.project_phases.map((phase, idx) => (
                        <p key={idx}>{phase}</p>
                      ))}
                    </td>
                    <td className="space-y-1">
                      {project.project_categories.map((category, idx) => (
                        <p key={idx}>{category}</p>
                      ))}
                    </td>
                    <td className="bg-background">{project.hectares_impacted}</td>
                    <td>{project.people_supported}</td>
                    <td className="bg-background">{project.carbon_mitigation}</td>
                    <td>
                      <div className="grid grid-cols-2 gap-3">
                        {project.cobenefits.map((cb) => {
                          return <Icon icon={CO_BENEFITS_ICONS[cb]} className="h-7 w-7" key={cb} />;
                        })}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default MetricsView;
