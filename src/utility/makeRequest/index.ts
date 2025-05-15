import { env } from '@data';
import { IAPI, IMakeRequest } from '@types';

export const makeRequest = async <T, E = unknown>(data: IAPI): Promise<IMakeRequest<T, E>> => {
  const url = `${env.API}${data.url}`;
  try {
    const response = fetch(url, {
      body: data.body ? JSON.stringify(data.body) : undefined,
      headers: {
        'Content-Type': 'application/json',
      },
      method: data.method,
    });
    const newResponse = await response;
    if (newResponse.ok) {
      return {
        response: await newResponse.json(),
      };
    }
    return Promise.resolve<IMakeRequest<T, E>>({
      error: (await newResponse.json()) as E,
      response: '' as T,
    });
  } catch (error) {
    return Promise.resolve<IMakeRequest<T, E>>({
      error: `Error while connecting ${error}` as E,
      response: '' as T,
    });
  }
};
