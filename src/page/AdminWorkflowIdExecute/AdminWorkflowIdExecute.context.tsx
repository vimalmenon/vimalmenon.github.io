'use client';

import { IAdminWorkflowIdPage, IReactChildren } from '@types';
import { Context } from './AdminWorkflowIdExecute.service';

export const AdminWorkflowIdExecuteContext: React.FC<IReactChildren & IAdminWorkflowIdPage> = ({
  children,
  id,
}) => <Context.Provider value={{ id }}>{children}</Context.Provider>;
