'use client';
import Box from '@mui/material/Box';
import { useAdminWorkflows } from './AdminWorkflows.services';

export const AdminWorkflows: React.FC = () => {
  const { llms } = useAdminWorkflows();
  return (
    <Box>
      {llms.map((llm) => {
        return (
          <Box key={llm.name}>
            {llm.name} | {llm.model} | {llm.supported ? 'True' : 'False'}
          </Box>
        );
      })}
    </Box>
  );
};
