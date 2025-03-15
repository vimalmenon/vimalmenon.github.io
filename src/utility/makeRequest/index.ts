import { env } from '@data';
import { IAPI, IMakeRequest } from '@types';

export const makeRequest = async <T>(data: IAPI): Promise<IMakeRequest<T>> => {
  const url = `${env.API}${data.url}`;
  try {
    const response = fetch(url, {
      body: data.body ? JSON.stringify(data.body) : undefined,
      headers: {
        'Content-Type': 'application/json',
      },
      method: data.method,
    });
    return {
      response: await (await response).json(),
    };
  } catch (error) {
    return Promise.resolve({
      error: `Error while connecting ${error}`,
      response: '' as T,
    });
  }
};
