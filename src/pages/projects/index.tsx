import { type NextPage } from 'next';
import { useRecoilValue } from 'recoil';

import Filters from 'containers/projects/filters';
import ProjectsMap from 'containers/projects/map-view';
import ProjectsMetrics from 'containers/projects/metrics-view';
import Tabs from 'containers/projects/tabs';
import Wrapper from 'containers/wrapper';

import Layout from 'layouts';
import { projectsViewAtom } from 'store';

const Projects: NextPage = () => {
  const projectsView = useRecoilValue(projectsViewAtom);
  return (
    <Layout>
      <Wrapper>
        <div className="my-6 flex items-center space-x-6">
          <Tabs />
          <Filters />
        </div>
        {projectsView === 'map' && (
          <div>
            <ProjectsMap />
          </div>
        )}
        {projectsView === 'metrics' && (
          <div>
            <ProjectsMetrics />
          </div>
        )}
      </Wrapper>
    </Layout>
  );
};

export default Projects;
