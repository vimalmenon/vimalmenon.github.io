'use client';
import Box from '@mui/material/Box';
import { AdminLinksContext } from './AdminLinks.context';
import { CreateGroupLink } from './CreateGroupLink';

const Component: React.FC = () => (
  <Box>
    <CreateGroupLink />
  </Box>
);

export const AdminLinks: React.FC = () => (
  <AdminLinksContext>
    <Component />
  </AdminLinksContext>
);
