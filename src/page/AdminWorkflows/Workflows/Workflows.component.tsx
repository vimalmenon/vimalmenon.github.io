import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect } from 'react';
import { useAdminWorkflows } from '../AdminWorkflows.services';

export const Workflows: React.FC = () => {
  const { getWorkflows, workflows } = useAdminWorkflows();
  useEffect(() => {
    getWorkflows();
  }, []);
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell colSpan={3} align="center">
                Workflows
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Name</TableCell>
              {/* <TableCell>Model</TableCell>
              <TableCell align="right">Supported</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {workflows.map((workflow) => {
              return (
                <TableRow key={workflow.name}>
                  <TableCell>{workflow.name}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
