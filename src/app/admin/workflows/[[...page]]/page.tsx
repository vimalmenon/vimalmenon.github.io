import { Fragment } from 'react';

import Divider from '@mui/material/Divider';

import type { Metadata, NextPage } from 'next';

import { Breadcrumbs } from '@common';
import { AdminLayout } from '@component';
import { APIs, GenerateWorkflow, GenerateWorkflowExecuteId, Navigation, WorkflowPage } from '@data';
import { AdminWorkflowExecuteId, AdminWorkflowId, AdminWorkflows } from '@page';
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
  const [, executeId] = data;
  if (executeId) {
    return WorkflowPage.WorkflowExecutedId;
  }
  return WorkflowPage.WorkflowId;
};

const Page: NextPage<ICatchAllParams> = async ({ params }) => {
  const { page: pageParams } = await params;
  const page = getPage(pageParams);
  const [id, executeId] = pageParams ?? [];
  return (
    <AdminLayout>
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
        {page === WorkflowPage.WorkflowId ? (
          <Fragment>
            <Breadcrumbs navigation={GenerateWorkflow(id)} />
            <Divider />
            <AdminWorkflowId id={id} />
          </Fragment>
        ) : null}
      </StyledPage>
    </AdminLayout>
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
      page: [value.id, data.id],
    }));
    return [
      ...result,
      ...[
        {
          page: [value.id],
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
