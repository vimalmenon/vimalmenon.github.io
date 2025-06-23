'use client';

import Box from '@mui/material/Box';
import { Handle, Position } from '@xyflow/react';
import { useState } from 'react';
import { TextInput } from '@component';
import { INodeType } from './NodeType';

export const HumanInputNode: React.FC<INodeType> = ({ data }) => {
  const [value, setValue] = useState<string>('');
  return (
    <Box className="text-updater-node">
      <Box>{data.label}</Box>
      <TextInput
        value={value}
        label="Human Input"
        placeholder="Name"
        name="humanInput"
        onChange={(e) => setValue(e.target.value)}
      />
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </Box>
  );
};
