import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export function useSaveContact() {
  const saveContact = ({
    data,
  }: {
    data: {
      first_name: string;
      last_name: string;
      email: string;
      message: string;
    };
  }) => {
    return axios.request({
      method: 'PUT',
      url: '/api/contact',
      data,
    });
  };

  return useMutation(saveContact);
}
