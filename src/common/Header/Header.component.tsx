import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { HeaderNavigation } from '@data';
import { StyledAppBar, StyledDesktopHeader, StyledMobileHeader } from '@style';

import { Link } from './Link';
import { Logo } from './Logo';
import { MobileDrawer } from './MobileDrawer';
import { ToggleTheme } from './ToggleTheme';

export const Header: React.FC = () => (
  <StyledAppBar position="static">
    <Container maxWidth="xl">
      <StyledDesktopHeader variant="dense">
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
      </StyledDesktopHeader>
      <StyledMobileHeader variant="dense">
        <Logo />
        <Box sx={{ display: 'flex' }}>
          <ToggleTheme />
          <MobileDrawer />
        </Box>
      </StyledMobileHeader>
    </Container>
  </StyledAppBar>
);
