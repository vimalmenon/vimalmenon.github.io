'use client';

import { useState } from 'react';

export const useAdminWorkflowId = (id: string) => {
  const [nodes, setNodes] = useState<string[]>([]);
  const [tab, selectedTab] = useState<number>(0);
  const addNodes = (): void => {
    setNodes([...nodes, '']);
  };
  const removeNode = (index: number): void => {
    nodes.splice(index, 1);
    setNodes([...nodes]);
  };
  const onTabChange = (event: React.SyntheticEvent, newValue: number) => {
    selectedTab(newValue);
  };
  return {
    addNodes,
    id,
    nodes,
    onTabChange,
    removeNode,
    tab,
  };
};
