import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, CheckCircle, ArrowRight, Calendar, MessageSquare, Star, Sparkles, GraduationCap, Target, Clock, Brain, Rocket, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MentorModal } from '../components/MentorModal';

export function AlumniMentorship() {
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mentors = [
    {
      id: 1,
      name: "Alex Weber",
      university: "TU Munich",
      course: "Computer Science",
      experience: "2+ years",
      rating: 4.9,
      specialization: ["Software Engineering", "AI/ML", "Web Development"],
      mentees: 25,
      pricing: {
        thirtyMin: 15,
        sixtyMin: 20
      }
    },
    {
      id: 2,
      name: "Priya Sharma",
      university: "TU Berlin",
      course: "Mechanical Engineering",
      experience: "3+ years",
      rating: 4.8,
      specialization: ["Automotive", "Robotics", "CAD Design"],
      mentees: 30,
      pricing: {
        thirtyMin: 15,
        sixtyMin: 20
      }
    },
    {
      id: 3,
      name: "Marcus Müller",
      university: "RWTH Aachen",
      course: "Electrical Engineering",
      experience: "2+ years",
      rating: 4.7,
      specialization: ["Power Systems", "Electronics", "Control Systems"],
      mentees: 20,
      pricing: {
        thirtyMin: 15,
        sixtyMin: 20
      }
    },
    {
      id: 4,
      name: "Rahul Patel",
      university: "TU Dresden",
      course: "Business Administration",
      experience: "4+ years",
      rating: 4.9,
      specialization: ["Finance", "Marketing", "Entrepreneurship"],
      mentees: 35,
      pricing: {
        thirtyMin: 15,
        sixtyMin: 20
      }
    },
    {
      id: 5,
      name: "David Fischer",
      university: "KIT Karlsruhe",
      course: "Data Science",
      experience: "2+ years",
      rating: 4.8,
      specialization: ["Big Data", "Analytics", "Machine Learning"],
      mentees: 22
    },
    {
      id: 6,
      name: "Anna Becker",
      university: "TU Hamburg",
      course: "Chemical Engineering",
      experience: "3+ years",
      rating: 4.9,
      specialization: ["Process Engineering", "Sustainability", "Research"],
      mentees: 28
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A1628]">
      {/* Enhanced Hero Section */}
      <div className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-600/10 dark:to-green-500/10" />
          <div className="absolute inset-0" 
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.2, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
            className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="absolute bottom-20 left-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-500/10 dark:to-green-500/10 backdrop-blur-sm border border-blue-200 dark:border-white/10 mb-10">
              <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
              <span className="text-blue-600 dark:text-blue-400 font-medium">Connect with Alumni</span>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white sm:text-6xl tracking-tight">
              <span className="block mb-4">Alumni Mentorship</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-400 dark:to-green-400 leading-tight">
                Program
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-8">
              Get guidance from successful alumni who have walked the path before you
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mentors Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Our Alumni Mentors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor) => (
              <MentorCard 
                key={mentor.id}
                mentor={mentor}
                onSelect={() => {
                  setSelectedMentor(mentor);
                  setIsModalOpen(true);
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg dark:shadow-none border border-gray-100 dark:border-gray-700"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <Heart className="w-8 h-8 text-green-500 mr-3" />
            Benefits of Alumni Mentorship
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                title: "Expert Insights",
                description: "Gain valuable insights from those who've successfully navigated German universities"
              },
              {
                icon: Target,
                title: "Personalized Guidance",
                description: "Get tailored advice for your specific goals and challenges"
              },
              {
                icon: Users,
                title: "Network Building",
                description: "Connect with a community of successful alumni and fellow students"
              },
              {
                icon: Rocket,
                title: "Career Growth",
                description: "Learn about career opportunities and professional development"
              },
              {
                icon: Clock,
                title: "Time-Saving",
                description: "Avoid common pitfalls and make informed decisions quickly"
              },
              {
                icon: GraduationCap,
                title: "Academic Success",
                description: "Get tips on academic excellence and course selection"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-all duration-300"
              >
                <benefit.icon className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* How It Works Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          How It Works
        </h2>
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center mr-4 flex-shrink-0">1</div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Browse Mentors</h3>
              <p className="text-gray-600 dark:text-gray-400">Find alumni from your target university or field</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center mr-4 flex-shrink-0">2</div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Schedule Session</h3>
              <p className="text-gray-600 dark:text-gray-400">Book a convenient time slot with your chosen mentor</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center mr-4 flex-shrink-0">3</div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Get Guidance</h3>
              <p className="text-gray-600 dark:text-gray-400">Have a one-on-one session and get personalized advice</p>
            </div>
          </div>
        </div>
      </div>

      <MentorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mentor={selectedMentor}
      />
    </div>
  );
}

interface MentorCardProps {
  mentor: any;
  onSelect: () => void;
}

function MentorCard({ mentor, onSelect }: MentorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 p-6"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {mentor.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{mentor.university}</p>
        </div>
        <div className="flex items-center">
          <Star className="w-4 h-4 text-yellow-400 mr-1" />
          <span className="text-sm text-gray-600 dark:text-gray-400">{mentor.rating}</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Course:</span>
          <span className="text-gray-900 dark:text-white">{mentor.course}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Experience:</span>
          <span className="text-gray-900 dark:text-white">{mentor.experience}</span>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {mentor.specialization.slice(0, 2).map((spec: string, index: number) => (
          <span
            key={index}
            className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs"
          >
            {spec}
          </span>
        ))}
        {mentor.specialization.length > 2 && (
          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs">
            +{mentor.specialization.length - 2} more
          </span>
        )}
      </div>

      <button
        onClick={onSelect}
        className="w-full mt-6 py-2 px-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl font-medium hover:from-blue-600 hover:to-green-600 transition-all duration-300 flex items-center justify-center"
      >
        <span>View Details</span>
        <ArrowRight className="w-4 h-4 ml-2" />
      </button>
    </motion.div>
  );
} 