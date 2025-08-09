'use client';

import MuiLink from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

import { useAppContext } from '@context';

import { ILink } from '../../Header';

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
        borderRadius: 1,
        display: 'flex',
        paddingX: 2,
        paddingY: 0.5,
      }}
      onClick={closeDrawer}
    >
      <MenuItem selected={selected} sx={{ display: 'flex', flex: '1' }}>
        {navigation.name}
      </MenuItem>
    </MuiLink>
  );
};
