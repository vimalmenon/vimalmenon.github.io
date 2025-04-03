'use client';

import { createContext, useContext } from 'react';
import { useAdminContext } from '@context';
import { APIs } from '@data';
import { IGenericResponse, INode, INodeSlim, ITool, IWorkflow } from '@types';
import { makeRequest, NotImplemented } from '@utility';
import { IContext, IUseTabHelper } from './AdminWorkflowId';

export const getNodeAsList = (node: Record<string, INode>): INode[] => {
  return Object.keys(node).map((key) => node[key]);
};

export const Context = createContext<IContext>({
  id: '0',
  loading: false,
  nodes: [],
  selectedTab: 0,
  setLoading: NotImplemented,
  setNodes: NotImplemented,
  setSelectedTab: NotImplemented,
  setWorkflow: NotImplemented,
  setWorkflowFormMode: NotImplemented,
  setWorkflowLoading: NotImplemented,
  workflowFormMode: 'VIEW',
  workflowLoading: false,
});

export const useWorkflowContext = (): IContext => useContext(Context);

export const useWorkflowDataHelper = () => {
  const {
    id,
    setLoading,
    setNodes,
    setSelectedTab,
    setWorkflow,
    setWorkflowFormMode,
    setWorkflowLoading,
  } = useWorkflowContext();
  const { getLLMs, getTools } = useAdminContext();
  const getWorkFlow = async (): Promise<void> => {
    setWorkflowLoading(true);
    const { response } = await makeRequest<IGenericResponse<IWorkflow>>(APIs.GetWorkflowById(id));
    const workflow = response.data;
    setNodes(Object.keys(workflow.nodes));
    setWorkflow(workflow);
    setWorkflowLoading(false);
  };
  const updateWorkflow = async (data: IWorkflow): Promise<void> => {
    setLoading(true);
    await makeRequest<IGenericResponse<unknown>>(APIs.UpdateWorkflow(id, data));
    await getWorkFlow();
    setWorkflowFormMode('VIEW');
    setLoading(false);
  };
  const deleteNode = async (nodeId: string): Promise<void> => {
    await makeRequest(APIs.DeleteWorkflowNode(id, nodeId));
    await getWorkFlow();
    setSelectedTab(0);
  };
  const updateNode = async (nodeId: string, data: INode): Promise<void> => {
    await makeRequest<IGenericResponse<ITool[]>>(APIs.UpdateWorkflowNode(id, nodeId, data));
    await getWorkFlow();
  };
  const createNode = async (data: INodeSlim): Promise<void> => {
    await makeRequest(APIs.CreateWorkflowNode(id, data));
    await getWorkFlow();
  };
  const executeWorkflow = async (): Promise<void> => {
    await makeRequest<IGenericResponse<unknown>>(APIs.ExecuteWorkflow(id));
  };
  return {
    createNode,
    deleteNode,
    executeWorkflow,
    getLLMs,
    getTools,
    getWorkFlow,
    id,
    updateNode,
    updateWorkflow,
  };
};

export const useTabHelper = (): IUseTabHelper => {
  const { selectedTab, setSelectedTab } = useWorkflowContext();
  const onTabChange = (event: React.SyntheticEvent, newValue: number): void => {
    setSelectedTab(newValue);
  };
  return {
    onTabChange,
    selectedTab,
  };
};

export const useWorkflowFormHelper = () => {
  const { setWorkflowFormMode, workflowFormMode } = useWorkflowContext();
  const editWorkflowFormMode = (): void => {
    setWorkflowFormMode('UPDATE');
  };
  const viewWorkflowFormMode = (): void => {
    setWorkflowFormMode('VIEW');
  };
  return {
    editWorkflowFormMode,
    viewWorkflowFormMode,
    workflowFormMode,
  };
};
