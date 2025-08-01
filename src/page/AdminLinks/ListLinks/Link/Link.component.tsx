'use client';

import Box from '@mui/material/Box';
import { useState } from 'react';
import { Icon } from '@component';
import { Icons } from '@data';
import { useLinkHelper } from '../../AdminLinks.service';
import { CreateLink } from './CreateLink';
import { ILink } from './Link';

export const Link: React.FC<ILink> = ({ link }) => {
  const [showCreate, setShowCreate] = useState<boolean>(false);
  const { deleteGroupLink, deleteLink } = useLinkHelper();
  return (
    <Box key={link.id}>
      {showCreate ? <CreateLink id={link.id} setShowCreate={setShowCreate} /> : null}
      {link.name}
      <Icon toolTip="Add Link" icon={<Icons.Add />} onClick={() => setShowCreate(true)} />
      <Icon
        toolTip="Delete Group"
        icon={<Icons.Delete />}
        onClick={async () => await deleteGroupLink(link.id)}
      />
      {link.links.map((data) => (
        <Box key={data.id}>
          <a href={data.link} target="_blank" rel="noreferrer">
            {data.name}
          </a>
          {data.reference}
          <Icon
            toolTip="Delete Link"
            icon={<Icons.Delete />}
            onClick={async () => await deleteLink(link.id, data.id)}
          />
        </Box>
      ))}
    </Box>
  );
};
