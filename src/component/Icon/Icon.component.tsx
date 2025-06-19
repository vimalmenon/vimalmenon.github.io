'use client';

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';
import { IIcon } from './Icon.d';

export const Icon: React.FC<IIcon> = ({ icon, onClick, size, toolTip }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const handleClick = async (): Promise<void> => {
    if (onClick) {
      setLoading(true);
      await onClick();
      setLoading(false);
    }
  };
  return (
    <Tooltip title={toolTip}>
      <IconButton onClick={handleClick} loading={loading} size={size}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};
