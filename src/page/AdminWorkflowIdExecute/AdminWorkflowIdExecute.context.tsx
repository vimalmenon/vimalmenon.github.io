'use client';

import { useState } from 'react';
import {
  IAdminWorkflowIdPage,
  IDbServiceData,
  IExecuteWorkflow,
  IExecuteWorkflowNode,
  IReactChildren,
} from '@types';
import { Context } from './AdminWorkflowIdExecute.service';

export const AdminWorkflowIdExecuteContext: React.FC<IReactChildren & IAdminWorkflowIdPage> = ({
  children,
  id,
}) => {
  const [workflows, setWorkFlows] = useState<IExecuteWorkflow[]>([]);
  const [selectedWorkflow, setSelectedWorkflow] = useState<IExecuteWorkflow | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [showCreate, setShowCreate] = useState<boolean>(false);
  const [dbServiceData, setDbServiceData] = useState<IDbServiceData[]>([]);
  const [selectedWorkflowNode, setSelectedWorkflowNode] = useState<IExecuteWorkflowNode | null>(
    null
  );
  return (
    <Context.Provider
      value={{
        dbServiceData,
        id,
        loading,
        selectedWorkflow,
        selectedWorkflowNode,
        setDbServiceData,
        setLoading,
        setSelectedWorkflow,
        setSelectedWorkflowNode,
        setShowCreate,
        setWorkFlows,
        showCreate,
        workflows,
      }}
    >
      {children}
    </Context.Provider>
  );
};
