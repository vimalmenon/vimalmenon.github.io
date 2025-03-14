import type { Metadata } from 'next';
import { Breadcrumbs } from '@common';
import { APIs, Navigation } from '@data';
import { AdminWorkflowId } from '@page';
import { StyledPage } from '@style';
import { IGenericResponse, IWorkflow } from '@types';
import { makeRequest } from '@utility';

export const metadata: Metadata = {
  description: "This is Vimal Menon's personal website",
  title: 'Workflows | Admin | Vimal Menon',
};

const Page: React.FC = () => {
  return (
    <StyledPage sx={{ flexDirection: 'column' }}>
      <Breadcrumbs navigation={Navigation.AdminWorkflow} />
      <AdminWorkflowId />
    </StyledPage>
  );
};

export const generateStaticParams = async () => {
  const result = await makeRequest<IGenericResponse<IWorkflow[]>>(APIs.GetWorkflows());

  return result.data.map((data) => {
    return {
      id: data.id,
    };
  });
};

export default Page;
