import { IAPI } from '@types';

const GetWorkflows = (): IAPI => {
  return {
    method: 'GET',
    url: 'workflows',
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

const GetTools = (): IAPI => {
  return {
    method: 'GET',
    url: 'tools',
  };
};

export const APIs = {
  GetLLMs,
  GetTools,
  getUUID,
  GetWorkflows,
};
