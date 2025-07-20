import { IListViewRender } from '@types';

export interface IListItem<T> {
  readonly items: T[];
  Render: React.FC<IListViewRender<T>>;
}
