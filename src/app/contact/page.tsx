import Box from '@mui/material/Box';

import type { Metadata } from 'next';

import { Breadcrumbs } from '@common';
import { ComingSoon, MainLayout } from '@component';
import { Navigation } from '@data';

export const metadata: Metadata = {
  description: "This is Vimal Menon's personal website",
  title: Navigation.Contact.title,
};

const Page: React.FC = () => (
  <MainLayout>
    <Box component="main">
      <Breadcrumbs navigation={Navigation.Contact} />
      <ComingSoon page="Contact page" />
    </Box>
  </MainLayout>
);

export default Page;
