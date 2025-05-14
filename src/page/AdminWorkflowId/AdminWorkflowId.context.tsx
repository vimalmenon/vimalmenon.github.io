'use client';

import { useState } from 'react';
import { FormMode, INode, ISelectOption, IWorkflow } from '@types';
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
  const [showHistory, setShowHistory] = useState<boolean>(false);
  const [nextNodeOptions, setNextNodeOptions] = useState<ISelectOption[]>([]);
  return (
    <Context.Provider
      value={{
        error,
        id,
        loading,
        nextNodeOptions,
        nodeFormMode,
        nodes,
        nodeTabs,
        selectedNode,
        setError,
        setLoading,
        setNextNodeOptions,
        setNodeFormMode,
        setNodes,
        setNodeTabs,
        setSelectedNode,
        setShowHistory,
        setWorkflow,
        setWorkflowFormMode,
        setWorkflowLoading,
        showHistory,
        workflow,
        workflowFormMode,
        workflowLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};
