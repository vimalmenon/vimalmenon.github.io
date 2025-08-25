'use client';

import { ArrowLeft, Home, Menu, User } from 'lucide-react';
import * as motion from 'motion/react-client';

import Link from 'next/link';

import {
  Button,
  DynamicBreadcrumb,
  Sheet,
  SheetContent,
  SidebarContent,
  ThemeToggle,
} from '@components';
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
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center px-4 gap-4">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => false}>
            <Menu className="h-5 w-5" />
          </Button>

          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 flex-1">
            <Link href="/">
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-primary"
              >
                <Home className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Home</span>
              </Button>
            </Link>
            <span className="text-muted-foreground">/</span>
            <h1 className="text-lg">Admin</h1>
          </div>

          <div className="flex items-center space-x-2">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <Link href="/">
              <Button variant="outline" size="sm" className="hidden lg:flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Site</span>
              </Button>
            </Link>
            <Button variant="ghost" size="icon">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>
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
