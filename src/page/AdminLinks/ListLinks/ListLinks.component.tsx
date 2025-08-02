'use client';
import Box from '@mui/material/Box';
import { Link } from './Link';
import { IListLinks } from './ListLinks';

export const ListLinks: React.FC<IListLinks> = ({ linkGroups }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, margin: 1 }}>
    {linkGroups.map((link) => (
      <Link link={link} key={link.id} />
    ))}
  </Box>
);
