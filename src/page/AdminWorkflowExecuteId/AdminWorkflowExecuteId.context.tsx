'use client';

import { useMemo, useState } from 'react';
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

  const value = useMemo(
    () => ({
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
    }),
    []
  );
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
