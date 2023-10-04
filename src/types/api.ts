export type THttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'OPTIONS';

export type TFetchOptions = {
  url: string;
  method: THttpMethod;
  headers?: Record<string, string>;
  token?: Nullable<string>;
  body?: unknown;
};

export type TFetchFailureResponse = {
  status?: number;
  statusText?: string;
  isSuccess: false;
};
export type TFetchSuccessfulResponse<T> = { data: T; isSuccess: true };
export type TFetchResponse<T> = TFetchSuccessfulResponse<T> | TFetchFailureResponse;
