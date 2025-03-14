'use client';

import IconButton from '@mui/material/IconButton';
import MuiLink from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';
import Link from 'next/link';
import React from 'react';
import { SocialMedias } from '@data';
import { StyledSocialMedia } from '@style';

export const SocialMedia: React.FC = () => {
  return (
    <StyledSocialMedia>
      {SocialMedias.map((media) => {
        return (
          <Tooltip title={media.name} key={media.link}>
            <MuiLink component={Link} href={media.link} underline="none" target="_blank">
              <IconButton>
                <media.Icon />
              </IconButton>
            </MuiLink>
          </Tooltip>
        );
      })}
    </StyledSocialMedia>
  );
};
