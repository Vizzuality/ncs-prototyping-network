import { Metadata, type NextPage } from 'next';

import ProjectDetail from 'containers/projects/detail';

export const metadata: Metadata = {
  title: 'NCS Prototyping Network',
};

const Project: NextPage = () => {
  return <ProjectDetail />;
};

export default Project;
