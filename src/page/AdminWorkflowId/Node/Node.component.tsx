'use client';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { Fragment, useState } from 'react';
import { Icon } from '@component';
import { Icons } from '@data';
import { INode as INodeData, INodeSlim } from '@types';
import { NodeForm } from '../Common';
import { INode } from './Node';
import { getTitleFromMode } from './Node.service';
import { ViewNode } from './ViewNode';

export const Node: React.FC<INode> = ({
  cancelNode,
  createNode,
  data,
  deleteNode,
  mode,
  nodes,
  setMode,
  updateNode,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const updateNodeWithMode = async (data: INodeData): Promise<void> => {
    if (updateNode && setMode) {
      setLoading(true);
      await updateNode(data);
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
              {mode === 'VIEW' ? (
                <Fragment>
                  <Icon toolTip="Delete Node" icon={<Icons.Delete />} onClick={deleteNode} />
                  <Icon
                    toolTip={`Edit Node`}
                    icon={<Icons.Edit />}
                    onClick={() => setMode && setMode('UPDATE')}
                  />
                </Fragment>
              ) : null}
            </Fragment>
          }
        />
        <CardContent>
          {mode === 'VIEW' && data ? <ViewNode data={data} /> : null}
          {mode === 'UPDATE' || mode === 'CREATE' ? (
            <NodeForm
              data={data}
              onCancel={cancelNode}
              mode={mode}
              nodes={nodes}
              updateNode={updateNodeWithMode}
              createNode={createNodeWithLoading}
              loading={loading}
            />
          ) : null}
        </CardContent>
      </Card>
    </Box>
  );
};
