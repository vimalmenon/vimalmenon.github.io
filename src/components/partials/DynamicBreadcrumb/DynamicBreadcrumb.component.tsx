import React from 'react';

import * as motion from 'motion/react-client';

import Link from 'next/link';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@components';

import { IDynamicBreadcrumbProps } from './DynamicBreadcrumb';

export const DynamicBreadcrumb: React.FC<IDynamicBreadcrumbProps> = ({ breadcrumbs }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.2 }}
    className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
  >
    <Breadcrumb>
      <BreadcrumbList>
        {/* Dynamic segments */}
        {breadcrumbs.map((breadcrumb, index, breadcrumbs) => (
          <React.Fragment key={breadcrumb.url}>
            <BreadcrumbItem>
              {index == breadcrumbs.length - 1 ? (
                <BreadcrumbPage className="flex items-center gap-1 hover:text-primary transition-colors">
                  {/* <breadcrumb.Icon className="h-4 w-4" /> */}
                  {breadcrumb.name}
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link
                    href={breadcrumb.url}
                    className="flex items-center gap-1 hover:text-primary transition-colors"
                  >
                    {/* <breadcrumb.Icon className="h-4 w-4" /> */}
                    <span className="sr-only sm:not-sr-only">{breadcrumb.name}</span>
                  </Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  </motion.div>
);
