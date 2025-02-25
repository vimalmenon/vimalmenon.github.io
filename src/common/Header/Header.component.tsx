import Box from '@mui/material/Box';
import { HeaderNavigation } from '@data';
import { Link } from './Link';

export const Header: React.FC = () => {
  return (
    <Box component="header" sx={{ display: 'flex', justifyContent: 'space-between', marginY: 1 }}>
      <Box
        sx={{
          display: 'flex',
          fontSize: '1.5em',
          color: 'primary.500',
          alignItems: 'center',
          fontWeight: 'bold',
          wordSpacing: '0.3em',
        }}
      >
        Vimal Menon
      </Box>
      <Box
        sx={{
          borderRadius: 2,
          display: 'flex',
          gap: 2,
          backgroundColor: 'primary.500',
          padding: 1,
        }}
      >
        {HeaderNavigation.map((nav) => (
          <Link navigation={nav} key={nav.name} />
        ))}
      </Box>
    </Box>
  );
};
