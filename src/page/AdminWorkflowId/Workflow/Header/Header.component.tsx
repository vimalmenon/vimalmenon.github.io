'use client';

import CardHeader from '@mui/material/CardHeader';
import { Fragment } from 'react';
import { Icon } from '@component';
import { Icons } from '@data';
import {
  useTabHelper,
  useWorkflowContext,
  useWorkflowFormHelper,
} from '../../AdminWorkflowId.service';

export const Header: React.FC = () => {
  const { setShowExecuteWorkflow, setShowHistory, showHistory, workflow, workflowFormMode } =
    useWorkflowContext();
  const { editWorkflowFormMode } = useWorkflowFormHelper();
  const { onAddNodeTab } = useTabHelper();
  return (
    <CardHeader
      title={workflowFormMode === 'VIEW' ? 'Workflow' : 'Edit Workflow'}
      action={
        <Fragment>
          {workflowFormMode === 'VIEW' ? (
            <Fragment>
              <Icon toolTip="Add Node" icon={<Icons.Add />} onClick={onAddNodeTab} />
              <Icon toolTip="Edit Workflow" icon={<Icons.Edit />} onClick={editWorkflowFormMode} />
              {workflow?.complete ? (
                <Icon
                  toolTip="Execute"
                  icon={<Icons.Play />}
                  onClick={() => setShowExecuteWorkflow(true)}
                />
              ) : null}
              {showHistory ? (
                <Icon
                  toolTip="Graph"
                  icon={<Icons.Schema />}
                  onClick={() => setShowHistory(false)}
                />
              ) : (
                <Icon
                  toolTip="History"
                  icon={<Icons.History />}
                  onClick={() => setShowHistory(true)}
                />
              )}
            </Fragment>
          ) : null}
        </Fragment>
      }
    />
  );
};
