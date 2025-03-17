'use client';

import { IReactChildren } from '@types';
import { Context } from './AdminContext.service';

export const AdminContext: React.FC<IReactChildren> = ({ children }) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};
