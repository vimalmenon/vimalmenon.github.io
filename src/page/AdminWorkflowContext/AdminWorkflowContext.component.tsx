'use client';

import { useMemo, useState } from 'react';
import { IExecuteWorkflow, IReactChildren, IWorkflow } from '@types';
import { IAdminWorkflowContextComponent } from './AdminWorkflowContext';
import { Context } from './AdminWorkflowContext.service';

export const AdminWorkflowContext: React.FC<IAdminWorkflowContextComponent & IReactChildren> = ({
  children,
  executeId,
  id,
}) => {
  const [workflows, setWorkflows] = useState<IWorkflow[]>([]);
  const [selectedWorkflow, setSelectedWorkflow] = useState<IWorkflow | null>(null);
  const [executedWorkflows, setExecutedWorkflows] = useState<IExecuteWorkflow[]>([]);
  const [selectedExecutedWorkflow, setSelectedExecutedWorkflow] = useState<IExecuteWorkflow | null>(
    null
  );

  const value = useMemo(
    () => ({
      executedWorkflows,
      executeId,
      id,
      selectedExecutedWorkflow,
      selectedWorkflow,
      setExecutedWorkflows,
      setSelectedExecutedWorkflow,
      setSelectedWorkflow,
      setWorkflows,
      workflows,
    }),
    []
  );
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
