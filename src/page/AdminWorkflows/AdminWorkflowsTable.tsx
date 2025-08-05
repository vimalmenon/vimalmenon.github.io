import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useRouter } from 'next/navigation';
import React from 'react';
import { DeleteConfirm, Icon } from '@component';
import { Icons } from '@data';
import { IListViewRender, IWorkflow } from '@types';
import { useAdminWorkflows } from './AdminWorkflows.services';

export const TableWorkflowHeader: React.FC = () => (
  <TableRow>
    <TableCell>Name</TableCell>
    <TableCell>Status</TableCell>
    <TableCell>Executed Workflows</TableCell>
    <TableCell align="right">Action</TableCell>
  </TableRow>
);

export const TableWorkflowBody: React.FC<IListViewRender<IWorkflow>> = ({ data }) => {
  const { push } = useRouter();
  const { deleteWorkflow } = useAdminWorkflows();

  return (
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
  );
};
