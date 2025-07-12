'use client';

import { useState } from 'react';
import { IDbServiceData, IExecuteWorkflowNode, IReactChildren } from '@types';
import { useAdminWorkflowContext } from '../AdminWorkflowContext';
import { IAdminWorkflowExecuteId } from './AdminWorkflowExecuteId';
import { Context } from './AdminWorkflowExecuteId.service';

export const AdminWorkflowExecuteIdContext: React.FC<IReactChildren & IAdminWorkflowExecuteId> = ({
  children,
  executeId,
  id,
}) => {
  const [selectedWorkflowNode, setSelectedWorkflowNode] = useState<IExecuteWorkflowNode | null>(
    null
  );
  const [dbServiceData, setDbServiceData] = useState<IDbServiceData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const { selectedExecutedWorkflow, setSelectedExecutedWorkflow } = useAdminWorkflowContext();

  return (
    <Context.Provider
      value={{
        dbServiceData,
        executeId,
        id,
        loading,
        selectedExecutedWorkflow,
        selectedWorkflowNode,
        setDbServiceData,
        setLoading,
        setSelectedExecutedWorkflow,
        setSelectedWorkflowNode,
      }}
    >
      {children}
    </Context.Provider>
  );
};
