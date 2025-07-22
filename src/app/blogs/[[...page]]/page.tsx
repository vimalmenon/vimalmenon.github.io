import Divider from '@mui/material/Divider';
import type { Metadata, NextPage } from 'next';
import { Fragment } from 'react';
import { Breadcrumbs } from '@common';
import { MainLayout } from '@component';
import {
  APIs,
  GenerateExecuteWorkflow,
  GenerateWorkflow,
  GenerateWorkflowExecuteId,
  Navigation,
  WorkflowPage,
} from '@data';
import {
  AdminWorkflowExecuteId,
  AdminWorkflowId,
  AdminWorkflowIdExecute,
  AdminWorkflows,
} from '@page';
import { StyledPage } from '@style';
import { ICatchAll, ICatchAllParams, IGenericResponse, IWorkflow } from '@types';
import { makeRequest } from '@utility';

export const metadata: Metadata = {
  description: "This is Vimal Menon's personal website",
  title: 'Workflows | Admin | Vimal Menon',
};

const getPage = (data?: string[]): WorkflowPage => {
  if (!data) {
    return WorkflowPage.Workflow;
  }
  const [, execute, executeId] = data;
  if (executeId) {
    return WorkflowPage.WorkflowExecutedId;
  }
  if (execute) {
    return WorkflowPage.WorkflowExecuted;
  }
  return WorkflowPage.WorkflowId;
};

const Page: NextPage<ICatchAllParams> = async ({ params }) => {
  const { page: pageParams } = await params;
  const page = getPage(pageParams);
  const [id, , executeId] = pageParams ?? [];
  return (
    <MainLayout>
      <StyledPage sx={{ flexDirection: 'column' }}>
        {page === WorkflowPage.Workflow ? (
          <Fragment>
            <Breadcrumbs navigation={Navigation.AdminWorkflow} />
            <Divider />
            <AdminWorkflows />
          </Fragment>
        ) : null}

        {page === WorkflowPage.WorkflowExecutedId ? (
          <Fragment>
            <Breadcrumbs navigation={GenerateWorkflowExecuteId(id, executeId)} />
            <Divider />
            <AdminWorkflowExecuteId id={id} executeId={executeId} />
          </Fragment>
        ) : null}
        {page === WorkflowPage.WorkflowExecuted ? (
          <Fragment>
            <Breadcrumbs navigation={GenerateExecuteWorkflow(id)} />
            <Divider />
            <AdminWorkflowIdExecute id={id} />
          </Fragment>
        ) : null}
        {page === WorkflowPage.WorkflowId ? (
          <Fragment>
            <Breadcrumbs navigation={GenerateWorkflow(id)} />
            <Divider />
            <AdminWorkflowId id={id} />
          </Fragment>
        ) : null}
      </StyledPage>
    </MainLayout>
  );
};

export const generateStaticParams = async (): Promise<ICatchAll[]> => {
  const { error, response } = await makeRequest<IGenericResponse<IWorkflow[]>>(APIs.GetWorkflows());
  if (error) {
    return [
      {
        page: [''],
      },
    ];
  }
  if (response.data.length === 0) {
    return [
      {
        page: [''],
      },
    ];
  }
  return response.data.reduce<ICatchAll[]>((result, value) => {
    const executedWorkflows = value.executedWorkflows.map((data) => ({
      page: [value.id, 'execute', data.id],
    }));
    return [
      ...result,
      ...[
        {
          page: [value.id],
        },
        {
          page: [value.id, 'execute'],
        },
        {
          page: [''],
        },
      ],
      ...executedWorkflows,
    ];
  }, []);
};

export default Page;
