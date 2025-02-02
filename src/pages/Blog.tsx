import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Search, Filter } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 'study-in-germany',
    title: 'Complete Guide to Studying in Germany 2024',
    excerpt: 'Everything you need to know about German universities, admission process, and student life.',
    date: '2024-03-15',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952',
    category: 'Education'
  },
  {
    id: 'german-student-visa',
    title: 'German Student Visa Application Process',
    excerpt: 'Step-by-step guide to applying for a German student visa, including required documents and tips.',
    date: '2024-03-10',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173',
    category: 'Visa'
  },
  {
    id: 'cost-of-living',
    title: 'Cost of Living for Students in Germany',
    excerpt: 'Detailed breakdown of monthly expenses, including accommodation, food, and transportation.',
    date: '2024-03-05',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e',
    category: 'Finance'
  },
  {
    id: 'learn-german',
    title: 'Best Ways to Learn German Language',
    excerpt: 'Effective methods and resources to learn German, from beginner to advanced level.',
    date: '2024-03-01',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1527866959252-deab85ef7d1b',
    category: 'Language'
  },
  {
    id: 'scholarships',
    title: 'Top Scholarships for International Students',
    excerpt: 'Comprehensive list of scholarships available for studying in Germany.',
    date: '2024-02-28',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1604872441539-ef1db9b25f92',
    category: 'Finance'
  },
  {
    id: 'student-jobs',
    title: 'Finding Part-Time Jobs as a Student',
    excerpt: 'Guide to finding and applying for student jobs in Germany while studying.',
    date: '2024-02-25',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216',
    category: 'Work'
  },
  {
    id: 'health-insurance',
    title: 'Guide to Health Insurance for International Students',
    excerpt: 'Everything you need to know about health insurance requirements and options in Germany.',
    date: '2024-02-20',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
    category: 'Insurance'
  },
  {
    id: 'accommodation-guide',
    title: 'Finding Student Accommodation in Germany',
    excerpt: 'Tips and tricks for finding affordable student housing in German cities.',
    date: '2024-02-15',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    category: 'Housing'
  },
  {
    id: 'blocked-account',
    title: 'Opening a Blocked Account in Germany',
    excerpt: 'Step-by-step guide to opening and managing your blocked account for student visa.',
    date: '2024-02-10',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc',
    category: 'Finance'
  },
  {
    id: 'student-banking',
    title: 'Banking Guide for International Students',
    excerpt: 'How to open a bank account and manage your finances as a student in Germany.',
    date: '2024-02-05',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc',
    category: 'Finance'
  },
  {
    id: 'transportation',
    title: 'Public Transportation for Students',
    excerpt: 'Understanding the German public transport system and student travel benefits.',
    date: '2024-02-01',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1527786356703-4b100091cd2c',
    category: 'Transport'
  },
  {
    id: 'student-life',
    title: 'Student Life in German Universities',
    excerpt: 'What to expect from campus life, student organizations, and social activities.',
    date: '2024-01-28',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
    category: 'Lifestyle'
  }
];

export function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Get unique categories
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-500/10 to-green-500/10 dark:from-blue-500/20 dark:to-green-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-6"
          >
            Your Guide to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
              Studying in Germany
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Expert advice and insights to help you succeed in your German education journey
          </motion.p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <Filter className="text-gray-400 w-5 h-5" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredPosts.length > 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl"
              >
                <Link to={`/blog/${post.id}`} className="block">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-green-500 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                      <span className="mx-2">•</span>
                      <Clock className="w-4 h-4 mr-2" />
                      {post.readTime}
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-blue-500 dark:text-blue-400 font-medium">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No articles found matching your criteria.
            </p>
          </motion.div>
        )}
      </section>
    </div>
  );
}

export default Blog; 