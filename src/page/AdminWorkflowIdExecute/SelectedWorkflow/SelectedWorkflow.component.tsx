'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Icons } from '@data';
import { useWorkflowExecuteHelper } from '../AdminWorkflowIdExecute.service';

export const SelectedWorkflow: React.FC = () => {
  const { setSelectedWorkflow } = useWorkflowExecuteHelper();
  return (
    <Box>
      <Button variant="text" onClick={() => setSelectedWorkflow(null)} startIcon={<Icons.Back />}>
        Back
      </Button>
    </Box>
  );
};
