'use client';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { useState } from 'react';
import { Icon } from '@component';
import { Icons } from '@data';
import { useLinkHelper } from '../../AdminLinks.service';
import { CreateLink } from './CreateLink';
import { ILink } from './Link';

export const Link: React.FC<ILink> = ({ link }) => {
  const [showCreate, setShowCreate] = useState<boolean>(false);
  const { deleteLink, deleteLinkGroup } = useLinkHelper();
  return (
    <Box key={link.id} sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      {showCreate ? <CreateLink id={link.id} setShowCreate={setShowCreate} /> : null}
      <Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
        <span>{link.name}</span>
        <Box>
          <Icon toolTip="Add Link" icon={<Icons.Add />} onClick={() => setShowCreate(true)} />
          <Icon
            toolTip="Delete Group"
            icon={<Icons.Delete />}
            onClick={async () => await deleteLinkGroup(link.id)}
          />
        </Box>
      </Box>
      <Divider />
      <Box>
        {link.links.map((data) => (
          <Box
            key={data.id}
            sx={{
              alignItems: 'center',
              display: 'flex',
              gap: 1,
              justifyContent: 'space-between',
              marginLeft: 3,
            }}
          >
            <Box sx={{ display: 'flex', gap: 2 }}>
              <a href={data.link} target="_blank" rel="noreferrer">
                {data.name}
              </a>
              {data.reference}
            </Box>
            <Box>
              <Icon
                toolTip="Delete Link"
                icon={<Icons.Delete />}
                onClick={async () => await deleteLink(link.id, data.id)}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
