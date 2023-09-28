'use client';
import { useMutation } from '@tanstack/react-query';
import { AxiosRequestConfig } from 'axios';
import axios from 'axios';

export function useSaveContact({
  requestConfig = {
    method: 'PUT',
  },
}: {
  requestConfig?: AxiosRequestConfig;
}) {
  const saveContact = ({
    data,
  }: {
    data: {
      name: string;
      email: string;
    };
  }) => {
    return axios.request({
      url: '/api/contact',
      data,
      ...requestConfig,
    });
  };

  return useMutation(saveContact);
}
