'use client';

import { useEffect } from 'react';

import Box from '@mui/material/Box';

import { Table } from '@component';

import { useAdminWorkflows, useAdminWorkflowsContext } from '../AdminWorkflows.services';
import { TableWorkflowBody, TableWorkflowHeader } from '../AdminWorkflowsTable';

import { CreateWorkflow } from './CreateWorkflow';

export const Workflows: React.FC = () => {
  const { dataLoading, mode, setMode } = useAdminWorkflowsContext();

  const { getWorkflows, loading, workflows } = useAdminWorkflows();
  useEffect(() => {
    getWorkflows();
  }, []);
  return (
    <Box sx={{ display: 'flex', margin: 1 }}>
      {mode === 'CREATE' ? (
        <CreateWorkflow cancelWorkflow={() => setMode('VIEW')} loading={dataLoading} />
      ) : (
        <Table
          loading={loading}
          items={workflows}
          RenderBody={TableWorkflowBody}
          RenderHead={TableWorkflowHeader}
        />
      )}
    </Box>
  );
};
