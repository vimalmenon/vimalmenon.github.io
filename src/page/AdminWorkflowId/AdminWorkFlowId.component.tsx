'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { FormMode } from '@types';
import { IAdminWorkflowId } from './AdminWorkflowId';
import { useAdminWorkflowId } from './AdminWorkflowId.service';
import { Node } from './Node';
import { ViewWorkflow } from './ViewWorkflow';
import { WorkflowForm } from './WorkflowForm';

export const AdminWorkflowId: React.FC<IAdminWorkflowId> = ({ id }) => {
  const [mode, setMode] = useState<FormMode>('VIEW');
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
      {workflow && mode === 'VIEW' ? (
        <ViewWorkflow data={workflow} onEdit={() => setMode('UPDATE')} />
      ) : null}
      {workflow && mode === 'UPDATE' ? (
        <WorkflowForm mode="UPDATE" data={workflow} onCancel={() => setMode('VIEW')} />
      ) : null}
      <br />
      <br />
      <Divider />
      <br />
      <br />
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
        <br />
        <br />
      </Box>
    </Box>
  );
};
