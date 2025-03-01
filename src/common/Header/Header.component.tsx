import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { HeaderNavigation } from '@data';
import { Drawer } from './Drawer';
import { DesktopHeader, MobileHeader } from './Header.style';
import { Link } from './Link';
import { Logo } from './Logo';
import { ToggleTheme } from './ToggleTheme';

export const Header: React.FC = () => {
  return (
    <AppBar position="static" sx={{ background: 'transparent' }}>
      <Container maxWidth="xl">
        <DesktopHeader variant="dense">
          <Logo />
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Box
              sx={{
                backgroundColor: 'primary.main',
                borderRadius: 1,
                display: 'flex',
                gap: 1,
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
            <Drawer />
          </Box>
        </MobileHeader>
      </Container>
    </AppBar>
  );
};
