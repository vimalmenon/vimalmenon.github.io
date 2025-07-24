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
import { ListItem } from '@component';
import { useAdminContext } from '@context';
import { IListViewRender } from '@types';

const ServiceItemRender: React.FC<IListViewRender<string>> = ({ data }) => (
  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
    <TableCell>{data}</TableCell>
  </TableRow>
);

export const Service: React.FC = () => {
  const { getServices, services } = useAdminContext();
  useEffect(() => {
    getServices();
  }, []);
  return (
    <Box sx={{ display: 'flex', flex: 1 }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell colSpan={3} align="center">
                Services
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <ListItem<string> items={services} Render={ServiceItemRender} />
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
