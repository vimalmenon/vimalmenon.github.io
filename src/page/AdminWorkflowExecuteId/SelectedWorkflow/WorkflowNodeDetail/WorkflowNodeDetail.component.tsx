'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { Modal } from '@component';
import { TextInput } from '@component';
import { Enums } from '@data';
import { formatDate } from '@utility';
import { useWorkflowNodeDetailHelper } from '../../../AdminWorkflowIdExecute/AdminWorkflowIdExecute.service';

export const WorkflowNodeDetail: React.FC = () => {
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
        onConfirm={onSelectedWorkflowNodeSubmit}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {/* {selectedWorkflowNode.node.type === Enums.WorkflowNodeType.HumanInput} {

            } */}
          <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
            <Typography sx={{ fontWeight: 'bold' }}>Type</Typography>
            <span>{selectedWorkflowNode.node.type}</span>
          </Box>
          <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
            <Typography sx={{ fontWeight: 'bold' }}>Status</Typography>
            <span>{selectedWorkflowNode.status}</span>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <TextInput
              value={value}
              label="Human Input"
              placeholder="Name"
              name="humanInput"
              onChange={(e) => setValue(e.target.value)}
              disabled={!isReady}
            />
          </Box>
          <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
            <Typography sx={{ fontWeight: 'bold' }}>Data</Typography>
            <span>{selectedWorkflowNode.content}</span>
          </Box>
          <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
            <Typography sx={{ fontWeight: 'bold' }}>Started At</Typography>
            <span>{formatDate(selectedWorkflowNode.startedAt)}</span>
          </Box>
          {selectedWorkflowNode.completedAt ? (
            <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
              <Typography sx={{ fontWeight: 'bold' }}>Completed At</Typography>
              <span>{formatDate(selectedWorkflowNode.completedAt)}</span>
            </Box>
          ) : null}
        </Box>
      </Modal>
    );
  }
  return null;
};
