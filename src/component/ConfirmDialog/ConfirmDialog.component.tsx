'use client';

import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

import { AsyncButton } from '@component';
import { Icons } from '@data';
import { AnyType } from '@types';

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

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<IConfirmDialog, AnyType>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const ConfirmDialog: React.FC<IConfirmDialog> = ({
  icon,
  loading = false,
  onCancel,
  onConfirm,
  open,
  title,
}) => (
  <Dialog
    open={open}
    keepMounted
    onClose={onCancel}
    maxWidth="md"
    fullWidth
    slots={{
      transition: Transition,
    }}
  >
    <DialogTitle>
      <ShowTitle icon={icon} title={title} />
    </DialogTitle>
    <Divider />
    <DialogActions>
      <Button onClick={onCancel} variant="outlined" endIcon={<Icons.Close />} disabled={loading}>
        Cancel
      </Button>
      <AsyncButton
        onClick={onConfirm}
        variant="contained"
        startIcon={<Icons.Check />}
        loadingPosition="start"
      >
        Confirm
      </AsyncButton>
    </DialogActions>
  </Dialog>
);
