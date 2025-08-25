import React from 'react';

import {
  ArrowRight,
  Award,
  Briefcase,
  Calendar,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from 'lucide-react';
import * as motion from 'motion/react-client';

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

export const Home: React.FC = () => {
  const experiences = [
    {
      company: 'Tech Solutions Inc',
      description:
        'Leading full-stack development projects using React, Node.js, and cloud technologies. Mentoring junior developers and architecting scalable solutions.',
      duration: '2022 - Present',
      id: 1,
      location: 'San Francisco, CA',
      position: 'Senior Software Engineer',
      technologies: ['React', 'TypeScript', 'Node.js', 'AWS', 'Docker'],
      type: 'current',
    },
    {
      company: 'Digital Innovations Ltd',
      description:
        'Developed and maintained web applications serving 100k+ users. Implemented CI/CD pipelines and improved application performance by 40%.',
      duration: '2020 - 2022',
      id: 2,
      location: 'New York, NY',
      position: 'Full Stack Developer',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Redis', 'Kubernetes'],
      type: 'previous',
    },
    {
      company: 'StartupCo',
      description:
        'Built responsive web applications from ground up. Collaborated with design team to implement pixel-perfect UI components.',
      duration: '2019 - 2020',
      id: 3,
      location: 'Austin, TX',
      position: 'Frontend Developer',
      technologies: ['React', 'JavaScript', 'SASS', 'Webpack', 'Jest'],
      type: 'previous',
    },
  ];

  const certifications = [
    {
      badge: 'Professional',
      date: '2023',
      icon: Award,
      id: 1,
      issuer: 'Amazon Web Services',
      title: 'AWS Solutions Architect',
    },
    {
      badge: 'Professional',
      date: '2022',
      icon: Award,
      id: 2,
      issuer: 'Google Cloud',
      title: 'Google Cloud Professional',
    },
    {
      badge: 'Expert',
      date: '2023',
      icon: Award,
      id: 3,
      issuer: 'Meta',
      title: 'React Advanced Patterns',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Badge variant="secondary" className="mb-4">
                    Available for new opportunities
                  </Badge>
                </motion.div>

                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Hello, I&apos;m <span className="text-primary">Vimal Menon</span>
                </motion.h1>

                <motion.p
                  className="text-xl text-muted-foreground max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  A passionate full-stack developer who loves creating beautiful, functional, and
                  user-centered digital experiences. I specialize in modern web technologies and
                  cloud architecture.
                </motion.p>
              </div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button size="lg" className="group">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </motion.div>

              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button size="icon" variant="ghost" asChild>
                  <a href="https://github.com/vimalmenon" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button size="icon" variant="ghost" asChild>
                  <a
                    href="https://linkedin.com/in/vimalmenon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
                <Button size="icon" variant="ghost" asChild>
                  <a href="mailto:vimal@example.com">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-card border rounded-2xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop&crop=face"
                    alt="Vimal Menon"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">
              <Briefcase className="h-3 w-3 mr-2" />
              Career Journey
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A timeline of my career journey and the impact I&apos;ve made in various
              organizations.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative flex gap-6 md:gap-8"
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className={`w-3 h-3 rounded-full border-2 border-background ${
                        exp.type === 'current' ? 'bg-primary' : 'bg-muted-foreground'
                      }`}
                    >
                      {exp.type === 'current' && (
                        <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-12">
                    <div className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{exp.position}</h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                        {exp.type === 'current' && (
                          <Badge variant="secondary" className="mt-2 sm:mt-0 w-fit">
                            Current
                          </Badge>
                        )}
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">
              <Award className="h-3 w-3 mr-2" />
              Achievements
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Certifications & Achievements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional certifications that validate my expertise in various technologies and
              methodologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <cert.icon className="h-5 w-5 text-primary" />
                      </div>
                      <Badge variant="outline">{cert.badge}</Badge>
                    </div>
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    <CardDescription>{cert.issuer}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{cert.date}</span>
                      <Button size="sm" variant="ghost">
                        <ExternalLink className="h-4 w-4" />
                        <span className="sr-only">View Certificate</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
