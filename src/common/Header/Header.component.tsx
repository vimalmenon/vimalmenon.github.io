import Box from '@mui/material/Box';
import { HeaderNavigation } from '@data';
import { Link } from './Link';
import { teal } from '@mui/material/colors';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

export const Header: React.FC = () => {
  return (
    <AppBar position="static" sx={{ background: 'transparent' }}>
      <Toolbar variant="dense">
        <Box
          sx={{
            marginX: 1,
            display: 'flex',
            fontSize: '1.5em',
            color: teal[500],
            alignItems: 'center',
            fontWeight: 'bold',
          }}
        >
          Vimal Menon
        </Box>
        <Box
          sx={{
            borderRadius: 1,
            display: 'flex',
            gap: 2,
            backgroundColor: teal[500],
            padding: 1,
          }}
        >
          {HeaderNavigation.map((nav) => (
            <Link navigation={nav} key={nav.name} />
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
