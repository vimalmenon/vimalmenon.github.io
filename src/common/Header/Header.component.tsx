import Box from '@mui/material/Box';
import { HeaderNavigation } from '@data';
import { Link } from './Link';
import { blueGrey } from '@mui/material/colors';

export const Header: React.FC = () => {
  return (
    <Box
      component="header"
      sx={{
        borderRadius: 1,
        display: 'flex',
        justifyContent: 'space-between',
        marginY: 1,
        backgroundColor: blueGrey[100],
        padding: 1,
      }}
    >
      <Box
        sx={{
          marginX: 1,
          display: 'flex',
          fontSize: '1.5em',
          color: blueGrey[500],
          alignItems: 'center',
          fontWeight: 'bold',
        }}
      >
        Vimal Menon
      </Box>
      <Box
        sx={{
          borderRadius: 2,
          display: 'flex',
          gap: 2,
          backgroundColor: blueGrey[500],
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
