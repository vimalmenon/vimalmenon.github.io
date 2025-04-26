export interface IConfirmDialog {
  info: 'WARNING' | 'ERROR' | 'INFO';
  title: string;
  open: boolean;
  onConfirm: VoidFunction;
  onCancel: VoidFunction;
}

export interface IShowIcon {
  info: 'WARNING' | 'ERROR' | 'INFO';
}
