import type { Metadata, NextPage } from 'next';
import { Breadcrumbs } from '@common';
import { APIs, GenerateWorkflow } from '@data';
import { AdminWorkflowId } from '@page';
import { StyledPage } from '@style';
import { IGenericResponse, IWorkflow } from '@types';
import { makeRequest } from '@utility';
import { IPage, IWorkflowId } from './id';

export const metadata: Metadata = {
  description: "This is Vimal Menon's personal website",
  title: 'Workflows | Admin | Vimal Menon',
};

const Page: NextPage<IPage> = async ({ params }) => {
  const { id } = await params;
  return (
    <StyledPage sx={{ flexDirection: 'column' }}>
      <Breadcrumbs navigation={GenerateWorkflow(id)} />
      <AdminWorkflowId id={id} />
    </StyledPage>
  );
};

export const generateStaticParams = async (): Promise<IWorkflowId[]> => {
  const { error, response } = await makeRequest<IGenericResponse<IWorkflow[]>>(APIs.GetWorkflows());
  if (error) {
    return [
      {
        id: '123',
      },
    ];
  }
  return response.data.map((data) => ({
    id: data.id,
  }));
};

export default Page;
