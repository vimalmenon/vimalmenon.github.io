'use client';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { Fragment, useEffect } from 'react';
import { ConfirmDialog, DeleteConfirm, Icon, WorkflowHeader } from '@component';
import { Icons } from '@data';
import { IAdminWorkflowIdPage, IWorkflow } from '@types';
import { AdminWorkflowIdContext } from './AdminWorkflowId.context';
import {
  useTabHelper,
  useWorkflowContext,
  useWorkflowDataHelper,
  useWorkflowFormHelper,
} from './AdminWorkflowId.service';
import { Execute } from './Execute';
import { ExecuteForm } from './ExecuteForm';
import { Node } from './Node';
import { Workflow } from './Workflow';

const Component: React.FC = () => {
  const {
    alert,
    error,
    isStart,
    nodeTabs,
    selectedNode,
    setNodeFormMode,
    setShowCreate,
    showCreate,
    workflow,
    workflowFormMode,
  } = useWorkflowContext();
  const { nodeFormMode, onTabChange, selectedTab, setNodeMode } = useTabHelper();
  const {
    createNode,
    deleteExecutedWorkflow,
    deleteNode,
    deleteNodeCancel,
    deleteNodeConfirm,
    getAllData,
    id,
    onAlertClose,
    updateNode,
  } = useWorkflowDataHelper();
  const { deleteWorkflow, editWorkflowFormMode, viewWorkflowFormMode } = useWorkflowFormHelper();
  const { onAddNodeTab } = useTabHelper();
  useEffect(() => {
    getAllData();
  }, [id]);
  return (
    <Fragment>
      <WorkflowHeader
        title={'Workflow'}
        action={
          <Fragment>
            {workflowFormMode === 'VIEW' ? (
              <Fragment>
                {!workflow?.complete ? (
                  <Icon toolTip="Add Node" icon={<Icons.Add />} onClick={onAddNodeTab} />
                ) : null}
                <Icon
                  toolTip="Edit Workflow"
                  icon={<Icons.Edit />}
                  onClick={editWorkflowFormMode}
                />
                {workflow ? (
                  <DeleteConfirm<IWorkflow>
                    onDelete={deleteWorkflow}
                    deleteMsg={
                      <span>
                        Delete Workflow <b>{workflow.name}</b>?
                      </span>
                    }
                    data={workflow}
                    disable={workflow.executedWorkflows.length > 0}
                    iconSize="small"
                  />
                ) : null}
              </Fragment>
            ) : null}
            <Icon toolTip="Add" icon={<Icons.Add />} onClick={() => setShowCreate(true)} />
          </Fragment>
        }
      />
      <Divider />
      {alert ? (
        <Fragment>
          <Box sx={{ margin: 1 }}>
            <Alert severity={alert.severity} onClose={onAlertClose}>
              {alert.children}
            </Alert>
          </Box>
          <Divider />
        </Fragment>
      ) : null}

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, margin: 1 }}>
        {id && workflow && workflow.complete ? (
          <Fragment>
            <Execute
              executedWorkflows={workflow.executedWorkflows}
              id={id}
              deleteExecutedWorkflow={deleteExecutedWorkflow}
            />
            <Divider />
          </Fragment>
        ) : null}
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
        {showCreate ? <ExecuteForm /> : null}
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
                        deleteNode={() => deleteNode(node.name)}
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
      </Box>
    </Fragment>
  );
};

export const AdminWorkflowId: React.FC<IAdminWorkflowIdPage> = ({ id }) => (
  <AdminWorkflowIdContext id={id}>
    <Component />
  </AdminWorkflowIdContext>
);
