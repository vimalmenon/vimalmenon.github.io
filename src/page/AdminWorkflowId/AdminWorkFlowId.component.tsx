'use client';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { IAdminWorkflowId } from './AdminWorkflowId';
import { useAdminWorkflowId } from './AdminWorkflowId.service';
import { Nodes } from './Nodes';

export const AdminWorkflowId: React.FC<IAdminWorkflowId> = ({ id }) => {
  const { addNodes, nodes } = useAdminWorkflowId(id);
  return (
    <Box>
      <Box>Workflow {id}</Box>
      <Box>
        <Button variant="outlined" onClick={addNodes}>
          Create Node
        </Button>
      </Box>
      <Box>
        {nodes.map((_, index) => {
          return <Nodes key={index} />;
        })}
      </Box>
    </Box>
  );
};
