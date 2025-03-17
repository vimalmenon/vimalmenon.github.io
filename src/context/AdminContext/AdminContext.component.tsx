'use client';

import { IReactChildren } from '@types';
import { Context, initialState } from './AdminContext.service';

export const AdminContext: React.FC<IReactChildren> = ({ children }) => {
  return <Context.Provider value={initialState}>{children}</Context.Provider>;
};
