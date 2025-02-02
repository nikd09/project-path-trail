import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, Users, PenTool, Phone, Home, Shield, 
  Euro, Brain, GraduationCap, Globe, ArrowRight, LinkedinIcon, Mail
} from 'lucide-react';

const teamMembers = [
  {
    initials: 'AAB',
    name: 'Ajay Adhitya Balasubramanian',
    image: '/team/aab.jpg',
    linkedin: 'https://linkedin.com/in/ajay',
    email: 'ajay@example.com'
  },
  {
    initials: 'KGMK',
    name: 'Kesavarthanan Gali Makesh Kumar',
    image: '/team/kgmk.jpg',
    linkedin: '#',
    email: '#'
  },
  {
    initials: 'ND',
    name: 'Nikhil Deshmukh',
    image: '/team/nd.jpg',
    linkedin: '#',
    email: '#'
  },
  {
    initials: 'RN',
    name: 'Rishab Nair',
    image: '/team/rn.jpg',
    linkedin: '#',
    email: '#'
  },
  {
    initials: 'RB',
    name: 'Rushikesh Bagu',
    image: '/team/rb.jpg',
    linkedin: '#',
    email: '#'
  },
  {
    initials: 'SW',
    name: 'Soyeon Woo',
    image: '/team/sw.jpg',
    linkedin: '#',
    email: '#'
  }
];

const timeline = [
  {
    year: '2022',
    title: 'The Beginning',
    description: 'Path Finder was founded with a mission to revolutionize career guidance using AI technology.'
  },
  {
    year: '2023',
    title: 'Growing Impact',
    description: 'Helped over 1000 students find their ideal career paths and study opportunities in Germany.'
  },
  {
    year: '2024',
    title: 'Innovation & Expansion',
    description: 'Launched AI-powered roadmap generator and expanded our consultant network across Europe.'
  }
];

export function AboutUs() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      icon: Users,
      title: "Personalized Consultation",
      description: "Get direct access to top-rated education consultants who provide expert guidance on applications, university selection, and visa processes."
    },
    {
      icon: PenTool,
      title: "AI-Powered SOP & LOR Writing",
      description: "Work with top-tier professional writers who create high-quality, AI-optimized SOPs and LORs—50% cheaper than competitors."
    },
    {
      icon: Phone,
      title: "One-on-One Alumni Calls",
      description: "Gain real insights from alumni who have successfully completed their studies in Germany. Book a session for just €20/hour."
    },
    {
      icon: Home,
      title: "Apartment Search Assistance",
      description: "Access to the best platforms for student housing to find the right place before arriving in Germany."
    },
    {
      icon: Shield,
      title: "Essential Services",
      description: "Partnerships with Coracle for blocked accounts, travel insurance, and health insurance with priority processing."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-24">
      {/* Hero Section */}
      <motion.div 
        className="relative overflow-hidden bg-gradient-to-r from-blue-500/10 to-green-500/10 dark:from-blue-500/20 dark:to-green-500/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center relative z-10">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            {...fadeInUp}
          >
            Your Trusted Guide to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
              Studying in Germany
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Affordable, AI-Driven, and Personalized
          </motion.p>
        </div>
        
        {/* Floating 3D Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-[800px] h-[800px] opacity-30"
            >
              <Globe className="w-full h-full text-blue-500/20" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Mission and Vision Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                At Path Finder, we believe in empowering students to make informed 
                decisions about their careers and education. Our AI-driven platform 
                combined with expert consultation provides personalized guidance 
                for those seeking to study in Germany.
              </p>
            </motion.div>

            {/* Vision Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                To become the world's leading AI-powered educational guidance 
                platform, transforming how students plan their academic and career 
                journeys. We envision a future where every student has access to 
                personalized, data-driven insights and expert mentorship to achieve 
                their educational goals in Germany and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20 bg-gray-100 dark:bg-[#1a1f2d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16"
          >
            Meet Our Team
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.initials}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-[#1e2433] rounded-2xl p-6 text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="w-48 h-48 mx-auto mb-6 rounded-xl overflow-hidden">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-600 to-green-500 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-105">
                      <span className="text-4xl text-white font-bold">{member.initials}</span>
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {member.name}
                </h3>
                
                <div className="flex justify-center space-x-4">
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                  <a 
                    href={`mailto:${member.email}`}
                    className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              How It All Began 🚀
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our journey started when we, a group of six students, faced the same challenges 
                while applying to study in Germany. We experienced firsthand the struggles with 
                high consultation fees, confusing application processes, and lack of affordable guidance.
              </p>
              
              {/* Challenges Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {[
                  "High consultation fees 💰",
                  "Confusing SOP & LOR writing process ✍️",
                  "Lack of affordable guidance 🎓",
                  "Struggles with accommodation 🏡"
                ].map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-lg"
                  >
                    <p className="text-gray-700 dark:text-gray-200">{challenge}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16"
          >
            What We Offer
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <service.icon className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16"
          >
            Why Choose Us
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Euro,
                title: "Affordable & Transparent",
                description: "50% lower costs than competitors without compromising quality"
              },
              {
                icon: Brain,
                title: "AI-Driven Solutions",
                description: "Up-to-date insights and improved application process"
              },
              {
                icon: GraduationCap,
                title: "Real Student Perspective",
                description: "We understand your struggles because we've been there too"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <feature.icon className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Join Us & Make Your Study Abroad Journey Stress-Free!
            </h2>
            <p className="text-white/90 mb-8">
              Your future in Germany starts here! 🌍🎓
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-500 px-8 py-3 rounded-full font-bold inline-flex items-center space-x-2 hover:bg-blue-50 transition-colors"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs; 