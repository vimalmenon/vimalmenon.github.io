'use client';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { useEffect } from 'react';
import { AdminLinksContext } from './AdminLinks.context';
import { useLinkContext, useLinkHelper } from './AdminLinks.service';
import { CreateGroupLink } from './CreateGroupLink';
import { ListLinks } from './ListLinks';

const Component: React.FC = () => {
  const { getLinks } = useLinkHelper();
  const { linkGroups } = useLinkContext();
  useEffect(() => {
    getLinks();
  }, []);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <CreateGroupLink />
      <Divider />
      <ListLinks linkGroups={linkGroups} />
    </Box>
  );
};

export const AdminLinks: React.FC = () => (
  <AdminLinksContext>
    <Component />
  </AdminLinksContext>
);
