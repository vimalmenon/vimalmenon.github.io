import Box from '@mui/material/Box';
import { blueGrey, teal } from '@mui/material/colors';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import MuiLink from '@mui/material/Link';
import Link from 'next/link';
import { FooterNavigation, SocialMedias } from '@data';

export const Footer: React.FC = () => {
  const version = process.env.npm_package_version;
  return (
    <Box
      component="footer"
      sx={{
        background: blueGrey[100],
        display: 'flex',
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          color: teal[500],
          display: 'flex',
          justifyContent: 'space-between',
          padding: 2,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
          <Box sx={{ display: 'flex', gap: 2, marginY: 1 }}>
            {FooterNavigation.map((data) => {
              return (
                <span style={{ fontSize: '14px' }} key={data.name}>
                  <MuiLink
                    component={Link}
                    href={data.link}
                    underline="always"
                    sx={{ color: teal[500], fontWeight: 'bold' }}
                  >
                    {data.name}
                  </MuiLink>
                </span>
              );
            })}
          </Box>
          <Box sx={{ display: 'flex', gap: 2, marginY: 1 }}>
            <span style={{ fontSize: '0.8rem' }}>
              Copyright © 2025{' '}
              <MuiLink
                component={Link}
                href="https://vimalmenon.com/"
                underline="none"
                sx={{ color: teal[500] }}
              >
                Vimal Menon V{version}
              </MuiLink>
            </span>
          </Box>
        </Box>
        <Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
          {SocialMedias.map((media) => {
            return (
              <MuiLink
                component={Link}
                href={media.link}
                underline="none"
                key={media.link}
                target="_blank"
              >
                <IconButton>
                  <media.Icon />
                </IconButton>
              </MuiLink>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};
