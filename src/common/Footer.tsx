import React from 'react';

import { Github, Linkedin, Mail, X } from 'lucide-react';
import { motion } from 'motion/react';

import { Button, Separator } from '@component';

const Footer = () => {
  const socialLinks = [
    { color: 'hover:text-gray-600', href: 'https://github.com', icon: Github, name: 'GitHub' },
    {
      color: 'hover:text-blue-600',
      href: 'https://linkedin.com',
      icon: Linkedin,
      name: 'LinkedIn',
    },
    { color: 'hover:text-blue-400', href: 'https://twitter.com', icon: X, name: 'Twitter' },
    { color: 'hover:text-green-600', href: 'mailto:john@example.com', icon: Mail, name: 'Email' },
  ];

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button variant="ghost" size="icon" className={`${link.color} transition-colors`}>
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.name}</span>
                </Button>
              </motion.a>
            ))}
          </div>

          <Separator className="w-full max-w-md" />

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Vimal Menon. All rights reserved.</p>
            <p className="mt-1">Built with React & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
