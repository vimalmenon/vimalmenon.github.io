import React from 'react';

import { ArrowUpRight, Code2, Globe } from 'lucide-react';
import * as motion from 'motion/react-client';

import Link from 'next/link';

import { Badge, Icon, Separator } from '@components';
import { footerNavigation, Icons, socialLinks } from '@data';

import { About } from './About';
import { FunFact } from './FunFact';

const technologies = ['React', 'TypeScript', 'FastAPI', 'Python', 'k8s', 'Docker'];

export const Footer: React.FC = () => (
  <footer className="relative border-t bg-gradient-to-b from-background to-muted/20">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
    </div>

    <div className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand & About */}
          <About />

          {/* Quick Links */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <ArrowUpRight className="h-4 w-4 text-primary" />
                Quick Links
              </h3>
              <div className="space-y-3">
                {footerNavigation.map((link) => (
                  <motion.div key={link.name} whileHover={{ x: 4 }}>
                    <Link
                      href={link.url}
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <Icon icon={link.icon} className="h-4 w-4 group-hover:text-primary" />
                      <span>{link.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Technologies */}
              <div className="mt-8">
                <h4 className="font-medium mb-3 flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-primary" />
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs hover:bg-primary/10 hover:border-primary/20 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary" />
                Connect With Me
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Follow my work and connect with me across different platforms.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-primary/5 hover:border-primary/10 border border-border/50 transition-all duration-200">
                      <div className="w-8 h-8 bg-background rounded-md flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <link.icon className={`h-4 w-4 ${link.color} transition-colors`} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-foreground">{link.name}</span>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <Separator className="mb-4" />

        {/* Unified Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-3"
        >
          {/* Fun Fact integrated into footer flow */}
          <FunFact />

          {/* Copyright and Links unified */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-3 w-full text-center lg:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
              <span className="whitespace-nowrap">
                &copy; 2025 Vimal Menon. All rights reserved.
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1 whitespace-nowrap">
                Made with <Icons.Heart className="h-3 w-3 text-red-500" fill="currentColor" /> in
                Hong Kong
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-primary transition-colors whitespace-nowrap">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary transition-colors whitespace-nowrap">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </footer>
);
