import { type NextPage } from 'next';
import { useRecoilValue } from 'recoil';

import ProjectTable from 'containers/projects/table';
import Tabs from 'containers/projects/tabs';
import Wrapper from 'containers/wrapper';

import Layout from 'layouts';
import { projectsViewAtom } from 'store';

const Projects: NextPage = () => {
  const projectsView = useRecoilValue(projectsViewAtom);
  return (
    <Layout>
      <Wrapper>
        <Tabs />
        {projectsView === 'map' && <div>Map</div>}
        {projectsView === 'metrics' && (
          <div>
            <ProjectTable />
          </div>
        )}
      </Wrapper>
    </Layout>
  );
};

export default Projects;
