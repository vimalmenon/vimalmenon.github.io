'use client';

import { useState } from 'react';
import { useAdminContext } from '@context';
import { APIs } from '@data';
import { FormMode, IGenericResponse, ILLM, INode, ITool, IWorkflow } from '@types';
import { makeRequest } from '@utility';

export const useAdminWorkflowId = (id: string) => {
  const [nodes, setNodes] = useState<string[]>([]);
  const [tab, selectedTab] = useState<number>(0);
  const [node, setNode] = useState<string>('');
  const [workflow, setWorkflow] = useState<IWorkflow>();
  const { addLlms, addTools } = useAdminContext();
  const [workflowFormMode, setWorkFlowMode] = useState<FormMode>('VIEW');

  const addNodes = async (): Promise<void> => {
    await makeRequest(
      APIs.CreateWorkflowNode(id, {
        name: node,
      })
    );
    await getWorkFlow();
  };
  const onTabChange = (event: React.SyntheticEvent, newValue: number): void => {
    selectedTab(newValue);
  };
  const getWorkFlow = async (): Promise<void> => {
    const { response } = await makeRequest<IGenericResponse<IWorkflow>>(APIs.GetWorkflowById(id));
    const workflow = response.data;
    setNodes(Object.keys(workflow.nodes));
    setWorkflow(response.data);
  };
  const deleteWorkflowNode = async (nodeId: string): Promise<void> => {
    await makeRequest(APIs.DeleteWorkflowNode(id, nodeId));
    await getWorkFlow();
    selectedTab(0);
  };
  const getLLMs = async (): Promise<void> => {
    const { response } = await makeRequest<IGenericResponse<ILLM[]>>(APIs.GetLLMs());
    addLlms(response.data);
  };
  const getTools = async (): Promise<void> => {
    const { response } = await makeRequest<IGenericResponse<ITool[]>>(APIs.GetTools());
    addTools(response.data);
  };
  const updateNode = async (nodeId: string, data: INode): Promise<void> => {
    await makeRequest<IGenericResponse<ITool[]>>(APIs.UpdateWorkflowNode(id, nodeId, data));
    await getWorkFlow();
  };
  const updateWorkflow = async (data: IWorkflow): Promise<void> => {
    await makeRequest<IGenericResponse<unknown>>(APIs.UpdateWorkflow(id, data));
    await getWorkFlow();
    setWorkFlowMode('VIEW');
  };
  const editWorkflowFormMode = (): void => {
    setWorkFlowMode('UPDATE');
  };
  const viewWorkflowFormMode = (): void => {
    setWorkFlowMode('VIEW');
  };
  return {
    addNodes,
    deleteWorkflowNode,
    editWorkflowFormMode,
    getLLMs,
    getTools,
    getWorkFlow,
    id,
    node,
    nodes,
    onTabChange,
    setNode,
    tab,
    updateNode,
    updateWorkflow,
    viewWorkflowFormMode,
    workflow,
    workflowFormMode,
  };
};
