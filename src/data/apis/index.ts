import { IAPI, INode, INodeSlim, IWorkflow, IWorkflowSlim } from '@types';

const GetWorkflows = (): IAPI => ({
  method: 'GET',
  url: 'workflow',
});

const GetLLMs = (): IAPI => ({
  method: 'GET',
  url: 'llms',
});

const getUUID = (): IAPI => ({
  method: 'GET',
  url: 'uuid',
});

const GetTools = (): IAPI => ({
  method: 'GET',
  url: 'tools',
});

const GetWorkflowById = (id: string): IAPI => ({
  method: 'GET',
  url: `workflow/${id}`,
});

const CreateWorkflow = (body: IWorkflowSlim): IAPI<IWorkflowSlim> => ({
  body,
  method: 'PUT',
  url: 'workflow/create',
});

const CreateWorkflowNode = (wdId: string, body: INodeSlim): IAPI<INodeSlim> => ({
  body,
  method: 'PUT',
  url: `workflow/node/${wdId}`,
});

const UpdateWorkflowNode = (wfId: string, id: string, body: INode): IAPI<INode> => ({
  body,
  method: 'POST',
  url: `workflow/node/${wfId}/${id}`,
});

const DeleteWorkflowNode = (wfId: string, id: string): IAPI => ({
  method: 'DELETE',
  url: `workflow/node/${wfId}/${id}`,
});
const DeleteWorkflow = (id: string): IAPI => ({
  method: 'DELETE',
  url: `workflow/${id}`,
});

const UpdateWorkflow = (id: string, body: IWorkflow): IAPI => ({
  body,
  method: 'POST',
  url: `workflow/${id}`,
});

const ExecuteWorkflow = (id: string): IAPI => ({
  method: 'POST',
  url: `workflow/execute/${id}`,
});

const HistoryWorkflow = (): IAPI => ({
  method: 'POST',
  url: 'workflow/history',
});

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
