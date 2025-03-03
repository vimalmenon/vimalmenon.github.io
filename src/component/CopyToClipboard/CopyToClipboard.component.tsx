'use client';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';
import { Icons } from '@data';
import { ICopyToClipboard } from './CopyToClipboard';

export const CopyToClipboard: React.FC<ICopyToClipboard> = ({ text }) => {
  const onClick = (): void => {
    navigator.clipboard.writeText(text);
    setOpen(true);
  };
  const [open, setOpen] = useState(false);

  return (
    <Tooltip title="Copied" open={open} onClose={() => setOpen(false)}>
      <span>
        {text}
        <IconButton onClick={onClick}>
          <Icons.Copy fontSize="small" />
        </IconButton>
      </span>
    </Tooltip>
  );
};
