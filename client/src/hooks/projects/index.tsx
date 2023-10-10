import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { type AxiosResponse } from 'axios';

import { Project } from '@/types/project';

import { JSONAPI } from 'services/api';

export function useProjects(): UseQueryResult<Project[], unknown> {
  const fetchProjects = () =>
    JSONAPI.request({
      method: 'GET',
      url: '/projects',
    }).then((response: AxiosResponse) => response.data);

  const query = useQuery(['projects'], fetchProjects, {
    placeholderData: [],
  });

  const { data } = query;

  return {
    ...query,
    data,
  } as typeof query;
}
