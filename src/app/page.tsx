import { JSX } from 'react';

import { navigationMap } from '@data';
import { MainLayout } from '@layouts';
import { Home as HomeView } from '@views';

export default function Home(): JSX.Element {
  return (
    <MainLayout navigation={navigationMap.Home}>
      <HomeView />
    </MainLayout>
  );
}
