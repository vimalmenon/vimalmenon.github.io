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
  const { id: data } = await params;
  const [id] = data || [];
  if (id) {
    return (
      <StyledPage sx={{ flexDirection: 'column' }}>
        <Breadcrumbs navigation={GenerateWorkflow(id)} />
        <AdminWorkflowId id={id} />
      </StyledPage>
    );
  }
  return (
    <StyledPage sx={{ flexDirection: 'column' }}>
      <div>No ID</div>
    </StyledPage>
  );
};

export const generateStaticParams = async (): Promise<IWorkflowId[]> => {
  const { error, response } = await makeRequest<IGenericResponse<IWorkflow[]>>(APIs.GetWorkflows());
  if (error) {
    return [
      {
        id: ['123'],
      },
    ];
  }
  return response.data.reduce<IWorkflowId[]>((result, value) => {
    const executedWorkflows = value.executedWorkflows.map((data) => ({
      id: [value.id, 'execute', data.id],
    }));
    return [
      ...result,
      ...[
        {
          id: [value.id],
        },
        {
          id: [value.id, 'execute'],
        },
        {
          id: [''],
        },
      ],
      ...executedWorkflows,
    ];
  }, []);
};

export default Page;
