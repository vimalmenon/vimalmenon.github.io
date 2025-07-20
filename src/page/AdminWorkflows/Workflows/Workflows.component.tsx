'use client';

import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { DeleteConfirm, Icon, Table } from '@component';
import { Icons } from '@data';
import { IWorkflow } from '@types';
import { useAdminWorkflows, useAdminWorkflowsContext } from '../AdminWorkflows.services';
import { CreateWorkflow } from './CreateWorkflow';

export const Workflows: React.FC = () => {
  const { dataLoading, mode, setMode } = useAdminWorkflowsContext();
  const { push } = useRouter();
  const { deleteWorkflow, getWorkflows, loading, workflows } = useAdminWorkflows();
  useEffect(() => {
    getWorkflows();
  }, []);
  return (
    <Box sx={{ display: 'flex', margin: 1 }}>
      {mode === 'CREATE' ? (
        <CreateWorkflow cancelWorkflow={() => setMode('VIEW')} loading={dataLoading} />
      ) : (
        <Table
          loading={loading}
          items={workflows}
          RenderBody={({ data }) => (
            <TableRow key={data.id}>
              <TableCell>{data.name}</TableCell>
              <TableCell>
                {data.complete ? <Icons.Check color="success" /> : <Icons.Close color="warning" />}
              </TableCell>
              <TableCell>{data.executedWorkflows.length}</TableCell>
              <TableCell align="right">
                <DeleteConfirm<IWorkflow>
                  onDelete={deleteWorkflow}
                  deleteMsg={
                    <span>
                      Delete Workflow <b>{data.name}</b>?
                    </span>
                  }
                  data={data}
                  disable={data.executedWorkflows.length > 0}
                  iconSize="small"
                />
                <Icon
                  icon={<Icons.Play />}
                  onClick={() => push(`/admin/workflows/${data.id}/`)}
                  toolTip="Go"
                  size="small"
                />
              </TableCell>
            </TableRow>
          )}
          RenderHead={() => (
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Executed Workflows</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          )}
        />
      )}
    </Box>
  );
};
