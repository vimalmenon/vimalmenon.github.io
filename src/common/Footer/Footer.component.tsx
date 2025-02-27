import Box from '@mui/material/Box';
import MuiLink from '@mui/material/Link';
import Link from 'next/link';
import { blueGrey, teal } from '@mui/material/colors';

export const Footer: React.FC = () => {
  const version = process.env.npm_package_version;
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        padding: 2,
        justifyContent: 'space-between',
        background: blueGrey[100],
        color: teal[500],
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
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box component="span" sx={{ fontSize: '1.5rem' }}>
          Resources
        </Box>
        <span style={{ fontSize: '14px' }}>
          <MuiLink component={Link} href="/" underline="none" sx={{ color: teal[500] }}>
            Home
          </MuiLink>
        </span>
        <span style={{ fontSize: '14px' }}>
          <MuiLink component={Link} href="/about" underline="none" sx={{ color: teal[500] }}>
            About
          </MuiLink>
        </span>
        <span style={{ fontSize: '14px' }}>
          <MuiLink
            component={Link}
            href="/release-notes"
            underline="none"
            sx={{ color: teal[500] }}
          >
            Release Notes
          </MuiLink>
        </span>
      </Box>
    </Box>
  );
};
