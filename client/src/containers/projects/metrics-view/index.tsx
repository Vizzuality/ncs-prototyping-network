import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { AnimatePresence, motion } from 'framer-motion';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

import { useGetCobenefits } from '@/types/generated/cobenefit';

import { COLUMNS } from 'containers/projects/constants';
import { cn } from 'utils/cn';

type Direction = 'asc' | 'desc';

const MetricsView = ({ data }: { data }): JSX.Element => {
  const { data: cobenefitsData, isFetched } = useGetCobenefits();
  const cobenefits = isFetched ? cobenefitsData?.data.data.map((p) => p.attributes.name) : [];

  const CO_BENEFITS_ICONS = {
    [cobenefits[0]]: '/images/icons/co-benefits/ecosystem_services.svg',
    [cobenefits[1]]: '/images/icons/co-benefits/resilience_and_adaptation.svg',
    [cobenefits[2]]: '/images/icons/co-benefits/biodiversity.svg',
    [cobenefits[3]]: '/images/icons/co-benefits/livelihoods_economic.svg',
    [cobenefits[4]]: '/images/icons/co-benefits/human_health_wellbeing.svg',
    [cobenefits[5]]: '',
  };

  const [sortedBy, setSortedBy] = useState<string>('country');

  const [direction, setDirection] = useState<Direction>('asc');

  const getSortedData = (arr, sortedBy: string, direction: Direction) => {
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
        className="bg-white"
      >
        {!sortedData.length && (
          <div className="flex h-64 w-full items-center justify-center">
            <p className="font-serif text-lg font-semibold text-indigo">No projects found</p>
          </div>
        )}

        {!!sortedData.length && (
          <table className="bg-white text-xs">
            <thead className="h-16 bg-white">
              <tr className="bg-white text-left [&>*]:px-4 [&>*]:py-2">
                {COLUMNS.map((column) => (
                  <th
                    key={column.id}
                    className="sticky top-[198px] z-30 cursor-pointer border-b border-indigo bg-white"
                    style={{ width: column.width }}
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
                    <td className="max-w-[140px] !pl-0 xl:w-3/12 xl:max-w-0">
                      <Link
                        href={`/projects/${project.id}`}
                        className="group flex flex-col space-y-3 xl:flex-row xl:space-y-0 xl:space-x-3"
                      >
                        <Image
                          alt={project.attributes.header_photo.data.attributes.formats.medium.name}
                          src={
                            project.attributes.header_photo.data.attributes.formats.medium.url ||
                            'https://dummyimage.com/110x110/000/fff&text=+'
                          }
                          style={{
                            objectFit: 'cover',
                            height: '100px',
                            minWidth: '100px',
                          }}
                          height={110}
                          width={110}
                        />

                        <div className="flex w-[100px] flex-col xl:w-auto">
                          <p className="-mt-1 font-serif text-lg font-semibold leading-6 text-indigo group-hover:underline xl:text-2xl xl:leading-7">
                            {project.attributes.project_name}
                          </p>
                          <p className="overflow-hidden text-2xs text-text group-hover:opacity-80">
                            {project.attributes.long_title}
                          </p>
                        </div>
                      </Link>
                    </td>
                    <td className="space-y-1 bg-background">
                      {project.attributes.pathways.data
                        .map((p) => p.attributes.name)
                        .map((pathway, idx) => (
                          <p key={idx}>{pathway}</p>
                        ))}
                    </td>
                    <td>
                      <div>
                        {project.attributes.action_types.data
                          .map((pa) => pa.attributes.name)
                          .map((at, idx) => (
                            <p key={idx}>{at}</p>
                          ))}
                      </div>
                    </td>
                    <td className="space-y-1 bg-background">
                      {project.attributes.project_phases.data
                        .map((pp) => pp.attributes.name)
                        .map((phase, idx) => (
                          <p key={idx}>{phase}</p>
                        ))}
                    </td>
                    <td className="space-y-1">
                      {project.attributes.project_categories.data
                        .map((pc) => pc.attributes.name)
                        .map((category, idx) => (
                          <p key={idx}>{category}</p>
                        ))}
                    </td>
                    <td className="bg-background">{project.attributes.hectares_impacted}</td>
                    <td>{project.attributes.people_supported}</td>
                    <td className="bg-background">{project.attributes.carbon_mitigation}</td>
                    <td>
                      <div className="grid grid-cols-2 gap-3">
                        {project.attributes.cobenefits.data
                          .map((cb) => cb.attributes.name)
                          .map((cb) => {
                            return (
                              <Image
                                alt={cb}
                                src={CO_BENEFITS_ICONS[cb]}
                                width={28}
                                height={28}
                                key={cb}
                              />
                            );
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
