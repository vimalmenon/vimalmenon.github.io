'use client';

import Box from '@mui/material/Box';
import { Workflows } from './Workflows';

export const AdminWorkflows: React.FC = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
    <Workflows />
  </Box>
);
