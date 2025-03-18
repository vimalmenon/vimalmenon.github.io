'use client';

import { useState } from 'react';
import { useAdminContext } from '@context';
import { APIs } from '@data';
import { IGenericResponse, ILLM, ITool, IWorkflow } from '@types';
import { makeRequest } from '@utility';

export const useAdminWorkflowId = (id: string) => {
  const [nodes, setNodes] = useState<string[]>([]);
  const [tab, selectedTab] = useState<number>(0);
  const [node, setNode] = useState<string>('');
  const [workflow, setWorkflows] = useState<IWorkflow>();
  const { addLlms, addTools } = useAdminContext();
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
    setWorkflows(response.data);
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
  return {
    addNodes,
    deleteWorkflowNode,
    getLLMs,
    getTools,
    getWorkFlow,
    id,
    node,
    nodes,
    onTabChange,
    setNode,
    tab,
    workflow,
  };
};
