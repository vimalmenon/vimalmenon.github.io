'use client';

import { useState } from 'react';
import { IAdminWorkflowIdPage, IExecuteWorkflowNode, IReactChildren } from '@types';
import { useAdminWorkflowContext } from '../AdminWorkflowContext';
import { Context } from './AdminWorkflowIdExecute.service';

export const AdminWorkflowIdExecuteContext: React.FC<IReactChildren & IAdminWorkflowIdPage> = ({
  children,
  id,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [showCreate, setShowCreate] = useState<boolean>(false);
  const [selectedWorkflowNode, setSelectedWorkflowNode] = useState<IExecuteWorkflowNode | null>(
    null
  );
  const { executedWorkflows, setExecutedWorkflows } = useAdminWorkflowContext();

  return (
    <Context.Provider
      value={{
        executedWorkflows,
        id,
        loading,
        selectedWorkflowNode,
        setExecutedWorkflows,
        setLoading,
        setSelectedWorkflowNode,
        setShowCreate,
        showCreate,
      }}
    >
      {children}
    </Context.Provider>
  );
};
