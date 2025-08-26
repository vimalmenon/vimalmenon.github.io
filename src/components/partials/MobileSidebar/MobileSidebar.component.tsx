'use client';

import { AdminSidebarContent, Sheet, SheetContent } from '@components';
import { useTheme } from '@contexts';

export const MobileSidebar: React.FC = () => {
  const { isDrawerOpen, setIsDrawerOpen } = useTheme();
  return (
    <Sheet open={isDrawerOpen} onOpenChange={() => setIsDrawerOpen(false)}>
      <SheetContent side="left" className="w-64 p-0">
        <AdminSidebarContent />
      </SheetContent>
    </Sheet>
  );
};
