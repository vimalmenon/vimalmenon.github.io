'use client';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import React, { Fragment } from 'react';
import { Icon, WorkflowHeader } from '@component';
import { Icons } from '@data';
import { AdminWorkflowsContext } from './AdminWorkflows.context';
import { useAdminWorkflowsContext } from './AdminWorkflows.services';
import { Workflows } from './Workflows';

export const Component: React.FC = () => {
  const { mode, setMode } = useAdminWorkflowsContext();
  return (
    <Fragment>
      <WorkflowHeader
        title={mode === 'CREATE' ? 'Create Workflow' : 'List Workflow'}
        action={
          <Fragment>
            {mode === 'CREATE' ? null : (
              <Icon
                toolTip="Create Workflow"
                size="small"
                icon={<Icons.Add />}
                onClick={() => setMode('CREATE')}
              />
            )}
          </Fragment>
        }
      />
      <Divider />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Workflows />
      </Box>
    </Fragment>
  );
};

export const AdminWorkflows: React.FC = () => (
  <AdminWorkflowsContext>
    <Component />
  </AdminWorkflowsContext>
);
