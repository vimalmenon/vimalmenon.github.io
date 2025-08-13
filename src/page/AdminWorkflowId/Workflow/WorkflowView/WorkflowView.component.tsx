'use client';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';

import { Icons } from '@data';

import { IWorkflowView } from './WorkflowView';

export const WorkflowView: React.FC<IWorkflowView> = ({ data }) => (
  <Box sx={{ display: 'flex', flex: '1 1 100%', flexDirection: 'column', gap: 2 }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box>
        <b>{data.name}</b> ({data.id})
      </Box>
      <Box sx={{ alignItems: 'center', display: 'flex', gap: 1 }}>
        {data.complete ? (
          <Chip label="Complete" color="success" variant="outlined" size="small" />
        ) : (
          <Chip label="In Progress" color="warning" variant="outlined" size="small" />
        )}
        {data.detail ? (
          <Tooltip title={data.detail}>
            <Icons.Info fontSize="small" color="info" />
          </Tooltip>
        ) : null}
      </Box>
    </Box>
  </Box>
);
