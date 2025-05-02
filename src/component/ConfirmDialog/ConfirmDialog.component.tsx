'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import React from 'react';
import { AsyncButton } from '@component';
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

const ShowTitle: React.FC<IShowTitle> = ({ icon, title }) => (
  <Box sx={{ alignItems: 'center', display: 'flex', gap: 2 }}>
    <ShowIcon icon={icon} />
    <Box>{title}</Box>
  </Box>
);

export const ConfirmDialog: React.FC<IConfirmDialog> = ({
  icon,
  onCancel,
  onConfirm,
  open,
  title,
}) => (
  <Dialog open={open} keepMounted onClose={onCancel} maxWidth="md" fullWidth>
    <DialogTitle>
      <ShowTitle icon={icon} title={title} />
    </DialogTitle>
    <DialogActions>
      <Button onClick={onCancel} variant="outlined" endIcon={<Icons.Close />}>
        Cancel
      </Button>
      <AsyncButton onClick={onConfirm} variant="contained" startIcon={<Icons.Check />}>
        Confirm
      </AsyncButton>
    </DialogActions>
  </Dialog>
);
