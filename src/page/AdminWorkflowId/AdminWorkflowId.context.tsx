'use client';

import { useState } from 'react';
import { FormMode, IAdminWorkflowIdPage, INode, IReactChildren } from '@types';
import { useAdminWorkflowContext } from '../AdminWorkflowContext';
import { INodeTab } from './AdminWorkflowId';
import { Context } from './AdminWorkflowId.service';

export const AdminWorkflowIdContext: React.FC<IAdminWorkflowIdPage & IReactChildren> = ({
  children,
  id,
}) => {
  const [workflowLoading, setWorkflowLoading] = useState<boolean>(false);
  const [nodeTabs, setNodeTabs] = useState<INodeTab[]>([]);
  const [workflowFormMode, setWorkflowFormMode] = useState<FormMode>('VIEW');
  const [loading, setLoading] = useState<boolean>(false);
  const [nodeFormMode, setNodeFormMode] = useState<FormMode>('UPDATE');
  const [selectedNode, setSelectedNode] = useState<INode | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isStart, setIsStart] = useState<boolean>(false);
  const { selectedWorkflow, setSelectedWorkflow } = useAdminWorkflowContext();

  return (
    <Context.Provider
      value={{
        error,
        id,
        isStart,
        loading,
        nodeFormMode,
        nodeTabs,
        selectedNode,
        setError,
        setIsStart,
        setLoading,
        setNodeFormMode,
        setNodeTabs,
        setSelectedNode,
        setWorkflow: setSelectedWorkflow,
        setWorkflowFormMode,
        setWorkflowLoading,
        workflow: selectedWorkflow,
        workflowFormMode,
        workflowLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};
