import { useMutation } from '@tanstack/react-query';
import { AxiosRequestConfig } from 'axios';
import axios from 'axios';

export function useSaveSubscribe({
  requestConfig = {
    method: 'PUT',
  },
}: {
  requestConfig?: AxiosRequestConfig;
}) {
  const saveSubscribe = ({
    data,
  }: {
    data: {
      name: string;
      email: string;
    };
  }) => {
    return axios.request({
      url: '/api/subscribe',
      data,
      ...requestConfig,
    });
  };

  return useMutation(saveSubscribe, {
    onSuccess: (data, variables, context) => {
      console.info('Succces', data, variables, context);
    },
    onError: (error, variables, context) => {
      console.info('Error ____>', error, variables, context);
    },
  });
}
