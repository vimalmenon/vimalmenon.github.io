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

const getUUID = (): IAPI => {
  return {
    method: 'GET',
    url: 'uuid',
  };
};

export const APIs = {
  GetLLMs,
  getUUID,
  GetWorkflows,
};
