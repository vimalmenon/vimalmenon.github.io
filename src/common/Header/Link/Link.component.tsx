'use client';

import MuiLink from '@mui/material/Link';
import NextLink from 'next/link';
import { ILink } from './Link';
import { usePathname } from 'next/navigation';

export const Link: React.FC<ILink> = ({ navigation }) => {
  const pathname = usePathname();
  return (
    <MuiLink
      component={NextLink}
      href={navigation.link}
      underline={pathname === navigation.link ? 'always' : 'none'}
    >
      {navigation.name}
    </MuiLink>
  );
};
