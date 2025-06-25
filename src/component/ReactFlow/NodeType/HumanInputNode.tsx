'use client';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Handle, Position } from '@xyflow/react';
import { useState } from 'react';
import { Icon, TextInput } from '@component';
import { Icons } from '@data';
import { INodeType } from './NodeType';
// import Divider from '@mui/material/Divider';

export const HumanInputNode: React.FC<INodeType> = ({ data }) => {
  const [value, setValue] = useState<string>('');
  return (
    <Box
      className="text-updater-node"
      minWidth={'300px'}
      component={Paper}
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
              data: value,
              id: data.id,
            })
          }
        />
      </Box>
      {/* <Divider /> */}
      <Box>
        <TextInput
          value={value}
          label="Human Input"
          placeholder="Name"
          name="humanInput"
          onChange={(e) => setValue(e.target.value)}
        />
      </Box>
      <Box></Box>
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </Box>
  );
};
