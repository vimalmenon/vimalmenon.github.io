'use client';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import React from 'react';
import { Icons } from '@data';
import { IConfirmDialog, IShowIcon } from './ConfirmDialog';

const ShowIcon: React.FC<IShowIcon> = ({ info }) => {
  if (info === 'WARNING') {
    return <Icons.Warning color="warning" />;
  }
  if (info === 'ERROR') {
    return <Icons.Danger color="error" />;
  }
  return <Icons.Info color="info" />;
};

export const ConfirmDialog: React.FC<IConfirmDialog> = ({
  info,
  onCancel,
  onConfirm,
  open,
  title,
}) => {
  return (
    <Dialog open={open} keepMounted onClose={onCancel} maxWidth="md" fullWidth>
      <DialogTitle>
        <ShowIcon info={info} /> {title}
      </DialogTitle>
      <DialogActions>
        <Button onClick={onCancel} variant="outlined">
          Disagree
        </Button>
        <Button onClick={onConfirm} variant="contained">
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};
