import { IAPI, IExecuteWorkflowSlim, INode, INodeSlim, IWorkflow, IWorkflowSlim } from '@types';

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

const GetServices = (): IAPI => ({
  method: 'GET',
  url: 'services',
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

const ExecuteWorkflow = (id: string, body: IExecuteWorkflowSlim): IAPI => ({
  body,
  method: 'PUT',
  url: `workflow/execute/${id}`,
});

const GetExecutedWorkflow = (id: string): IAPI => ({
  method: 'GET',
  url: `workflow/execute/${id}`,
});

const GetWorkflowTypes = (): IAPI => ({
  method: 'GET',
  url: 'workflow_types',
});

const DeleteExecutedWorkflow = (wfId: string, id: string): IAPI => ({
  method: 'DELETE',
  url: `workflow/execute/${wfId}/${id}`,
});

export const APIs = {
  CreateWorkflow,
  CreateWorkflowNode,
  DeleteExecutedWorkflow,
  DeleteWorkflow,
  DeleteWorkflowNode,
  ExecuteWorkflow,
  GetExecutedWorkflow,
  GetLLMs,
  GetServices,
  GetTools,
  getUUID,
  GetWorkflowById,
  GetWorkflows,
  GetWorkflowTypes,
  UpdateWorkflow,
  UpdateWorkflowNode,
};
