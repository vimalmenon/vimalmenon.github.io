import { IAPI, INodeSlim, IWorkflowSlim } from '@types';

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

const GetWorkflowById = (id: string): IAPI => {
  return {
    method: 'GET',
    url: `workflows/${id}`,
  };
};

const CreateWorkflow = (body: IWorkflowSlim): IAPI<IWorkflowSlim> => {
  return {
    body,
    method: 'PUT',
    url: 'workflows/create',
  };
};

const CreateWorkflowNode = (wdId: string, body: INodeSlim): IAPI<INodeSlim> => {
  return {
    body,
    method: 'PUT',
    url: `workflows/node/create/${wdId}`,
  };
};

const UpdateWorkflowNode = (wfId: string, id: string, body: IWorkflowSlim): IAPI<IWorkflowSlim> => {
  return {
    body,
    method: 'PUT',
    url: `workflows/node/updated/${wfId}/${id}`,
  };
};

const DeleteWorkflow = (id: string): IAPI => {
  return {
    method: 'DELETE',
    url: `workflows/${id}`,
  };
};

export const APIs = {
  CreateWorkflow,
  CreateWorkflowNode,
  DeleteWorkflow,
  GetLLMs,
  GetTools,
  getUUID,
  GetWorkflowById,
  GetWorkflows,
  UpdateWorkflowNode,
};
