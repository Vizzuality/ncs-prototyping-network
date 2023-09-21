import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { type NextPage } from 'next';
import { useRecoilState, useRecoilValue } from 'recoil';

import { PROJECTS } from 'containers/projects/constants';
import Filters from 'containers/projects/filters';
import MapView from 'containers/projects/map-view';
import MetricsView from 'containers/projects/metrics-view';
import Tabs from 'containers/projects/tabs';
import Wrapper from 'containers/wrapper';

import Layout from 'layouts';
import { filtersAtom, projectsViewAtom } from 'store';
import { Project } from 'types/project';

const Projects: NextPage = () => {
  const projectsView = useRecoilValue(projectsViewAtom);

  const [filters, setFilters] = useRecoilState(filtersAtom);

  const { query } = useRouter();
  const { pathway } = query;

  const [dataFiltered, setDataFiltered] = useState<Project[]>(PROJECTS);

  useEffect(() => {
    if (pathway) {
      setFilters({ ...filters, pathway: [pathway as string] });
    }
  }, [pathway]);

  useEffect(() => {
    const activedFilters = Object.values(filters).some((f) => f.length > 0);
    const filteredPathwayData = () => {
      const pathwayData = PROJECTS.filter((project) => {
        if (filters.pathway.includes(project.pathway)) return project.pathway;
      });
      setDataFiltered(pathwayData);
    };
    const filteredPhaseData = () => {
      const phaseData = PROJECTS.filter((project) => {
        if (filters.phase.includes(project.phase)) return project.phase;
      });
      setDataFiltered(phaseData);
    };
    const filteredActionData = () => {
      const actionData = PROJECTS.filter((project) => {
        if (filters.action.includes(project.action)) return project.action;
      });
      setDataFiltered(actionData);
    };
    const filteredCategoryData = () => {
      const categoryData = PROJECTS.filter((project) => {
        if (filters.category.includes(project.category)) return project.category;
      });
      setDataFiltered(categoryData);
    };
    if (filters.pathway.length > 0) filteredPathwayData();
    if (filters.phase.length > 0) filteredPhaseData();
    if (filters.action.length > 0) filteredActionData();
    if (filters.category.length > 0) filteredCategoryData();
    if (!activedFilters) return setDataFiltered(PROJECTS);
  }, [filters]);

  return (
    <Layout>
      <Wrapper>
        <div className="mt-6 mb-10 flex items-center space-x-6">
          <Tabs />
          <Filters />
        </div>
        {projectsView === 'map' && <MapView data={dataFiltered} />}
        {projectsView === 'metrics' && <MetricsView data={dataFiltered} />}
      </Wrapper>
    </Layout>
  );
};

export default Projects;
