import { JSX } from 'react';

import { navigationMap } from '@data';
import { MainLayout } from '@layouts';
import { NotFound } from '@views';

export default function NotFoundPage(): JSX.Element {
  return (
    <MainLayout navigation={navigationMap.Home}>
      <NotFound />
    </MainLayout>
  );
}
