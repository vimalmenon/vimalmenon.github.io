'use client';

import { Fragment, useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';

import { DeleteConfirm, Icon } from '@component';
import { Icons } from '@data';
import { INode as INodeData, INodeSlim } from '@types';

import { NodeForm } from '../../Common';

import { INode } from './Node';
import { cleanData, getTitleFromMode } from './Node.service';
import { ViewNode } from './ViewNode';

export const Node: React.FC<INode> = ({
  cancelNode,
  complete,
  createNode,
  data,
  deleteNode,
  isStart,
  mode,
  setMode,
  updateNode,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const updateNodeWithMode = async (data: INodeData): Promise<void> => {
    if (updateNode && setMode) {
      setLoading(true);
      await updateNode(cleanData(data));
      setMode('VIEW');
      setLoading(false);
    }
  };
  const createNodeWithLoading = async (data: INodeSlim): Promise<void> => {
    if (createNode) {
      setLoading(true);
      await createNode(data);
      setLoading(false);
    }
  };
  const title = getTitleFromMode(mode);
  return (
    <Box sx={{ display: 'flex', flex: '1 1 100%', flexDirection: 'column' }}>
      <Card>
        <CardHeader
          title={title}
          action={
            <Fragment>
              {mode === 'VIEW' && !complete && deleteNode ? (
                <Fragment>
                  <DeleteConfirm
                    onDelete={deleteNode}
                    deleteMsg={
                      <span>
                        Delete Workflow <b>{data?.name}</b>?
                      </span>
                    }
                    iconSize="small"
                    data={data}
                  />
                  <Icon
                    toolTip={`Edit Node`}
                    icon={<Icons.Edit />}
                    onClick={() => setMode?.('UPDATE')}
                  />
                </Fragment>
              ) : null}
            </Fragment>
          }
        />
        <Divider />
        <CardContent>
          {mode === 'VIEW' && data ? <ViewNode data={data} /> : null}
          {mode === 'UPDATE' || mode === 'CREATE' ? (
            <NodeForm
              data={data}
              onCancel={cancelNode}
              mode={mode}
              updateNode={updateNodeWithMode}
              createNode={createNodeWithLoading}
              loading={loading}
              isStart={isStart}
            />
          ) : null}
        </CardContent>
      </Card>
    </Box>
  );
};
