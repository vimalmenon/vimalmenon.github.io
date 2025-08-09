'use client';

import { useState } from 'react';

import { FormMode, IAdminWorkflowIdPage, IAlert, IReactChildren, IWorkflow } from '@types';

import { INodeTab } from './AdminWorkflowId';
import { Context } from './AdminWorkflowId.service';

export const AdminWorkflowIdContext: React.FC<IAdminWorkflowIdPage & IReactChildren> = ({
  children,
  id,
}) => {
  const [workflowLoading, setWorkflowLoading] = useState<boolean>(false);
  const [nodeTabs, setNodeTabs] = useState<INodeTab[]>([]);
  const [workflowFormMode, setWorkflowFormMode] = useState<FormMode>('VIEW');
  const [loading, setLoading] = useState<boolean>(false);
  const [nodeFormMode, setNodeFormMode] = useState<FormMode>('UPDATE');
  const [error, setError] = useState<string | null>(null);
  const [isStart, setIsStart] = useState<boolean>(false);
  const [selectedWorkflow, setSelectedWorkflow] = useState<IWorkflow | null>(null);
  const [alert, setAlert] = useState<IAlert | null>(null);
  const [showCreate, setShowCreate] = useState<boolean>(false);

  return (
    <Context.Provider
      value={{
        alert,
        error,
        id,
        isStart,
        loading,
        nodeFormMode,
        nodeTabs,
        setAlert,
        setError,
        setIsStart,
        setLoading,
        setNodeFormMode,
        setNodeTabs,
        setShowCreate,
        setWorkflow: setSelectedWorkflow,
        setWorkflowFormMode,
        setWorkflowLoading,
        showCreate,
        workflow: selectedWorkflow,
        workflowFormMode,
        workflowLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};
