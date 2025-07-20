'use client';

import Box from '@mui/material/Box';
import { formatDate } from '@utility';
import { IWorkflowView } from './WorkflowView';

export const WorkflowView: React.FC<IWorkflowView> = ({ data }) => (
  <Box sx={{ display: 'flex', flex: '1 1 100%', flexDirection: 'column', gap: 2 }}>
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
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box>Updated At</Box>
      <Box>{formatDate(data.updatedAt)}</Box>
    </Box>
  </Box>
);
