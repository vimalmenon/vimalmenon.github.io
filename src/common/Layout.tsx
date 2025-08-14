'use client';

import React from 'react';

import { motion } from 'motion/react';

import { IReactChildren } from '@types';

import { DynamicBreadcrumb } from './DynamicBreadcrumb';
import Footer from './Footer';
import { Header } from './Header';

export const Layout: React.FC<IReactChildren> = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <DynamicBreadcrumb />
    <motion.main
      className="flex-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.main>
    <Footer />
  </div>
);
