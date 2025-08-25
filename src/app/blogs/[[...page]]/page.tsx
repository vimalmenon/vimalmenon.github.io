import { JSX } from 'react';

import { navigationMap } from '@data';
import { MainLayout } from '@layouts';
import { ICatchAll } from '@types';
import { Blogs as BlobsView } from '@views';

export const generateStaticParams = async (): Promise<ICatchAll[]> => [
  {
    page: [''],
  },
];

export default function Blogs(): JSX.Element {
  return (
    <MainLayout navigation={navigationMap.blogs}>
      <BlobsView />
    </MainLayout>
  );
}
