'use client';

import CardHeader from '@mui/material/CardHeader';
import Paper from '@mui/material/Paper';
import { Fragment } from 'react';
import { Icon } from '@component';
import { Icons } from '@data';
import { useAdminWorkflowIdExecuteContext } from '../AdminWorkflowIdExecute.service';

export const Header: React.FC = () => {
  const { selectedWorkflow, setSelectedWorkflow, setShowCreate } =
    useAdminWorkflowIdExecuteContext();
  return (
    <CardHeader
      title={
        <Fragment>
          {selectedWorkflow ? (
            <Icon toolTip="Back" icon={<Icons.Back />} onClick={() => setSelectedWorkflow(null)} />
          ) : null}
          <span>Execute Workflow</span>
        </Fragment>
      }
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
