import Link from 'next/link';
import Box from '@mui/material/Box';
import MuiLink from '@mui/material/Link';
import { HeaderNavigation } from '@data';

export const Header: React.FC = () => {
  return (
    <Box component="header" sx={{ display: 'flex', justifyContent: 'space-between', marginY: 2 }}>
      <Box sx={{ display: 'flex', fontSize: '25px' }}>Vimal Menon</Box>
      <Box sx={{ borderRadius: 10, display: 'flex', gap: 2 }}>
        {HeaderNavigation.map((nav) => (
          <MuiLink component={Link} href={nav.link} underline="none" key={nav.name}>
            {nav.name}
          </MuiLink>
        ))}
      </Box>
    </Box>
  );
};
