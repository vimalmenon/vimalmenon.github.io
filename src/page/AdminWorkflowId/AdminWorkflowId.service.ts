'use client';

import { useState } from 'react';
import { APIs } from '@data';
import { makeRequest } from '@utility';

export const useAdminWorkflowId = (id: string) => {
  const [nodes, setNodes] = useState<string[]>([]);
  const [tab, selectedTab] = useState<number>(0);
  const [node, setNode] = useState<string>('');
  const addNodes = async (): Promise<void> => {
    const {} = await makeRequest(
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
  return {
    addNodes,
    id,
    node,
    nodes,
    onTabChange,
    removeNode,
    setNode,
    tab,
  };
};
