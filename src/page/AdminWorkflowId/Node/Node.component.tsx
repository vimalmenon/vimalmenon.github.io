'use client';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { Fragment, useState } from 'react';
import { Icon } from '@component';
import { Icons } from '@data';
import { FormMode, INode as INodeData } from '@types';
import { NodeForm } from '../Common';
import { INode } from './Node';
import { ViewNode } from './ViewNode';

export const Node: React.FC<INode> = ({
  createNode,
  data,
  deleteNode,
  mode,
  nodes,
  updateNode,
}) => {
  const [, setMode] = useState<FormMode>('VIEW');
  const updateNodeWithMode = async (data: INodeData): Promise<void> => {
    if (updateNode) {
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
              <Icon toolTip="Edit Node" icon={<Icons.Edit />} onClick={() => setMode('UPDATE')} />
            </Fragment>
          }
        />
        <CardContent>
          {mode === 'VIEW' && data ? <ViewNode data={data} /> : null}
          {mode === 'UPDATE' || mode === 'CREATE' ? (
            <NodeForm
              data={data}
              onCancel={() => setMode('VIEW')}
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
