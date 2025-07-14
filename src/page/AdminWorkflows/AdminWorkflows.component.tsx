'use client';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import React, { Fragment } from 'react';
import { WorkflowHeader } from '@component';
import { Icons } from '@data';
import { AdminWorkflowsContext } from './AdminWorkflows.context';
import { useAdminWorkflowsContext } from './AdminWorkflows.services';
import { Workflows } from './Workflows';

export const Component: React.FC = () => {
  const { setMode } = useAdminWorkflowsContext();
  return (
    <Fragment>
      <WorkflowHeader
        title="List Workflows"
        action={
          <IconButton onClick={() => setMode('CREATE')} size="small">
            <Icons.Add />
          </IconButton>
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
