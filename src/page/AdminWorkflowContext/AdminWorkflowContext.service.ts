'use client';

import { createContext, useContext } from 'react';
import { NotImplemented } from '@utility';
import { IAdminWorkflowContext } from './AdminWorkflowContext';

export const Context = createContext<IAdminWorkflowContext>({
  selectedWorkflow: null,
  setSelectedWorkflow: NotImplemented,
  setWorkflows: NotImplemented,
  workflows: [],
});

export const useAdminWorkflowContext = (): IAdminWorkflowContext =>
  useContext<IAdminWorkflowContext>(Context);
