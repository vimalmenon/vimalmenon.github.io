'use client';

import Box from '@mui/material/Box';
import { useWorkflowExecuteHelper } from '../AdminWorkflowIdExecute.service';

export const SelectedWorkflow: React.FC = () => {
  const { setSelectedWorkflow } = useWorkflowExecuteHelper();
  return (
    <Box>
      <button onClick={() => setSelectedWorkflow(null)}>Back</button>
    </Box>
  );
};
