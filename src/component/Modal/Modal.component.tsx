'use client';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';
import { Icons } from '@data';
import { AnyType } from '@types';
import { AsyncButton } from '../AsyncButton';
import { IModal } from './Modal';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<IModal, AnyType>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Modal: React.FC<IModal> = ({
  children,
  disableConfirm,
  onClose,
  onConfirm,
  open,
  title,
}) => (
  <Dialog
    fullWidth={true}
    maxWidth="lg"
    open={open}
    slots={{
      transition: Transition,
    }}
    keepMounted
    onClose={onClose}
  >
    <DialogTitle>{title}</DialogTitle>
    <IconButton
      aria-label="close"
      onClick={onClose}
      sx={(theme) => ({
        color: theme.palette.grey[500],
        position: 'absolute',
        right: 8,
        top: 8,
      })}
    >
      <Icons.Close />
    </IconButton>
    <DialogContent>{children}</DialogContent>
    <DialogActions>
      <Button variant="outlined" onClick={onClose}>
        Close
      </Button>
      <AsyncButton
        onClick={onConfirm}
        variant="contained"
        loadingPosition="start"
        disabled={disableConfirm}
      >
        Confirm
      </AsyncButton>
    </DialogActions>
  </Dialog>
);
