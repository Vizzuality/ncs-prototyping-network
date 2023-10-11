'use client';
import { useMemo } from 'react';

import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { type AxiosResponse } from 'axios';

import { Project } from '@/types/project';

import { JSONAPI } from 'services/api';

export function useProjects(): UseQueryResult<Project[], unknown> {
  const fetchProjects = () =>
    JSONAPI.request({
      method: 'GET',
      url: '/projects?populate=*',
    }).then((response: AxiosResponse) => response.data);

  const query = useQuery(['projects'], fetchProjects, {
    placeholderData: [],
  });

  const { data } = query;

  const parsedData = useMemo(() => {
    return data?.data?.map((project) => ({
      ...project,
      action_types: project.action_types.data.map((action_type) => action_type.attributes.name),
      biomes: project.biomes.data.map((biome) => biome.attributes.name),
      country: project.country.data.attributes.name,
      cobenefits: project.cobenefits.data.map((cobenefit) => cobenefit.attributes.name),
      lesson_1_category: project.lesson_1_category.data.attributes.name,
      lesson_2_category: project.lesson_2_category.data.attributes.name,
      lesson_3_category: project.lesson_3_category.data.attributes.name,
      pathways: project.pathways.data.map((pathway) => pathway.attributes.name),
      project_categories: project.project_categories.data.map(
        (project_categories) => project_categories.attributes.name
      ),
      project_phases: project.project_phases.data.map(
        (project_phases) => project_phases.attributes.name
      ),
      region: project.region.data?.attributes.name,
    }));
  }, [data]);

  return {
    ...query,
    data: parsedData,
  } as typeof query;
}

export function useProject({ projectId }: { projectId: string }): UseQueryResult<Project, unknown> {
  const fetchProject = () =>
    JSONAPI.request({
      method: 'GET',
      url: `/projects/${projectId}?populate=*`,
    }).then((response: AxiosResponse) => response.data);

  const query = useQuery(['project'], fetchProject, {
    placeholderData: [],
  });

  const {
    data: { data },
  } = query;

  const parsedData = useMemo(() => {
    if (!data) {
      return {};
    }
    return {
      ...data,
      action_types: data.action_types.data.map((action_type) => action_type.attributes.name),
      biomes: data.biomes.data.map((biome) => biome.attributes.name),
      country: data.country.data.attributes.name,
      cobenefits: data.cobenefits.data.map((cobenefit) => cobenefit.attributes.name),
      lesson_1_category: data.lesson_1_category.data.attributes.name,
      lesson_2_category: data.lesson_2_category.data.attributes.name,
      lesson_3_category: data.lesson_3_category.data.attributes.name,
      pathways: data.pathways.data.map((pathway) => pathway.attributes.name),
      project_categories: data.project_categories.data.map(
        (project_categories) => project_categories.attributes.name
      ),
      project_phases: data.project_phases.data.map(
        (project_phases) => project_phases.attributes.name
      ),
      region: data.region.data?.attributes.name,
    };
  }, [data]);

  return {
    ...query,
    data: parsedData,
  } as typeof query;
}
