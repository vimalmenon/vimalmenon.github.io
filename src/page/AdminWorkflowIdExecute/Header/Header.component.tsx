'use client';

import CardHeader from '@mui/material/CardHeader';
import Paper from '@mui/material/Paper';
import { Fragment } from 'react';
import { Icon } from '@component';
import { Icons } from '@data';
import { useAdminWorkflowIdExecuteContext } from '../AdminWorkflowIdExecute.service';

export const Header: React.FC = () => {
  const { setShowCreate } = useAdminWorkflowIdExecuteContext();
  return (
    <CardHeader
      title="Execute Workflow"
      component={Paper}
      action={
        <Fragment>
          <Icon toolTip="Add" icon={<Icons.Add />} onClick={() => setShowCreate(true)} />
          {/* <Icon toolTip="Edit Workflow" icon={<Icons.Edit />} onClick={editWorkflowFormMode} /> */}
        </Fragment>
      }
    />
  );
};
