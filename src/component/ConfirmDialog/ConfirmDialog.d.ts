export interface IConfirmDialog {
  icon: 'WARNING' | 'ERROR' | 'INFO';
  title: string;
  open: boolean;
  onConfirm: VoidFunction;
  onCancel: VoidFunction;
}

export interface IShowIcon {
  icon: 'WARNING' | 'ERROR' | 'INFO';
}

export interface IShowTitle {
  icon: 'WARNING' | 'ERROR' | 'INFO';
  title: string;
}
