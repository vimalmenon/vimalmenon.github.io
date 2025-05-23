'use client';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import LinearProgress from '@mui/material/LinearProgress';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import NextLink from 'next/link';
import { useEffect } from 'react';
import { ConfirmDialog } from '@component';
import { Icons } from '@data';
import { useAdminWorkflows, useAdminWorkflowsContext } from '../AdminWorkflows.services';
import { CreateWorkflow } from './CreateWorkflow';

export const Workflows: React.FC = () => {
  const { mode, selectedWorkflow, setMode } = useAdminWorkflowsContext();
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
    <Box>
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
        />
      ) : null}
      {mode === 'CREATE' ? (
        <CreateWorkflow cancelWorkflow={() => setMode('VIEW')} />
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell colSpan={2}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <span>Workflows</span>

                    <IconButton onClick={() => setMode('CREATE')}>
                      <Icons.Add />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
          {loading ? (
            <LinearProgress />
          ) : (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {workflows?.map((workflow) => (
                  <TableRow key={workflow.id}>
                    <TableCell>
                      <NextLink href={`/admin/workflows/${workflow.id}/`}>{workflow.name}</NextLink>
                    </TableCell>
                    <TableCell>
                      {workflow.complete ? (
                        <Icons.Check color="success" />
                      ) : (
                        <Icons.Close color="warning" />
                      )}
                    </TableCell>
                    <TableCell align="right">
                      <IconButton onClick={() => deleteWorkflow(workflow)}>
                        <Icons.Delete />
                      </IconButton>
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
