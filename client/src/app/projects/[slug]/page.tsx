import { Metadata, type NextPage } from 'next';

import ProjectDetail from 'containers/projects/detail';

export const metadata: Metadata = {
  title: 'TNC Prototype Dashboard',
};

const Project: NextPage = () => {
  return <ProjectDetail />;
};

export default Project;
