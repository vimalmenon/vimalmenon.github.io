'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useEffect, useState } from 'react';
import { IAdminWorkflowId } from './AdminWorkflowId';
import { AdminWorkflowIdContext } from './AdminWorkflowId.context';
import {
  getNodeAsList,
  useTabHelper,
  useWorkflowContext,
  useWorkflowDataHelper,
  useWorkflowFormHelper,
} from './AdminWorkflowId.service';
import { NodeForm } from './Common';
import { Node } from './Node';
import { Panel } from './Panel';
import { Workflow } from './Workflow';

export const Component: React.FC = () => {
  const { loading, nodes, workflow, workflowFormMode } = useWorkflowContext();
  const { onTabChange, selectedTab } = useTabHelper();
  const {
    createNode,
    deleteNode,
    executeWorkflow,
    getLLMs,
    getTools,
    getWorkFlow,
    id,
    updateNode,
    updateWorkflow,
  } = useWorkflowDataHelper();
  const { editWorkflowFormMode, viewWorkflowFormMode } = useWorkflowFormHelper();

  useEffect(() => {
    getWorkFlow();
    getLLMs();
    getTools();
  }, [id]);
  const [showAddNode, setShowAddNode] = useState<boolean>(false);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Panel
        onCreateNode={() => setShowAddNode(true)}
        onExecute={executeWorkflow}
        complete={workflow?.complete ?? false}
      />
      <Workflow
        mode={workflowFormMode}
        onCancel={viewWorkflowFormMode}
        updateWorkflow={updateWorkflow}
        onEdit={editWorkflowFormMode}
        data={workflow}
        loading={loading}
      />
      {showAddNode ? (
        <NodeForm
          data={undefined}
          onCancel={() => setShowAddNode(false)}
          createNode={createNode}
          mode="CREATE"
          nodes={[]}
        />
      ) : null}
      <Divider />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Tabs value={selectedTab} onChange={onTabChange}>
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
          if (selectedTab === index && workflow?.nodes[node]) {
            return (
              <Box key={node} sx={{ display: 'flex', justifyContent: 'space-between', marginY: 2 }}>
                <Node
                  data={workflow.nodes[node]}
                  nodes={getNodeAsList(workflow.nodes)}
                  deleteNode={() => deleteNode(node)}
                  updateNode={(data) => updateNode(node, data)}
                />
              </Box>
            );
          }
        })}
      </Box>
      {workflow?.complete ? (
        <Box>
          <Button variant="outlined" onClick={executeWorkflow}>
            Execute
          </Button>
        </Box>
      ) : null}
      <br />
      <br />
    </Box>
  );
};

export const AdminWorkflowId: React.FC<IAdminWorkflowId> = ({ id }) => {
  return (
    <AdminWorkflowIdContext id={id}>
      <Component />
    </AdminWorkflowIdContext>
  );
};
