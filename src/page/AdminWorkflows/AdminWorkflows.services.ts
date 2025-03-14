'use client';

import { useEffect, useState } from 'react';
import { APIs } from '@data';
import { makeRequest } from '@utility';
import { IWorkflows } from './AdminWorkflows';

export const useAdminWorkflows = () => {
  const [llms, setLlms] = useState<IWorkflows[]>([]);
  const getLLMs = async (): Promise<void> => {
    const result = await makeRequest<{ data: IWorkflows[] }>(APIs.GetLLMs());
    setLlms(result.data);
  };
  useEffect(() => {
    getLLMs();
  }, []);
  return {
    llms,
  };
};
