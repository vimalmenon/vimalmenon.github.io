'use client';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useRouter } from 'next/navigation';
import React from 'react';
import { DeleteConfirm, Icon } from '@component';
import { Icons } from '@data';
import { IExecuteWorkflow } from '@types';
import { IExecute } from './Execute';

export const Execute: React.FC<IExecute> = ({ deleteExecutedWorkflow, executedWorkflows, id }) => {
  const { push } = useRouter();

  return (
    <Box sx={{ display: 'flex', flex: '1 1 100%', flexDirection: 'column' }}>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {executedWorkflows.map((workflow) => (
              <TableRow key={workflow.id} style={{ cursor: 'pointer' }}>
                <TableCell>{workflow.name}</TableCell>
                <TableCell>{workflow.status}</TableCell>
                <TableCell align="right">
                  <DeleteConfirm<IExecuteWorkflow>
                    onDelete={deleteExecutedWorkflow}
                    deleteMsg={
                      <span>
                        Delete executed workflow <b>{workflow.name}</b>?
                      </span>
                    }
                    data={workflow}
                    iconSize="small"
                  />
                  <Icon
                    icon={<Icons.Play />}
                    onClick={() => push(`/admin/workflows/${id}/${workflow.id}`)}
                    toolTip="Go"
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
