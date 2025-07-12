'use client';

import { createContext, useContext } from 'react';
import { NotImplemented } from '@utility';
import { IAdminWorkflowExecuteIdContext } from './AdminWorkflowExecuteId';

export const Context = createContext<IAdminWorkflowExecuteIdContext>({
  executeId: '',
  id: '',
  selectedWorkflow: null,
  setSelectedWorkflow: NotImplemented,
});

export const useAdminWorkflowIdExecuteIdContext = (): IAdminWorkflowExecuteIdContext =>
  useContext<IAdminWorkflowExecuteIdContext>(Context);
