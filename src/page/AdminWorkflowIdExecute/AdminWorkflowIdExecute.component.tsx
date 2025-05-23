import Box from '@mui/material/Box';
import { IAdminWorkflowIdPage } from '@types';
import { ExecuteForm } from './ExecuteForm';

export const AdminWorkflowIdExecute: React.FC<IAdminWorkflowIdPage> = ({ id }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, paddingY: 2 }}>
    This is execute workflow {id}
    <ExecuteForm />
  </Box>
);
