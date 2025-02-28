import Box from '@mui/material/Box';
import { HeaderNavigation } from '@data';
import { Link } from './Link';
import { teal } from '@mui/material/colors';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { ToggleTheme } from './ToggleTheme';
import { MobileHeader, DesktopHeader } from './Header.style';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  return (
    <AppBar position="static" sx={{ background: 'transparent' }}>
      <Container maxWidth="xl">
        <DesktopHeader variant="dense">
          <Logo />
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Box
              sx={{
                borderRadius: 1,
                display: 'flex',
                gap: 1,
                backgroundColor: teal[500],
                padding: 0.5,
              }}
            >
              {HeaderNavigation.map((nav) => (
                <Link navigation={nav} key={nav.name} />
              ))}
            </Box>
            <ToggleTheme />
          </Box>
        </DesktopHeader>
        <MobileHeader variant="dense">
          <Logo />
          <Box sx={{ display: 'flex' }}>
            <ToggleTheme />
            <IconButton>
              <MenuIcon />
            </IconButton>
          </Box>
        </MobileHeader>
      </Container>
    </AppBar>
  );
};
