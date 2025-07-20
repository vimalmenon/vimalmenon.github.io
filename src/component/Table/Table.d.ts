import { IListViewRender } from '@types';

export interface ITable<T> {
  readonly items: T[];
  RenderBody: React.FC<IListViewRender<T>>;
  RenderHead: React.FC;
}
