'use client';
import React, { useEffect, useState } from 'react';

import {
  ArrowUpRight,
  Award,
  BookOpen,
  Briefcase,
  Code2,
  Coffee,
  Globe,
  Heart,
  Lightbulb,
} from 'lucide-react';
import { AnimatePresence } from 'motion/react';
import * as motion from 'motion/react-client';

import { Badge, Card, CardContent, Separator } from '@components';
import { socialLinks } from '@data';

export const Footer: React.FC = () => {
  const quickLinks = [
    { href: '/', icon: Coffee, name: 'Home' },
    { href: '/#experience', icon: Briefcase, name: 'Experience' },
    { href: '/blog', icon: BookOpen, name: 'Blog' },
    { href: '/release', icon: Award, name: 'Releases' },
  ];

  const technologies = ['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'];

  const funFacts = [
    "☕ I've probably consumed enough coffee to power a small server farm",
    '🌙 I do my best coding between 10 PM and 2 AM - call it the magic hours',
    "🐛 I once spent 6 hours debugging, only to find a missing semicolon... we've all been there",
    "🎯 I can type 'git status' faster than I can say it out loud",
    '🔥 My code editor theme changes with my mood - currently vibing with dark mode',
    "🚀 I believe the best code is the code you don't have to write",
    "📚 I have 47 programming books and I've read... most of the first chapters",
    '🎮 I learned programming to create games, stayed for the web development',
    "🌍 I've debugged code in 3 different time zones in the same day",
    "💡 'Hello World' was my first program, but definitely not my last debugging session",
  ];

  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % funFacts.length);
    }, 5000); // Change fact every 5 seconds

    return () => clearInterval(interval);
  }, [funFacts.length]);

  return (
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
            <div className="lg:col-span-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  {/* <Logo className="h-8 w-8" showFullName={false} linkToHome={true} /> */}
                  <span className="text-xl font-bold whitespace-nowrap">Vimal Menon</span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Full-stack developer passionate about creating beautiful, functional digital
                  experiences. Specializing in modern web technologies and cloud architecture.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3">
                  <Card className="bg-primary/5 border-primary/10">
                    <CardContent className="p-3 text-center">
                      <div className="text-lg font-bold text-primary">5+</div>
                      <div className="text-xs text-muted-foreground">Years Experience</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-secondary/50 border-border/50">
                    <CardContent className="p-3 text-center">
                      <div className="text-lg font-bold">50+</div>
                      <div className="text-xs text-muted-foreground">Projects Built</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-accent/50 border-border/50">
                    <CardContent className="p-3 text-center">
                      <div className="text-lg font-bold">10+</div>
                      <div className="text-xs text-muted-foreground">Awards Won</div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>

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
                  {quickLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                      whileHover={{ x: 4 }}
                    >
                      <link.icon className="h-4 w-4 group-hover:text-primary" />
                      <span>{link.name}</span>
                    </motion.a>
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
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-muted/20 rounded-full border border-border/30">
              <Lightbulb className="h-3 w-3 text-primary shrink-0" />
              <div className="relative h-3.5 flex items-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentFactIndex}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="text-xs text-muted-foreground whitespace-nowrap max-w-xs sm:max-w-md md:max-w-lg truncate"
                  >
                    {funFacts[currentFactIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Copyright and Links unified */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-3 w-full text-center lg:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                <span className="whitespace-nowrap">
                  &copy; 2025 Vimal Menon. All rights reserved.
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1 whitespace-nowrap">
                  Made with <Heart className="h-3 w-3 text-red-500" fill="currentColor" /> in Hong
                  Kong
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                <a href="#" className="hover:text-primary transition-colors whitespace-nowrap">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-primary transition-colors whitespace-nowrap">
                  Terms of Service
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
