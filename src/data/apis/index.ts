import { IAPI } from '@types';

const GetWorkflows = (): IAPI => {
  return {
    method: 'GET',
    url: 'workflow',
  };
};

const GetLLMs = (): IAPI => {
  return {
    method: 'GET',
    url: 'llms',
  };
};

export const APIs = {
  GetLLMs,
  GetWorkflows,
};
