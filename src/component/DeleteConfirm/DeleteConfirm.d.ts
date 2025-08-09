export interface IDeleteConfirm<T> {
  readonly disable?: boolean;
  readonly onDelete: (data: T) => Promise<void>;
  readonly deleteMsg: string | JSX.Element;
  readonly iconSize?: 'small' | 'medium' | 'large';
  readonly data: T;
}
