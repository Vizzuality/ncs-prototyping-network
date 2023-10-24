import { useEffect, useState } from 'react';

import { useRecoilValue } from 'recoil';

import { useProjects, useTotalData } from 'hooks/projects';
import { filtersAtom } from 'store';
import { ActionType, Category, Pathway, Phase, Project } from 'types/project';

const Total = (): JSX.Element => {
  const projectsQuery = useProjects();
  const [dataFiltered, setDataFiltered] = useState<Project[]>(projectsQuery.data || []);
  const totalData = useTotalData({ dataFiltered });

  const filters = useRecoilValue(filtersAtom);

  useEffect(() => {
    const activedFilters = Object.values(filters).some((f) => f.length > 0);
    const dataFinalFiltered = () => {
      const data = projectsQuery.data?.filter((project) => {
        if (filters.pathways.length > 0) {
          if (!filters.pathways.some((pw: Pathway) => project.pathways.includes(pw))) return false;
        }
        if (filters.project_phases.length > 0) {
          if (!filters.project_phases.some((pp: Phase) => project.project_phases.includes(pp)))
            return false;
        }
        if (filters.action_types.length > 0) {
          if (!filters.action_types.some((at: ActionType) => project.action_types.includes(at)))
            return false;
        }
        if (filters.project_categories.length > 0) {
          if (
            !filters.project_categories.some((pc: Category) =>
              project.project_categories.includes(pc)
            )
          )
            return false;
        }
        return true;
      });
      return data;
    };

    if (activedFilters) return setDataFiltered(dataFinalFiltered());

    if (!activedFilters) return setDataFiltered(projectsQuery.data || []);
  }, [filters, projectsQuery.data]);

  return (
    <section className="bg-background">
      <div className="mx-6 flex justify-between py-7 xl:mx-20">
        {totalData?.total_people_supported && (
          <div className="flex flex-col items-center space-y-2">
            <p className="font-sans text-3xl font-bold text-spring xl:text-4xl">
              {totalData?.total_people_supported}
            </p>
            <p className="max-w-[160px] text-center text-sm font-medium leading-5 text-text xl:text-base">
              People Supported
            </p>
          </div>
        )}

        {totalData?.total_hectares_impacted && (
          <div className="flex flex-col items-center space-y-2">
            <p className="font-sans text-3xl font-bold text-spring xl:text-4xl">
              {totalData?.total_hectares_impacted}
            </p>
            <p className="max-w-[160px] text-center text-sm font-medium leading-5 text-text xl:text-base">
              Hectares Impacted
            </p>
          </div>
        )}

        {totalData?.total_carbon_mitigation && (
          <div className="flex flex-col items-center space-y-2">
            <p className="font-sans text-3xl font-bold text-spring xl:text-4xl">
              {totalData?.total_carbon_mitigation}
            </p>
            <p className="max-w-[160px] text-center text-sm font-medium leading-5 text-text xl:text-base">
              Million Tons of Carbon Sequestered
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Total;
