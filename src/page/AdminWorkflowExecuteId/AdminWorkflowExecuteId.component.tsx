'use client';

import { IAdminWorkflowExecuteId } from './AdminWorkflowExecuteId';
import { AdminWorkflowExecuteIdContext } from './AdminWorkflowExecuteId.context';

const Component: React.FC = () => null;

export const AdminWorkflowExecuteId: React.FC<IAdminWorkflowExecuteId> = ({ executeId, id }) => (
  <AdminWorkflowExecuteIdContext id={id} executeId={executeId}>
    <Component />
  </AdminWorkflowExecuteIdContext>
);
