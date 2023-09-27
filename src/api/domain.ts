import { API_CONTROLLER_PATH, API_METHOD_INFO } from '@/api/const';
import { EApi } from '@/api/enum';
import { TApiMethod } from '@/api/types';
import { config } from '@/config';
import { slash } from '@/helpers';
import { TFetchOptions, TFetchResponse } from '@/types';

export async function fetchApi<T>(options: TFetchOptions): Promise<TFetchResponse<T>> {
  let response;

  try {
    response = await fetch(options.url, {
      method: options.method || 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      body: options.body ? JSON.stringify(options.body) : undefined,
    });
  } catch (err) {
    // @todo: log to sentry
    // eslint-disable-next-line no-console
    console.log('Fetch error', err);
  }

  if (!response?.ok) {
    return {
      status: response?.status,
      statusText: response?.statusText,
      isSuccess: false,
    };
  }

  const data = await response.json();

  return {
    data,
    isSuccess: true,
  };
}

export function apiInfo(controller: EApi, method: TApiMethod) {
  if (!config.api.server) {
    throw Error('API server not set in .env');
  }

  const methodInfo = API_METHOD_INFO[controller][method];
  const suffix = methodInfo.suffix ?? '';

  return {
    url: slash(config.api.server) + slash(API_CONTROLLER_PATH[controller]) + suffix,
    method: methodInfo.method,
  };
}
