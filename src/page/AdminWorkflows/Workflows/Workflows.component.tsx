'use client';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import { Icons } from '@data';
import { useAdminWorkflows } from '../AdminWorkflows.services';
import { CreateWorkflow } from './CreateWorkflow';

export const Workflows: React.FC = () => {
  const { deleteWorkflow, getWorkflows, workflows } = useAdminWorkflows();
  const [mode, setMode] = useState<'VIEW' | 'CREATE'>('VIEW');
  useEffect(() => {
    getWorkflows();
  }, []);
  return (
    <Box>
      {mode === 'CREATE' ? (
        <CreateWorkflow cancelWorkflow={() => setMode('VIEW')} />
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell colSpan={4}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <span>Workflows</span>

                    <IconButton onClick={() => setMode('CREATE')}>
                      <Icons.Add />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {workflows.map((workflow) => {
                return (
                  <TableRow key={workflow.id}>
                    <TableCell>
                      <NextLink href={`/admin/workflows/${workflow.id}/`}>{workflow.id}</NextLink>
                    </TableCell>
                    <TableCell>{workflow.name}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => deleteWorkflow(workflow.id)}>
                        <Icons.Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};
