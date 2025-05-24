'use client';

import { useState } from 'react';
import { IAdminWorkflowIdPage, IExecuteWorkflow, IReactChildren } from '@types';
import { Context } from './AdminWorkflowIdExecute.service';

export const AdminWorkflowIdExecuteContext: React.FC<IReactChildren & IAdminWorkflowIdPage> = ({
  children,
  id,
}) => {
  const [workflows, setWorkFlows] = useState<IExecuteWorkflow[]>([]);
  return <Context.Provider value={{ id, setWorkFlows, workflows }}>{children}</Context.Provider>;
};
