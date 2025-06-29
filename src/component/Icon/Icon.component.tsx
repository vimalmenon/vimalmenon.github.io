'use client';

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { MouseEventHandler, useState } from 'react';
import { IIcon } from './Icon.d';

export const Icon: React.FC<IIcon> = ({ disabled, icon, onClick, size, toolTip }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const handleClick: MouseEventHandler<HTMLButtonElement> = async (event): Promise<void> => {
    event.preventDefault();
    event.stopPropagation();
    if (onClick) {
      setLoading(true);
      await onClick();
      setLoading(false);
    }
  };
  if (disabled) {
    return (
      <IconButton onClick={handleClick} loading={loading} size={size} disabled={disabled}>
        {icon}
      </IconButton>
    );
  }
  return (
    <Tooltip title={toolTip}>
      <IconButton onClick={handleClick} loading={loading} size={size} disabled={disabled}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};
