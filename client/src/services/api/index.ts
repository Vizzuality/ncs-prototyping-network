import axios, { AxiosResponse, CreateAxiosDefaults, isAxiosError } from 'axios';
import Jsona from 'jsona';

const dataFormatter = new Jsona();

const APIConfig: CreateAxiosDefaults<unknown> = {
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
  headers: { 'Content-Type': 'application/json' },
} satisfies CreateAxiosDefaults;

export const JSONAPI = axios.create({
  ...APIConfig,
  transformResponse: (data) => {
    try {
      const parsedData = JSON.parse(data);
      return {
        data: dataFormatter.deserialize(parsedData),
        meta: parsedData.meta,
      };
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        throw new Error(error.response.statusText);
      }
      throw error;
    }
  },
});

const onResponseSuccess = (response: AxiosResponse<unknown>) => response;

const onResponseError = (error: unknown) => {
  return Promise.reject(error);
};

JSONAPI.interceptors.response.use(onResponseSuccess, onResponseError);

export const API = axios.create({
  ...APIConfig,
});

API.interceptors.response.use(onResponseSuccess, onResponseError);

const APIInstances = {
  JSONAPI,
  API,
};

export default APIInstances;
