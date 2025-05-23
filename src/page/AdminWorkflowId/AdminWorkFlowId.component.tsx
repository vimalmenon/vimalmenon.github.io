'use client';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { Fragment, useEffect } from 'react';
import { ConfirmDialog } from '@component';
import { IAdminWorkflowIdPage } from '@types';
import { AdminWorkflowIdContext } from './AdminWorkflowId.context';
import {
  useTabHelper,
  useWorkflowContext,
  useWorkflowDataHelper,
  useWorkflowFormHelper,
} from './AdminWorkflowId.service';
import { History } from './History';
import { Node } from './Node';
import { Workflow } from './Workflow';

const Component: React.FC = () => {
  const { error, nodeTabs, selectedNode, setNodeFormMode, showHistory, workflow } =
    useWorkflowContext();
  const { nodeFormMode, onTabChange, selectedTab, setNodeMode } = useTabHelper();
  const {
    createNode,
    deleteNode,
    deleteNodeCancel,
    deleteNodeConfirm,
    getAllData,
    id,
    updateNode,
  } = useWorkflowDataHelper();
  const { viewWorkflowFormMode } = useWorkflowFormHelper();
  useEffect(() => {
    getAllData();
  }, [id]);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, paddingY: 2 }}>
      {selectedNode ? (
        <ConfirmDialog
          icon="WARNING"
          title={
            <span>
              Delete node <b>{selectedNode.name}</b>?
            </span>
          }
          open={!!selectedNode}
          onConfirm={deleteNodeConfirm}
          onCancel={deleteNodeCancel}
        />
      ) : null}
      {error ? <Alert severity="error">{error}</Alert> : null}
      {showHistory ? (
        <History />
      ) : (
        <Fragment>
          <Workflow onCancel={viewWorkflowFormMode} data={workflow} />
          <Divider />
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
              />
            ) : (
              nodeTabs.map((node, index) => {
                if (selectedTab === index && workflow) {
                  return (
                    <Node
                      data={workflow.nodes[node.name]}
                      key={node.name}
                      mode={node.mode}
                      deleteNode={() => deleteNode(node.name)}
                      updateNode={(data) => updateNode(node.name, data)}
                      setMode={(mode) => setNodeMode(index, mode)}
                      cancelNode={() => setNodeMode(index, 'VIEW')}
                    />
                  );
                }
              })
            )}
          </Box>
        </Fragment>
      )}
    </Box>
  );
};

export const AdminWorkflowId: React.FC<IAdminWorkflowIdPage> = ({ id }) => (
  <AdminWorkflowIdContext id={id}>
    <Component />
  </AdminWorkflowIdContext>
);
