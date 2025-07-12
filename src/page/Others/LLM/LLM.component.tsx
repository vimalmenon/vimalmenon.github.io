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
import { useAdminContext } from '@context';
import { Icons } from '@data';

export const Llm: React.FC = () => {
  const { getLLMs, llms } = useAdminContext();
  useEffect(() => {
    getLLMs();
  }, []);
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell colSpan={3} align="center">
                LLM&apos;s
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Model</TableCell>
              <TableCell align="right">Supported</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {llms.map((llm) => (
              <TableRow key={llm.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell padding="normal">{llm.name}</TableCell>
                <TableCell padding="normal">{llm.model}</TableCell>
                <TableCell padding="normal" align="right">
                  {llm.supported ? (
                    <Icons.Check fontSize="small" />
                  ) : (
                    <Icons.Close fontSize="small" />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
