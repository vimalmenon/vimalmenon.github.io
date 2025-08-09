'use client';

import React, { Fragment, useState } from 'react';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

import { DeleteConfirm, Modal, Table, TextInput } from '@component';
import { Enums } from '@data';
import { formatDate } from '@utility';

import {
  useAdminWorkflowIdExecuteHelper,
  useAdminWorkflowIdExecuteIdContext,
  useWorkflowNodeDetailHelper,
} from '../../AdminWorkflowExecuteId.service';

const TableRenderHead: React.FC = () => (
  <TableRow>
    <TableCell>ID</TableCell>
    <TableCell>Data</TableCell>
    <TableCell>Created Date</TableCell>
    <TableCell>Action</TableCell>
  </TableRow>
);

export const WorkflowNodeDetail: React.FC = () => {
  const { dbServiceData } = useAdminWorkflowIdExecuteIdContext();
  const { closeSelectedWorkflow, onSelectedWorkflowNodeSubmit, selectedWorkflowNode } =
    useWorkflowNodeDetailHelper();
  const { dbServiceDelete } = useAdminWorkflowIdExecuteHelper();
  const [value, setValue] = useState<string>(selectedWorkflowNode?.content ?? '');
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const isReady = selectedWorkflowNode?.status === Enums.WorkflowNodeStatus.READY;
  const onValueSubmit = async (): Promise<void> => {
    if (selectedWorkflowNode) {
      if (selectedWorkflowNode.node.type === Enums.WorkflowNodeType.HumanInput) {
        await onSelectedWorkflowNodeSubmit({
          data: value,
          id: selectedWorkflowNode.id,
        });
      } else if (selectedWorkflowNode.node.service === Enums.WorkflowNodeService.GetFromDB) {
        await onSelectedWorkflowNodeSubmit({
          data: dbServiceData[selectedRow ?? 0].data,
          id: selectedWorkflowNode.id,
        });
      } else {
        await onSelectedWorkflowNodeSubmit({
          id: selectedWorkflowNode.id,
        });
      }
    }
  };
  if (!selectedWorkflowNode) {
    return null;
  }
  return (
    <Modal
      open={true}
      title={
        <Box>
          {selectedWorkflowNode.node.type} ({selectedWorkflowNode.node.name})
        </Box>
      }
      onClose={closeSelectedWorkflow}
      onConfirm={onValueSubmit}
      disableConfirm={!isReady}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
          <Typography sx={{ fontWeight: 'bold' }}>Name</Typography>
          <span>{selectedWorkflowNode.node.name}</span>
        </Box>
        <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
          <Typography sx={{ fontWeight: 'bold' }}>Type</Typography>
          <span>{selectedWorkflowNode.node.type}</span>
        </Box>
        {selectedWorkflowNode.node.llm ? (
          <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
            <Typography sx={{ fontWeight: 'bold' }}>LLM</Typography>
            <span>{selectedWorkflowNode.node.llm}</span>
          </Box>
        ) : null}
        <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
          <Typography sx={{ fontWeight: 'bold' }}>Status</Typography>
          <span>{selectedWorkflowNode.status}</span>
        </Box>
        {selectedWorkflowNode.node.message ? (
          <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
            <Typography sx={{ fontWeight: 'bold' }}>Message</Typography>
            <span>{selectedWorkflowNode.node.message}</span>
          </Box>
        ) : null}

        {selectedWorkflowNode.content ? (
          <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
            <Typography sx={{ fontWeight: 'bold', minWidth: '250px' }}>Data</Typography>
            <span>{selectedWorkflowNode.content}</span>
          </Box>
        ) : null}
        {selectedWorkflowNode.startedAt ? (
          <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
            <Typography sx={{ fontWeight: 'bold' }}>Started At</Typography>
            <span>{formatDate(selectedWorkflowNode.startedAt)}</span>
          </Box>
        ) : null}
        {selectedWorkflowNode.completedAt ? (
          <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
            <Typography sx={{ fontWeight: 'bold' }}>Completed At</Typography>
            <span>{formatDate(selectedWorkflowNode.completedAt)}</span>
          </Box>
        ) : null}
        {selectedWorkflowNode.node.type === Enums.WorkflowNodeType.HumanInput && isReady ? (
          <Box sx={{ display: 'flex' }}>
            <TextInput
              value={value}
              label="Human Input"
              placeholder="Name"
              name="humanInput"
              onChange={(e) => setValue(e.target.value)}
            />
          </Box>
        ) : null}
        {selectedWorkflowNode.node.service === Enums.WorkflowNodeService.GetFromDB ? (
          <Fragment>
            <Divider />
            <Table
              items={dbServiceData}
              RenderHead={TableRenderHead}
              RenderBody={({ data, index }) => (
                <TableRow onClick={() => setSelectedRow(index)} selected={selectedRow === index}>
                  <TableCell>{data.id}</TableCell>
                  <TableCell>{data.data}</TableCell>
                  <TableCell>{formatDate(data.createdDate)}</TableCell>
                  <TableCell>
                    <DeleteConfirm
                      onDelete={dbServiceDelete}
                      deleteMsg={
                        <span>
                          Delete Workflow <b>{data.id}</b>?
                        </span>
                      }
                      data={data}
                    />
                  </TableCell>
                </TableRow>
              )}
            />
          </Fragment>
        ) : null}
      </Box>
    </Modal>
  );
};
