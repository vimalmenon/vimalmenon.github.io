'use client';

import { useState } from 'react';
import { FormMode, IWorkflow } from '@types';
import { IAdminWorkflowIdContext } from './AdminWorkflowId';
import { Context } from './AdminWorkflowId.service';

export const AdminWorkflowIdContext: React.FC<IAdminWorkflowIdContext> = ({ children, id }) => {
  const [workflow, setWorkflow] = useState<IWorkflow>();
  const [workflowLoading, setWorkflowLoading] = useState<boolean>(false);
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [nodes, setNodes] = useState<string[]>([]);
  const [workflowFormMode, setWorkflowFormMode] = useState<FormMode>('VIEW');
  const [loading, setLoading] = useState<boolean>(false);
  const [showAddNode, setShowAddNode] = useState<boolean>(false);

  return (
    <Context.Provider
      value={{
        id,
        loading,
        nodes,
        selectedTab,
        setLoading,
        setNodes,
        setSelectedTab,
        setShowAddNode,
        setWorkflow,
        setWorkflowFormMode,
        setWorkflowLoading,
        showAddNode,
        workflow,
        workflowFormMode,
        workflowLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};
