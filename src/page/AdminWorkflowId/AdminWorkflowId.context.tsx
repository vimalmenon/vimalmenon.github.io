'use client';

import { useState } from 'react';
import { FormMode, INode, IWorkflow } from '@types';
import { IAdminWorkflowIdContext, INodeTab } from './AdminWorkflowId';
import { Context } from './AdminWorkflowId.service';

export const AdminWorkflowIdContext: React.FC<IAdminWorkflowIdContext> = ({ children, id }) => {
  const [workflow, setWorkflow] = useState<IWorkflow>();
  const [workflowLoading, setWorkflowLoading] = useState<boolean>(false);
  const [nodes, setNodes] = useState<string[]>([]);
  const [nodeTabs, setNodeTabs] = useState<INodeTab[]>([]);
  const [workflowFormMode, setWorkflowFormMode] = useState<FormMode>('VIEW');
  const [loading, setLoading] = useState<boolean>(false);
  const [nodeFormMode, setNodeFormMode] = useState<FormMode>('UPDATE');
  const [selectedNode, setSelectedNode] = useState<INode | null>(null);
  const [error, setError] = useState<string | null>(null);
  return (
    <Context.Provider
      value={{
        error,
        id,
        loading,
        nodeFormMode,
        nodes,
        nodeTabs,
        selectedNode,
        setError,
        setLoading,
        setNodeFormMode,
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
