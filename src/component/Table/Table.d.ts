import { IListViewRender } from '@types';

export interface ITable<T> {
  readonly items: T[];
  RenderBody: React.FC<IListViewRender<T>>;
  RenderHead: React.FC;
  readonly loading?: boolean;
  readonly size?: 'small' | 'medium';
}
