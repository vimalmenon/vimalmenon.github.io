'use client';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useEffect } from 'react';
import { IAdminWorkflowId } from './AdminWorkflowId';
import { AdminWorkflowIdContext } from './AdminWorkflowId.context';
import {
  getNodeAsList,
  useNodeTabsHelper,
  useTabHelper,
  useWorkflowContext,
  useWorkflowDataHelper,
  useWorkflowFormHelper,
} from './AdminWorkflowId.service';
import { Node } from './Node';
import { Workflow } from './Workflow';

export const Component: React.FC = () => {
  const { workflow } = useWorkflowContext();
  const { onTabChange, selectedNode, selectedTab } = useTabHelper();
  const { createNode, deleteNode, getLLMs, getTools, getWorkFlow, id, updateNode } =
    useWorkflowDataHelper();
  const { viewWorkflowFormMode } = useWorkflowFormHelper();
  const { editNodeMode, nodeTabs } = useNodeTabsHelper();
  useEffect(() => {
    getWorkFlow();
    getLLMs();
    getTools();
  }, [id]);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Workflow onCancel={viewWorkflowFormMode} data={workflow} />
      <Divider />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Tabs value={selectedTab} onChange={onTabChange}>
          {selectedNode === 'Create Node' ? (
            <Tab label={selectedNode} />
          ) : (
            nodeTabs.map((node) => {
              return <Tab disabled={node.disabled} label={node.name} key={node.name} />;
            })
          )}
        </Tabs>
        {selectedNode === 'Create Node' ? (
          <Node mode="CREATE" createNode={createNode} />
        ) : (
          nodeTabs.map((node, index) => {
            if (selectedTab === index && workflow) {
              return (
                <Node
                  data={workflow.nodes[node.name]}
                  key={node.name}
                  mode={node.mode}
                  nodes={getNodeAsList(workflow.nodes)}
                  deleteNode={() => deleteNode(node.name)}
                  updateNode={(data) => updateNode(node.name, data)}
                  setMode={(mode) => editNodeMode(index, mode)}
                />
              );
            }
          })
        )}
      </Box>
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
