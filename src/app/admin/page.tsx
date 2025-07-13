import type { Metadata } from 'next';
import { Breadcrumbs } from '@common';
import { AdminLayout } from '@component';
import { Navigation } from '@data';
import { Admin } from '@page';
import { StyledPage } from '@style';

export const metadata: Metadata = {
  description: "This is Vimal Menon's personal website",
  title: Navigation.Admin.title,
};

const Page: React.FC = () => (
  <AdminLayout>
    <StyledPage sx={{ flexDirection: 'column' }}>
      <Breadcrumbs navigation={Navigation.Admin} />
      <Admin />
    </StyledPage>
  </AdminLayout>
);

export default Page;
