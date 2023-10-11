'use client';
import { type NextPage } from 'next';

import { notFound } from 'next/navigation';

import ProjectDetail from 'containers/projects/detail';
import { useProject } from 'hooks/projects';

const Project: NextPage = ({ params }: { params: { id: string } }) => {
  const projectQuery = useProject({ projectId: params.id });

  if (!projectQuery.data) {
    notFound();
  }

  return <ProjectDetail params={params} />;
};

export default Project;
