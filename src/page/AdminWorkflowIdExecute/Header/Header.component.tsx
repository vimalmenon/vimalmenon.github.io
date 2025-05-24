'use client';

import CardHeader from '@mui/material/CardHeader';
import Paper from '@mui/material/Paper';
import { Fragment } from 'react';
import { Icon } from '@component';
import { Icons } from '@data';
import { useAdminWorkflowIdExecuteContext } from '../AdminWorkflowIdExecute.service';

export const Header: React.FC = () => {
  const { selectedWorkflow, setShowCreate } = useAdminWorkflowIdExecuteContext();
  return (
    <CardHeader
      title="Execute Workflow"
      component={Paper}
      action={
        <Fragment>
          {!selectedWorkflow ? (
            <Icon toolTip="Add" icon={<Icons.Add />} onClick={() => setShowCreate(true)} />
          ) : null}
        </Fragment>
      }
    />
  );
};
