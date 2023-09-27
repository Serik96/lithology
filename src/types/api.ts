export type THttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export type TFetchOptions = {
  url: string;
  method?: THttpMethod;
  headers?: Record<string, string>;
  body?: unknown;
};

export type TFetchFailureResponse = {
  status?: number;
  statusText?: string;
  isSuccess: false;
};
export type TFetchSuccessfulResponse<T> = { data: T; isSuccess: true };
export type TFetchResponse<T> = TFetchSuccessfulResponse<T> | TFetchFailureResponse;
