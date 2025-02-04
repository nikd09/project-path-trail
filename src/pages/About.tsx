import React from 'react';
import { TeamSection } from '../components/TeamSection';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Globe } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-[#0A1628]">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Empowering Your German Education Journey
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're dedicated to making the German university application process seamless and successful for international students.
          </p>
        </motion.div>
      </div>

      {/* Mission Section */}
      <div className="bg-[#1a2942] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Guidance</h3>
              <p className="text-gray-400">
                Professional support throughout your application journey
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Student Community</h3>
              <p className="text-gray-400">
                Connect with fellow students and alumni
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Global Network</h3>
              <p className="text-gray-400">
                Access to universities across Germany
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Choose PathFinder?
              </h2>
              <div className="space-y-4">
                <p className="text-gray-400">
                  PathFinder is your trusted partner in navigating the German university application process. We combine expert knowledge with personalized support to ensure your success.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-400">
                    <ArrowRight className="w-5 h-5 text-blue-400 mr-2" />
                    Comprehensive application support
                  </li>
                  <li className="flex items-center text-gray-400">
                    <ArrowRight className="w-5 h-5 text-blue-400 mr-2" />
                    Document preparation assistance
                  </li>
                  <li className="flex items-center text-gray-400">
                    <ArrowRight className="w-5 h-5 text-blue-400 mr-2" />
                    University selection guidance
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-[#1a2942] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Our Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-bold text-blue-400">500+</p>
                  <p className="text-gray-400">Students Helped</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-400">95%</p>
                  <p className="text-gray-400">Success Rate</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-purple-400">50+</p>
                  <p className="text-gray-400">Partner Universities</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-yellow-400">24/7</p>
                  <p className="text-gray-400">Support Available</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Team Section */}
      <TeamSection />
    </div>
  );
} 