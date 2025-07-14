'use client';

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { ConfirmDialog, Icon } from '@component';
import { Icons } from '@data';
import { useAdminWorkflows, useAdminWorkflowsContext } from '../AdminWorkflows.services';
import { CreateWorkflow } from './CreateWorkflow';

export const Workflows: React.FC = () => {
  const { dataLoading, mode, selectedWorkflow, setMode } = useAdminWorkflowsContext();
  const { push } = useRouter();
  const {
    deleteWorkflow,
    deleteWorkflowCancel,
    deleteWorkflowConfirm,
    getWorkflows,
    loading,
    workflows,
  } = useAdminWorkflows();
  useEffect(() => {
    getWorkflows();
  }, []);
  return (
    <Box sx={{ display: 'flex', margin: 1 }}>
      {selectedWorkflow ? (
        <ConfirmDialog
          icon="WARNING"
          title={
            <span>
              Delete Workflow <b>{selectedWorkflow.name}</b>?
            </span>
          }
          open={!!selectedWorkflow}
          onConfirm={deleteWorkflowConfirm}
          onCancel={deleteWorkflowCancel}
          loading={loading}
        />
      ) : null}
      {mode === 'CREATE' ? (
        <CreateWorkflow cancelWorkflow={() => setMode('VIEW')} loading={dataLoading} />
      ) : (
        <TableContainer component={Paper}>
          {loading ? (
            <LinearProgress />
          ) : (
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Executed Workflows</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {workflows?.map((workflow) => (
                  <TableRow key={workflow.id}>
                    <TableCell>{workflow.name}</TableCell>
                    <TableCell>
                      {workflow.complete ? (
                        <Icons.Check color="success" />
                      ) : (
                        <Icons.Close color="warning" />
                      )}
                    </TableCell>
                    <TableCell>{workflow.executedWorkflows.length}</TableCell>
                    <TableCell align="right">
                      <Icon
                        icon={<Icons.Delete />}
                        onClick={() => deleteWorkflow(workflow)}
                        disabled={workflow.executedWorkflows.length > 0}
                        toolTip="Delete"
                        size="small"
                      />
                      <Icon
                        icon={<Icons.Play />}
                        onClick={() => push(`/admin/workflows/${workflow.id}/`)}
                        toolTip="Go"
                        size="small"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </TableContainer>
      )}
    </Box>
  );
};
