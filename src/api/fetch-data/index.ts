import { FetchOptions, FetchResponse } from '@/types';
import { HttpError } from './error';

async function fetchData<T>(
  url: string,
  options: FetchOptions = {},
): Promise<FetchResponse<T>> {
  try {
    const response = await fetch(url, {
      method: options.method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      body: options.body ? JSON.stringify(options.body) : undefined,
    });

    if (!response.ok) {
      throw new HttpError(response);
    }

    const data = await response.json();

    return {
      data,
      status: response.status,
      statusText: response.statusText,
    };
  } catch (error) {
    return {
      status: 500,
      statusText: 'Internal Server Error',
    };
  }
}

export { fetchData };
