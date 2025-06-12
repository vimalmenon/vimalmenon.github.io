'use client';

import CardHeader from '@mui/material/CardHeader';
import { useRouter } from 'next/navigation';
import { Fragment } from 'react';
import { Icon } from '@component';
import { Icons } from '@data';
import {
  useTabHelper,
  useWorkflowContext,
  useWorkflowFormHelper,
} from '../../AdminWorkflowId.service';
import { IHeader } from './Header';

export const Header: React.FC<IHeader> = ({ complete }) => {
  const { id, workflowFormMode } = useWorkflowContext();
  const { editWorkflowFormMode } = useWorkflowFormHelper();
  const { onAddNodeTab } = useTabHelper();
  const { push } = useRouter();

  return (
    <CardHeader
      title={workflowFormMode === 'VIEW' ? 'Workflow' : 'Edit Workflow'}
      action={
        <Fragment>
          {workflowFormMode === 'VIEW' ? (
            <Fragment>
              {!complete ? (
                <Icon toolTip="Add Node" icon={<Icons.Add />} onClick={onAddNodeTab} />
              ) : null}
              <Icon toolTip="Edit Workflow" icon={<Icons.Edit />} onClick={editWorkflowFormMode} />
              {complete ? (
                <Icon
                  toolTip="Executed workflows"
                  icon={<Icons.History />}
                  onClick={() => push(`/admin/workflows/${id}/execute/`)}
                />
              ) : null}
            </Fragment>
          ) : null}
        </Fragment>
      }
    />
  );
};
