import { User } from 'lucide-react';
import * as motion from 'motion/react-client';

import {
  AdminSidebarContent,
  Button,
  DynamicBreadcrumb,
  MobileSidebar,
  ThemeToggle,
} from '@components';

import { IAdminLayoutProps } from './AdminLayout';
import { MenuButton } from './MenuButton';

export const AdminLayout: React.FC<IAdminLayoutProps> = ({ children, navigation }) => (
  <div className="flex h-screen bg-background">
    <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
      <div className="border-r bg-card">
        <AdminSidebarContent />
      </div>
    </div>

    {/* Mobile Sidebar */}
    <MobileSidebar />
    <div className="flex-1 lg:pl-64 flex flex-col">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center px-4 gap-4">
          <MenuButton />

          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 flex-1">
            <h1 className="text-lg">{navigation.name}</h1>
          </div>

          <div className="flex items-center space-x-2">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <Button variant="ghost" size="icon">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>
      <DynamicBreadcrumb breadcrumbs={navigation.breadcrumb} />
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
