'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
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
        <Tabs value={0}>
          {nodes.map((_, index) => {
            return (
              <Tab
                label={
                  <Box>
                    {index}
                    <IconButton onClick={() => removeNode(index)}>
                      <Icons.Close />
                    </IconButton>
                  </Box>
                }
                key={index}
              />
            );
          })}
        </Tabs>
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
