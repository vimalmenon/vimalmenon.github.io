'use client';

import { useState } from 'react';
import { IExecuteWorkflow, IReactChildren } from '@types';
import { IAdminWorkflowExecuteId } from './AdminWorkflowExecuteId';
import { Context } from './AdminWorkflowExecuteId.service';

export const AdminWorkflowExecuteIdContext: React.FC<IReactChildren & IAdminWorkflowExecuteId> = ({
  children,
  executeId,
  id,
}) => {
  const [selectedWorkflow, setSelectedWorkflow] = useState<IExecuteWorkflow | null>(null);
  return (
    <Context.Provider
      value={{
        executeId,
        id,
        selectedWorkflow,
        setSelectedWorkflow,
      }}
    >
      {children}
    </Context.Provider>
  );
};
