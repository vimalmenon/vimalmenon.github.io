'use client';

import { createContext, useContext } from 'react';
import { IAdminContext } from './AdminContext';

export const initialState: IAdminContext = {
  llms: [],
};

export const Context = createContext<IAdminContext>({ ...initialState });

export const useAdminContext = (): IAdminContext => useContext<IAdminContext>(Context);
