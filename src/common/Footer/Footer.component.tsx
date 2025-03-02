import Box from '@mui/material/Box';
import { blueGrey, teal } from '@mui/material/colors';
import Container from '@mui/material/Container';
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
          <span style={{ fontSize: '0.8rem' }}>V{version}</span>
          <span style={{ fontSize: '0.8rem' }}>
            Copyright © 2025{' '}
            <MuiLink
              component={Link}
              href="https://vimalmenon.com/"
              underline="none"
              sx={{ color: teal[500] }}
            >
              Vimal Menon
            </MuiLink>
          </span>
          <Box sx={{ display: 'flex', gap: 1 }}>
            {SocialMedias.map((media) => {
              return (
                <MuiLink
                  component={Link}
                  href={media.link}
                  underline="none"
                  key={media.link}
                  target="_blank"
                >
                  <media.Icon />
                </MuiLink>
              );
            })}
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box component="span" sx={{ fontSize: '1.5rem' }}>
            Pages
          </Box>
          {FooterNavigation.map((data) => {
            return (
              <span style={{ fontSize: '14px' }} key={data.name}>
                <MuiLink
                  component={Link}
                  href={data.link}
                  underline="none"
                  sx={{ color: teal[500] }}
                >
                  {data.name}
                </MuiLink>
              </span>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};
