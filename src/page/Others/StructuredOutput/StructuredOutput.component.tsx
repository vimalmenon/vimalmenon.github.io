'use client';

import React, { useEffect } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { ListItem } from '@component';
import { useAdminContext } from '@context';
import { IListViewRender } from '@types';

const ItemRender: React.FC<IListViewRender<string>> = ({ data }) => (
  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
    <TableCell>{data}</TableCell>
  </TableRow>
);

export const StructuredOutput: React.FC = () => {
  const { getStructuredOutputTypes, structuredOutputTypes } = useAdminContext();
  useEffect(() => {
    getStructuredOutputTypes();
  }, []);
  return (
    <Box sx={{ display: 'flex', flex: 1 }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell colSpan={3} align="center">
                Structured Output Types
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <ListItem<string> items={structuredOutputTypes} Render={ItemRender} />
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
