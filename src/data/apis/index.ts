import {
  IApi,
  IExecuteWorkflowSlim,
  INode,
  INodeSlim,
  IWorkflowExecuteParams,
  IWorkflowSlim,
  IWorkflowUpdate,
} from '@types';

const GetWorkflows = (): IApi => ({
  method: 'GET',
  url: 'workflow',
});

const GetLLMs = (): IApi => ({
  method: 'GET',
  url: 'llms',
});

const getUUID = (): IApi => ({
  method: 'GET',
  url: 'uuid',
});

const GetTools = (): IApi => ({
  method: 'GET',
  url: 'tools',
});

const GetServices = (): IApi => ({
  method: 'GET',
  url: 'services',
});

const GetWorkflowTypes = (): IApi => ({
  method: 'GET',
  url: 'workflow_types',
});

const GetStructuredOutputTypes = (): IApi => ({
  method: 'GET',
  url: 'structured_output_types',
});

const GetWorkflowById = (id: string): IApi => ({
  method: 'GET',
  url: `workflow/${id}`,
});

const CreateWorkflow = (body: IWorkflowSlim): IApi<IWorkflowSlim> => ({
  body,
  method: 'PUT',
  url: 'workflow/create',
});

const CreateWorkflowNode = (wdId: string, body: INodeSlim): IApi<INodeSlim> => ({
  body,
  method: 'PUT',
  url: `workflow/node/${wdId}`,
});

const UpdateWorkflowNode = (wfId: string, id: string, body: INode): IApi<INode> => ({
  body,
  method: 'POST',
  url: `workflow/node/${wfId}/${id}`,
});

const DeleteWorkflowNode = (wfId: string, id: string): IApi => ({
  method: 'DELETE',
  url: `workflow/node/${wfId}/${id}`,
});
const DeleteWorkflow = (id: string): IApi => ({
  method: 'DELETE',
  url: `workflow/${id}`,
});

const UpdateWorkflow = (id: string, body: IWorkflowUpdate): IApi => ({
  body,
  method: 'POST',
  url: `workflow/${id}`,
});

const ExecuteWorkflow = (id: string, body: IExecuteWorkflowSlim): IApi => ({
  body,
  method: 'PUT',
  url: `workflow/execute/${id}`,
});

const GetExecutedWorkflow = (id: string): IApi => ({
  method: 'GET',
  url: `workflow/execute/${id}`,
});

const GetExecutedWorkflowId = (wfId: string, id: string): IApi => ({
  method: 'GET',
  url: `workflow/execute/${wfId}/${id}`,
});

const DeleteExecutedWorkflow = (wfId: string, id: string): IApi => ({
  method: 'DELETE',
  url: `workflow/execute/${wfId}/${id}`,
});

const ExecuteWorkflowNode = (wfId: string, id: string, body: IWorkflowExecuteParams): IApi => ({
  body,
  method: 'POST',
  url: `workflow/execute/resume/${wfId}/${id}`,
});

const GetDbServiceData = (): IApi => ({
  method: 'GET',
  url: `llm_data/db`,
});

const DeleteDbServiceData = (id: string): IApi => ({
  method: 'DELETE',
  url: `llm_data/db/${id}`,
});

const GetLinkGroup = (): IApi => ({
  method: 'GET',
  url: `links`,
});

const CreateLinkGroup = (name: string): IApi => ({
  body: {
    name,
  },
  method: 'PUT',
  url: `links`,
});

const CreateLink = (id: string, body: { name: string; link: string; reference: string }): IApi => ({
  body,
  method: 'PUT',
  url: `links/${id}`,
});

export const APIs = {
  CreateLink,
  CreateLinkGroup,
  CreateWorkflow,
  CreateWorkflowNode,
  DeleteDbServiceData,
  DeleteExecutedWorkflow,
  DeleteWorkflow,
  DeleteWorkflowNode,
  ExecuteWorkflow,
  ExecuteWorkflowNode,
  GetDbServiceData,
  GetExecutedWorkflow,
  GetExecutedWorkflowId,
  GetLinkGroup,
  GetLLMs,
  GetServices,
  GetStructuredOutputTypes,
  GetTools,
  getUUID,
  GetWorkflowById,
  GetWorkflows,
  GetWorkflowTypes,
  UpdateWorkflow,
  UpdateWorkflowNode,
};
