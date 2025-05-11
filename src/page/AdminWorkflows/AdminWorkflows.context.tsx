'use client';

import { useState } from 'react';
import { FormMode, IReactChildren, IWorkflow } from '@types';
import { Context } from './AdminWorkflows.services';

export const AdminWorkflowsContext: React.FC<IReactChildren> = ({ children }) => {
  const [mode, setMode] = useState<FormMode>('VIEW');
  const [loading, setLoading] = useState<boolean>(false);
  const [workflows, setWorkflows] = useState<IWorkflow[]>([]);
  const [selectedWorkflow, setSelectedWorkflow] = useState<IWorkflow | null>(null);
  return (
    <Context.Provider
      value={{
        loading,
        mode,
        selectedWorkflow,
        setLoading,
        setMode,
        setSelectedWorkflow,
        setWorkflows,
        workflows,
      }}
    >
      {children}
    </Context.Provider>
  );
};
