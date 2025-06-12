'use client';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import LinearProgress from '@mui/material/LinearProgress';
import React from 'react';
import { useWorkflowContext, useWorkflowDataHelper } from '../AdminWorkflowId.service';
import { Header } from './Header';
import { IWorkflowComponent } from './Workflow';
import { WorkflowForm } from './WorkflowForm';
import { WorkflowView } from './WorkflowView';

export const Workflow: React.FC<IWorkflowComponent> = ({ data, onCancel }) => {
  const { loading, workflowFormMode, workflowLoading } = useWorkflowContext();
  const { updateWorkflow } = useWorkflowDataHelper();
  return (
    <Box sx={{ display: 'flex', flex: '1 1 100%', flexDirection: 'column', gap: 2 }}>
      <Card>
        <Header complete={data?.complete ?? false} />
        <Divider />
        {workflowLoading ? (
          <LinearProgress />
        ) : (
          <CardContent>
            {data && workflowFormMode === 'UPDATE' ? (
              <WorkflowForm
                mode="UPDATE"
                data={data}
                onCancel={onCancel}
                updateWorkflow={updateWorkflow}
                loading={loading}
              />
            ) : null}
            {data && workflowFormMode === 'VIEW' ? <WorkflowView data={data} /> : null}
          </CardContent>
        )}
      </Card>
    </Box>
  );
};
