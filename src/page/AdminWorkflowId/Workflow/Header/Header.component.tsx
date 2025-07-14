'use client';

import CardHeader from '@mui/material/CardHeader';
import { useWorkflowContext } from '../../AdminWorkflowId.service';

export const Header: React.FC = () => {
  const { workflowFormMode } = useWorkflowContext();

  return <CardHeader title={workflowFormMode === 'VIEW' ? 'Workflow' : 'Edit Workflow'} />;
};
