'use client';

import { useState } from 'react';
import { APIs } from '@data';
import { IGenericResponse, ITool, IWorkflow } from '@types';
import { makeRequest } from '@utility';
import { IUseAdminWorkflows } from './AdminWorkflows';

export const useAdminWorkflows = (): IUseAdminWorkflows => {
  const [workflows, setWorkflows] = useState<IWorkflow[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getWorkflows = async (): Promise<void> => {
    setLoading(true);
    const { response } = await makeRequest<IGenericResponse<IWorkflow[]>>(APIs.GetWorkflows());
    setWorkflows(response.data);
    setLoading(false);
  };

  const createWorkflow = async (name: string): Promise<void> => {
    setLoading(true);
    await makeRequest<IGenericResponse<ITool[]>>(
      APIs.CreateWorkflow({
        name,
      })
    );
    await getWorkflows();
    setLoading(false);
  };

  const deleteWorkflow = async (id: string): Promise<void> => {
    setLoading(true);
    await makeRequest<IGenericResponse<ITool[]>>(APIs.DeleteWorkflow(id));
    await getWorkflows();
    setLoading(false);
  };
  return {
    createWorkflow,
    deleteWorkflow,
    getWorkflows,
    loading,
    setLoading,
    workflows,
  };
};
