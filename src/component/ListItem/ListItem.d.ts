interface IRender {
  data: T;
  index: number;
}

export interface IListItem<T> {
  items: T[];
  Render: React.FC<IRender>;
}
