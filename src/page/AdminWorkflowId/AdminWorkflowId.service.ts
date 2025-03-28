'use client';

import { createContext, useContext, useState } from 'react';
import { useAdminContext } from '@context';
import { APIs } from '@data';
import { FormMode, IGenericResponse, INode, ITool, IWorkflow } from '@types';
import { makeRequest, NotImplemented } from '@utility';
import { IContext } from './AdminWorkflowId';

export const getNodeAsList = (node: Record<string, INode>): INode[] => {
  return Object.keys(node).map((key) => node[key]);
};

export const Context = createContext<IContext>({
  id: '0',
  nodes: [],
  selectedTab: 0,
  setNodes: NotImplemented,
  setSelectedTab: NotImplemented,
  setWorkflow: NotImplemented,
  setWorkflowFormMode: NotImplemented,
  setWorkflowLoading: NotImplemented,
  workflowFormMode: 'VIEW',
  workflowLoading: false,
});

export const useWorkflowContext = (): IContext => useContext(Context);

export const useAdminWorkflowId = (id: string) => {
  const [node, setNode] = useState<string>('');
  const [workflowFormMode, setWorkFlowMode] = useState<FormMode>('VIEW');

  const addNodes = async (): Promise<void> => {
    await makeRequest(
      APIs.CreateWorkflowNode(id, {
        name: node,
      })
    );
    // await getWorkFlow();
  };
  const deleteWorkflowNode = async (nodeId: string): Promise<void> => {
    await makeRequest(APIs.DeleteWorkflowNode(id, nodeId));
    // await getWorkFlow();
    // selectedTab(0);
  };
  const updateNode = async (nodeId: string, data: INode): Promise<void> => {
    await makeRequest<IGenericResponse<ITool[]>>(APIs.UpdateWorkflowNode(id, nodeId, data));
    // await getWorkFlow();
  };
  const updateWorkflow = async (data: IWorkflow): Promise<void> => {
    await makeRequest<IGenericResponse<unknown>>(APIs.UpdateWorkflow(id, data));
    // await getWorkFlow();
    setWorkFlowMode('VIEW');
  };
  const executeWorkflow = async (): Promise<void> => {
    await makeRequest<IGenericResponse<unknown>>(APIs.ExecuteWorkflow(id));
  };
  return {
    addNodes,
    deleteWorkflowNode,
    executeWorkflow,
    node,
    setNode,
    updateNode,
    updateWorkflow,
    workflowFormMode,
  };
};

export const useWorkflowDataHelper = () => {
  const { id, setNodes, setWorkflow, setWorkflowFormMode, setWorkflowLoading } =
    useWorkflowContext();
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
    await makeRequest<IGenericResponse<unknown>>(APIs.UpdateWorkflow(id, data));
    await getWorkFlow();
    setWorkflowFormMode('VIEW');
  };
  return {
    getLLMs,
    getTools,
    getWorkFlow,
    id,
    updateWorkflow,
  };
};

export const useTabHelper = () => {
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
