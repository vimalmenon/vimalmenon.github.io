import Link from 'next/link';
import Box from '@mui/material/Box';

export const Header: React.FC = () => {
  return (
    <Box component={'header'} sx={{ display: 'flex', justifyContent: 'space-between', marginY: 4 }}>
      <Box sx={{ display: 'flex', fontSize: '25px' }}>Vimal Menon</Box>
      <Box sx={{ borderRadius: 10, display: 'flex', gap: 2 }}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/asdf">Not Found</Link>
      </Box>
    </Box>
  );
};
