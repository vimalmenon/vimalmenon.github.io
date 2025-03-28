'use client';

import { useState } from 'react';
import { IWorkflow } from '@types';
import { IAdminWorkflowIdContext } from './AdminWorkflowId';
import { Context } from './AdminWorkflowId.service';

export const AdminWorkflowIdContext: React.FC<IAdminWorkflowIdContext> = ({ children, id }) => {
  const [workflow, setWorkflow] = useState<IWorkflow>();
  const [workflowLoading, setWorkflowLoading] = useState<boolean>(false);
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [nodes, setNodes] = useState<string[]>([]);
  return (
    <Context.Provider
      value={{
        id,
        nodes,
        selectedTab,
        setNodes,
        setSelectedTab,
        setWorkflow,
        setWorkflowLoading,
        workflow,
        workflowLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};
