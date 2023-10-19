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
      fallback_photo: project.fallback_photo.data?.attributes,
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
    }).then((response: AxiosResponse) => {
      return response.data;
    });

  const query = useQuery(['project', projectId], fetchProject, {
    placeholderData: [],
    enabled: !!projectId,
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
      footer_photo: data.data.footer_photo.data?.attributes,
      goals_photo: data.data.goals_photo.data?.attributes,
      graphic_1: data.data.graphic_1.data?.attributes,
      graphic_2: data.data.graphic_2.data?.attributes,
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

export function useTotalData({ dataFiltered }: { dataFiltered?: Project[] }) {
  const data = useMemo(() => {
    if (!dataFiltered) {
      return [];
    }

    const total_people_supported = dataFiltered?.reduce(
      (acc, p) => acc + parseInt(p.people_supported),
      0
    );

    const total_hectares_impacted = dataFiltered?.reduce(
      (acc, p) => acc + parseInt(p.hectares_impacted),
      0
    );

    const total_carbon_mitigation = dataFiltered?.reduce(
      (acc, p) => acc + parseInt(p.carbon_mitigation),
      0
    );

    return {
      total_people_supported: Intl.NumberFormat('en-IN').format(total_people_supported),
      total_hectares_impacted: Intl.NumberFormat('en-IN').format(total_hectares_impacted),
      total_carbon_mitigation: Intl.NumberFormat('en-IN').format(total_carbon_mitigation),
    };
  }, [dataFiltered]);

  return {
    ...data,
  } as Total;
}

export function usePathways(): UseQueryResult<Project['pathways'], unknown> {
  const fetchPathways = () =>
    JSONAPI.request({
      method: 'GET',
      url: '/pathways',
    }).then((response: AxiosResponse) => response.data);

  const query = useQuery(['pathways'], fetchPathways, {
    placeholderData: [],
  });

  const { data } = query;

  const parsedData = useMemo(() => {
    if (!data?.data) {
      return [];
    }
    return data?.data.map((p) => p.name);
  }, [data]);

  return {
    ...query,
    data: parsedData,
  } as typeof query;
}

export function usePhases(): UseQueryResult<Project['project_phases'], unknown> {
  const fetchPhases = () =>
    JSONAPI.request({
      method: 'GET',
      url: '/project-phases',
    }).then((response: AxiosResponse) => response.data);

  const query = useQuery(['phases'], fetchPhases, {
    placeholderData: [],
  });

  const { data } = query;

  const parsedData = useMemo(() => {
    if (!data?.data) {
      return [];
    }
    return data?.data.map((p) => p.name);
  }, [data]);

  return {
    ...query,
    data: parsedData,
  } as typeof query;
}

export function useCategories(): UseQueryResult<Project['project_categories'], unknown> {
  const fetchCategories = () =>
    JSONAPI.request({
      method: 'GET',
      url: '/project-categories',
    }).then((response: AxiosResponse) => response.data);

  const query = useQuery(['categories'], fetchCategories, {
    placeholderData: [],
  });

  const { data } = query;

  const parsedData = useMemo(() => {
    if (!data?.data) {
      return [];
    }
    return data?.data.map((p) => p.name);
  }, [data]);

  return {
    ...query,
    data: parsedData,
  } as typeof query;
}

export function useActionTypes(): UseQueryResult<Project['action_types'], unknown> {
  const fetchActionTypes = () =>
    JSONAPI.request({
      method: 'GET',
      url: '/action-types',
    }).then((response: AxiosResponse) => response.data);

  const query = useQuery(['action-types'], fetchActionTypes, {
    placeholderData: [],
  });

  const { data } = query;

  const parsedData = useMemo(() => {
    if (!data?.data) {
      return [];
    }
    return data?.data.map((p) => p.name);
  }, [data]);

  return {
    ...query,
    data: parsedData,
  } as typeof query;
}

export function useCobenefits(): UseQueryResult<Project['cobenefits'], unknown> {
  const fetchCobenefits = () =>
    JSONAPI.request({
      method: 'GET',
      url: '/cobenefits',
    }).then((response: AxiosResponse) => response.data);

  const query = useQuery(['cobenefits'], fetchCobenefits, {
    placeholderData: [],
  });

  const { data } = query;

  const parsedData = useMemo(() => {
    if (!data?.data) {
      return [];
    }
    return data?.data.map((p) => p.name);
  }, [data]);

  return {
    ...query,
    data: parsedData,
  } as typeof query;
}
