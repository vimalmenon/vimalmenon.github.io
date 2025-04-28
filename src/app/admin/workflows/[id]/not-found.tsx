import Box from '@mui/material/Box';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@common';
import { Navigation } from '@data';
import { StyledPage } from '@style';

export const metadata: Metadata = {
  description: "This is Vimal Menon's personal website",
  title: 'Page Not Found | Vimal Menon',
};

const Page: React.FC = () => (
  <StyledPage>
    <Breadcrumbs navigation={Navigation.NotFound} />
    <Box>Workflow not found</Box>
  </StyledPage>
);
export default Page;
