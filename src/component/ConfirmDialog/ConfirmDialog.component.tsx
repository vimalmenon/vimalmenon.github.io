'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import React from 'react';
import { Icons } from '@data';
import { IConfirmDialog, IShowIcon, IShowTitle } from './ConfirmDialog';

const ShowIcon: React.FC<IShowIcon> = ({ icon }) => {
  if (icon === 'WARNING') {
    return <Icons.Warning color="warning" />;
  }
  if (icon === 'ERROR') {
    return <Icons.Danger color="error" />;
  }
  return <Icons.Info color="info" />;
};

const ShowTitle: React.FC<IShowTitle> = ({ icon, title }) => {
  return (
    <Box>
      <ShowIcon icon={icon} />
      {title}
    </Box>
  );
};

export const ConfirmDialog: React.FC<IConfirmDialog> = ({
  icon,
  onCancel,
  onConfirm,
  open,
  title,
}) => {
  return (
    <Dialog open={open} keepMounted onClose={onCancel} maxWidth="md" fullWidth>
      <DialogTitle>
        <ShowTitle icon={icon} title={title} />
      </DialogTitle>
      <DialogActions>
        <Button onClick={onCancel} variant="outlined">
          Cancel
        </Button>
        <Button onClick={onConfirm} variant="contained">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};
