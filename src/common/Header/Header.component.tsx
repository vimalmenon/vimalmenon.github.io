import Box from '@mui/material/Box';
import { HeaderNavigation } from '@data';
import { Link } from './Link';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { ToggleTheme } from './ToggleTheme';
import { MobileHeader, DesktopHeader } from './Header.style';
import { Logo } from './Logo';
import { Drawer } from './Drawer';

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
                backgroundColor: 'primary.main',
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
