'use client';

import { useState } from 'react';

import {
  IAlert,
  IDbServiceData,
  IExecuteWorkflow,
  IExecuteWorkflowNode,
  IReactChildren,
} from '@types';

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
  const [selectedExecutedWorkflow, setSelectedExecutedWorkflow] = useState<IExecuteWorkflow | null>(
    null
  );
  const [alert, setAlert] = useState<IAlert | null>(null);

  return (
    <Context.Provider
      value={{
        alert,
        dbServiceData,
        executeId,
        id,
        loading,
        selectedExecutedWorkflow,
        selectedWorkflowNode,
        setAlert,
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
