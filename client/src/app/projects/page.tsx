import { Metadata, type NextPage } from 'next';

import Footer from 'containers/footer';
import ProjectsPage from 'containers/projects';

export const metadata: Metadata = {
  title: 'NCS Prototyping Network',
};

const Projects: NextPage = () => {
  return (
    <>
      <ProjectsPage />
      <Footer />
    </>
  );
};

export default Projects;
