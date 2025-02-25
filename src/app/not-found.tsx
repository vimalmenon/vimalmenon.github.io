import { Breadcrumbs } from '@common';
import { Navigation } from '@data';
import Box from '@mui/material/Box';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | Vimal Menon',
  description: "This is Vimal Menon's personal website",
};

const Page: React.FC = () => {
  return (
    <Box component="main">
      <Breadcrumbs navigation={Navigation.NotFound} />
      <div>Requested page not found</div>
    </Box>
  );
};
export default Page;
