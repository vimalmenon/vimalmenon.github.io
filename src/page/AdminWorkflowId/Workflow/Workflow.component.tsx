'use client';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import React, { Fragment } from 'react';
import { Icon } from '@component';
import { Icons } from '@data';
import {
  useTabHelper,
  useWorkflowContext,
  useWorkflowDataHelper,
} from '../AdminWorkflowId.service';
import { IWorkflowComponent } from './Workflow';
import { WorkflowForm } from './WorkflowForm';
import { WorkflowView } from './WorkflowView';

export const Workflow: React.FC<IWorkflowComponent> = ({ data, mode, onCancel, onEdit }) => {
  const { loading } = useWorkflowContext();
  const { executeWorkflow, updateWorkflow } = useWorkflowDataHelper();
  const { onAddNodeTab } = useTabHelper();
  return (
    <Box sx={{ display: 'flex', flex: '1 1 100%', flexDirection: 'column', gap: 2 }}>
      <Card>
        <CardHeader
          title={mode === 'VIEW' ? 'Workflow' : 'Edit Workflow'}
          action={
            <Fragment>
              <Icon toolTip="Add Node" icon={<Icons.Add />} onClick={onAddNodeTab} />
              <Icon toolTip="Edit Workflow" icon={<Icons.Edit />} onClick={onEdit} />
              {!data?.complete ? (
                <Icon toolTip="Execute" icon={<Icons.Play />} onClick={executeWorkflow} />
              ) : null}
            </Fragment>
          }
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
