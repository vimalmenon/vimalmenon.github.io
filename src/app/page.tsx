import { JSX } from 'react';

import { navigationMap } from '@data';
import { MainLayout } from '@layouts';

export default function Home(): JSX.Element {
  return <MainLayout navigation={navigationMap.Home}>Vimal Menon</MainLayout>;
}
