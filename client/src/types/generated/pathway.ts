/**
 * Generated by orval v6.18.1 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import { useQuery, useMutation } from '@tanstack/react-query';
import type {
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryResult,
  QueryKey,
} from '@tanstack/react-query';
import type {
  PathwayListResponse,
  Error,
  GetPathwaysParams,
  PathwayResponse,
  PathwayRequest,
  GetPathwaysIdParams,
  PathwayLocalizationResponse,
  PathwayLocalizationRequest,
} from './strapi.schemas';
import { API } from '../../services/api/index';
import type { ErrorType } from '../../services/api/index';

// eslint-disable-next-line
type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P
) => any
  ? P
  : never;

export const getPathways = (
  params?: GetPathwaysParams,
  options?: SecondParameter<typeof API>,
  signal?: AbortSignal
) => {
  return API<PathwayListResponse>({ url: `/pathways`, method: 'get', params, signal }, options);
};

export const getGetPathwaysQueryKey = (params?: GetPathwaysParams) => {
  return [`/pathways`, ...(params ? [params] : [])] as const;
};

export const getGetPathwaysQueryOptions = <
  TData = Awaited<ReturnType<typeof getPathways>>,
  TError = ErrorType<Error>
>(
  params?: GetPathwaysParams,
  options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPathways>>, TError, TData>;
    request?: SecondParameter<typeof API>;
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetPathwaysQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getPathways>>> = ({ signal }) =>
    getPathways(params, requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getPathways>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetPathwaysQueryResult = NonNullable<Awaited<ReturnType<typeof getPathways>>>;
export type GetPathwaysQueryError = ErrorType<Error>;

export const useGetPathways = <
  TData = Awaited<ReturnType<typeof getPathways>>,
  TError = ErrorType<Error>
>(
  params?: GetPathwaysParams,
  options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPathways>>, TError, TData>;
    request?: SecondParameter<typeof API>;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetPathwaysQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const postPathways = (
  pathwayRequest: PathwayRequest,
  options?: SecondParameter<typeof API>
) => {
  return API<PathwayResponse>(
    {
      url: `/pathways`,
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: pathwayRequest,
    },
    options
  );
};

export const getPostPathwaysMutationOptions = <
  TError = ErrorType<Error>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postPathways>>,
    TError,
    { data: PathwayRequest },
    TContext
  >;
  request?: SecondParameter<typeof API>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof postPathways>>,
  TError,
  { data: PathwayRequest },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postPathways>>,
    { data: PathwayRequest }
  > = (props) => {
    const { data } = props ?? {};

    return postPathways(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type PostPathwaysMutationResult = NonNullable<Awaited<ReturnType<typeof postPathways>>>;
export type PostPathwaysMutationBody = PathwayRequest;
export type PostPathwaysMutationError = ErrorType<Error>;

export const usePostPathways = <TError = ErrorType<Error>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postPathways>>,
    TError,
    { data: PathwayRequest },
    TContext
  >;
  request?: SecondParameter<typeof API>;
}) => {
  const mutationOptions = getPostPathwaysMutationOptions(options);

  return useMutation(mutationOptions);
};
export const getPathwaysId = (
  id: number,
  params?: GetPathwaysIdParams,
  options?: SecondParameter<typeof API>,
  signal?: AbortSignal
) => {
  return API<PathwayResponse>({ url: `/pathways/${id}`, method: 'get', params, signal }, options);
};

export const getGetPathwaysIdQueryKey = (id: number, params?: GetPathwaysIdParams) => {
  return [`/pathways/${id}`, ...(params ? [params] : [])] as const;
};

export const getGetPathwaysIdQueryOptions = <
  TData = Awaited<ReturnType<typeof getPathwaysId>>,
  TError = ErrorType<Error>
>(
  id: number,
  params?: GetPathwaysIdParams,
  options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPathwaysId>>, TError, TData>;
    request?: SecondParameter<typeof API>;
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetPathwaysIdQueryKey(id, params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getPathwaysId>>> = ({ signal }) =>
    getPathwaysId(id, params, requestOptions, signal);

  return { queryKey, queryFn, enabled: !!id, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getPathwaysId>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetPathwaysIdQueryResult = NonNullable<Awaited<ReturnType<typeof getPathwaysId>>>;
export type GetPathwaysIdQueryError = ErrorType<Error>;

export const useGetPathwaysId = <
  TData = Awaited<ReturnType<typeof getPathwaysId>>,
  TError = ErrorType<Error>
>(
  id: number,
  params?: GetPathwaysIdParams,
  options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPathwaysId>>, TError, TData>;
    request?: SecondParameter<typeof API>;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetPathwaysIdQueryOptions(id, params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const putPathwaysId = (
  id: number,
  pathwayRequest: PathwayRequest,
  options?: SecondParameter<typeof API>
) => {
  return API<PathwayResponse>(
    {
      url: `/pathways/${id}`,
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      data: pathwayRequest,
    },
    options
  );
};

export const getPutPathwaysIdMutationOptions = <
  TError = ErrorType<Error>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof putPathwaysId>>,
    TError,
    { id: number; data: PathwayRequest },
    TContext
  >;
  request?: SecondParameter<typeof API>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof putPathwaysId>>,
  TError,
  { id: number; data: PathwayRequest },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof putPathwaysId>>,
    { id: number; data: PathwayRequest }
  > = (props) => {
    const { id, data } = props ?? {};

    return putPathwaysId(id, data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type PutPathwaysIdMutationResult = NonNullable<Awaited<ReturnType<typeof putPathwaysId>>>;
export type PutPathwaysIdMutationBody = PathwayRequest;
export type PutPathwaysIdMutationError = ErrorType<Error>;

export const usePutPathwaysId = <TError = ErrorType<Error>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof putPathwaysId>>,
    TError,
    { id: number; data: PathwayRequest },
    TContext
  >;
  request?: SecondParameter<typeof API>;
}) => {
  const mutationOptions = getPutPathwaysIdMutationOptions(options);

  return useMutation(mutationOptions);
};
export const deletePathwaysId = (id: number, options?: SecondParameter<typeof API>) => {
  return API<number>({ url: `/pathways/${id}`, method: 'delete' }, options);
};

export const getDeletePathwaysIdMutationOptions = <
  TError = ErrorType<Error>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deletePathwaysId>>,
    TError,
    { id: number },
    TContext
  >;
  request?: SecondParameter<typeof API>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof deletePathwaysId>>,
  TError,
  { id: number },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof deletePathwaysId>>,
    { id: number }
  > = (props) => {
    const { id } = props ?? {};

    return deletePathwaysId(id, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type DeletePathwaysIdMutationResult = NonNullable<
  Awaited<ReturnType<typeof deletePathwaysId>>
>;

export type DeletePathwaysIdMutationError = ErrorType<Error>;

export const useDeletePathwaysId = <TError = ErrorType<Error>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deletePathwaysId>>,
    TError,
    { id: number },
    TContext
  >;
  request?: SecondParameter<typeof API>;
}) => {
  const mutationOptions = getDeletePathwaysIdMutationOptions(options);

  return useMutation(mutationOptions);
};
export const postPathwaysIdLocalizations = (
  id: number,
  pathwayLocalizationRequest: PathwayLocalizationRequest,
  options?: SecondParameter<typeof API>
) => {
  return API<PathwayLocalizationResponse>(
    {
      url: `/pathways/${id}/localizations`,
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: pathwayLocalizationRequest,
    },
    options
  );
};

export const getPostPathwaysIdLocalizationsMutationOptions = <
  TError = ErrorType<Error>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postPathwaysIdLocalizations>>,
    TError,
    { id: number; data: PathwayLocalizationRequest },
    TContext
  >;
  request?: SecondParameter<typeof API>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof postPathwaysIdLocalizations>>,
  TError,
  { id: number; data: PathwayLocalizationRequest },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postPathwaysIdLocalizations>>,
    { id: number; data: PathwayLocalizationRequest }
  > = (props) => {
    const { id, data } = props ?? {};

    return postPathwaysIdLocalizations(id, data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type PostPathwaysIdLocalizationsMutationResult = NonNullable<
  Awaited<ReturnType<typeof postPathwaysIdLocalizations>>
>;
export type PostPathwaysIdLocalizationsMutationBody = PathwayLocalizationRequest;
export type PostPathwaysIdLocalizationsMutationError = ErrorType<Error>;

export const usePostPathwaysIdLocalizations = <
  TError = ErrorType<Error>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postPathwaysIdLocalizations>>,
    TError,
    { id: number; data: PathwayLocalizationRequest },
    TContext
  >;
  request?: SecondParameter<typeof API>;
}) => {
  const mutationOptions = getPostPathwaysIdLocalizationsMutationOptions(options);

  return useMutation(mutationOptions);
};
