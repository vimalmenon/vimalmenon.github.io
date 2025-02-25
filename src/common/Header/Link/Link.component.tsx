import MuiLink from '@mui/material/Link';
import NextLink from 'next/link';
import { ILink } from './Link';

export const Link: React.FC<ILink> = ({ navigation }) => {
  return (
    <MuiLink component={NextLink} href={navigation.link} underline="none">
      {navigation.name}
    </MuiLink>
  );
};
