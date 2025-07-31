'use client';
import Box from '@mui/material/Box';
import { IListLinks } from './ListLinks';

export const ListLinks: React.FC<IListLinks> = ({ linkGroups }) => (
  <Box>
    {linkGroups.map((link) => (
      <Box key={link.id}>
        {link.name}
        {link.links.map((data) => (
          <Box key={data.id}>
            {data.name}
            {data.link}
            {data.reference}
          </Box>
        ))}
      </Box>
    ))}
  </Box>
);
