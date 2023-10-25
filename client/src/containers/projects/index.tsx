'use client';
import { useEffect, useState } from 'react';

import { useSearchParams } from 'next/navigation';

import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import Filters from 'containers/projects/filters';
import MapView from 'containers/projects/map-view';
import MetricsView from 'containers/projects/metrics-view';
import Tabs from 'containers/projects/tabs';
import Wrapper from 'containers/wrapper';
import { usePathways, useProjects } from 'hooks/projects';
import { filtersAtom, headerStyleAtom, projectsViewAtom } from 'store';
import { ActionType, Category, Pathway, Phase, Project } from 'types/project';

const ProjectsPage = (): JSX.Element => {
  const setHeaderStyle = useSetRecoilState(headerStyleAtom);

  useEffect(() => {
    setHeaderStyle('default');
  }, [setHeaderStyle]);

  const projectsQuery = useProjects();
  const pathwaysQuery = usePathways();

  const projectsView = useRecoilValue(projectsViewAtom);

  const [filters, setFilters] = useRecoilState(filtersAtom);
  const searchParams = useSearchParams();

  const pathway = searchParams.get('pathway');

  const [dataFiltered, setDataFiltered] = useState<Project[]>(projectsQuery.data || []);

  const getSpecificPathwayName = (pathway) => {
    switch (pathway) {
      case 'Agroforestry':
        return [pathwaysQuery.data[0]];
      case 'Coastal Wetlands':
        return [pathwaysQuery.data[1], pathwaysQuery.data[2]];
      case 'Peatlands':
        return [pathwaysQuery.data[3], pathwaysQuery.data[4]];
    }
  };

  useEffect(() => {
    if (pathway) {
      setFilters({ ...filters, pathways: getSpecificPathwayName(pathway) });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathwaysQuery.data]);

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
    <Wrapper>
      <div className="sticky top-16 z-40 mt-16 flex items-center space-x-6 bg-white py-9">
        <Tabs />
        <Filters />
      </div>
      {projectsView === 'map' && <MapView data={dataFiltered} />}
      {projectsView === 'metrics' && <MetricsView data={dataFiltered} />}
    </Wrapper>
  );
};

export default ProjectsPage;
