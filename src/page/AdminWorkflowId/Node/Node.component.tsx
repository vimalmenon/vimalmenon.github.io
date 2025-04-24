'use client';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { Fragment } from 'react';
import { Icon } from '@component';
import { Icons } from '@data';
import { INode as INodeData } from '@types';
import { NodeForm } from '../Common';
import { INode } from './Node';
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
  const updateNodeWithMode = async (data: INodeData): Promise<void> => {
    if (updateNode && setMode) {
      await updateNode(data);
      setMode('VIEW');
    }
  };
  return (
    <Box sx={{ display: 'flex', flex: '1 1 100%', flexDirection: 'column' }}>
      <Card>
        <CardHeader
          title={mode === 'VIEW' ? 'Node' : 'Edit Node'}
          action={
            <Fragment>
              <Icon toolTip="Delete Node" icon={<Icons.Delete />} onClick={deleteNode} />
              <Icon
                toolTip="Edit Node"
                icon={<Icons.Edit />}
                onClick={() => setMode && setMode('UPDATE')}
              />
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
              createNode={createNode}
            />
          ) : null}
        </CardContent>
      </Card>
    </Box>
  );
};
