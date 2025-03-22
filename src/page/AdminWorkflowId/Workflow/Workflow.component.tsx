'use client';
import Box from '@mui/material/Box';
import React from 'react';
import { IWorkflowComponent } from './Workflow';
import { WorkflowForm } from './WorkflowForm';
import { WorkflowView } from './WorkflowView';

export const Workflow: React.FC<IWorkflowComponent> = ({
  data,
  mode,
  onCancel,
  onEdit,
  updateWorkflow,
}) => {
  return (
    <Box sx={{ display: 'flex', flex: '1 1 100%', flexDirection: 'column', gap: 2, marginY: 2 }}>
      {data && mode === 'UPDATE' ? (
        <WorkflowForm
          mode="UPDATE"
          data={data}
          onCancel={onCancel}
          updateWorkflow={updateWorkflow}
        />
      ) : null}
      {data && mode === 'VIEW' ? <WorkflowView data={data} onEdit={onEdit} /> : null}
    </Box>
  );
};
