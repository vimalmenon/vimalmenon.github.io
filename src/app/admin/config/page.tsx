import type { Metadata } from 'next';
import { Breadcrumbs } from '@common';
import { Navigation } from '@data';
import { AdminConfig } from '@page';
import { StyledPage } from '@style';

export const metadata: Metadata = {
  description: "This is Vimal Menon's personal website",
  title: 'Config | Admin | Vimal Menon',
};

const Page: React.FC = () => {
  return (
    <StyledPage sx={{ flexDirection: 'column' }}>
      <Breadcrumbs navigation={Navigation.AdminConfig} />
      <AdminConfig />
    </StyledPage>
  );
};

export default Page;
