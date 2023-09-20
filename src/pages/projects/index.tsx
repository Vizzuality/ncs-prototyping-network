import { useEffect, useState } from 'react';

import { type NextPage } from 'next';
import { useRecoilValue, useResetRecoilState } from 'recoil';

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
  const filters = useRecoilValue(filtersAtom);
  const resetFilters = useResetRecoilState(filtersAtom);

  const [dataFiltered, setDataFiltered] = useState<Project[]>(PROJECTS);

  useEffect(() => {
    resetFilters();
  }, [resetFilters]);

  useEffect(() => {
    const activedFilters = Object.values(filters).some((f) => f !== '');
    if (activedFilters) {
      const filterKeys = Object.keys(filters);
      const filteredData = PROJECTS.filter(function (eachObj) {
        return filterKeys.some(function (key: keyof Project) {
          return filters[key] === eachObj[key];
        });
      });
      setDataFiltered(filteredData);
    }
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
