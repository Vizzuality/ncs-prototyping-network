import { useMemo } from 'react';

import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { type AxiosResponse } from 'axios';

import { JSONAPI } from 'services/api';
import { Project, Total } from 'types/project';

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
    if (!data?.data) {
      return [];
    }

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

  const { data } = query;

  const parsedData = useMemo(() => {
    if (!data?.data) {
      return {};
    }
    return {
      ...data.data,
      action_types: data.data.action_types.data.map((action_type) => action_type.attributes.name),
      biomes: data.data.biomes.data.map((biome) => biome.attributes.name),
      country: data.data.country.data.attributes.name,
      cobenefits: data.data.cobenefits.data.map((cobenefit) => cobenefit.attributes.name),
      footer_photo: data.data.footer_photo.data?.attributes.url,
      lesson_1_category: data.data.lesson_1_category.data.attributes.name,
      lesson_2_category: data.data.lesson_2_category.data.attributes.name,
      lesson_3_category: data.data.lesson_3_category.data.attributes.name,
      pathways: data.data.pathways.data.map((pathway) => pathway.attributes.name),
      project_categories: data.data.project_categories.data.map(
        (project_categories) => project_categories.attributes.name
      ),
      project_phases: data.data.project_phases.data.map(
        (project_phases) => project_phases.attributes.name
      ),
      region: data.data.region.data?.attributes.name,
    };
  }, [data]);

  return {
    ...query,
    data: parsedData,
  } as typeof query;
}

export function useTotalData(): UseQueryResult<Total, unknown> {
  const fetchProjects = () =>
    JSONAPI.request({
      method: 'GET',
      url: '/projects',
    }).then((response: AxiosResponse) => response.data);

  const query = useQuery(['total-data'], fetchProjects, {
    placeholderData: [],
  });

  const { data } = query;

  const sumData = useMemo(() => {
    if (!data?.data) {
      return [];
    }

    const total_people_supported = data?.data?.reduce(
      (acc, p) => acc + parseInt(p.people_supported || 0),
      0
    );

    const total_area_ha_impacted = data?.data?.reduce(
      (acc, p) => acc + parseInt(p.area_ha_impacted || 0),
      0
    );
    const total_carbon_mitigation = data?.data?.reduce(
      (acc, p) => acc + parseInt(p.carbon_mitigation || 0),
      0
    );
    return {
      total_people_supported,
      total_area_ha_impacted,
      total_carbon_mitigation,
    };
  }, [data]);

  return {
    ...query,
    data: sumData,
  } as typeof query;
}