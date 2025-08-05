'use client';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import LinearProgress from '@mui/material/LinearProgress';
import { Fragment, useEffect } from 'react';
import { Icon, WorkflowHeader } from '@component';
import { Icons } from '@data';
import { AdminLinksContext } from './AdminLinks.context';
import { useLinkContext, useLinkHelper } from './AdminLinks.service';
import { CreateLinkGroup } from './CreateLinkGroup';
import { ListLinks } from './ListLinks';

const Component: React.FC = () => {
  const { getLinks } = useLinkHelper();
  const { linkGroups, loading, setShowCreate, showCreate } = useLinkContext();
  useEffect(() => {
    getLinks();
  }, []);
  return (
    <Fragment>
      <Divider />
      <WorkflowHeader
        title="Executed Workflow"
        action={
          <Icon toolTip="Add Link" icon={<Icons.Add />} onClick={() => setShowCreate(true)} />
        }
      />
      <Divider />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {loading ? <LinearProgress /> : null}
        {showCreate && (
          <Fragment>
            <CreateLinkGroup />
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
