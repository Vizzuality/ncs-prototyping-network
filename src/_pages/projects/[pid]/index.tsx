import { type NextPage } from 'next';

import ProjectDetail from 'containers/projects/detail';

import Layout from 'layouts';

const Project: NextPage = () => {
  return (
    <Layout>
      <ProjectDetail />
    </Layout>
  );
};

export default Project;
