'use client';

import Box from '@mui/material/Box';
import { CreateLink } from './CreateLink';
import { ILink } from './Link';

export const Link: React.FC<ILink> = ({ link }) => (
  <Box key={link.id}>
    <CreateLink id={link.id} />
    {link.name}
    {link.links.map((data) => (
      <Box key={data.id}>
        <a href={data.link} target="_blank" rel="noreferrer">
          {data.name}
        </a>

        {data.reference}
      </Box>
    ))}
  </Box>
);
