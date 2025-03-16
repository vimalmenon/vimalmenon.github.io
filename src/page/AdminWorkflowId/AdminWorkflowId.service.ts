'use client';

import { useState } from 'react';
import { APIs } from '@data';
import { IGenericResponse, IWorkflow } from '@types';
import { makeRequest } from '@utility';

export const useAdminWorkflowId = (id: string) => {
  const [nodes, setNodes] = useState<string[]>([]);
  const [tab, selectedTab] = useState<number>(0);
  const [node, setNode] = useState<string>('');
  const [workflow, setWorkflows] = useState<IWorkflow>();
  const addNodes = async (): Promise<void> => {
    await makeRequest(
      APIs.CreateWorkflowNode(id, {
        name: node,
      })
    );
    setNodes([...nodes, '']);
  };
  const removeNode = (index: number): void => {
    nodes.splice(index, 1);
    setNodes([...nodes]);
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
  return {
    addNodes,
    getWorkFlow,
    id,
    node,
    nodes,
    onTabChange,
    removeNode,
    setNode,
    tab,
    workflow,
  };
};
