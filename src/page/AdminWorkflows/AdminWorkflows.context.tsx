'use client';

import { useState } from 'react';
import { FormMode, IAlert, IReactChildren, IWorkflow } from '@types';
import { Context } from './AdminWorkflows.services';

export const AdminWorkflowsContext: React.FC<IReactChildren> = ({ children }) => {
  const [mode, setMode] = useState<FormMode>('VIEW');
  const [loading, setLoading] = useState<boolean>(false);
  const [dataLoading, setDataLoading] = useState<boolean>(false);
  const [workflows, setWorkflows] = useState<IWorkflow[]>([]);
  const [alert, setAlert] = useState<IAlert | null>(null);
  return (
    <Context.Provider
      value={{
        alert,
        dataLoading,
        loading,
        mode,
        setAlert,
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
