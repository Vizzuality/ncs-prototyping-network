'use client';
import { useEffect, useState } from 'react';

import { useSearchParams } from 'next/navigation';

import { type NextPage } from 'next';
import { useRecoilState, useRecoilValue } from 'recoil';

import Filters from 'containers/projects/filters';
import MapView from 'containers/projects/map-view';
import MetricsView from 'containers/projects/metrics-view';
import Tabs from 'containers/projects/tabs';
import Wrapper from 'containers/wrapper';

import { getEspecificPathwayName } from '@/utils/pathways';
import { PROJECTS } from 'data/projects';
import { filtersAtom, projectsViewAtom } from 'store';
import { ActionTypes, Pathways, Project } from 'types/project';

const Projects: NextPage = () => {
  const projectsView = useRecoilValue(projectsViewAtom);

  const [filters, setFilters] = useRecoilState(filtersAtom);
  const searchParams = useSearchParams();

  const pathway = searchParams.get('pathway');

  const [dataFiltered, setDataFiltered] = useState<Project[]>(PROJECTS);

  useEffect(() => {
    if (pathway) {
      setFilters({ ...filters, pathways: getEspecificPathwayName(pathway) });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const activedFilters = Object.values(filters).some((f) => f.length > 0);
    const dataFinalFiltered = () => {
      const data = PROJECTS.filter((project) => {
        if (filters.pathways.length > 0) {
          if (!filters.pathways.some((pw: Pathways) => project.pathways.includes(pw))) return false;
        }
        if (filters.project_phase.length > 0) {
          if (!filters.project_phase.includes(project.project_phase)) return false;
        }
        if (filters.action_types.length > 0) {
          if (!filters.action_types.some((at: ActionTypes) => project.action_types.includes(at)))
            return false;
        }
        if (filters.project_category.length > 0) {
          if (!filters.project_category.includes(project.project_category)) return false;
        }
        return true;
      });
      return data;
    };

    if (activedFilters) return setDataFiltered(dataFinalFiltered());

    if (!activedFilters) return setDataFiltered(PROJECTS);
  }, [filters]);

  return (
    <Wrapper>
      <div className="mt-6 mb-10 flex items-center space-x-6">
        <Tabs />
        <Filters />
      </div>
      {projectsView === 'map' && <MapView data={dataFiltered} />}
      {projectsView === 'metrics' && <MetricsView data={dataFiltered} />}
    </Wrapper>
  );
};

export default Projects;
