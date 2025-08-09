'use client';

import { Fragment } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import { FormMode } from '@types';

import { INodeTab } from '../AdminWorkflowId';
import {
  useTabHelper,
  useWorkflowContext,
  useWorkflowDataHelper,
} from '../AdminWorkflowId.service';

import { Node } from './Node';

const getNodePage = (
  nodeTabs: INodeTab[],
  nodeFormMode: FormMode
): 'CREATE' | 'NO_CONTENT' | 'SHOW' => {
  if (nodeFormMode === 'CREATE') {
    return 'CREATE';
  } else if (nodeTabs.length === 0) {
    return 'NO_CONTENT';
  } else {
    return 'SHOW';
  }
};

export const Nodes: React.FC = () => {
  const { isStart, nodeTabs, setNodeFormMode, workflow, workflowLoading } = useWorkflowContext();
  const { nodeFormMode, onTabChange, selectedTab, setNodeMode } = useTabHelper();
  const { createNode, deleteNodeConfirm, updateNode } = useWorkflowDataHelper();
  if (workflowLoading) {
    return null;
  }
  const nodePage = getNodePage(nodeTabs, nodeFormMode);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {nodePage === 'CREATE' ? (
        <Fragment>
          <Tabs value={selectedTab} onChange={onTabChange}>
            <Tab label="Create Node" />
          </Tabs>
          <Node
            mode="CREATE"
            createNode={createNode}
            cancelNode={() => setNodeFormMode('UPDATE')}
            isStart={false}
            complete={false}
          />
        </Fragment>
      ) : null}
      {nodePage === 'NO_CONTENT' ? <Box>No node created</Box> : null}
      {nodePage === 'SHOW' ? (
        <Fragment>
          <Tabs value={selectedTab} onChange={onTabChange}>
            {nodeTabs.map((node) => (
              <Tab label={node.label} key={node.name} />
            ))}
          </Tabs>
          {nodeTabs.length
            ? nodeTabs.map((node, index) => {
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
            : null}
        </Fragment>
      ) : null}
    </Box>
  );
};
