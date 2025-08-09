import React, { Fragment, ReactElement } from 'react';

import { IListItem } from './ListItem';

export function ListItem<T>({ items, Render }: IListItem<T>): ReactElement {
  return (
    <Fragment>
      {items.map((item, index) => (
        <Fragment key={index}>
          <Render data={item} index={index} />
        </Fragment>
      ))}
    </Fragment>
  );
}
