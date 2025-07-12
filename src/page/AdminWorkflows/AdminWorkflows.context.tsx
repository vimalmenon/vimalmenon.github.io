'use client';

import { useState } from 'react';
import { FormMode, IReactChildren, IWorkflow } from '@types';
import { useAdminWorkflowContext } from '../AdminWorkflowContext';
import { Context } from './AdminWorkflows.services';

export const AdminWorkflowsContext: React.FC<IReactChildren> = ({ children }) => {
  const [mode, setMode] = useState<FormMode>('VIEW');
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedWorkflow, setSelectedWorkflow] = useState<IWorkflow | null>(null);
  const [dataLoading, setDataLoading] = useState<boolean>(false);
  const { setWorkflows, workflows } = useAdminWorkflowContext();
  return (
    <Context.Provider
      value={{
        dataLoading,
        loading,
        mode,
        selectedWorkflow,
        setDataLoading,
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
