import { IListViewRender } from '@types';

export interface ITable<T> {
  readonly items: T[];
  readonly RenderBody: React.FC<IListViewRender<T>>;
  readonly RenderHead: React.FC;
  readonly loading?: boolean;
  readonly size?: 'small' | 'medium';
}
