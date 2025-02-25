'use client';

import MuiLink from '@mui/material/Link';
import NextLink from 'next/link';
import { ILink } from './Link';
import { usePathname } from 'next/navigation';

export const Link: React.FC<ILink> = ({ navigation }) => {
  const pathname = usePathname();
  const selected = pathname === navigation.link;
  return (
    <MuiLink
      component={NextLink}
      href={navigation.link}
      underline={selected ? 'always' : 'none'}
      sx={{
        fontSize: '16px',
        alignItems: 'center',
        display: 'flex',
        backgroundColor: selected ? 'primary.400' : 'primary.500',
        borderRadius: 2,
        padding: 1,
      }}
      color="common.white"
    >
      {navigation.name}
    </MuiLink>
  );
};
