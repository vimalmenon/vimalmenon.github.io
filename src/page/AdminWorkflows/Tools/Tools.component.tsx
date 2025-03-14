'use client';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useEffect } from 'react';
import { useAdminWorkflows } from '../AdminWorkflows.services';

export const Tools: React.FC = () => {
  const { getTools, tools } = useAdminWorkflows();
  useEffect(() => {
    getTools();
  }, []);
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell colSpan={3} align="center">
                Tools
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="right">Tool Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tools.map((tool) => {
              return (
                <TableRow
                  key={tool.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{tool.id}</TableCell>
                  <TableCell>{tool.name}</TableCell>
                  <TableCell>{tool.tool_name}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
