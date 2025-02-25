import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import { Breadcrumbs } from '@common';
import { Navigation } from '@data';

export const metadata: Metadata = {
  title: 'About | Vimal Menon',
  description: "This is Vimal Menon's personal website",
};

const Page: React.FC = () => {
  return (
    <Box component="main">
      <Breadcrumbs navigation={Navigation.About} />
      <div>This is About page</div>
    </Box>
  );
};

export default Page;
