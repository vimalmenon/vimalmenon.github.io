import Box from '@mui/material/Box';
import MuiLink from '@mui/material/Link';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ display: 'flex', marginY: 2, justifyContent: 'space-between' }}>
      <span style={{ fontSize: '12px' }}>All rights reserved vimalmenon.com</span>
      <span style={{ fontSize: '12px' }}>
        <MuiLink component={Link} href="/release-notes" underline="none" sx={{ color: 'inherit' }}>
          Release Notes
        </MuiLink>
      </span>
    </Box>
  );
};
