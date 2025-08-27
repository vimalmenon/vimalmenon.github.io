'use client';

import React from 'react';

import {
  Activity,
  Bookmark,
  ChevronRight,
  Clock,
  FileText,
  Filter,
  LayoutDashboard,
  LogOut,
  MoreHorizontal,
  Plus,
  RefreshCw,
  Search,
  Settings,
  User,
  Workflow,
  X,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

import Link from 'next/link';

import {
  Badge,
  Button,
  CompactThemeSelector,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Input,
  Separator,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@components';

import { IAdminLayoutProps } from './AdminLayout';
import { Header } from './Header';

export const AdminLayout: React.FC<IAdminLayoutProps> = ({ children }) => {
  // const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const navigation = [
    {
      badge: null,
      description: 'Overview and analytics',
      exact: true,
      href: '/admin',
      icon: LayoutDashboard,
      name: 'Dashboard',
    },
    {
      badge: '12',
      description: 'Manage blog content',
      href: '/admin/posts',
      icon: FileText,
      name: 'Posts',
    },
    {
      badge: 'New',
      description: 'Automation and processes',
      href: '/admin/workflows',
      icon: Workflow,
      name: 'Workflows',
    },
    {
      badge: null,
      description: 'System configuration',
      href: '/admin/settings',
      icon: Settings,
      name: 'Settings',
    },
  ];

  const getCurrentPage = () =>
    navigation.find((nav) => isActive(nav.href, nav.exact)) || navigation[0];

  const getPageActions = () => {
    const currentPath = location.pathname;

    switch (true) {
      case currentPath === '/admin':
        return [
          { icon: Plus, label: 'New Post', variant: 'default' as const },
          { icon: RefreshCw, label: 'Refresh', variant: 'outline' as const },
        ];
      case currentPath.startsWith('/admin/posts'):
        return [
          { icon: Plus, label: 'New Post', variant: 'default' as const },
          { icon: Filter, label: 'Filter', variant: 'outline' as const },
        ];
      case currentPath.startsWith('/admin/workflows'):
        return [
          { icon: Plus, label: 'Create Workflow', variant: 'default' as const },
          { icon: RefreshCw, label: 'Refresh', variant: 'outline' as const },
        ];
      case currentPath.startsWith('/admin/settings'):
        return [{ icon: Bookmark, label: 'Backup', variant: 'outline' as const }];
      default:
        return [];
    }
  };

  const isActive = (path: string, exact = false) => {
    if (!location?.pathname) return false;

    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const SidebarContent = ({ isMobile = false }) => (
    <div className="flex flex-col h-full bg-card/95 backdrop-blur-sm">
      {/* Compact Header - Search Only */}
      <div className="p-3 border-b border-border/50">
        {/* Mobile close button */}
        {isMobile && (
          <div className="flex justify-end mb-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(false)}
              className="h-6 w-6 hover:bg-muted/80"
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        )}

        {/* Compact Search */}
        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-3 w-3 text-muted-foreground" />
          <Input
            placeholder="Search..."
            className="pl-7 h-7 text-xs bg-muted/30 border-border/50 focus:bg-background focus:ring-1 focus:ring-primary/20 focus:border-primary/30"
          />
        </div>
      </div>

      {/* Compact Navigation */}
      <nav className="flex-1 px-3 py-3 overflow-y-auto">
        <div className="space-y-1">
          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2 px-2 font-medium">
            Admin
          </div>

          {navigation.map((item) => {
            const isCurrentlyActive = isActive(item.href, item.exact);

            return (
              <motion.div key={item.name} whileHover={{ x: 1 }} whileTap={{ scale: 0.99 }}>
                <Link href={item.href} onClick={() => setSidebarOpen(false)} className="block">
                  <Button
                    variant={isCurrentlyActive ? 'default' : 'ghost'}
                    className={`
                      w-full justify-start h-8 px-2 py-1 text-xs font-medium transition-all duration-200
                      ${
                        isCurrentlyActive
                          ? 'bg-primary text-primary-foreground shadow-sm'
                          : 'hover:bg-muted/60 hover:text-foreground'
                      }
                    `}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2 min-w-0 flex-1">
                        <item.icon className="h-3.5 w-3.5 shrink-0" />
                        <span className="truncate">{item.name}</span>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        {item.badge && (
                          <Badge
                            variant={isCurrentlyActive ? 'secondary' : 'outline'}
                            className={`
                              h-4 px-1.5 text-xs leading-none
                              ${isCurrentlyActive ? 'bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30' : 'border-border/50'}
                            `}
                          >
                            {item.badge}
                          </Badge>
                        )}
                        {isCurrentlyActive && <ChevronRight className="h-2.5 w-2.5 opacity-60" />}
                      </div>
                    </div>
                  </Button>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </nav>

      {/* Minimal Footer */}
      <div className="p-2 border-t border-border/50 space-y-1.5 bg-muted/20">
        {/* Minimal Theme Settings */}
        <CompactThemeSelector />

        <Separator className="bg-border/50" />

        {/* Minimal Quick Actions */}
        <div className="flex gap-1">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 text-xs h-6 hover:bg-muted/80 border-border/50 px-1"
          >
            <User className="h-2.5 w-2.5 mr-1" />
            Profile
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="flex-1 h-6 group hover:bg-destructive hover:text-destructive-foreground hover:border-destructive transition-colors border-border/50 px-1"
          >
            <LogOut className="mr-1 h-2.5 w-2.5 group-hover:translate-x-0.5 transition-transform" />
            <span className="text-xs">Logout</span>
          </Button>
        </div>
      </div>
    </div>
  );

  const currentPage = getCurrentPage();
  const pageActions = getPageActions();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Shared Header */}
      <Header />

      {/* Admin Layout Container */}
      <div className="flex flex-1 relative">
        {/* Compact Desktop Sidebar */}
        <motion.aside
          className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:left-0 lg:top-16 lg:bottom-0 lg:z-30"
          initial={{ x: -256 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <div className="h-full border-r border-border/50 shadow-lg">
            <SidebarContent />
          </div>
        </motion.aside>

        {/* Mobile Sidebar */}
        <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
          <SheetContent side="left" className="w-64 p-0 border-r border-border/50">
            <SheetHeader className="sr-only">
              <SheetTitle>Admin Navigation</SheetTitle>
              <SheetDescription>
                Navigate through the admin panel sections including dashboard, posts, workflows, and
                settings.
              </SheetDescription>
            </SheetHeader>
            <SidebarContent isMobile={true} />
          </SheetContent>
        </Sheet>

        {/* Main Content Area */}
        <div className="flex-1 lg:ml-64 flex flex-col min-w-0">
          {/* Admin Sub-Header */}
          <motion.header
            className="border-b border-border/50 bg-gradient-to-r from-card/50 via-card/30 to-card/50 backdrop-blur-lg supports-[backdrop-filter]:bg-card/60 sticky top-16 z-20 shadow-sm"
            initial={{ y: -64 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {/* Header Content */}
            <div className="px-6 py-5">
              {/* Page Title Section */}
              <div className="flex items-center justify-between mb-6">
                {/* Left - Page Info */}
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  {/* Page Icon & Title */}
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <motion.div
                      className="w-14 h-14 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 rounded-2xl flex items-center justify-center shadow-lg border border-primary/20"
                      whileHover={{ scale: 1.05 }}
                      transition={{ damping: 25, stiffness: 400, type: 'spring' }}
                    >
                      <currentPage.icon className="h-7 w-7 text-primary" />
                    </motion.div>

                    <div className="min-w-0 flex-1">
                      <h1 className="text-3xl font-bold text-foreground mb-2 tracking-tight">
                        {currentPage.name}
                      </h1>
                      <p className="text-muted-foreground leading-relaxed">
                        {currentPage.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right - Primary Actions Only */}
                <div className="flex items-center gap-3 shrink-0">
                  {/* Desktop Actions */}
                  <div className="hidden md:flex items-center gap-2">
                    {pageActions.map((action, index) => (
                      <Button
                        key={index}
                        variant={action.variant}
                        size="sm"
                        className="flex items-center gap-2 shadow-sm hover:shadow-md transition-all duration-200"
                      >
                        <action.icon className="h-4 w-4" />
                        {action.label}
                      </Button>
                    ))}
                  </div>

                  {/* Mobile Actions Dropdown */}
                  {pageActions.length > 0 && (
                    <div className="md:hidden">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="icon" className="shadow-sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Quick Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          {pageActions.map((action, index) => (
                            <DropdownMenuItem key={index}>
                              <action.icon className="h-4 w-4 mr-2" />
                              {action.label}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Status Bar */}
              <div className="flex items-center justify-between text-sm bg-muted/30 rounded-lg px-4 py-3 border border-border/30">
                <div className="flex items-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Activity className="h-3 w-3 text-green-500" />
                    <span>System Healthy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-3 w-3" />
                    <span>Updated 2m ago</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-2">
                    <User className="h-3 w-3" />
                    <span>Admin Session</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {currentPage.badge && (
                    <Badge variant="outline" className="text-xs bg-background/50 shadow-sm">
                      {currentPage.badge}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </motion.header>

          {/* Breadcrumbs */}
          <div className="border-b border-border/30 bg-muted/20">{/* <DynamicBreadcrumb /> */}</div>

          {/* Page Content */}
          <main className="flex-1 bg-muted/30">
            <div className="h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={location?.pathname}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="h-full"
                >
                  {/* Content Container with Proper Margins */}
                  <div className="container mx-auto p-6 lg:p-8 max-w-7xl">
                    <div className="min-h-[calc(100vh-20rem)]">{children}</div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
