import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, FileText, GraduationCap, MapPin, Brain, Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Personalized Consultation",
    description: "Get one-on-one guidance from experts who understand your unique journey to studying in Germany.",
    icon: <Users className="w-6 h-6" />,
    link: "/transform-journey",
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "SOP & LOR Services",
    description: "Professional assistance in crafting compelling statements and recommendation letters that stand out.",
    icon: <FileText className="w-6 h-6" />,
    link: "/sop-lor",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Alumni Mentorship",
    description: "Connect with successful alumni who've walked the path and can guide you through your journey.",
    icon: <GraduationCap className="w-6 h-6" />,
    link: "/alumni-mentorship",
    color: "from-green-500 to-emerald-400"
  },
  {
    title: "Career Roadmap",
    description: "Get a personalized roadmap to achieve your career goals with detailed steps and resources.",
    icon: <MapPin className="w-6 h-6" />,
    link: "/roadmap",
    color: "from-orange-500 to-yellow-400"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export function Consultants() {
  return (
    <div className="min-h-screen pt-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link 
          to="/"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Our Comprehensive Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to make your German education journey successful
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <Link to={service.link}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 h-full border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-300">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} text-white mb-6`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {service.description}
                  </p>

                  <div className="flex items-center text-blue-500 group-hover:text-blue-600 transition-colors">
                    <span className="font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 text-white"
        >
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="mb-6">Let us help you make your dream of studying in Germany a reality</p>
          <Link
            to="/transform-journey"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-500 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get Started
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Consultants; 