'use client';

import { useState } from 'react';
import { FormMode, IReactChildren, IWorkflow } from '@types';
import { Context } from './AdminWorkflows.services';

export const AdminWorkflowsContext: React.FC<IReactChildren> = ({ children }) => {
  const [mode, setMode] = useState<FormMode>('VIEW');
  const [loading, setLoading] = useState<boolean>(false);
  const [dataLoading, setDataLoading] = useState<boolean>(false);
  const [workflows, setWorkflows] = useState<IWorkflow[]>([]);

  return (
    <Context.Provider
      value={{
        dataLoading,
        loading,
        mode,
        setDataLoading,
        setLoading,
        setMode,
        setWorkflows,
        workflows,
      }}
    >
      {children}
    </Context.Provider>
  );
};
