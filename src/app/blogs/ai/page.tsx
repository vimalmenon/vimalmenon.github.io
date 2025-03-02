import Box from '@mui/material/Box';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@common';
import { Navigation } from '@data';

export const metadata: Metadata = {
  description: "This is Vimal Menon's personal website",
  title: 'AI | Blogs | Vimal Menon',
};

const Page: React.FC = () => {
  return (
    <Box component="main">
      <Breadcrumbs navigation={Navigation.Blogs} />
      <div>This is AI Blogs page</div>
    </Box>
  );
};

export default Page;
