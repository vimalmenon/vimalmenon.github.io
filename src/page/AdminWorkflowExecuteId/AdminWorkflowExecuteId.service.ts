'use client';

import { createContext, useContext } from 'react';
import { NotImplemented } from '@utility';
import { IAdminWorkflowExecuteIdContext } from './AdminWorkflowExecuteId';

export const Context = createContext<IAdminWorkflowExecuteIdContext>({
  dbServiceData: [],
  executeId: '',
  id: '',
  selectedWorkflow: null,
  selectedWorkflowNode: null,
  setDbServiceData: NotImplemented,
  setSelectedWorkflow: NotImplemented,
  setSelectedWorkflowNode: NotImplemented,
});

export const useAdminWorkflowIdExecuteIdContext = (): IAdminWorkflowExecuteIdContext =>
  useContext<IAdminWorkflowExecuteIdContext>(Context);
