'use client';

import { Handle, Position } from '@xyflow/react';
import { useState } from 'react';
import { TextInput } from '@component';

export const HumanInputNode: React.FC = () => {
  const [value, setValue] = useState<string>('');
  return (
    <div className="text-updater-node">
      <TextInput
        value={value}
        label="Human Input"
        placeholder="Name"
        name="humanInput"
        onChange={(e) => setValue(e.target.value)}
      />
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};
