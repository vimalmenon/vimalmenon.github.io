'use client';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useRouter } from 'next/navigation';
import { Icon } from '@component';
import { Icons } from '@data';
import {
  useAdminWorkflowIdExecuteContext,
  useWorkflowExecuteHelper,
} from '../AdminWorkflowIdExecute.service';

export const ListWorkflow: React.FC = () => {
  const { executedWorkflows, id } = useAdminWorkflowIdExecuteContext();
  const { deleteExecutedWorkflow } = useWorkflowExecuteHelper();
  const { push } = useRouter();

  return (
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
                <Icon
                  icon={<Icons.Delete />}
                  onClick={() => deleteExecutedWorkflow(workflow.id)}
                  toolTip="Delete"
                  size="small"
                />
                <Icon
                  icon={<Icons.Play />}
                  onClick={() => push(`/admin/workflows/${id}/execute/${workflow.id}`)}
                  toolTip="Go"
                  size="small"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
