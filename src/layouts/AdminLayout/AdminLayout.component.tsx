'use client';

import * as motion from 'motion/react-client';

import { DynamicBreadcrumb, Sheet, SheetContent, SidebarContent } from '@components';
import { IReactChildren } from '@types';

export const AdminLayout: React.FC<IReactChildren> = ({ children }) => (
  <div className="flex h-screen bg-background">
    <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
      <div className="border-r bg-card">
        <SidebarContent />
      </div>
    </div>

    {/* Mobile Sidebar */}
    <Sheet open={false} onOpenChange={() => false}>
      <SheetContent side="left" className="w-64 p-0">
        <SidebarContent />
      </SheetContent>
    </Sheet>
    <div className="flex-1 lg:pl-64 flex flex-col">
      <DynamicBreadcrumb breadcrumbs={[]} />
      <main className="min-h-screen flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </main>
    </div>
  </div>
);
