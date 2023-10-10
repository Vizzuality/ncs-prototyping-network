import axios from 'axios';

const API = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `${process.env.NEXT_PUBLIC_API_TOKEN}`,
  },
});

const onResponseSuccess = (response) => response;

const onResponseError = (error: unknown) => {
  return Promise.reject(error);
};

API.interceptors.response.use(onResponseSuccess, onResponseError);

export default API;
