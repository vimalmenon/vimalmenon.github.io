'use client';

import { useState } from 'react';
import { IExecuteWorkflow, IReactChildren, IWorkflow } from '@types';
import { IAdminWorkflowContextComponent } from './AdminWorkflowContext';
import { Context } from './AdminWorkflowContext.service';

export const AdminWorkflowContext: React.FC<IAdminWorkflowContextComponent & IReactChildren> = ({
  children,
  executeId,
  id,
}) => {
  const [executedWorkflows, setExecutedWorkflows] = useState<IExecuteWorkflow[]>([]);
  const [selectedExecutedWorkflow, setSelectedExecutedWorkflow] = useState<IExecuteWorkflow | null>(
    null
  );

  return (
    <Context.Provider
      value={{
        executedWorkflows,
        executeId,
        id,
        selectedExecutedWorkflow,
        setExecutedWorkflows,
        setSelectedExecutedWorkflow,
      }}
    >
      {children}
    </Context.Provider>
  );
};
