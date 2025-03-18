'use client';

import { useState } from 'react';
import { useAdminContext } from '@context';
import { APIs } from '@data';
import { IGenericResponse, ILLM, IWorkflow } from '@types';
import { makeRequest } from '@utility';
import { ITool } from './AdminWorkflows';

export const useAdminWorkflows = () => {
  const { addLlms, llms } = useAdminContext();
  const [workflows, setWorkflows] = useState<IWorkflow[]>([]);
  const [tools, setTools] = useState<ITool[]>([]);
  const [uuid, setUuid] = useState<string>('');
  const getLLMs = async (): Promise<void> => {
    const { response } = await makeRequest<IGenericResponse<ILLM[]>>(APIs.GetLLMs());
    addLlms(response.data);
  };
  const getWorkflows = async (): Promise<void> => {
    const { response } = await makeRequest<IGenericResponse<IWorkflow[]>>(APIs.GetWorkflows());
    setWorkflows(response.data);
  };
  const createUUID = async (): Promise<void> => {
    const { response } = await makeRequest<IGenericResponse<string>>(APIs.getUUID());
    setUuid(response.data);
  };
  const getTools = async (): Promise<void> => {
    const { response } = await makeRequest<IGenericResponse<ITool[]>>(APIs.GetTools());
    setTools(response.data);
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
