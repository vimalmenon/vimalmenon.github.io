import Box from '@mui/material/Box';
import { HeaderNavigation } from '@data';
import { Link } from './Link';
import { teal } from '@mui/material/colors';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import MuiLink from '@mui/material/Link';
import NextLink from 'next/link';
import { ToggleTheme } from './ToggleTheme';
import { MobileHeader, DesktopHeader } from './Header.style';

export const Header: React.FC = () => {
  return (
    <AppBar position="static" sx={{ background: 'transparent' }}>
      <Container maxWidth="xl">
        <DesktopHeader variant="dense">
          <MuiLink
            component={NextLink}
            href={'/'}
            underline="none"
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
          </MuiLink>
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
        <MobileHeader variant="dense"></MobileHeader>
      </Container>
    </AppBar>
  );
};
