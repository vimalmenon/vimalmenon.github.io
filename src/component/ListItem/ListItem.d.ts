interface IRender<T> {
  data: T;
  index: number;
}

export interface IListItem<T> {
  items: T[];
  Render: React.FC<IRender<T>>;
}
