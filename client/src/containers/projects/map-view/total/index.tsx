import { useEffect, useState } from 'react';

import { useRecoilValue } from 'recoil';

import { useGetMessages } from '@/types/generated/message';
import { useGetProjects } from '@/types/generated/project';

import { useSyncLocale } from '@/hooks/query/sync-query';

import { useTotalData } from 'hooks/projects';
import { filtersAtom } from 'store';
import { toTBD } from 'utils/data';

const Total = (): JSX.Element => {
  const [locale] = useSyncLocale();
  const filters = useRecoilValue(filtersAtom);

  const { data: projectsData } = useGetProjects({ populate: '*', locale });

  const { data: dataMessages, isFetched: messagesIsFetched } = useGetMessages({
    populate: '*',
    locale,
  });

  const messages = messagesIsFetched && dataMessages.data.data[0]?.attributes;

  const [dataFiltered, setDataFiltered] = useState(projectsData?.data.data || []);

  const totalData = useTotalData({ dataFiltered });

  useEffect(() => {
    const activedFilters = Object.values(filters).some((f) => f?.length > 0);
    const dataFinalFiltered = () => {
      const data = projectsData?.data?.data?.filter((project) => {
        if (filters.pathways.length > 0) {
          if (
            !filters.pathways.some((pw) =>
              project.attributes.pathways.data.map((pa) => pa.attributes.name).includes(pw)
            )
          )
            return false;
        }
        if (filters.project_phases.length > 0) {
          if (
            !filters.project_phases.some((pp) =>
              project.attributes.project_phases.data.map((pa) => pa.attributes.name).includes(pp)
            )
          )
            return false;
        }
        if (filters.action_types.length > 0) {
          if (
            !filters.action_types.some((at) =>
              project.attributes.action_types.data.map((pa) => pa.attributes.name).includes(at)
            )
          )
            return false;
        }
        if (filters.project_categories.length > 0) {
          if (
            !filters.project_categories.some((pc) =>
              project.attributes.project_categories.data
                .map((pa) => pa.attributes.name)
                .includes(pc)
            )
          )
            return false;
        }
        return true;
      });
      return data;
    };

    if (activedFilters) return setDataFiltered(dataFinalFiltered());

    if (!activedFilters) return setDataFiltered(projectsData?.data?.data || []);
  }, [filters, projectsData?.data?.data]);

  return (
    <section className="bg-background">
      {totalData && (
        <>
          <div className="mx-6 flex justify-between py-7 xl:mx-20">
            {totalData?.total_hectares_impacted && (
              <div className="flex flex-col items-center space-y-2">
                <p className="font-sans text-3xl font-bold text-spring xl:text-4xl">
                  {toTBD(totalData?.total_hectares_impacted, messages.tbd)}
                </p>
                <p className="max-w-[160px] text-center text-sm font-medium leading-5 text-text xl:text-base">
                  {messages.project_area_unit}
                </p>
              </div>
            )}

            {totalData?.total_people_supported && (
              <div className="flex flex-col items-center space-y-2">
                <p className="font-sans text-3xl font-bold text-spring xl:text-4xl">
                  {toTBD(totalData?.total_people_supported, messages.tbd)}
                </p>
                <p className="max-w-[160px] text-center text-sm font-medium leading-5 text-text xl:text-base">
                  {messages.people_supported}
                </p>
              </div>
            )}

            {totalData?.total_carbon_mitigation && (
              <div className="flex flex-col items-center space-y-2">
                <p className="font-sans text-3xl font-bold text-spring xl:text-4xl">
                  {toTBD(totalData?.total_carbon_mitigation, messages.tbd)}
                </p>
                <p className="max-w-[160px] text-center text-sm font-medium leading-5 text-text xl:text-base">
                  {messages.mitigation_potencial_unit}
                  <sup>*</sup>
                </p>
              </div>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default Total;
