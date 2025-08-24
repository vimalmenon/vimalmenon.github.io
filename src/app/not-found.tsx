import { NotFound } from '@/views';

import { navigationMap } from '@data';
import { MainLayout } from '@layouts';

export default function NotFoundPage() {
  return (
    <MainLayout navigation={navigationMap.Home}>
      <NotFound />
    </MainLayout>
  );
}
