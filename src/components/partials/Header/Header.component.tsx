'use client';

import * as motion from 'motion/react-client';

import Link from 'next/link';

import { NextLink, ThemeToggle } from '@components';
import { mainNavigation } from '@data';

import { IHeaderProps } from './Header';
import { MobileMenu } from './MobileMenu';
import { SimpleModeToggle } from './ThemeToggle';

export const Header: React.FC<IHeaderProps> = ({ url }) => (
  <motion.header
    className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <motion.div
            className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            VM
          </motion.div>
          <span className="text-lg font-semibold">Vimal Menon</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {mainNavigation.map((item) => (
            <NextLink link={item} className="flex items-center space-x-2" key={item.name} />
          ))}
        </nav>

        {/* Theme Controls & Mobile Menu */}
        <div className="flex items-center space-x-2">
          {/* Desktop Theme Toggle */}
          <div className="hidden lg:block">
            <ThemeToggle />
          </div>

          {/* Tablet/Mobile Simple Toggle */}
          <div className="lg:hidden">
            <SimpleModeToggle />
          </div>

          {/* Mobile Menu */}
          <MobileMenu url={url} />
        </div>
      </div>
    </div>
  </motion.header>
);
