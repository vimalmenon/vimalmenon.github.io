'use client';

import { Fragment, useEffect } from 'react';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import { DeleteConfirm, Icon, WorkflowHeader } from '@component';
import { Icons } from '@data';
import { IAdminWorkflowIdPage, IWorkflow } from '@types';

import { AdminWorkflowIdContext } from './AdminWorkflowId.context';
import {
  useTabHelper,
  useWorkflowContext,
  useWorkflowDataHelper,
  useWorkflowFormHelper,
} from './AdminWorkflowId.service';
import { Execute } from './Execute';
import { ExecuteForm } from './ExecuteForm';
import { Nodes } from './Nodes';
import { Workflow } from './Workflow';

const Component: React.FC = () => {
  const { alert, setShowCreate, showCreate, workflow, workflowFormMode } = useWorkflowContext();
  const { deleteExecutedWorkflow, getAllData, id, onAlertClose } = useWorkflowDataHelper();
  const { deleteWorkflow, editWorkflowFormMode, viewWorkflowFormMode } = useWorkflowFormHelper();
  const { onAddNodeTab } = useTabHelper();
  useEffect(() => {
    getAllData();
  }, [id]);
  return (
    <Fragment>
      <WorkflowHeader
        title="Workflow"
        action={
          <Fragment>
            {workflowFormMode === 'VIEW' ? (
              <Fragment>
                {!workflow?.complete ? (
                  <Icon toolTip="Add Node" icon={<Icons.Add />} onClick={onAddNodeTab} />
                ) : null}
                <Icon
                  toolTip="Edit Workflow"
                  icon={<Icons.Edit />}
                  onClick={editWorkflowFormMode}
                />
                {workflow ? (
                  <DeleteConfirm<IWorkflow>
                    onDelete={deleteWorkflow}
                    deleteMsg={
                      <span>
                        Delete Workflow <b>{workflow.name}</b>?
                      </span>
                    }
                    data={workflow}
                    disable={workflow.executedWorkflows.length > 0}
                    iconSize="small"
                  />
                ) : null}
              </Fragment>
            ) : null}
            {workflow?.complete ? (
              <Icon
                toolTip="Execute Workflow"
                icon={<Icons.Add />}
                onClick={() => setShowCreate(true)}
              />
            ) : null}
          </Fragment>
        }
      />
      <Divider />
      {alert ? (
        <Fragment>
          <Box sx={{ margin: 1 }}>
            <Alert severity={alert.severity} onClose={onAlertClose}>
              {alert.children}
            </Alert>
          </Box>
          <Divider />
        </Fragment>
      ) : null}

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, margin: 1 }}>
        {showCreate ? <ExecuteForm /> : null}
        {id && workflow?.complete ? (
          <Fragment>
            <Execute
              executedWorkflows={workflow.executedWorkflows}
              id={id}
              deleteExecutedWorkflow={deleteExecutedWorkflow}
            />
            <Divider />
          </Fragment>
        ) : null}
        <Workflow onCancel={viewWorkflowFormMode} data={workflow} />
        <Divider />
        <Nodes />
      </Box>
    </Fragment>
  );
};

export const AdminWorkflowId: React.FC<IAdminWorkflowIdPage> = ({ id }) => (
  <AdminWorkflowIdContext id={id}>
    <Component />
  </AdminWorkflowIdContext>
);
