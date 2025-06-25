'use client';

import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { Handle, Position } from '@xyflow/react';
import { Icon } from '@component';
import { Icons } from '@data';
import { INodeType } from './NodeType';

export const ExecuteNode: React.FC<INodeType> = ({ data }) => (
  <Box
    className="text-updater-node"
    component={Paper}
    minWidth={'300px'}
    sx={{ borderRadius: '5px', padding: '10px' }}
  >
    <Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
      <span>
        {data.label} ({data.type})
      </span>

      <Icon
        toolTip="Execute"
        icon={<Icons.Play />}
        onClick={() =>
          data.onExecute({
            id: data.id,
          })
        }
      />
    </Box>
    {/* <Box>
      <Button variant="outlined" endIcon={<Icons.Close />}>
        Cancel
      </Button>
    </Box> */}
    <Handle type="target" position={Position.Top} />
    <Handle type="source" position={Position.Bottom} />
  </Box>
);
