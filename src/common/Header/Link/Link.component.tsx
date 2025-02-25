'use client';

import MuiLink from '@mui/material/Link';
import NextLink from 'next/link';
import { ILink } from './Link';
import { usePathname } from 'next/navigation';
import { teal } from '@mui/material/colors';

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
        backgroundColor: selected ? teal[400] : teal[500],
        borderRadius: 2,
        paddingX: 2,
        paddingY: 0.5,
      }}
      color="common.white"
    >
      {navigation.name}
    </MuiLink>
  );
};
