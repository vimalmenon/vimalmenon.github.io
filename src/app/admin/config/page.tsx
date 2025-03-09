import Box from '@mui/material/Box';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@common';
import { Navigation } from '@data';
import { AdminConfig } from '@page';

export const metadata: Metadata = {
  description: "This is Vimal Menon's personal website",
  title: 'Config | Admin | Vimal Menon',
};

const Page: React.FC = () => {
  return (
    <Box component="main">
      <Breadcrumbs navigation={Navigation.Admin} />
      <AdminConfig />
    </Box>
  );
};

export default Page;
