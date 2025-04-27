import { IAPI, INode, INodeSlim, IWorkflow, IWorkflowSlim } from '@types';

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
    url: `workflows/node/${wdId}`,
  };
};

const UpdateWorkflowNode = (wfId: string, id: string, body: INode): IAPI<INode> => {
  return {
    body,
    method: 'POST',
    url: `workflows/node/${wfId}/${id}`,
  };
};

const DeleteWorkflowNode = (wfId: string, id: string): IAPI => {
  return {
    method: 'DELETE',
    url: `workflows/node/${wfId}/${id}`,
  };
};
const DeleteWorkflow = (id: string): IAPI => {
  return {
    method: 'DELETE',
    url: `workflows/${id}`,
  };
};

const UpdateWorkflow = (id: string, body: IWorkflow): IAPI => {
  return {
    body,
    method: 'POST',
    url: `workflows/${id}`,
  };
};

const ExecuteWorkflow = (id: string): IAPI => {
  return {
    method: 'POST',
    url: `workflows/execute/${id}`,
  };
};

const HistoryWorkflow = (): IAPI => {
  return {
    method: 'POST',
    url: 'workflows/history',
  };
};

export const APIs = {
  CreateWorkflow,
  CreateWorkflowNode,
  DeleteWorkflow,
  DeleteWorkflowNode,
  ExecuteWorkflow,
  GetLLMs,
  GetTools,
  getUUID,
  GetWorkflowById,
  GetWorkflows,
  HistoryWorkflow,
  UpdateWorkflow,
  UpdateWorkflowNode,
};
