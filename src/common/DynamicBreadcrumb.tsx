'use client';

import React from 'react';

import { Home } from 'lucide-react';
import { motion } from 'motion/react';

import Link from 'next/link';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@component';

// Define route metadata for better breadcrumb labels
const routeLabels: Record<string, string> = {
  '': 'Home',
  admin: 'Admin',
  blog: 'Blog',
  category: 'Category',
  dashboard: 'Dashboard',
  post: 'Post',
  posts: 'Posts',
  release: 'Release',
  settings: 'Settings',
};

// Define routes that should be excluded from breadcrumbs
export const excludedRoutes = ['not-found', '404'];

interface BreadcrumbSegment {
  label: string;
  href: string;
  isLast: boolean;
}

export const DynamicBreadcrumb = () => {
  const pathname = '/';

  // Don't show breadcrumbs on home page
  if (pathname === '/') {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <Breadcrumb>
        <BreadcrumbList>
          {/* Home link */}
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link
                href="/"
                className="flex items-center gap-1 hover:text-primary transition-colors"
              >
                <Home className="h-4 w-4" />
                <span className="sr-only sm:not-sr-only">Home</span>
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          {[].length > 0 && <BreadcrumbSeparator />}

          {/* Dynamic segments */}
          {[].map((segment: BreadcrumbSegment) => (
            <React.Fragment key={segment.href}>
              <BreadcrumbItem>
                {segment.isLast ? (
                  <BreadcrumbPage>{segment.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={segment.href} className="hover:text-primary transition-colors">
                      {segment.label}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!segment.isLast && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </motion.div>
  );
};
