'use client';

import { Button } from '@components';
import { useTheme } from '@contexts';
import { Icons } from '@data';

export const MenuButton: React.FC = () => {
  const { setIsDrawerOpen } = useTheme();
  return (
    <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsDrawerOpen(true)}>
      <Icons.Menu className="h-5 w-5" />
    </Button>
  );
};
