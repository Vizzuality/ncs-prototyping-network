'use client';
import { type NextPage } from 'next';

import { notFound } from 'next/navigation';

import ProjectDetail from 'containers/projects/detail';
import { PROJECTS } from 'data/projects';

const Project: NextPage = ({ params }: { params: { id: string } }) => {
  const data = PROJECTS.find((p) => `${p.id}` === params.id);

  if (!data) {
    notFound();
  }

  return <ProjectDetail data={data} />;
};

export default Project;
