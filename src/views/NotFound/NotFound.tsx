import { ArrowLeft, Home, Search } from 'lucide-react';
import * as motion from 'motion/react-client';

import Link from 'next/link';

import { Button, Input } from '@components';

export const NotFound: React.FC = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-8"
      >
        {/* 404 Animation */}
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="text-8xl md:text-9xl font-bold text-muted-foreground/20 mb-4">404</div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-4"
        >
          <h1 className="text-3xl md:text-4xl mb-4">Page Not Found</h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved to a different
            location.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-md mx-auto"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search for content..." className="pl-10" />
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button asChild size="lg">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Browse Blog
            </Link>
          </Button>
        </motion.div>

        {/* Helpful Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="pt-8 border-t"
        >
          <p className="text-sm text-muted-foreground mb-4">You might be looking for:</p>
          <div className="flex flex-wrap justify-center gap-2">
            <Link href="/blog">
              <Button variant="link" size="sm">
                Blog Posts
              </Button>
            </Link>
            <Link href="/release">
              <Button variant="link" size="sm">
                Projects
              </Button>
            </Link>
            <Link href="/#experience">
              <Button variant="link" size="sm">
                Experience
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/20 rounded-full"
            animate={{
              opacity: [0.3, 1, 0.3],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
          />
          <motion.div
            className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent/40 rounded-full"
            animate={{
              opacity: [0.5, 1, 0.5],
              y: [0, -15, 0],
            }}
            transition={{
              delay: 1,
              duration: 4,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-secondary/30 rounded-full"
            animate={{
              opacity: [0.4, 1, 0.4],
              y: [0, -10, 0],
            }}
            transition={{
              delay: 2,
              duration: 5,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
          />
        </div>
      </motion.div>
    </div>
  </div>
);
