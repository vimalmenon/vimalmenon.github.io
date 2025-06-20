'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Fragment } from 'react';
import { ReactFlow } from '@component';
import { Icons } from '@data';
import {
  useAdminWorkflowIdExecuteContext,
  useWorkflowExecuteHelper,
} from '../AdminWorkflowIdExecute.service';

export const SelectedWorkflow: React.FC = () => {
  const { setSelectedWorkflow } = useWorkflowExecuteHelper();
  const { selectedWorkflow } = useAdminWorkflowIdExecuteContext();
  return (
    <Box>
      <Button variant="text" onClick={() => setSelectedWorkflow(null)} startIcon={<Icons.Back />}>
        Back
      </Button>
      {selectedWorkflow ? (
        <Fragment>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box>{selectedWorkflow.id}</Box>
            <Box>{selectedWorkflow.name}</Box>
            <Box>{selectedWorkflow.status}</Box>
          </Box>
          <Box>
            <div style={{ height: '600px', width: '500px' }}>
              <ReactFlow />
            </div>
          </Box>
        </Fragment>
      ) : null}
    </Box>
  );
};
