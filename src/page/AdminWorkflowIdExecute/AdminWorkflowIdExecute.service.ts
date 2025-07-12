'use client';

import { createContext, useContext } from 'react';
import { APIs } from '@data';
import {
  IExecuteWorkflow,
  IExecuteWorkflowNode,
  IExecuteWorkflowSlim,
  IGenericResponse,
} from '@types';
import { makeRequest, NotImplemented } from '@utility';
import {
  IAdminWorkflowIdExecuteContext,
  IUseWorkflowExecuteHelper,
  IUseWorkflowNodeDetailHelper,
} from './AdminWorkflowIdExecute';

export const Context = createContext<IAdminWorkflowIdExecuteContext>({
  executedWorkflows: [],
  id: '',
  loading: false,
  selectedWorkflowNode: null,
  setExecutedWorkflows: NotImplemented,
  setLoading: NotImplemented,
  setSelectedWorkflowNode: NotImplemented,
  setShowCreate: NotImplemented,
  showCreate: false,
});

export const useAdminWorkflowIdExecuteContext = (): IAdminWorkflowIdExecuteContext =>
  useContext<IAdminWorkflowIdExecuteContext>(Context);

export const useWorkflowExecuteHelper = (): IUseWorkflowExecuteHelper => {
  const { id, setExecutedWorkflows, setLoading, setSelectedWorkflowNode, setShowCreate } =
    useAdminWorkflowIdExecuteContext();
  const getExecutedWorkflow = async (handle: boolean = true): Promise<void> => {
    if (handle) {
      setLoading(true);
    }
    const { response } = await makeRequest<IGenericResponse<IExecuteWorkflow[]>>(
      APIs.GetExecutedWorkflow(id)
    );
    setExecutedWorkflows(response.data);
    if (handle) {
      setLoading(false);
    }
  };
  const executeWorkflow = async (data: IExecuteWorkflowSlim): Promise<void> => {
    setLoading(true);
    await makeRequest<IGenericResponse<unknown>>(APIs.ExecuteWorkflow(id, data));
    await getExecutedWorkflow(false);
    setLoading(false);
    setShowCreate(false);
  };
  const deleteExecutedWorkflow = async (eId: string): Promise<void> => {
    setLoading(true);
    await makeRequest<IGenericResponse<unknown>>(APIs.DeleteExecutedWorkflow(id, eId));
    await getExecutedWorkflow(false);
    setLoading(false);
  };
  const onSelectedWorkflowNode = (data: IExecuteWorkflowNode): void => {
    setSelectedWorkflowNode(data);
  };

  return {
    deleteExecutedWorkflow,
    executeWorkflow,
    getExecutedWorkflow,
    onSelectedWorkflowNode,
  };
};

export const useWorkflowNodeDetailHelper = (): IUseWorkflowNodeDetailHelper => {
  const { selectedWorkflowNode, setSelectedWorkflowNode } = useAdminWorkflowIdExecuteContext();
  const closeSelectedWorkflow = (): void => {
    setSelectedWorkflowNode(null);
  };
  const onSelectedWorkflowNodeSubmit = async (): Promise<void> => {
    await Promise.resolve([]);
  };
  return {
    closeSelectedWorkflow,
    onSelectedWorkflowNodeSubmit,
    selectedWorkflowNode,
  };
};
