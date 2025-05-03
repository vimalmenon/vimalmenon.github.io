'use client';

import { useState } from 'react';
import { APIs } from '@data';
import { IGenericResponse, ITool, IWorkflow } from '@types';
import { makeRequest } from '@utility';
import { IUseAdminWorkflows } from './AdminWorkflows';

export const useAdminWorkflows = (): IUseAdminWorkflows => {
  const [workflows, setWorkflows] = useState<IWorkflow[]>([]);

  const getWorkflows = async (): Promise<void> => {
    const { response } = await makeRequest<IGenericResponse<IWorkflow[]>>(APIs.GetWorkflows());
    setWorkflows(response.data);
  };

  const createWorkflow = async (name: string): Promise<void> => {
    await makeRequest<IGenericResponse<ITool[]>>(
      APIs.CreateWorkflow({
        name,
      })
    );
    await getWorkflows();
  };

  const deleteWorkflow = async (id: string): Promise<void> => {
    await makeRequest<IGenericResponse<ITool[]>>(APIs.DeleteWorkflow(id));
    await getWorkflows();
  };
  return {
    createWorkflow,
    deleteWorkflow,
    getWorkflows,
    workflows,
  };
};
