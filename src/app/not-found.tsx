import Box from '@mui/material/Box';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@common';
import { MainLayout } from '@component';
import { Navigation } from '@data';
import { StyledPage } from '@style';

export const metadata: Metadata = {
  description: "This is Vimal Menon's personal website",
  title: 'Page Not Found | Vimal Menon',
};

const Page: React.FC = () => (
  <MainLayout>
    <StyledPage>
      <Breadcrumbs navigation={Navigation.NotFound} />
      <Box>Requested page not found</Box>
    </StyledPage>
  </MainLayout>
);
export default Page;
