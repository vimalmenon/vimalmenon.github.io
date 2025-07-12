import type { Metadata, NextPage } from 'next';
import { Breadcrumbs } from '@common';
import { APIs, GenerateWorkflow } from '@data';
import { AdminWorkflowId, AdminWorkflowIdExecute, AdminWorkflows } from '@page';
import { StyledPage } from '@style';
import { IGenericResponse, IWorkflow } from '@types';
import { makeRequest } from '@utility';
import { IPage, IWorkflowId } from './id';

export const metadata: Metadata = {
  description: "This is Vimal Menon's personal website",
  title: 'Workflows | Admin | Vimal Menon',
};

const Page: NextPage<IPage> = async ({ params }) => {
  const { data } = await params;
  if (!data) {
    return (
      <StyledPage sx={{ flexDirection: 'column' }}>
        <AdminWorkflows />
      </StyledPage>
    );
  }
  const [id, execute] = data;
  if (execute) {
    return (
      <StyledPage sx={{ flexDirection: 'column' }}>
        <AdminWorkflowIdExecute id={id} />
      </StyledPage>
    );
  }
  if (id) {
    return (
      <StyledPage sx={{ flexDirection: 'column' }}>
        <Breadcrumbs navigation={GenerateWorkflow(id)} />
        <AdminWorkflowId id={id} />
      </StyledPage>
    );
  }
};

export const generateStaticParams = async (): Promise<IWorkflowId[]> => {
  const { error, response } = await makeRequest<IGenericResponse<IWorkflow[]>>(APIs.GetWorkflows());
  if (error) {
    return [
      {
        data: ['123'],
      },
    ];
  }
  return response.data.reduce<IWorkflowId[]>((result, value) => {
    const executedWorkflows = value.executedWorkflows.map((data) => ({
      data: [value.id, 'execute', data.id],
    }));
    return [
      ...result,
      ...[
        {
          data: [value.id],
        },
        {
          data: [value.id, 'execute'],
        },
        {
          data: [''],
        },
      ],
      ...executedWorkflows,
    ];
  }, []);
};

export default Page;
