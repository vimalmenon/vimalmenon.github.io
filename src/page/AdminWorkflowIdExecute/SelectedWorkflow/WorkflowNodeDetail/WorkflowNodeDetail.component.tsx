'use client';

import Box from '@mui/material/Box';
import React from 'react';
import { Modal } from '@component';
import { useWorkflowNodeDetailHelper } from '../../AdminWorkflowIdExecute.service';

export const WorkflowNodeDetail: React.FC = () => {
  const { closeSelectedWorkflow, onSelectedWorkflowNodeSubmit, selectedWorkflowNode } =
    useWorkflowNodeDetailHelper();
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
        <Box>This is selected workflow node</Box>
      </Modal>
    );
  }
  return null;
};
