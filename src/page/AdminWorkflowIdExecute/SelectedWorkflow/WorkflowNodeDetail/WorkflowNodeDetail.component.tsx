'use client';

import React from 'react';
import { Modal } from '@component';
import { useWorkflowNodeDetailHelper } from '../../AdminWorkflowIdExecute.service';

export const WorkflowNodeDetail: React.FC = () => {
  const { closeSelectedWorkflow, selectedWorkflowNode } = useWorkflowNodeDetailHelper();
  if (selectedWorkflowNode) {
    return (
      <Modal
        open={true}
        title="This is Workflow Detail"
        onClose={closeSelectedWorkflow}
        onConfirm={() => Promise.resolve()}
      >
        <div>This is selected workflow node</div>
      </Modal>
    );
  }
  return null;
};
