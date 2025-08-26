import { JSX } from 'react';

import { navigationMap } from '@data';
import { AdminLayout } from '@layouts';

export default function Release(): JSX.Element {
  return <AdminLayout navigation={navigationMap.admin}>Release</AdminLayout>;
}
