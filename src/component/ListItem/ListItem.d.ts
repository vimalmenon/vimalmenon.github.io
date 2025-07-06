import { IListViewRender } from '@types';

export interface IListItem<T> {
  items: T[];
  Render: React.FC<IListViewRender<T>>;
}
