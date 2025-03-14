'use client';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Icons } from '@data';
import { useAdminWorkflows } from './AdminWorkflows.services';
import { Workflows } from './Workflows';

export const AdminWorkflows: React.FC = () => {
  const { llms } = useAdminWorkflows();
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
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
              {llms.map((llm) => {
                return (
                  <TableRow
                    key={llm.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell padding="normal" align="right">
                      {llm.name}
                    </TableCell>
                    <TableCell padding="normal" align="right">
                      {llm.model}
                    </TableCell>
                    <TableCell padding="normal" align="right">
                      {llm.supported ? (
                        <Icons.Check fontSize="small" />
                      ) : (
                        <Icons.Close fontSize="small" />
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box>
        <Workflows />
      </Box>
    </Box>
  );
};
