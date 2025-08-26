import { Icons } from '@data';

import { IIconProps } from './Icon';

export const Icon: React.FC<IIconProps> = ({ className, icon }) => {
  const IconItem = Icons[icon];
  if (IconItem) {
    return <IconItem className={className} />;
  }
  return null;
};
