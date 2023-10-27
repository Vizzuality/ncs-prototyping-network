import { useMemo } from 'react';

import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { type AxiosResponse } from 'axios';

import { API } from 'services/api';
import { Project, Total } from 'types/project';

export function useProjects(): UseQueryResult<Project[], unknown> {
  const fetchProjects = () =>
    API.request({
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
      header_photo: project.header_photo.data?.attributes.formats.medium,
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
    API.request({
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
    API.request({
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
    API.request({
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
    API.request({
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
