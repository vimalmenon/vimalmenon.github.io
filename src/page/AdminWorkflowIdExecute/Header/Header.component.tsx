'use client';

import CardHeader from '@mui/material/CardHeader';
import Paper from '@mui/material/Paper';
import { Fragment } from 'react';

export const Header: React.FC = () => (
  <CardHeader
    title="Execute Workflow"
    component={Paper}
    action={
      <Fragment>
        {/* {workflowFormMode === 'VIEW' ? (
            <Fragment>
              <Icon toolTip="Add Node" icon={<Icons.Add />} onClick={onAddNodeTab} />
              <Icon toolTip="Edit Workflow" icon={<Icons.Edit />} onClick={editWorkflowFormMode} />
            </Fragment>
          ) : null} */}
      </Fragment>
    }
  />
);
