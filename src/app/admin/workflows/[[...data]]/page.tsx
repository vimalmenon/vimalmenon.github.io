import type { Metadata, NextPage } from 'next';
import { Fragment } from 'react';
import { Breadcrumbs } from '@common';
import {
  APIs,
  GenerateExecuteWorkflow,
  GenerateWorkflow,
  GenerateWorkflowExecuteId,
  Navigation,
} from '@data';
import {
  AdminWorkflowContext,
  AdminWorkflowExecuteId,
  AdminWorkflowId,
  AdminWorkflowIdExecute,
  AdminWorkflows,
} from '@page';
import { StyledPage } from '@style';
import { IGenericResponse, IWorkflow } from '@types';
import { makeRequest } from '@utility';
import { IPage, IWorkflowId } from './id';

export const metadata: Metadata = {
  description: "This is Vimal Menon's personal website",
  title: 'Workflows | Admin | Vimal Menon',
};

const getPage = (data?: string[]): string => {
  if (!data) {
    return 'Workflow';
  }
  const [, execute, executeId] = data;
  if (executeId) {
    return 'WorkflowExecutedId';
  }
  if (execute) {
    return 'WorkflowExecuted';
  }
  return 'WorkflowId';
};

const Page: NextPage<IPage> = async ({ params }) => {
  const { data } = await params;
  const page = getPage(data);
  const [id, , executeId] = data ?? [];
  return (
    <AdminWorkflowContext id={id} executeId={executeId}>
      <StyledPage sx={{ flexDirection: 'column' }}>
        {page === 'Workflow' ? (
          <Fragment>
            <Breadcrumbs navigation={Navigation.AdminWorkflow} />
            <AdminWorkflows />
          </Fragment>
        ) : null}

        {page === 'WorkflowExecutedId' ? (
          <Fragment>
            <Breadcrumbs navigation={GenerateWorkflowExecuteId(id, executeId)} />
            <AdminWorkflowExecuteId id={id} executeId={executeId} />
          </Fragment>
        ) : null}
        {page === 'WorkflowExecuted' ? (
          <Fragment>
            <Breadcrumbs navigation={GenerateExecuteWorkflow(id)} />
            <AdminWorkflowIdExecute id={id} />
          </Fragment>
        ) : null}
        {page === 'WorkflowId' ? (
          <Fragment>
            <Breadcrumbs navigation={GenerateWorkflow(id)} />
            <AdminWorkflowId id={id} />
          </Fragment>
        ) : null}
      </StyledPage>
    </AdminWorkflowContext>
  );
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
