'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TextField from '@mui/material/TextField';
import { useEffect } from 'react';
import { Icons } from '@data';
import { IAdminWorkflowId } from './AdminWorkflowId';
import { useAdminWorkflowId } from './AdminWorkflowId.service';
import { Node } from './Node';

export const AdminWorkflowId: React.FC<IAdminWorkflowId> = ({ id }) => {
  const {
    addNodes,
    deleteWorkflowNode,
    getWorkFlow,
    node,
    nodes,
    onTabChange,
    setNode,
    tab,
    workflow,
  } = useAdminWorkflowId(id);
  useEffect(() => {
    getWorkFlow();
  }, [id]);
  return (
    <Box>
      <IconButton>
        <Icons.Edit />
      </IconButton>

      <Box>Workflow : {id}</Box>
      <Box>Name : {workflow?.name}</Box>
      <Box>Detail : {workflow?.detail}</Box>
      <Box>Complete : {workflow?.complete ? 'True' : 'False'}</Box>
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
          {nodes.map((name) => {
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
                    <span>{name}</span>
                  </Box>
                }
                key={name}
              />
            );
          })}
        </Tabs>
        {nodes.map((node, index) => {
          if (tab === index && workflow?.nodes[node]) {
            return (
              <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Node data={workflow.nodes[node]} deleteNode={() => deleteWorkflowNode(node)} />
              </Box>
            );
          }
        })}
      </Box>
    </Box>
  );
};
