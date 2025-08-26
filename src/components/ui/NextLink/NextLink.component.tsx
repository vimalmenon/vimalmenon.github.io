'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button, Icon } from '@components';

import { INextLinkProps } from './NextLink';

export const NextLink: React.FC<INextLinkProps> = ({ className, link }) => {
  const pathname = usePathname();
  const isActive = (url: string): boolean => pathname === url;

  return (
    <Link href={link.url}>
      <Button variant={isActive(link.url) ? 'default' : 'ghost'} className={className}>
        <Icon icon={link.icon} className="h-4 w-4" />
        <span>{link.name}</span>
      </Button>
    </Link>
  );
};
