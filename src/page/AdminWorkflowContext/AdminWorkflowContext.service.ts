'use client';

import { createContext, useContext } from 'react';
import { NotImplemented } from '@utility';
import { IAdminWorkflowContext } from './AdminWorkflowContext';

export const Context = createContext<IAdminWorkflowContext>({
  executedWorkflows: [],
  selectedExecutedWorkflow: null,
  setExecutedWorkflows: NotImplemented,
  setSelectedExecutedWorkflow: NotImplemented,
});

export const useAdminWorkflowContext = (): IAdminWorkflowContext =>
  useContext<IAdminWorkflowContext>(Context);
