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
      <span style={{ fontSize: '14px' }}>
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
      <span style={{ fontSize: '14px' }}>
        <MuiLink component={Link} href="/release-notes" underline="none" sx={{ color: teal[500] }}>
          Release Notes
        </MuiLink>
      </span>
      <span style={{ fontSize: '14px' }}>{version}</span>
    </Box>
  );
};
