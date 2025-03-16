'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { FormMode } from '@types';
import { INode } from './Node';
import { NodeForm } from './NodeForm';
import { ViewNode } from './ViewNode';

export const Node: React.FC<INode> = ({ data, deleteNode }) => {
  const [mode, setMode] = useState<FormMode>('VIEW');
  return (
    <Box sx={{ display: 'flex', flex: '1 1 100%', flexDirection: 'column' }}>
      {mode === 'VIEW' ? <ViewNode data={data} onEdit={() => setMode('UPDATE')} /> : null}
      {mode === 'UPDATE' ? <NodeForm data={data} onCancel={() => setMode('VIEW')} /> : null}
      <Box>
        <Button variant="outlined" onClick={deleteNode}>
          Delete
        </Button>
      </Box>
    </Box>
  );
};
