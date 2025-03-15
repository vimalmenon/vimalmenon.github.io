'use client';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Icons } from '@data';
import { IAdminWorkflowId } from './AdminWorkflowId';
import { useAdminWorkflowId } from './AdminWorkflowId.service';
import { Nodes } from './Nodes';

export const AdminWorkflowId: React.FC<IAdminWorkflowId> = ({ id }) => {
  const { addNodes, nodes, removeNode } = useAdminWorkflowId(id);
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
          return (
            <Box key={index} sx={{ display: 'flex' }}>
              <Nodes />
              <IconButton onClick={() => removeNode(index)}>
                <Icons.Close />
              </IconButton>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
