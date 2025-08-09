'use client';

import { Fragment } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import {
  useTabHelper,
  useWorkflowContext,
  useWorkflowDataHelper,
} from '../AdminWorkflowId.service';
import { Node } from './Node';
export const Nodes: React.FC = () => {
  const {
    isStart,
    nodeTabs,
    setNodeFormMode,
    workflowLoading,
    workflow,
  } = useWorkflowContext();
  const { nodeFormMode, onTabChange, selectedTab, setNodeMode } = useTabHelper();
  const { createNode, deleteNodeConfirm, updateNode } = useWorkflowDataHelper();
  if (workflowLoading) {
    return null;
  }
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Tabs value={selectedTab} onChange={onTabChange}>
        {nodeFormMode === 'CREATE' ? (
          <Tab label="Create Node" />
        ) : (
          nodeTabs.map((node) => <Tab label={node.label} key={node.name} />)
        )}
      </Tabs>
      {nodeFormMode === 'CREATE' ? (
        <Node
          mode="CREATE"
          createNode={createNode}
          cancelNode={() => setNodeFormMode('UPDATE')}
          isStart={false}
          complete={false}
        />
      ) : (
        <Fragment>
          {nodeTabs.length ? (
            nodeTabs.map((node, index) => {
              if (selectedTab === index && workflow) {
                return (
                  <Node
                    data={workflow.nodes[node.name]}
                    key={node.name}
                    mode={node.mode}
                    deleteNode={deleteNodeConfirm}
                    updateNode={(data) => updateNode(node.name, data)}
                    setMode={(mode) => setNodeMode(index, mode)}
                    cancelNode={() => setNodeMode(index, 'VIEW')}
                    isStart={isStart}
                    complete={workflow.complete}
                  />
                );
              }
            })
          ) : (
            <Box>No node created</Box>
          )}
        </Fragment>
      )}
    </Box>
  );
};
