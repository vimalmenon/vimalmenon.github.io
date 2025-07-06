'use client';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useEffect } from 'react';
import { ConfirmDialog, ListItem } from '@component';
import { Icons } from '@data';
import { IAdminWorkflowIdPage } from '@types';
import { INodeTab } from './AdminWorkflowId';
import { AdminWorkflowIdContext } from './AdminWorkflowId.context';
import {
  useTabHelper,
  useWorkflowContext,
  useWorkflowDataHelper,
  useWorkflowFormHelper,
} from './AdminWorkflowId.service';
import { Node } from './Node';
import { Workflow } from './Workflow';

const Component: React.FC = () => {
  const { error, isStart, nodeTabs, selectedNode, setNodeFormMode, workflow } =
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
      <Workflow onCancel={viewWorkflowFormMode} data={workflow} />
      <Divider />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Tabs value={selectedTab} onChange={onTabChange}>
          {nodeFormMode === 'CREATE' ? (
            <Tab label="Create Node" />
          ) : (
            <ListItem<INodeTab>
              items={nodeTabs}
              Render={({ data }) => (
                <Tab
                  label={
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <span>{data.label}</span>
                      {data.isBroken ? <Icons.Broken fontSize="small" /> : null}
                    </Box>
                  }
                  key={data.name}
                />
              )}
            />
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
          <ListItem<INodeTab>
            items={nodeTabs}
            Render={({ data, index }) => {
              if (selectedTab === index && workflow) {
                return (
                  <Node
                    data={workflow.nodes[data.name]}
                    key={data.name}
                    mode={data.mode}
                    deleteNode={() => deleteNode(data.name)}
                    updateNode={(data) => updateNode(data.name, data)}
                    setMode={(mode) => setNodeMode(index, mode)}
                    cancelNode={() => setNodeMode(index, 'VIEW')}
                    isStart={isStart}
                    complete={workflow.complete}
                  />
                );
              }
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export const AdminWorkflowId: React.FC<IAdminWorkflowIdPage> = ({ id }) => (
  <AdminWorkflowIdContext id={id}>
    <Component />
  </AdminWorkflowIdContext>
);
