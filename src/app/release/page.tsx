import { JSX } from 'react';

import { navigationMap } from '@data';
import { MainLayout } from '@layouts';
import { Release as ReleaseViews } from '@views';

export default function Release(): JSX.Element {
  return (
    <MainLayout navigation={navigationMap.Release}>
      <ReleaseViews />
    </MainLayout>
  );
}
