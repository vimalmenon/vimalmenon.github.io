import Box from '@mui/material/Box';
import { IWorkflowHeader } from './WorkflowHeader';

export const WorkflowHeader: React.FC<IWorkflowHeader> = ({ action, title }) => (
  <Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', margin: 1 }}>
    <Box>{title}</Box>
    <Box>{action}</Box>
  </Box>
);
