'use client';
import { notFound } from 'next/navigation';

import { type NextPage } from 'next';

import ProjectDetail from 'containers/projects/detail';

import Layout from 'app/layout';
import { PROJECTS } from 'data/projects';

const Project: NextPage = ({ params }: { params: { id: string } }) => {
  const data = PROJECTS.find((p) => `${p.id}` === params.id);

  if (!data) {
    notFound();
  }

  return (
    <Layout>
      <ProjectDetail data={data} />
    </Layout>
  );
};

export default Project;
