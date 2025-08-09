'use client';

import { useState } from 'react';

import { APIs } from '@data';
import { IGenericResponse } from '@types';
import { makeRequest } from '@utility';

import { IUseOthersHelper } from './Others';

export const useOthersHelper = (): IUseOthersHelper => {
  const [uuid, setUuid] = useState<string>('');
  const createUUID = async (): Promise<void> => {
    const { response } = await makeRequest<IGenericResponse<string>>(APIs.getUUID());
    setUuid(response.data);
  };

  return {
    createUUID,
    uuid,
  };
};
