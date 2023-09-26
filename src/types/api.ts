export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export type FetchOptions = {
  method?: HttpMethod;
  headers?: Record<string, string>;
  body?: unknown;
};

export type FetchResponse<T> = {
  data?: T;
  status: number;
  statusText: string;
};
