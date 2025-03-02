import IconButton from '@mui/material/IconButton';
import MuiLink from '@mui/material/Link';
import Link from 'next/link';
import React from 'react';
import { SocialMedias } from '@data';
import { SocialMediaBox } from './SocialMedia.style';

export const SocialMedia: React.FC = () => {
  return (
    <SocialMediaBox>
      {SocialMedias.map((media) => {
        return (
          <MuiLink
            component={Link}
            href={media.link}
            underline="none"
            key={media.link}
            target="_blank"
          >
            <IconButton>
              <media.Icon />
            </IconButton>
          </MuiLink>
        );
      })}
    </SocialMediaBox>
  );
};
