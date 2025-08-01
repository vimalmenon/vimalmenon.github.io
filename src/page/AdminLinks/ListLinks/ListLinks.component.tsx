'use client';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { Link } from './Link';
import { IListLinks } from './ListLinks';

export const ListLinks: React.FC<IListLinks> = ({ linkGroups }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
    {linkGroups.map((link) => (
      <Box key={link.id}>
        {link.name}

        {link.links.map((data) => (
          <Link link={data} key={data.id} />
        ))}
        <Divider />
      </Box>
    ))}
  </Box>
);
