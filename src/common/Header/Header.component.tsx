import Box from '@mui/material/Box';
import { HeaderNavigation } from '@data';
import { Link } from './Link';

export const Header: React.FC = () => {
  return (
    <Box component="header" sx={{ display: 'flex', justifyContent: 'space-between', marginY: 2 }}>
      <Box sx={{ display: 'flex', fontSize: '25px' }}>Vimal Menon</Box>
      <Box sx={{ borderRadius: 10, display: 'flex', gap: 2 }}>
        {HeaderNavigation.map((nav) => (
          <Link navigation={nav} key={nav.name} />
        ))}
      </Box>
    </Box>
  );
};
