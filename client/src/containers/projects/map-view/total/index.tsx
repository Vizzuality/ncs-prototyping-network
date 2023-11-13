import { useEffect, useState } from 'react';

import { useRecoilValue } from 'recoil';

import { useGetProjects } from '@/types/generated/project';

import { useTotalData } from 'hooks/projects';
import { filtersAtom } from 'store';

const Total = (): JSX.Element => {
  const { data: projectsData } = useGetProjects({ populate: '*' });

  const filters = useRecoilValue(filtersAtom);

  const [dataFiltered, setDataFiltered] = useState(projectsData?.data.data || []);

  const totalData = useTotalData({ dataFiltered });

  useEffect(() => {
    const activedFilters = Object.values(filters).some((f) => f.length > 0);
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
            {totalData?.total_people_supported && (
              <div className="flex flex-col items-center space-y-2">
                <p className="font-sans text-3xl font-bold text-spring xl:text-4xl">
                  {totalData?.total_people_supported !== '0'
                    ? totalData?.total_people_supported
                    : 'TBD'}
                </p>
                <p className="max-w-[160px] text-center text-sm font-medium leading-5 text-text xl:text-base">
                  People Supported
                </p>
              </div>
            )}

            {totalData?.total_hectares_impacted && (
              <div className="flex flex-col items-center space-y-2">
                <p className="font-sans text-3xl font-bold text-spring xl:text-4xl">
                  {totalData?.total_hectares_impacted !== '0'
                    ? totalData?.total_hectares_impacted
                    : 'TBD'}
                </p>
                <p className="max-w-[160px] text-center text-sm font-medium leading-5 text-text xl:text-base">
                  Area Impacted (ha)
                </p>
              </div>
            )}

            {totalData?.total_carbon_mitigation && (
              <div className="flex flex-col items-center space-y-2">
                <p className="font-sans text-3xl font-bold text-spring xl:text-4xl">
                  {totalData?.total_carbon_mitigation !== '0'
                    ? totalData?.total_carbon_mitigation
                    : 'TBD'}
                </p>
                <p className="max-w-[160px] text-center text-sm font-medium leading-5 text-text xl:text-base">
                  Mitigation Potential (tCO<sub>2</sub>e)<sup>*</sup>
                </p>
              </div>
            )}
          </div>

          <p className="px-6 pb-3 text-xs text-text/70">
            <span className="text-sm">*</span> Mitigation values presented may or may not be
            equivalent to carbon credit potential depending on methodology and timeframe.
          </p>
        </>
      )}
    </section>
  );
};

export default Total;
