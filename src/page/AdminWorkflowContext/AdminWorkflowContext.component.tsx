'use client';

import { useState } from 'react';
import { IExecuteWorkflow, IReactChildren } from '@types';
import { IAdminWorkflowContextComponent } from './AdminWorkflowContext';
import { Context } from './AdminWorkflowContext.service';

export const AdminWorkflowContext: React.FC<IAdminWorkflowContextComponent & IReactChildren> = ({
  children,
  executeId,
  id,
}) => {
  const [selectedExecutedWorkflow, setSelectedExecutedWorkflow] = useState<IExecuteWorkflow | null>(
    null
  );

  return (
    <Context.Provider
      value={{
        executeId,
        id,
        selectedExecutedWorkflow,
        setSelectedExecutedWorkflow,
      }}
    >
      {children}
    </Context.Provider>
  );
};
