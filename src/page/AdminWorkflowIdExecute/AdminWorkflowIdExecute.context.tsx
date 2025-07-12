'use client';

import { useState } from 'react';
import {
  IAdminWorkflowIdPage,
  IDbServiceData,
  IExecuteWorkflow,
  IExecuteWorkflowNode,
  IReactChildren,
} from '@types';
import { useAdminWorkflowContext } from '../AdminWorkflowContext';
import { Context } from './AdminWorkflowIdExecute.service';

export const AdminWorkflowIdExecuteContext: React.FC<IReactChildren & IAdminWorkflowIdPage> = ({
  children,
  id,
}) => {
  const [selectedWorkflow, setSelectedWorkflow] = useState<IExecuteWorkflow | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [showCreate, setShowCreate] = useState<boolean>(false);
  const [dbServiceData, setDbServiceData] = useState<IDbServiceData[]>([]);
  const [selectedWorkflowNode, setSelectedWorkflowNode] = useState<IExecuteWorkflowNode | null>(
    null
  );
  const { executedWorkflows, setExecutedWorkflows } = useAdminWorkflowContext();

  return (
    <Context.Provider
      value={{
        dbServiceData,
        executedWorkflows,
        id,
        loading,
        selectedWorkflow,
        selectedWorkflowNode,
        setDbServiceData,
        setExecutedWorkflows,
        setLoading,
        setSelectedWorkflow,
        setSelectedWorkflowNode,
        setShowCreate,
        showCreate,
      }}
    >
      {children}
    </Context.Provider>
  );
};
