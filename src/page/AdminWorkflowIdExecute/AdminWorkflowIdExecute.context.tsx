'use client';

import { useState } from 'react';
import { IAdminWorkflowIdPage, IExecuteWorkflow, IReactChildren } from '@types';
import { Context } from './AdminWorkflowIdExecute.service';

export const AdminWorkflowIdExecuteContext: React.FC<IReactChildren & IAdminWorkflowIdPage> = ({
  children,
  id,
}) => {
  const [workflows, setWorkFlows] = useState<IExecuteWorkflow[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <Context.Provider value={{ id, loading, setLoading, setWorkFlows, workflows }}>
      {children}
    </Context.Provider>
  );
};
