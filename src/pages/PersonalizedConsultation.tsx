import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, ArrowRight, Star, Calendar, Clock, 
  FileText, Building2, Plane, Shield, Users, Brain,
  Sparkles, GraduationCap, Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookingModal } from '../components/BookingModal';

export function PersonalizedConsultation() {
  const [selectedField, setSelectedField] = useState<string | null>(null);
  const [selectedConsultant, setSelectedConsultant] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const consultants = [
    {
      name: "Dr. Rajesh Kumar",
      experience: "8+ years",
      field: "Mechanical Engineering",
      rating: 4.9,
      reviews: 250,
      specialization: "Automotive & Manufacturing",
      languages: ["English", "German", "Hindi"],
      imageUrl: "/consultants/rajesh.jpg",
      price: "$500"
    },
    {
      name: "Prof. Priya Sharma",
      experience: "12+ years",
      field: "Computer Science",
      rating: 4.8,
      reviews: 320,
      specialization: "AI & Machine Learning",
      languages: ["English", "German", "Hindi"],
      imageUrl: "/consultants/priya.jpg",
      price: "$500"
    },
    {
      name: "Dr. Arun Patel",
      experience: "10+ years",
      field: "Electrical Engineering",
      rating: 4.9,
      reviews: 280,
      specialization: "Power Systems & Control",
      languages: ["English", "German", "Hindi"],
      imageUrl: "/consultants/arun.jpg",
      price: "$500"
    },
    {
      name: "Dr. James Anderson",
      experience: "15+ years",
      field: "Civil Engineering",
      rating: 4.9,
      reviews: 310,
      specialization: "Structural Engineering",
      languages: ["English", "German", "French"],
      imageUrl: "/consultants/james.jpg",
      price: "$500"
    },
    {
      name: "Prof. Maria Garcia",
      experience: "11+ years",
      field: "Biomedical Engineering",
      rating: 4.8,
      reviews: 290,
      specialization: "Medical Devices & Innovation",
      languages: ["English", "German", "Spanish"],
      imageUrl: "/consultants/maria.jpg",
      price: "$500"
    },
    {
      name: "Dr. Thomas Mueller",
      experience: "9+ years",
      field: "Aerospace Engineering",
      rating: 4.9,
      reviews: 270,
      specialization: "Aircraft Design & Aerodynamics",
      languages: ["English", "German"],
      imageUrl: "/consultants/thomas.jpg",
      price: "$500"
    }
  ];

  const engineeringFields = [
    "Mechanical Engineering",
    "Electrical Engineering",
    "Civil Engineering",
    "Automotive Engineering",
    "Computer Science",
    "Biomedical Engineering",
    "Aerospace Engineering",
    "Industrial Engineering",
    "Mechatronics"
  ];

  const processSteps = [
    {
      step: 1,
      title: "Select Your Consultant",
      description: "Browse and choose from top experts"
    },
    {
      step: 2,
      title: "Personalized Strategy Call",
      description: "One-on-one deep dive into your goals"
    },
    {
      step: 3,
      title: "University Selection & Applications",
      description: "Shortlisting and submission guidance"
    },
    {
      step: 4,
      title: "Documents & Formalities",
      description: "AI-assisted SOP, LOR, and ECTS form filling"
    },
    {
      step: 5,
      title: "Post-Admission Assistance",
      description: "Financial setup, insurance & visa guidance"
    }
  ];

  const features = {
    application: [
      "Up to 10 Applications",
      "University Shortlisting & Selection",
      "Application Form Assistance",
      "ECTS Form Completion"
    ],
    documents: [
      "AI-assisted Statement of Purpose (SOP)",
      "Letter of Recommendation (LOR)",
      "Custom Questionnaires"
    ],
    postAdmission: [
      "Blocked Account Setup (Coracle Partnership)",
      "Health & Travel Insurance Assistance",
      "Visa guidance",
      "Housing Assistance (Top apartment portals integrated)"
    ]
  };

  // Animated background elements
  const backgroundElements = Array(20).fill(null).map((_, i) => ({
    id: i,
    size: Math.random() * 20 + 10,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
    x: Math.random() * 100,
    y: Math.random() * 100
  }));

  // Add refs for scroll animations
  const processRef = useRef(null);
  const consultantsRef = useRef(null);
  const featuresRef = useRef(null);

  const processInView = useInView(processRef, { once: true });
  const consultantsInView = useInView(consultantsRef, { once: true });
  const featuresInView = useInView(featuresRef, { once: true });

  const scrollToConsultants = () => {
    const consultantsSection = document.getElementById('consultants-section');
    if (consultantsSection) {
      consultantsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-full"
            style={{
              width: element.size,
              height: element.size,
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, 50, 0],
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative pt-24">
        {/* Hero Section with 3D-like design */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="relative">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="absolute -top-4 -left-4 w-12 h-12 bg-blue-500 rounded-lg"
                />
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 relative z-10">
                  Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">Academic Journey</span>
                </h1>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Expert guidance tailored to your aspirations in German universities
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToConsultants}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Start Consultation
                </motion.button>
              </div>
            </motion.div>

            {/* 3D-like floating elements */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full h-[500px]">
                {/* Floating cards with parallax effect */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-1/4 left-1/4 w-64 h-64 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 transform -rotate-6 backdrop-blur-lg bg-opacity-80 dark:bg-opacity-80"
                >
                  <GraduationCap className="w-12 h-12 text-blue-500 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Expert Guidance
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Personalized support from experienced consultants
                  </p>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 20, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl shadow-xl p-6 transform rotate-6 text-white"
                >
                  <Globe className="w-12 h-12 text-white mb-4" />
                  <h3 className="text-lg font-bold mb-2">
                    Global Success
                  </h3>
                  <p>
                    Join thousands of successful students in Germany
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Why Choose Us Section - Redesigned */}
        <div className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={processInView ? { opacity: 1 } : {}}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Why Choose Us?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Comprehensive support for your academic journey
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: "Personalized Strategy",
                  description: "Tailored guidance based on your academic and career goals",
                  color: "from-blue-500 to-purple-500"
                },
                {
                  icon: Shield,
                  title: "End-to-End Support",
                  description: "From university shortlisting to visa approval – we cover it all",
                  color: "from-green-500 to-teal-500"
                },
                {
                  icon: Star,
                  title: "Expert Consultants",
                  description: "Connect with top-rated advisors specializing in various fields",
                  color: "from-orange-500 to-pink-500"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-10 dark:opacity-20 rounded-2xl blur-xl group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity`} />
                  <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Timeline - Redesigned */}
        <div ref={processRef} className="mb-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={processInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
                  Your Journey
                </span> to Success
              </h2>
            </motion.div>

            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-green-500 rounded-full" />

              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={processInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                  className={`flex items-center mb-16 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl transform hover:scale-105 transition-transform">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        borderRadius: ["50%", "30%", "50%"]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold"
                    >
                      {step.step}
                    </motion.div>
                  </div>
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Consultants Section - Redesigned */}
        <div ref={consultantsRef} id="consultants-section" className="py-24 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={consultantsInView ? { opacity: 1, y: 0 } : {}}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Meet Our Expert Consultants</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Experienced professionals ready to guide your academic journey
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {consultants.map((consultant, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={consultantsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform opacity-80 dark:opacity-90 blur-sm" />
                  <div className="relative bg-white dark:bg-gray-900 p-8 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform backdrop-blur-lg">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-green-500 p-1">
                        <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                          <Users className="w-12 h-12 text-blue-500" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {consultant.name}
                      </h3>
                      <p className="text-blue-500 dark:text-blue-400 mb-2">{consultant.field}</p>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {consultant.experience}
                      </p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {consultant.price}
                      </p>
                      <div className="flex justify-center mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < Math.floor(consultant.rating)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          setSelectedConsultant(consultant);
                          setIsModalOpen(true);
                        }}
                        className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl font-semibold"
                      >
                        Book Consultation
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* What's Included Section - Redesigned */}
        <div className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={featuresInView ? { opacity: 1 } : {}}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                What's Included in Your $500 Package
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Comprehensive consultation package for your success
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" ref={featuresRef}>
              {[
                {
                  title: "Application Support",
                  icon: FileText,
                  features: features.application,
                  gradient: "from-blue-500 to-purple-500"
                },
                {
                  title: "Documents & SOP/LOR",
                  icon: FileText,
                  features: features.documents,
                  gradient: "from-green-500 to-teal-500"
                },
                {
                  title: "Post-Admission Support",
                  icon: Building2,
                  features: features.postAdmission,
                  gradient: "from-orange-500 to-red-500"
                }
              ].map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl transition-opacity opacity-0 group-hover:opacity-100" />
                  <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
                    <div className={`h-2 bg-gradient-to-r ${section.gradient}`} />
                    <div className="p-8">
                      <div className="flex items-center mb-6">
                        <section.icon className="w-8 h-8 text-blue-500 dark:text-blue-400 mr-3" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {section.title}
                        </h3>
                      </div>
                      <ul className="space-y-4">
                        {section.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-500 dark:text-green-400 mr-3 flex-shrink-0">
                              ✅
                            </span>
                            <span className="text-gray-700 dark:text-gray-300">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 text-white"
        >
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="mb-6">Book your consultation now and take the first step towards studying in Germany</p>
          <button className="inline-flex items-center px-6 py-3 bg-white text-blue-500 rounded-lg hover:bg-gray-100 transition-colors">
            Book Your Session Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </motion.div>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        consultant={selectedConsultant || { name: '', field: '' }}
      />
    </div>
  );
} 