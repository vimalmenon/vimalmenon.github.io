'use client';

import { createContext, useContext } from 'react';
import { NotImplemented } from '@utility';
import { IAdminWorkflowContext } from './AdminWorkflowContext';

export const Context = createContext<IAdminWorkflowContext>({
  executedWorkflows: [],
  selectedExecutedWorkflow: null,
  selectedWorkflow: null,
  setExecutedWorkflows: NotImplemented,
  setSelectedExecutedWorkflow: NotImplemented,
  setSelectedWorkflow: NotImplemented,
  setWorkflows: NotImplemented,
  workflows: [],
});

export const useAdminWorkflowContext = (): IAdminWorkflowContext =>
  useContext<IAdminWorkflowContext>(Context);
