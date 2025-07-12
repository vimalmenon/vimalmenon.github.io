'use client';

import { createContext, useContext } from 'react';
import { APIs } from '@data';
import { IExecuteWorkflow, IGenericResponse } from '@types';
import { makeRequest, NotImplemented } from '@utility';
import {
  IAdminWorkflowExecuteIdContext,
  IUseAdminWorkflowIdExecuteHelper,
} from './AdminWorkflowExecuteId';

export const Context = createContext<IAdminWorkflowExecuteIdContext>({
  dbServiceData: [],
  executeId: '',
  id: '',
  selectedExecutedWorkflow: null,
  selectedWorkflowNode: null,
  setDbServiceData: NotImplemented,
  setSelectedExecutedWorkflow: NotImplemented,
  setSelectedWorkflowNode: NotImplemented,
});

export const useAdminWorkflowIdExecuteIdContext = (): IAdminWorkflowExecuteIdContext =>
  useContext<IAdminWorkflowExecuteIdContext>(Context);

export const useAdminWorkflowIdExecuteHelper = (): IUseAdminWorkflowIdExecuteHelper => {
  const { executeId, id, setSelectedExecutedWorkflow } = useAdminWorkflowIdExecuteIdContext();
  const getExecutedWorkflow = async (): Promise<void> => {
    const { response } = await makeRequest<IGenericResponse<IExecuteWorkflow>>(
      APIs.GetExecutedWorkflowId(id, executeId)
    );
    setSelectedExecutedWorkflow(response.data);
  };
  return {
    getExecutedWorkflow,
  };
};
