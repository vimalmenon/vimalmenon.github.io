import type { Metadata } from 'next';
import { Breadcrumbs } from '@common';
import { Navigation } from '@data';
import { AdminWorkflows } from '@page';
import { StyledPage } from '@style';

export const metadata: Metadata = {
  description: "This is Vimal Menon's personal website",
  title: Navigation.AdminWorkflow.title,
};

const Page: React.FC = () => (
  <StyledPage sx={{ flexDirection: 'column' }}>
    <Breadcrumbs navigation={Navigation.AdminWorkflow} />
    <AdminWorkflows />
  </StyledPage>
);

export default Page;
