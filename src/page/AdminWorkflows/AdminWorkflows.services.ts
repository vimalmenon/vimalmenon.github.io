'use client';

import { useState } from 'react';
import { APIs } from '@data';
import { makeRequest } from '@utility';
import { ILLM, IWorkflow } from './AdminWorkflows';

export const useAdminWorkflows = () => {
  const [llms, setLlms] = useState<ILLM[]>([]);
  const [workflows, setWorkflows] = useState<IWorkflow[]>([]);
  const [uuid, setUuid] = useState<string>('');
  const getLLMs = async (): Promise<void> => {
    const result = await makeRequest<{ data: ILLM[] }>(APIs.GetLLMs());
    setLlms(result.data);
  };
  const getWorkflows = async (): Promise<void> => {
    const result = await makeRequest<{ data: IWorkflow[] }>(APIs.GetWorkflows());
    setWorkflows(result.data);
  };
  const createUUID = async (): Promise<void> => {
    const result = await makeRequest<{ data: string }>(APIs.getUUID());
    setUuid(result.data);
  };
  return {
    createUUID,
    getLLMs,
    getWorkflows,
    llms,
    uuid,
    workflows,
  };
};
