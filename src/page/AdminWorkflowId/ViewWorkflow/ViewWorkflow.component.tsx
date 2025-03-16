'use client';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Icons } from '@data';
import { IViewWorkflow } from './ViewWorkflow';

export const ViewWorkflow: React.FC<IViewWorkflow> = ({ data }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>Item</Box>
        <Box>
          <IconButton>
            <Icons.Edit />
          </IconButton>
        </Box>
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
  );
};
