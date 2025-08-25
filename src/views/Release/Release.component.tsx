'use client';

import { JSX } from 'react';

import { motion, Variants } from 'framer-motion';
import {
  Calendar,
  Code,
  Download,
  ExternalLink,
  Github,
  Globe,
  Package,
  Rocket,
  Star,
} from 'lucide-react';

import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  ImageWithFallback,
} from '@components';

export function Release(): JSX.Element {
  const projects = [
    {
      date: '2024-02-20',
      description:
        'A comprehensive dashboard template built with React and TypeScript, featuring modern design and powerful components.',
      downloads: '15.2k',
      id: 1,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop',
      name: 'React Dashboard Kit',
      stars: '3.1k',
      status: 'Latest',
      tags: ['React', 'TypeScript', 'Dashboard'],
      type: 'major',
      version: 'v3.0.0',
    },
    {
      date: '2024-02-15',
      description:
        'Modern UI components built with Tailwind CSS and Radix primitives for building beautiful interfaces.',
      downloads: '22.8k',
      id: 2,
      image: 'https://images.unsplash.com/photo-1558655146-9f40138e1ac8?w=600&h=300&fit=crop',
      name: 'UI Component Library',
      stars: '4.2k',
      status: 'Stable',
      tags: ['React', 'Components', 'Tailwind'],
      type: 'minor',
      version: 'v2.4.0',
    },
    {
      date: '2024-02-10',
      description:
        'Lightweight toolkit for building REST APIs with Node.js and Express, including authentication and validation.',
      downloads: '8.5k',
      id: 3,
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=300&fit=crop',
      name: 'API Development Toolkit',
      stars: '1.9k',
      status: 'Stable',
      tags: ['Node.js', 'API', 'Express'],
      type: 'patch',
      version: 'v1.2.1',
    },
    {
      date: '2024-01-25',
      description:
        'Fast and flexible static site generator with markdown support and customizable themes.',
      downloads: '6.3k',
      id: 4,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop',
      name: 'Static Site Generator',
      stars: '1.2k',
      status: 'New',
      tags: ['Static Site', 'Markdown', 'JAMstack'],
      type: 'major',
      version: 'v1.0.0',
    },
    {
      date: '2024-01-15',
      description:
        'Command-line tools to streamline development workflow with project scaffolding and automation.',
      downloads: '4.1k',
      id: 5,
      image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&h=300&fit=crop',
      name: 'Developer Tools CLI',
      stars: '890',
      status: 'Beta',
      tags: ['CLI', 'DevTools', 'Automation'],
      type: 'minor',
      version: 'v0.8.0',
    },
    {
      date: '2024-01-08',
      description:
        'Collection of smooth CSS animations and transitions for modern web applications.',
      downloads: '11.7k',
      id: 6,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop',
      name: 'CSS Animation Library',
      stars: '2.5k',
      status: 'Stable',
      tags: ['CSS', 'Animation', 'Library'],
      type: 'minor',
      version: 'v2.1.0',
    },
  ];

  const getStatusColor = (status: string): string => {
    switch (status.toLowerCase()) {
      case 'latest':
        return 'bg-gradient-to-r from-green-500 to-emerald-500 text-white';
      case 'new':
        return 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white';
      case 'beta':
        return 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white';
      case 'stable':
        return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'major':
        return Rocket;
      case 'minor':
        return Package;
      case 'patch':
        return Code;
      default:
        return Package;
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
      y: 0,
    },
  };

  return (
    <motion.div
      className="container mx-auto px-6 py-12 max-w-6xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.div variants={itemVariants} className="text-center mb-16">
        <motion.div
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-purple-500/10 px-6 py-3 rounded-full border border-primary/20 mb-6"
          whileHover={{ scale: 1.05 }}
        >
          <Package className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">Open Source Projects</span>
        </motion.div>

        <h1 className="mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent text-4xl md:text-6xl font-bold">
          Projects & Releases
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Explore my open source projects, tools, and libraries. Each project is built with care and
          designed to solve real-world problems for developers.
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto">
          {[
            { icon: Download, label: 'Total Downloads', value: '68K+' },
            { icon: Star, label: 'GitHub Stars', value: '14.6K+' },
            { icon: Rocket, label: 'Active Projects', value: '6' },
            { icon: Code, label: 'Languages', value: '8+' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 rounded-2xl bg-gradient-to-br from-card/50 to-accent/20 backdrop-blur-sm border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => {
          const TypeIcon = getTypeIcon(project.type);

          return (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full overflow-hidden border-0 shadow-xl bg-gradient-to-br from-card/80 via-card to-accent/5 backdrop-blur-sm group cursor-pointer">
                {/* Project Image */}
                <div className="relative">
                  <motion.div
                    className="aspect-[16/10] overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </motion.div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className={`${getStatusColor(project.status)} font-semibold`}>
                      {project.status}
                    </Badge>
                  </div>

                  {/* Version with Icon */}
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                    <div className="bg-black/20 backdrop-blur-sm rounded-full p-2">
                      <TypeIcon className="h-4 w-4 text-white" />
                    </div>
                    <Badge className="bg-black/20 backdrop-blur-sm text-white border-white/30 font-semibold">
                      {project.version}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="space-y-4">
                  <div className="space-y-2">
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {project.name}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs rounded-full">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Download className="h-3 w-3" />
                        <span>{project.downloads}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3" />
                        <span>{project.stars}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(project.date).toLocaleDateString()}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-3 pt-2">
                    <Button variant="outline" size="sm" className="flex-1 rounded-xl">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 rounded-xl bg-gradient-to-r from-primary to-purple-500"
                    >
                      <Globe className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Call to Action */}
      <motion.div variants={itemVariants} className="mt-20">
        <Card className="border-0 shadow-2xl bg-gradient-to-br from-primary/5 via-card to-purple-500/5 backdrop-blur-sm text-center p-12">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-primary to-purple-500 rounded-3xl flex items-center justify-center">
              <Github className="h-10 w-10 text-white" />
            </div>

            <h3 className="text-3xl font-bold mb-4">Want to Collaborate?</h3>
            <p className="text-lg text-muted-foreground mb-8">
              I&apos;m always excited to work on new projects and collaborate with fellow
              developers. Feel free to reach out if you have an idea or want to contribute to any of
              these projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 rounded-2xl"
              >
                <Github className="h-5 w-5 mr-2" />
                View All on GitHub
              </Button>
              <Button size="lg" variant="outline" className="rounded-2xl">
                <ExternalLink className="h-5 w-5 mr-2" />
                Get in Touch
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}
