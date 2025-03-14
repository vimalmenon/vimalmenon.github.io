import { IAPI, IWorkflowSlim } from '@types';

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

const CreateWorkflow = (body: IWorkflowSlim): IAPI<IWorkflowSlim> => {
  return {
    body,
    method: 'PUT',
    url: 'workflows/create',
  };
};

export const APIs = {
  CreateWorkflow,
  GetLLMs,
  GetTools,
  getUUID,
  GetWorkflows,
};
