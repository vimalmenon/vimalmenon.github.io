'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TextField from '@mui/material/TextField';
import { Fragment, useEffect, useState } from 'react';
import { IAdminWorkflowId } from './AdminWorkflowId';
import { useAdminWorkflowId } from './AdminWorkflowId.service';
import { Node } from './Node';
import { Workflow } from './Workflow';

export const AdminWorkflowId: React.FC<IAdminWorkflowId> = ({ id }) => {
  const {
    addNodes,
    deleteWorkflowNode,
    editWorkflowFormMode,
    getLLMs,
    getTools,
    getWorkFlow,
    node,
    nodes,
    onTabChange,
    setNode,
    tab,
    updateNode,
    updateWorkflow,
    viewWorkflowFormMode,
    workflow,
    workflowFormMode,
  } = useAdminWorkflowId(id);
  useEffect(() => {
    getWorkFlow();
    getLLMs();
    getTools();
  }, [id]);
  const [showAddNode] = useState<boolean>(false);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Workflow
        mode={workflowFormMode}
        onCancel={viewWorkflowFormMode}
        updateWorkflow={updateWorkflow}
        onEdit={editWorkflowFormMode}
        data={workflow}
      />
      <Divider />
      {showAddNode ? (
        <Fragment>
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
        </Fragment>
      ) : null}
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
              <Box
                key={node}
                sx={{ display: 'flex', justifyContent: 'space-between', marginY: 2 }}
              >
                <Node
                  data={workflow.nodes[node]}
                  deleteNode={() => deleteWorkflowNode(node)}
                  updateNode={(data) => updateNode(node, data)}
                />
              </Box>
            );
          }
        })}
      </Box>
      {workflow?.complete ? (
        <Box>
          <Button variant="outlined">Execute</Button>
        </Box>
      ) : null}
      <br />
      <br />
    </Box>
  );
};
