import React from 'react';

import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import MuiLink from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import Link from 'next/link';

import { IBreadcrumbs } from './Breadcrumbs';

export const Breadcrumbs: React.FC<IBreadcrumbs> = ({ navigation }) => (
  <MuiBreadcrumbs aria-label="breadcrumb" sx={{ margin: 1 }}>
    {navigation.breadcrumbs.map((breadcrumb) => {
      if (breadcrumb.link) {
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
      }
      return (
        <Typography sx={{ color: 'text.primary' }} key={breadcrumb.name}>
          {breadcrumb.name}
        </Typography>
      );
    })}
  </MuiBreadcrumbs>
);
