import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import MuiLink from '@mui/material/Link';
import Link from 'next/link';
import React from 'react';
import { IBreadcrumbs } from './Breadcrumbs';

export const Breadcrumbs: React.FC<IBreadcrumbs> = ({ navigation }) => {
  return (
    <MuiBreadcrumbs aria-label="breadcrumb" sx={{ marginY: 2 }}>
      {navigation.breadcrumbs.map((breadcrumb) => {
        return (
          <MuiLink
            component={Link}
            href={breadcrumb.link}
            underline="none"
            key={breadcrumb.name}
            color="text.primary"
          >
            {breadcrumb.name}
          </MuiLink>
        );
      })}
    </MuiBreadcrumbs>
  );
};
