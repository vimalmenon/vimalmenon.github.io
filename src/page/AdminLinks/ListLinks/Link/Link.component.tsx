'use client';

import Box from '@mui/material/Box';
import { CreateLink } from './CreateLink';
import { ILink } from './Link';

export const Link: React.FC<ILink> = ({ link }) => (
  <Box key={link.id}>
    <CreateLink id={link.id} />
    <a href={link.link} target="_blank" rel="noreferrer">
      {link.name}
    </a>

    {link.reference}
  </Box>
);
