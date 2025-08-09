'use client';

import { teal } from '@mui/material/colors';
import MuiLink from '@mui/material/Link';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

import { useAppContext } from '@context';

import { ILink } from '../Header';

export const Link: React.FC<ILink> = ({ navigation }) => {
  const pathname = usePathname();
  const selected = pathname === navigation.link;
  const { closeDrawer } = useAppContext();
  return (
    <MuiLink
      component={NextLink}
      href={navigation.link}
      underline={selected ? 'always' : 'none'}
      sx={{
        alignItems: 'center',
        backgroundColor: selected ? teal[400] : teal[500],
        borderRadius: 1,
        display: 'flex',
        paddingX: 2,
        paddingY: 0.5,
      }}
      color="common.white"
      onClick={closeDrawer}
    >
      {navigation.name}
    </MuiLink>
  );
};
