'use client';

import { useState } from 'react';

import { motion, Variants } from 'framer-motion';
import {
  ArrowRight,
  Bookmark,
  Calendar,
  ChevronRight,
  Clock,
  Coffee,
  Eye,
  Filter,
  Heart,
  Mail,
  Rss,
  Search,
  Share2,
  Sparkles,
  Star,
  TrendingUp,
  User,
  Zap,
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
  Input,
  Tabs,
  TabsList,
  TabsTrigger,
} from '@components';

export const Blogs: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const featuredPost = {
    author: 'Vimal Menon',
    comments: 23,
    content:
      'A comprehensive look at the evolving landscape of web development, covering everything from new frameworks to deployment strategies...',
    date: '2024-02-15',
    excerpt:
      'Dive deep into the latest trends, tools, and techniques that are shaping the future of web development. From React Server Components to Edge Computing.',
    featured: true,
    id: 1,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
    likes: 127,
    readTime: '12 min read',
    tags: ['Web Development', 'React', 'JavaScript', 'Trends'],
    title: 'The Complete Guide to Modern Web Development in 2024',
    views: 2845,
  };

  const blogPosts = [
    {
      author: 'Vimal Menon',
      category: 'design',
      comments: 15,
      date: '2024-02-10',
      excerpt:
        'Learn how to create maintainable and scalable design systems that grow with your product.',
      id: 2,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=250&fit=crop',
      likes: 89,
      readTime: '8 min read',
      tags: ['Design Systems', 'React', 'UI/UX'],
      title: 'Building Scalable Design Systems with React',
      views: 1523,
    },
    {
      author: 'Vimal Menon',
      category: 'development',
      comments: 28,
      date: '2024-02-08',
      excerpt:
        'Explore advanced TypeScript patterns that will make your React code more robust and maintainable.',
      id: 3,
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop',
      likes: 156,
      readTime: '10 min read',
      tags: ['TypeScript', 'React', 'JavaScript'],
      title: 'Advanced TypeScript Patterns for React',
      views: 1892,
    },
    {
      author: 'Vimal Menon',
      category: 'development',
      comments: 19,
      date: '2024-02-05',
      excerpt:
        'Master the art of React performance optimization with practical examples and real-world scenarios.',
      id: 4,
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop',
      likes: 94,
      readTime: '7 min read',
      tags: ['React', 'Performance', 'Optimization'],
      title: 'Optimizing React Performance: A Deep Dive',
      views: 2156,
    },
    {
      author: 'Vimal Menon',
      category: 'design',
      comments: 12,
      date: '2024-02-01',
      excerpt:
        'Create stunning web animations that enhance user experience without compromising performance.',
      id: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
      likes: 73,
      readTime: '6 min read',
      tags: ['CSS', 'Animation', 'Frontend'],
      title: 'The Art of CSS Animations',
      views: 1678,
    },
    {
      author: 'Vimal Menon',
      category: 'backend',
      comments: 8,
      date: '2024-01-28',
      excerpt: 'Understand when and how to implement serverless architecture in your next project.',
      id: 6,
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=250&fit=crop',
      likes: 67,
      readTime: '9 min read',
      tags: ['Serverless', 'Architecture', 'AWS'],
      title: 'Serverless Architecture Patterns',
      views: 1334,
    },
  ];

  const categories = [
    { count: blogPosts.length + 1, id: 'all', label: 'All Posts' },
    { count: 2, id: 'development', label: 'Development' },
    { count: 2, id: 'design', label: 'Design' },
    { count: 1, id: 'backend', label: 'Backend' },
    { count: 1, id: 'trends', label: 'Trends' },
  ];

  const trendingTopics = [
    { name: 'React Server Components', posts: 12 },
    { name: 'TypeScript 5.0', posts: 8 },
    { name: 'Web Performance', posts: 15 },
    { name: 'Design Systems', posts: 6 },
    { name: 'AI in Development', posts: 9 },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const containerVariants = {
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
      className="container mx-auto px-6 py-12 max-w-7xl"
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
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">Latest Insights & Tutorials</span>
        </motion.div>

        <h1 className="mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent text-4xl md:text-6xl font-bold">
          Blog & Insights
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Discover the latest trends in web development, design patterns, and technology insights
          through in-depth articles and practical tutorials.
        </p>
      </motion.div>

      {/* Search and Filter Section */}
      <motion.div variants={itemVariants} className="mb-12">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 bg-card/50 backdrop-blur-md border-white/10 rounded-2xl"
            />
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="rounded-2xl">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="rounded-2xl">
              <Rss className="h-4 w-4 mr-2" />
              Subscribe
            </Button>
          </div>
        </div>

        {/* Category Tabs */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 h-auto p-2 bg-card/30 backdrop-blur-md rounded-2xl border border-white/10">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="rounded-xl px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <span className="font-medium">{category.label}</span>
                <Badge
                  variant="secondary"
                  className="ml-2 h-5 w-5 text-xs rounded-full p-0 flex items-center justify-center"
                >
                  {category.count}
                </Badge>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </motion.div>

      <div className="grid lg:grid-cols-4 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-12">
          {/* Featured Post */}
          {selectedCategory === 'all' && (
            <motion.div variants={itemVariants}>
              <div className="flex items-center space-x-2 mb-6">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <span className="font-semibold text-primary">Featured Article</span>
              </div>

              <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-card/90 via-card to-accent/5 backdrop-blur-sm group cursor-pointer">
                <div className="relative">
                  <motion.div
                    className="aspect-[2/1] overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ImageWithFallback
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </motion.div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {featuredPost.tags.map((tag) => (
                        <Badge
                          key={tag}
                          className="bg-white/20 backdrop-blur-sm text-white border-white/30"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-white/90 text-lg mb-4 line-clamp-2">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6 text-white/80">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4" />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>

                      <motion.div
                        className="flex items-center space-x-2 text-white group-hover:text-primary transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <span className="font-medium">Read Article</span>
                        <ArrowRight className="h-5 w-5" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Blog Posts Grid */}
          <motion.div variants={containerVariants}>
            <div className="grid md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full overflow-hidden border-0 shadow-xl bg-gradient-to-br from-card/80 via-card to-accent/5 backdrop-blur-sm group cursor-pointer">
                    <div className="relative">
                      <motion.div
                        className="aspect-[16/10] overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      >
                        <ImageWithFallback
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>

                      {/* Floating stats */}
                      <div className="absolute top-4 right-4 flex items-center space-x-2">
                        <div className="bg-black/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
                          <Eye className="h-3 w-3 inline mr-1" />
                          {post.views.toLocaleString()}
                        </div>
                      </div>
                    </div>

                    <CardHeader className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs rounded-full">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>

                      <CardDescription className="line-clamp-3 text-base">
                        {post.excerpt}
                      </CardDescription>

                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex items-center space-x-4 text-muted-foreground text-sm">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full">
                            <Heart className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full">
                            <Bookmark className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Load More */}
          <motion.div variants={itemVariants} className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="rounded-2xl px-8 py-6 text-lg bg-card/30 backdrop-blur-md border-white/10 hover:bg-primary hover:text-primary-foreground"
            >
              <Zap className="h-5 w-5 mr-2" />
              Load More Articles
            </Button>
          </motion.div>
        </div>

        {/* Sidebar */}
        <motion.div variants={itemVariants} className="lg:col-span-1 space-y-8">
          {/* Newsletter Signup */}
          <Card className="border-0 shadow-xl bg-gradient-to-br from-primary/5 via-card to-purple-500/5 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-purple-500 rounded-2xl flex items-center justify-center">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl">Stay Updated</CardTitle>
              <CardDescription>
                Get the latest articles and insights delivered to your inbox.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Enter your email" className="rounded-xl" />
              <Button className="w-full rounded-xl bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90">
                Subscribe Now
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                No spam, unsubscribe anytime.
              </p>
            </CardContent>
          </Card>

          {/* Trending Topics */}
          <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span>Trending Topics</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {trendingTopics.map((topic, index) => (
                <motion.div
                  key={topic.name}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-accent/50 cursor-pointer group transition-colors"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                >
                  <div>
                    <div className="font-medium group-hover:text-primary transition-colors">
                      {topic.name}
                    </div>
                    <div className="text-sm text-muted-foreground">{topic.posts} articles</div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.div>
              ))}
            </CardContent>
          </Card>

          {/* Author Card */}
          <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
                  alt="Vimal Menon"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardTitle className="text-lg">Vimal Menon</CardTitle>
              <CardDescription>Full Stack Developer & Tech Writer</CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                Passionate about creating exceptional digital experiences and sharing knowledge with
                the developer community.
              </p>
              <div className="flex justify-center space-x-2">
                <Button variant="outline" size="sm" className="rounded-full">
                  Follow
                </Button>
                <Button variant="ghost" size="sm" className="rounded-full">
                  <Coffee className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                <div className="text-center">
                  <div className="text-xl font-bold text-primary">50+</div>
                  <div className="text-xs text-muted-foreground">Articles</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-primary">15K+</div>
                  <div className="text-xs text-muted-foreground">Readers</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-primary">2.5K+</div>
                  <div className="text-xs text-muted-foreground">Followers</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};
