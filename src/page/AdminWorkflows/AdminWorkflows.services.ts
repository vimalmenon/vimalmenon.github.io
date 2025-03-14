'use client';

import { useState } from 'react';
import { APIs } from '@data';
import { IGenericResponse, IWorkflow } from '@types';
import { makeRequest } from '@utility';
import { ILLM, ITool } from './AdminWorkflows';

export const useAdminWorkflows = () => {
  const [llms, setLlms] = useState<ILLM[]>([]);
  const [workflows, setWorkflows] = useState<IWorkflow[]>([]);
  const [tools, setTools] = useState<ITool[]>([]);
  const [uuid, setUuid] = useState<string>('');
  const getLLMs = async (): Promise<void> => {
    const result = await makeRequest<IGenericResponse<ILLM[]>>(APIs.GetLLMs());
    setLlms(result.data);
  };
  const getWorkflows = async (): Promise<void> => {
    const result = await makeRequest<IGenericResponse<IWorkflow[]>>(APIs.GetWorkflows());
    setWorkflows(result.data);
  };
  const createUUID = async (): Promise<void> => {
    const result = await makeRequest<IGenericResponse<string>>(APIs.getUUID());
    setUuid(result.data);
  };
  const getTools = async (): Promise<void> => {
    const result = await makeRequest<IGenericResponse<ITool[]>>(APIs.GetTools());
    setTools(result.data);
  };

  const createWorkflow = async (name: string, detail: string): Promise<void> => {
    await makeRequest<IGenericResponse<ITool[]>>(
      APIs.CreateWorkflow({
        detail,
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
