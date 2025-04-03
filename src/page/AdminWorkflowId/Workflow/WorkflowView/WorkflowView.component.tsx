'use client';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { Fragment } from 'react';
import { Icon } from '@component';
import { Icons } from '@data';
import { IWorkflowView } from './WorkflowView';

export const WorkflowView: React.FC<IWorkflowView> = ({ data, onEdit }) => {
  return (
    <Card>
      <CardHeader
        title="Workflow"
        action={
          <Fragment>
            {!data.complete ? <Icon toolTip="Edit" icon={<Icons.Edit />} onClick={onEdit} /> : null}
          </Fragment>
        }
      />
      <CardContent>
        <Box sx={{ display: 'flex', flex: '1 1 100%', flexDirection: 'column', gap: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>Workflow</Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>ID</Box>
            <Box>{data.id}</Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>Name</Box>
            <Box>{data.name}</Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>Detail</Box>
            <Box>{data.detail}</Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>Complete</Box>
            <Box>{data.complete ? 'True' : 'False'}</Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
