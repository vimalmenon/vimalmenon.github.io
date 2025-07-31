'use client';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { CreateLink } from './CreateLink';
import { IListLinks } from './ListLinks';

export const ListLinks: React.FC<IListLinks> = ({ linkGroups }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
    {linkGroups.map((link) => (
      <Box key={link.id}>
        {link.name}
        <CreateLink id={link.id} />
        {link.links.map((data) => (
          <Box key={data.id}>
            <a href={data.link} target="_blank" rel="noreferrer">
              {data.name}
            </a>

            {data.reference}
          </Box>
        ))}
        <Divider />
      </Box>
    ))}
  </Box>
);
