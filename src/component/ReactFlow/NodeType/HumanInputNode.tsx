'use client';

import Box from '@mui/material/Box';
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
      sx={{ background: 'white', border: '1px solid #ddd', borderRadius: '5px', padding: '10px' }}
    >
      <Box>
        {data.label} ({data.type})
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

      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </Box>
  );
};
