'use client';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import LinearProgress from '@mui/material/LinearProgress';
import { Fragment, useEffect } from 'react';
import { Icon, WorkflowHeader } from '@component';
import { Icons } from '@data';
import { AdminLinksContext } from './AdminLinks.context';
import { useLinkContext, useLinkHelper } from './AdminLinks.service';
import { CreateGroupLink } from './CreateGroupLink';
import { ListLinks } from './ListLinks';

const Component: React.FC = () => {
  const { getLinks } = useLinkHelper();
  const { linkGroups, loading, showCreate } = useLinkContext();
  useEffect(() => {
    getLinks();
  }, []);
  return (
    <Fragment>
      <Divider />
      <WorkflowHeader
        title="Executed Workflow"
        action={<Icon toolTip="Delete" icon={<Icons.Delete />} />}
      />
      <Divider />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {loading ? <LinearProgress /> : null}
        {showCreate && (
          <Fragment>
            <CreateGroupLink />
            <Divider />
          </Fragment>
        )}

        <ListLinks linkGroups={linkGroups} />
      </Box>
    </Fragment>
  );
};

export const AdminLinks: React.FC = () => (
  <AdminLinksContext>
    <Component />
  </AdminLinksContext>
);
