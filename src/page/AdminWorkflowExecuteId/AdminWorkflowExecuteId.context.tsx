'use client';

import { useState } from 'react';
import { IDbServiceData, IExecuteWorkflow, IExecuteWorkflowNode, IReactChildren } from '@types';
import { IAdminWorkflowExecuteId } from './AdminWorkflowExecuteId';
import { Context } from './AdminWorkflowExecuteId.service';

export const AdminWorkflowExecuteIdContext: React.FC<IReactChildren & IAdminWorkflowExecuteId> = ({
  children,
  executeId,
  id,
}) => {
  const [selectedWorkflow, setSelectedWorkflow] = useState<IExecuteWorkflow | null>(null);
  const [selectedWorkflowNode, setSelectedWorkflowNode] = useState<IExecuteWorkflowNode | null>(
    null
  );
  const [dbServiceData, setDbServiceData] = useState<IDbServiceData[]>([]);

  return (
    <Context.Provider
      value={{
        dbServiceData,
        executeId,
        id,
        selectedWorkflow,
        selectedWorkflowNode,
        setDbServiceData,
        setSelectedWorkflow,
        setSelectedWorkflowNode,
      }}
    >
      {children}
    </Context.Provider>
  );
};
