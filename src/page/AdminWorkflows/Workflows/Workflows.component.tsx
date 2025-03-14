import Box from '@mui/material/Box';
import { useEffect } from 'react';
import { useAdminWorkflows } from '../AdminWorkflows.services';

export const Workflows: React.FC = () => {
  const { getWorkflows, workflows } = useAdminWorkflows();
  useEffect(() => {
    getWorkflows();
  }, []);
  return (
    <Box>
      {workflows.map((workflow) => {
        return <Box key={workflow.name}>{workflow.name}</Box>;
      })}
    </Box>
  );
};
