'use client';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { Modal, Table, TextInput } from '@component';
import { Enums } from '@data';
import { formatDate } from '@utility';
import {
  useAdminWorkflowIdExecuteIdContext,
  useWorkflowNodeDetailHelper,
} from '../../AdminWorkflowExecuteId.service';

export const WorkflowNodeDetail: React.FC = () => {
  const { dbServiceData } = useAdminWorkflowIdExecuteIdContext();
  const { closeSelectedWorkflow, onSelectedWorkflowNodeSubmit, selectedWorkflowNode } =
    useWorkflowNodeDetailHelper();
  const [value, setValue] = useState<string>(selectedWorkflowNode?.content ?? '');
  const isReady = selectedWorkflowNode?.status === Enums.WorkflowNodeStatus.READY;

  if (selectedWorkflowNode) {
    return (
      <Modal
        open={true}
        title={
          <Box>
            {selectedWorkflowNode.node.type} ({selectedWorkflowNode.node.name})
          </Box>
        }
        onClose={closeSelectedWorkflow}
        onConfirm={async () =>
          await onSelectedWorkflowNodeSubmit({
            data: value,
            id: selectedWorkflowNode.id,
          })
        }
        disableConfirm={selectedWorkflowNode.status === Enums.WorkflowNodeStatus.COMPLETED}
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
          {selectedWorkflowNode.node.message ? (
            <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
              <Typography sx={{ fontWeight: 'bold' }}>Message</Typography>
              <span>{selectedWorkflowNode.node.message}</span>
            </Box>
          ) : null}
          <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
            <Typography sx={{ fontWeight: 'bold' }}>Status</Typography>
            <span>{selectedWorkflowNode.status}</span>
          </Box>

          {selectedWorkflowNode.content ? (
            <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
              <Typography sx={{ fontWeight: 'bold' }}>Data</Typography>
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
          <Divider />
          <Table
            items={dbServiceData}
            RenderBody={({ data }) => (
              <TableRow>
                <TableCell>{data.id}</TableCell>
                <TableCell>{data.id}</TableCell>
              </TableRow>
            )}
            RenderHead={() => (
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Data</TableCell>
              </TableRow>
            )}
          />
        </Box>
      </Modal>
    );
  }
  return null;
};
