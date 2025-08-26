import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage, Button, Input, NextLink } from '@components';
import { adminNavigation, Icons } from '@data';

export const AdminSidebarContent: React.FC = () => (
  <div className="flex flex-col h-full">
    {/* Header */}
    <div className="p-6 border-b">
      <Link
        href="/admin"
        className="flex items-center space-x-3 group hover:bg-muted/50 -m-2 p-2 rounded-lg transition-colors"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground group-hover:scale-110 transition-transform">
          VM
        </div>
        <div>
          <p className="text-sm group-hover:text-primary transition-colors">Vimal Menon</p>
          <p className="text-xs text-muted-foreground">Administrator</p>
        </div>
      </Link>
    </div>

    {/* Back to Site Button */}
    <div className="p-6 pb-2">
      <div className="space-y-3">
        <Link href="/" className="block">
          <Button variant="outline" className="w-full justify-start space-x-2 group">
            <Icons.ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Site</span>
          </Button>
        </Link>
        <div className="relative">
          <Icons.Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search admin..."
            className="pl-10 h-9 bg-muted/50 border-0 focus:bg-background focus:ring-1 focus:ring-primary/20"
          />
        </div>
      </div>
    </div>

    {/* Navigation */}
    <nav className="flex-1 p-6">
      <div className="space-y-2">
        <div className="text-xs text-muted-foreground uppercase tracking-wider mb-3 px-2">
          Admin Panel
        </div>
        {adminNavigation.map((item) => (
          <NextLink link={item} className="w-full justify-start space-x-2" key={item.name} />
        ))}
      </div>
    </nav>

    {/* Footer */}
    <div className="p-6 border-t space-y-4">
      {/* Theme Settings */}
      {/* <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Appearance</span>
          <ThemeToggle />
        </div>
        <div className="space-y-2">
          <ColorThemeSelector />
        </div>
      </div> */}

      {/* <Separator /> */}

      <div className="flex items-center space-x-3 mb-4">
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
          <AvatarFallback>VM</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <p className="text-sm truncate">vimal@example.com</p>
        </div>
      </div>
      <Button variant="outline" size="sm" className="w-full justify-start">
        <Icons.LogOut className="mr-2 h-4 w-4" />
        Sign Out
      </Button>
    </div>
  </div>
);
