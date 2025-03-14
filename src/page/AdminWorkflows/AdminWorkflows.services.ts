'use client';

import { useState } from 'react';
import { APIs } from '@data';
import { makeRequest } from '@utility';
import { IWorkflows } from './AdminWorkflows';

export const useAdminWorkflows = () => {
  const [llms, setLlms] = useState<IWorkflows[]>([]);
  const [uuid, setUuid] = useState<string>('');
  const getLLMs = async (): Promise<void> => {
    const result = await makeRequest<{ data: IWorkflows[] }>(APIs.GetLLMs());
    setLlms(result.data);
  };
  const getWorkflows = async (): Promise<void> => {
    const result = await makeRequest<{ data: IWorkflows[] }>(APIs.GetWorkflows());
    console.log(result);
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
  };
};
