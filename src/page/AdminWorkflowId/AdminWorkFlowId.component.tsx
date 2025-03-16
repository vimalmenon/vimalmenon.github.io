'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TextField from '@mui/material/TextField';
import { Icons } from '@data';
import { IAdminWorkflowId } from './AdminWorkflowId';
import { useAdminWorkflowId } from './AdminWorkflowId.service';
import { Nodes } from './Nodes';

export const AdminWorkflowId: React.FC<IAdminWorkflowId> = ({ id }) => {
  const { addNodes, node, nodes, onTabChange, removeNode, setNode, tab } = useAdminWorkflowId(id);
  return (
    <Box>
      <Box>Workflow {id}</Box>
      <Box>
        {' '}
        <TextField
          required
          label="Name"
          size="small"
          fullWidth
          value={node}
          onChange={(e) => setNode(e.target.value)}
        />
      </Box>
      <Box>
        <Button variant="outlined" onClick={addNodes}>
          Create Node
        </Button>
      </Box>
      <Box>
        <Tabs value={tab} onChange={onTabChange}>
          {nodes.map((_, index) => {
            return (
              <Tab
                label={
                  <Box
                    sx={{
                      alignItems: 'center',
                      display: 'flex',
                      gap: 1,
                      justifyContent: 'space-between',
                    }}
                  >
                    <span>{index}</span>
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
          if (tab === index) {
            return (
              <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Nodes name={''} type={''} id={`${index}`} />
              </Box>
            );
          }
        })}
      </Box>
    </Box>
  );
};
