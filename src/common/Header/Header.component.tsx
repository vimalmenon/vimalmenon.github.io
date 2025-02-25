import Link from 'next/link';
import Box from '@mui/material/Box';
import MuiLink from '@mui/material/Link';

export const Header: React.FC = () => {
  return (
    <Box component={'header'} sx={{ display: 'flex', justifyContent: 'space-between', marginY: 3 }}>
      <Box sx={{ display: 'flex', fontSize: '25px' }}>Vimal Menon</Box>
      <Box sx={{ borderRadius: 10, display: 'flex', gap: 2 }}>
        <MuiLink component={Link} href="/" underline="none">
          Home
        </MuiLink>
        <MuiLink component={Link} href="/about" underline="none">
          About
        </MuiLink>
        <MuiLink component={Link} href="/blogs" underline="none">
          Blogs
        </MuiLink>
        <MuiLink component={Link} href="/asdf" underline="none">
          Not Found
        </MuiLink>
      </Box>
    </Box>
  );
};
