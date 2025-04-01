'use client';

import { useState } from 'react';
import { useAdminContext } from '@context';
import { APIs } from '@data';
import { IGenericResponse, ITool, IWorkflow } from '@types';
import { makeRequest } from '@utility';

export const useAdminWorkflows = () => {
  const { getLLMs, getTools, llms, tools } = useAdminContext();
  const [workflows, setWorkflows] = useState<IWorkflow[]>([]);
  const [uuid, setUuid] = useState<string>('');
  const getWorkflows = async (): Promise<void> => {
    const { response } = await makeRequest<IGenericResponse<IWorkflow[]>>(APIs.GetWorkflows());
    setWorkflows(response.data);
  };
  const createUUID = async (): Promise<void> => {
    const { response } = await makeRequest<IGenericResponse<string>>(APIs.getUUID());
    setUuid(response.data);
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
    createUUID,
    createWorkflow,
    deleteWorkflow,
    getLLMs,
    getTools,
    getWorkflows,
    llms,
    tools,
    uuid,
    workflows,
  };
};
