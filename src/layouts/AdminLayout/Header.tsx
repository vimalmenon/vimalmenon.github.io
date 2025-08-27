'use client';

import React, { useState } from 'react';

import {
  ArrowRight,
  Bell,
  BookOpen,
  Crown,
  HelpCircle,
  Home,
  LogOut,
  Menu,
  Package,
  Settings,
  Shield,
  Sparkles,
  User,
  Zap,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

import Link from 'next/link';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Separator,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SimpleModeToggle,
  ThemeToggle,
} from '@components';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isAdminArea = location.pathname.startsWith('/admin');

  const navigation = [
    {
      badge: null,
      description: 'Main homepage',
      href: '/',
      icon: Home,
      name: 'Home',
    },
    {
      badge: 'New',
      description: 'Articles & insights',
      href: '/blog',
      icon: BookOpen,
      name: 'Blog',
    },
    {
      badge: null,
      description: 'Project releases',
      href: '/release',
      icon: Package,
      name: 'Release',
    },
    {
      badge: isAdminArea ? 'Active' : null,
      description: 'Admin dashboard',
      href: '/admin',
      icon: Settings,
      name: 'Admin',
    },
  ];

  const isActive = React.useCallback(
    (path: string) => {
      if (!location?.pathname) return false;

      if (path === '/') {
        return location.pathname === '/';
      }
      return location.pathname.startsWith(path);
    },
    [location?.pathname]
  );

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 ${
        isAdminArea
          ? 'bg-background/98 border-border/60 shadow-lg'
          : 'bg-background/95 border-border'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            {/* Enhanced Logo with Professional Avatar */}
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Avatar
                  className={`h-10 w-10 ring-2 ${
                    isAdminArea ? 'ring-primary/30 shadow-lg' : 'ring-border/50'
                  } transition-all duration-200 group-hover:ring-primary/50`}
                >
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                    alt="Vimal Menon"
                  />
                  <AvatarFallback
                    className={`font-bold text-sm ${
                      isAdminArea
                        ? 'bg-gradient-to-br from-primary to-primary/80 text-primary-foreground'
                        : 'bg-primary/10 text-primary'
                    }`}
                  >
                    VM
                  </AvatarFallback>
                </Avatar>

                {/* Admin Crown Indicator */}
                {isAdminArea && (
                  <motion.div
                    className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-sm"
                    initial={{ rotate: -180, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ delay: 0.2, stiffness: 200, type: 'spring' }}
                  >
                    <Crown className="h-2.5 w-2.5 text-white" />
                  </motion.div>
                )}
              </motion.div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span
                    className={`font-bold transition-all duration-200 group-hover:text-primary ${
                      isAdminArea ? 'text-xl text-foreground' : 'text-lg text-foreground'
                    }`}
                  >
                    Vimal Menon
                  </span>
                </div>

                {/* Subtitle */}
                <div className="flex items-center gap-1 -mt-0.5">
                  <span
                    className={`text-xs text-muted-foreground transition-all duration-200 ${
                      isAdminArea ? 'font-medium' : ''
                    }`}
                  >
                    {isAdminArea ? 'System Administrator' : 'Personal Website'}
                  </span>

                  {isAdminArea && (
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      <Sparkles className="h-2.5 w-2.5 text-amber-500 opacity-60" />
                    </motion.div>
                  )}
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const itemIsActive = isActive(item.href);
              return (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant={itemIsActive ? 'default' : 'ghost'}
                    className={`flex items-center space-x-2 transition-all duration-200 ${
                      itemIsActive && isAdminArea && item.href === '/admin'
                        ? 'bg-primary/90 shadow-md'
                        : ''
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                    {item.href === '/admin' && isAdminArea && (
                      <div className="w-1.5 h-1.5 bg-primary-foreground rounded-full opacity-80"></div>
                    )}
                  </Button>
                </Link>
              );
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            {/* Admin Utility Icons - Only show in admin area */}
            {isAdminArea && (
              <motion.div
                className="hidden md:flex items-center space-x-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                {/* Notifications */}
                <Button variant="ghost" size="icon" className="relative hover:bg-muted/80 h-9 w-9">
                  <Bell className="h-4 w-4" />
                  <motion.span
                    className="absolute -top-1 -right-1 h-3 w-3 bg-primary rounded-full text-xs flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, stiffness: 200, type: 'spring' }}
                  >
                    <span className="sr-only">3 notifications</span>
                  </motion.span>
                </Button>

                {/* Help */}
                <Button variant="ghost" size="icon" className="hover:bg-muted/80 h-9 w-9">
                  <HelpCircle className="h-4 w-4" />
                </Button>

                {/* User Profile */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="relative hover:bg-muted/80 h-9 w-9"
                    >
                      <User className="h-4 w-4" />
                      <span className="absolute bottom-0 right-0 h-2 w-2 bg-green-500 rounded-full border border-background"></span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel className="font-medium">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                            alt="Vimal Menon"
                          />
                          <AvatarFallback className="bg-primary/10 text-primary text-xs">
                            VM
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">Vimal Menon</p>
                          <p className="text-xs text-muted-foreground">Administrator</p>
                        </div>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="h-4 w-4 mr-2" />
                      Profile Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="h-4 w-4 mr-2" />
                      Admin Settings
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive focus:text-destructive">
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Separator */}
                <Separator orientation="vertical" className="h-6 mx-2" />
              </motion.div>
            )}

            {/* Desktop Theme Toggle */}
            <div className="hidden lg:block">
              <ThemeToggle />
            </div>

            {/* Tablet/Mobile Simple Toggle */}
            <div className="lg:hidden">
              <SimpleModeToggle />
            </div>

            {/* Enhanced Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden hover:bg-muted/80 relative"
                >
                  <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
                    <Menu className="h-5 w-5" />
                  </motion.div>
                  <span className="sr-only">Open main menu</span>
                </Button>
              </SheetTrigger>

              {/* Enhanced Mobile Drawer */}
              <SheetContent
                side="right"
                className="w-[350px] sm:w-[400px] p-0 border-l border-border/50 bg-background/95 backdrop-blur-xl"
              >
                <SheetHeader className="sr-only">
                  <SheetTitle>Main Navigation</SheetTitle>
                  <SheetDescription>
                    Navigate between different sections of the website including Home, Blog,
                    Release, and Admin areas.
                  </SheetDescription>
                </SheetHeader>

                {/* Compact Mobile Drawer Content */}
                <div className="flex flex-col h-full">
                  {/* Compact Header */}
                  <motion.div
                    className="flex items-center gap-2.5 p-4 border-b border-border/30 bg-gradient-to-r from-muted/30 to-transparent"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Avatar className="h-9 w-9 ring-2 ring-primary/20 shadow-md">
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                        alt="Vimal Menon"
                      />
                      <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/10 text-primary font-bold text-sm">
                        VM
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold text-base text-foreground">Vimal Menon</h3>
                      <p className="text-xs text-muted-foreground">Personal Website</p>
                    </div>
                  </motion.div>

                  {/* Compact Admin Context Banner */}
                  <AnimatePresence>
                    {isAdminArea && (
                      <motion.div
                        className="mx-4 mt-3 p-3 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-lg shadow-md"
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex items-center gap-2.5 mb-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center">
                            <Shield className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-1.5">
                              <h4 className="font-bold text-sm text-foreground">Admin Panel</h4>
                              <Crown className="h-3 w-3 text-amber-500" />
                            </div>
                            <p className="text-xs text-muted-foreground">Administrator Access</p>
                          </div>
                        </div>

                        <div className="flex gap-1.5">
                          <Button variant="outline" size="sm" className="flex-1 h-7 text-xs">
                            <Bell className="h-3 w-3 mr-1" />
                            Alerts
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1 h-7 text-xs">
                            <HelpCircle className="h-3 w-3 mr-1" />
                            Help
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1 h-7 text-xs">
                            <User className="h-3 w-3 mr-1" />
                            Profile
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Compact Navigation Section */}
                  <div className="flex-1 px-4 py-3 overflow-y-auto">
                    <div className="space-y-1">
                      <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2 font-medium px-2">
                        Navigation
                      </div>

                      {navigation.map((item, index) => {
                        const itemIsActive = isActive(item.href);
                        return (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + index * 0.05 }}
                          >
                            <Link
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className="block"
                            >
                              <motion.div
                                whileHover={{ x: 2 }}
                                whileTap={{ scale: 0.98 }}
                                className={`
                                  group relative flex items-center gap-3 p-3 rounded-lg transition-all duration-200
                                  ${
                                    itemIsActive
                                      ? 'bg-primary text-primary-foreground shadow-md shadow-primary/15'
                                      : 'hover:bg-muted/60 hover:shadow-sm'
                                  }
                                `}
                              >
                                {/* Compact Icon */}
                                <div
                                  className={`
                                  w-8 h-8 rounded-md flex items-center justify-center transition-all duration-200
                                  ${
                                    itemIsActive
                                      ? 'bg-primary-foreground/20'
                                      : 'bg-muted group-hover:bg-primary/10'
                                  }
                                `}
                                >
                                  <item.icon
                                    className={`h-4 w-4 ${
                                      itemIsActive
                                        ? 'text-primary-foreground'
                                        : 'text-foreground group-hover:text-primary'
                                    }`}
                                  />
                                </div>

                                {/* Compact Content */}
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between">
                                    <h4
                                      className={`font-semibold text-sm ${
                                        itemIsActive ? 'text-primary-foreground' : 'text-foreground'
                                      }`}
                                    >
                                      {item.name}
                                    </h4>

                                    <div className="flex items-center gap-1.5">
                                      {item.badge && (
                                        <Badge
                                          variant={itemIsActive ? 'secondary' : 'outline'}
                                          className={`text-xs px-1.5 py-0.5 h-5 ${
                                            itemIsActive
                                              ? 'bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30'
                                              : 'border-border/50'
                                          }`}
                                        >
                                          {item.badge}
                                        </Badge>
                                      )}

                                      <ArrowRight
                                        className={`h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 ${
                                          itemIsActive
                                            ? 'text-primary-foreground/70'
                                            : 'text-muted-foreground'
                                        }`}
                                      />
                                    </div>
                                  </div>
                                  <p
                                    className={`text-xs mt-0.5 ${
                                      itemIsActive
                                        ? 'text-primary-foreground/70'
                                        : 'text-muted-foreground'
                                    }`}
                                  >
                                    {item.description}
                                  </p>
                                </div>
                              </motion.div>
                            </Link>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Compact Footer with Theme Settings */}
                  <motion.div
                    className="border-t border-border/30 p-4 bg-gradient-to-t from-muted/20 to-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="space-y-3">
                      {/* Compact Theme Settings Section */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                          <Zap className="h-3.5 w-3.5 text-primary" />
                          <span>Customize</span>
                        </div>
                        {/* <CompactThemeSelector /> */}
                      </div>

                      <Separator className="bg-border/50" />

                      {/* Compact Info */}
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">
                          Built with ❤️ by Vimal Menon
                        </p>
                        <p className="text-xs text-muted-foreground/70">
                          © 2024 • Personal Website
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
};
