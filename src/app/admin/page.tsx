import Box from '@mui/material/Box';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@common';
import { ComingSoon } from '@component';
import { Navigation } from '@data';

export const metadata: Metadata = {
  description: "This is Vimal Menon's personal website",
  title: 'Admin | Vimal Menon',
};

const Page: React.FC = () => {
  return (
    <Box component="main">
      <Breadcrumbs navigation={Navigation.Admin} />
      <ComingSoon page="Admin Page" />
    </Box>
  );
};

export default Page;
