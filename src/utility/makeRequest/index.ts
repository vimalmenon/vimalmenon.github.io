import { env } from '@data';
import { IAPI } from '@types';

export const makeRequest = async <T>(data: IAPI): Promise<T> => {
  const url = `${env.API}${data.url}`;
  const response = fetch(url, {
    body: data.body ? JSON.stringify(data.body) : undefined,
    headers: {
      'Content-Type': 'application/json',
    },
    method: data.method,
  });
  return (await response).json();
};
