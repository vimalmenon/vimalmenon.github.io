import Box from '@mui/material/Box';
import MuiLink from '@mui/material/Link';
import Link from 'next/link';
import { blueGrey } from '@mui/material/colors';

export const Footer: React.FC = () => {
  const version = process.env.npm_package_version;
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        marginY: 2,
        padding: 2,
        justifyContent: 'space-between',
        background: blueGrey[100],
        color: blueGrey[500],
      }}
    >
      <span style={{ fontSize: '14px' }}>All rights reserved vimalmenon.com </span>
      <span style={{ fontSize: '14px' }}>
        <MuiLink component={Link} href="/release-notes" underline="none" sx={{ color: 'inherit' }}>
          Release Notes
        </MuiLink>
      </span>
      <span style={{ fontSize: '14px' }}>{version}</span>
    </Box>
  );
};
