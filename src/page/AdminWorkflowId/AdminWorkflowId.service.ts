'use client';

import { useState } from 'react';

export const useAdminWorkflowId = (id: string) => {
  const [nodes, setNodes] = useState<string[]>([]);
  const addNodes = (): void => {
    setNodes([...nodes, '']);
  };
  const removeNode = (index: number): void => {
    nodes.splice(index, 1);
    setNodes([...nodes]);
  };
  return {
    addNodes,
    id,
    nodes,
    removeNode,
  };
};
