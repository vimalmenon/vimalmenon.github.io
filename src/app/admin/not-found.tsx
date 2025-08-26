import { JSX } from 'react';

import { navigationMap } from '@data';
import { AdminLayout } from '@layouts';
import { NotFound } from '@views';

export default function NotFoundPage(): JSX.Element {
  return (
    <AdminLayout navigation={navigationMap.admin}>
      <NotFound />
    </AdminLayout>
  );
}
