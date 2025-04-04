'use client';

import { useState } from 'react';
import { FormMode, IWorkflow } from '@types';
import { IAdminWorkflowIdContext, INodeTab } from './AdminWorkflowId';
import { Context } from './AdminWorkflowId.service';

export const AdminWorkflowIdContext: React.FC<IAdminWorkflowIdContext> = ({ children, id }) => {
  const [workflow, setWorkflow] = useState<IWorkflow>();
  const [workflowLoading, setWorkflowLoading] = useState<boolean>(false);
  const [selectedNode, setSelectedNode] = useState<string>('');
  const [nodes, setNodes] = useState<string[]>([]);
  const [nodeTabs, setNodeTabs] = useState<INodeTab[]>([]);
  const [workflowFormMode, setWorkflowFormMode] = useState<FormMode>('VIEW');
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <Context.Provider
      value={{
        id,
        loading,
        nodes,
        nodeTabs,
        selectedNode,
        setLoading,
        setNodes,
        setNodeTabs,
        setSelectedNode,
        setWorkflow,
        setWorkflowFormMode,
        setWorkflowLoading,
        workflow,
        workflowFormMode,
        workflowLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};
