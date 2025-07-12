'use client';

import { useState } from 'react';
import { IReactChildren, IWorkflow } from '@types';
import { IAdminWorkflowContextComponent } from './AdminWorkflowContext';
import { Context } from './AdminWorkflowContext.service';

export const AdminWorkflowContext: React.FC<IAdminWorkflowContextComponent & IReactChildren> = ({
  children,
  executeId,
  id,
}) => {
  const [workflows, setWorkflows] = useState<IWorkflow[]>([]);
  const [selectedWorkflow, setSelectedWorkflow] = useState<IWorkflow | null>(null);
  return (
    <Context.Provider
      value={{ executeId, id, selectedWorkflow, setSelectedWorkflow, setWorkflows, workflows }}
    >
      {children}
    </Context.Provider>
  );
};
