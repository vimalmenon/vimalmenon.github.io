'use client';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import React from 'react';
import { Icon } from '@component';
import { Icons } from '@data';
import { IWorkflowComponent } from './Workflow';
import { WorkflowForm } from './WorkflowForm';
import { WorkflowView } from './WorkflowView';

export const Workflow: React.FC<IWorkflowComponent> = ({
  data,
  loading,
  mode,
  onCancel,
  onEdit,
  updateWorkflow,
}) => {
  return (
    <Box sx={{ display: 'flex', flex: '1 1 100%', flexDirection: 'column', gap: 2 }}>
      <Card>
        <CardHeader
          title={mode === 'VIEW' ? 'Workflow' : 'Edit Workflow'}
          action={<Icon toolTip="Edit Workflow" icon={<Icons.Edit />} onClick={onEdit} />}
        />
        <CardContent>
          {data && mode === 'UPDATE' ? (
            <WorkflowForm
              mode="UPDATE"
              data={data}
              onCancel={onCancel}
              updateWorkflow={updateWorkflow}
              loading={loading}
            />
          ) : null}
          {data && mode === 'VIEW' ? <WorkflowView data={data} /> : null}
        </CardContent>
      </Card>
    </Box>
  );
};
