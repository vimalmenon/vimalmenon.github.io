'use client';

import { Fragment, ReactElement, useState } from 'react';
import { ConfirmDialog, Icon } from '@component';
import { Icons } from '@data';
import { IDeleteConfirm } from './DeleteConfirm';

export function DeleteConfirm<T>({
  data,
  deleteMsg,
  disable,
  onDelete,
}: IDeleteConfirm<T>): ReactElement {
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  return (
    <Fragment>
      {showConfirm ? (
        <ConfirmDialog
          icon="WARNING"
          title={deleteMsg}
          open={true}
          onConfirm={async (): Promise<void> => await onDelete(data)}
          onCancel={() => setShowConfirm(false)}
          loading={false}
        />
      ) : null}
      <Icon
        toolTip="Delete"
        icon={<Icons.Delete />}
        onClick={() => setShowConfirm(true)}
        disabled={disable}
      />
    </Fragment>
  );
}
