export interface IDeleteConfirm<T> {
  disable?: boolean;
  onDelete: (data: T) => Promise<void>;
  deleteMsg: string | JSX.Element;
  iconSize?: 'small' | 'medium' | 'large';
  data: T;
}
