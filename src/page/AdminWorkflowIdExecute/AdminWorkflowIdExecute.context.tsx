'use client';

import { useState } from 'react';
import { IAdminWorkflowIdPage, IReactChildren } from '@types';
import { useAdminWorkflowContext } from '../AdminWorkflowContext';
import { Context } from './AdminWorkflowIdExecute.service';

export const AdminWorkflowIdExecuteContext: React.FC<IReactChildren & IAdminWorkflowIdPage> = ({
  children,
  id,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [showCreate, setShowCreate] = useState<boolean>(false);
  const { executedWorkflows, setExecutedWorkflows } = useAdminWorkflowContext();

  return (
    <Context.Provider
      value={{
        executedWorkflows,
        id,
        loading,
        setExecutedWorkflows,
        setLoading,
        setShowCreate,
        showCreate,
      }}
    >
      {children}
    </Context.Provider>
  );
};
