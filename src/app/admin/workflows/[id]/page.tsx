import type { Metadata, NextPage } from 'next';
import { Breadcrumbs } from '@common';
import { APIs, GenerateWorkflow } from '@data';
import { AdminWorkflowId } from '@page';
import { StyledPage } from '@style';
import { IGenericResponse, IWorkflow } from '@types';
import { makeRequest } from '@utility';
import { IPage } from './id';

export const metadata: Metadata = {
  description: "This is Vimal Menon's personal website",
  title: 'Workflows | Admin | Vimal Menon',
};

const Page: NextPage<IPage> = async ({ params }) => {
  const { id } = await params;
  return (
    <StyledPage sx={{ flexDirection: 'column' }}>
      <Breadcrumbs navigation={GenerateWorkflow(id)} />
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
