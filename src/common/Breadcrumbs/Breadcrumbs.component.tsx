import React from 'react';
import { IBreadcrumbs } from './Breadcrumbs';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import MuiLink from '@mui/material/Link';
import Link from 'next/link';

export const Breadcrumbs: React.FC<IBreadcrumbs> = ({ navigation }) => {
  return (
    <MuiBreadcrumbs aria-label="breadcrumb">
      {navigation.breadcrumbs.map((breadcrumb) => {
        return (
          <MuiLink component={Link} href={breadcrumb.link} underline="none" key={breadcrumb.name}>
            {breadcrumb.name}
          </MuiLink>
        );
      })}
    </MuiBreadcrumbs>
  );
};
