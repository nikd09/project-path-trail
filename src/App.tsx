import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from 'react-router-dom';
import { Sun, Moon, Globe, Book, Languages, ChevronDown, Sparkles, Brain, PenTool, Users, Building2, GraduationCap, CheckCircle, DollarSign, Star, ArrowRight, ExternalLink, FileText, Home, CreditCard, School, LayoutDashboard } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import { AuthModal } from './components/AuthModal';
import { RoadmapGenerator } from './pages/RoadmapGenerator';
import { Logo } from './components/Logo';
import { AboutUs } from './pages/AboutUs';
import { AboutUs as AboutUsPage, RoadmapGenerator as RoadmapGeneratorPage } from './pages';
import { motion } from 'framer-motion';
import { PartnerLogo } from './components/PartnerLogos';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { supabase } from './lib/supabase';
import type { User } from '@supabase/supabase-js';
import { Consultants } from './pages/Consultants';
import { PersonalizedConsultation } from './pages/PersonalizedConsultation';
import { SopLorServices } from './pages/SopLorServices';
import { AlumniMentorship } from './pages/AlumniMentorship';
import { HousingBanking } from './pages/HousingBanking';
import { SopLor } from './pages/SopLor';
import { AuthProvider } from './contexts/AuthContext';
import { Payment } from './pages/Payment';
import { BookMentor } from './pages/BookMentor';
import { Dashboard } from './pages/Dashboard';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Update localStorage and document class when theme changes
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Get initial auth state
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthProvider>
      <Router>
        <div className={isDarkMode ? 'dark' : ''}>
          <div className="min-h-screen bg-white dark:bg-[#0A1628]">
            <Toaster position="top-right" />
            <AuthModal
              isOpen={isAuthModalOpen}
              onClose={() => setIsAuthModalOpen(false)}
            />
            
            {/* Navigation */}
            <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg z-50 border-b border-gray-200 dark:border-gray-800">
              <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <Logo />
                  
                  <div className="hidden md:flex md:items-center md:space-x-8">
                    <Link 
                      to="/" 
                      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      Home
                    </Link>
                    <Link 
                      to="/about" 
                      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      About Us
                    </Link>
                    
                    {/* Services Dropdown */}
                    <div className="relative group">
                      <button className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                        <span>Services</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      
                      <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                        <div className="relative top-full bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2">
                          <Link 
                            to="/consultation" 
                            className="flex items-center space-x-3 px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                          >
                            <Users className="w-5 h-5" />
                            <span>Personalized Consultation</span>
                          </Link>
                          <Link 
                            to="/roadmap" 
                            className="flex items-center space-x-3 px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                          >
                            <GraduationCap className="w-5 h-5" />
                            <span>Career Roadmap</span>
                          </Link>
                          <Link 
                            to="/sop-lor" 
                            className="flex items-center space-x-3 px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                          >
                            <FileText className="w-5 h-5" />
                            <span>SOP & LOR Services</span>
                          </Link>
                          <Link 
                            to="/mentorship" 
                            className="flex items-center space-x-3 px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                          >
                            <School className="w-5 h-5" />
                            <span>Alumni Mentorship</span>
                          </Link>
                          <Link 
                            to="/housing-banking" 
                            className="flex items-center space-x-3 px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                          >
                            <Building2 className="w-5 h-5" />
                            <span>Housing & Blocked Account</span>
                          </Link>
                          <Link 
                            to="/dashboard" 
                            className="flex items-center space-x-3 px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                          >
                            <LayoutDashboard className="w-5 h-5" />
                            <span>Dashboard</span>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <Link 
                      to="/blog" 
                      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      Blog
                    </Link>
                    
                    {/* Theme Toggle */}
                    <button
                      onClick={() => setIsDarkMode(!isDarkMode)}
                      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>

                    <div className="flex items-center gap-4">
                      {user ? (
                        <button
                          onClick={handleSignOut}
                          className="inline-flex items-center px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white transition-colors"
                        >
                          Sign Out
                        </button>
                      ) : (
                        <Link
                          to="/signin"
                          className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors"
                        >
                          Sign In
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </nav>
            </header>

            <Routes>
              <Route path="/" element={<HomePage setIsAuthModalOpen={setIsAuthModalOpen} />} />
              <Route path="/roadmap" element={<RoadmapGenerator isDarkMode={isDarkMode} />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/consultants" element={<Consultants />} />
              <Route path="/consultation" element={<PersonalizedConsultation />} />
              <Route path="/sop-lor" element={<SopLor />} />
              <Route path="/mentorship" element={<AlumniMentorship />} />
              <Route path="/housing-banking" element={<HousingBanking />} />
              <Route path="/transform-journey" element={<PersonalizedConsultation />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/book-mentor" element={<BookMentor />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

function HomePage({ setIsAuthModalOpen }: { setIsAuthModalOpen: (open: boolean) => void }) {
  const navigate = useNavigate();

  const handleStartJourney = () => {
    try {
      navigate('/roadmap');
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Section */}
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
                Generate Your{' '}
                <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                  Career Roadmap
                </span>
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Let AI guide you through personalized career paths and educational opportunities tailored to your goals and aspirations.
              </p>
              <button
                onClick={handleStartJourney}
                className="group relative px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 group-hover:translate-x-full transition-transform duration-500" />
                <span className="relative flex items-center text-white">
                  Start Your Journey <Sparkles className="ml-2 w-4 h-4" />
                </span>
              </button>
            </div>

            {/* Right Section */}
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full blur-3xl" />
              <div className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Expert Guidance Available</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Connect with professional consultants for personalized advice and mentorship.
                </p>
                <Link
                  to="/consultants"
                  className="inline-block px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-green-500 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Find a Consultant
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Solutions for Students
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI Career Roadmap",
                description: "Free career planning tool powered by advanced AI technology.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: PenTool,
                title: "SOP & LOR Services",
                description: "Expert writing support at 50% lower cost than competitors.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Users,
                title: "Personalized Consultation",
                description: "One-on-one sessions with experienced consultants.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: Building2,
                title: "Housing & Blocked Accounts",
                description: "Comprehensive financial solutions for students.",
                color: "from-orange-500 to-yellow-500"
              },
              {
                icon: GraduationCap,
                title: "Alumni Mentorship",
                description: "Learn from real experiences of successful students.",
                color: "from-red-500 to-rose-500"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl"
                     style={{ background: `linear-gradient(to right, var(--tw-gradient-${service.color}))` }} />
                <div className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 group-hover:border-transparent transition-colors">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} p-2.5 mb-4`}>
                    <service.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Platforms Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Trusted Partners
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Access Germany's top platforms for accommodation and financial services
            </p>
          </motion.div>

          {/* Financial Services Partner */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Financial Services
            </h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <a
                href="https://www.coracle.de"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-center space-x-2">
                  <PartnerLogo name="Coracle" />
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                </div>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                  Blocked accounts, health & travel insurance
                </p>
              </a>
            </motion.div>
          </div>

          {/* Accommodation Partners */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Accommodation Partners
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                {
                  name: "ImmoScout24",
                  logo: "/partners/immoscout24-logo.svg",
                  url: "https://www.immobilienscout24.de/",
                  description: "Germany's largest real estate platform"
                },
                {
                  name: "Wunderflats",
                  logo: "/partners/wunderflats-logo.svg",
                  url: "https://www.wunderflats.com/",
                  description: "Furnished apartments for students"
                },
                {
                  name: "WG-Gesucht",
                  logo: "/partners/wg-gesucht-logo.svg",
                  url: "https://www.wg-gesucht.de/",
                  description: "Shared accommodation finder"
                },
                {
                  name: "eBay Kleinanzeigen",
                  logo: "/partners/ebay-kleinanzeigen-logo.svg",
                  url: "https://www.ebay-kleinanzeigen.de/",
                  description: "Local classified ads for housing"
                },
                {
                  name: "HousingAnywhere",
                  logo: "/partners/housinganywhere-logo.svg",
                  url: "https://housinganywhere.com/",
                  description: "International student housing platform"
                }
              ].map((partner, index) => (
                <motion.a
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex flex-col items-center bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative h-12 w-full mb-4">
                    <PartnerLogo name={partner.name} />
                    <ExternalLink className="absolute top-0 right-0 w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                    {partner.description}
                  </p>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Why Choose Us?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: "AI-driven guidance",
                description: "Advanced technology for personalized recommendations"
              },
              {
                icon: CheckCircle,
                title: "Verified consultants",
                description: "Expert advisors with proven track records"
              },
              {
                icon: DollarSign,
                title: "Cost-effective solutions",
                description: "Affordable services without compromising quality"
              },
              {
                icon: Star,
                title: "Trusted by students",
                description: "High satisfaction rate among our users"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-block p-4 bg-blue-500/10 dark:bg-blue-500/20 rounded-full mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Student Success Stories
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                university: "TU Munich",
                text: "PathFinder made my application process smooth and stress-free. Their AI roadmap was incredibly helpful!",
                image: "/testimonials/student1.jpg"
              },
              {
                name: "Alex K.",
                university: "RWTH Aachen",
                text: "The SOP service saved me time and money. Got accepted into my dream university!",
                image: "/testimonials/student2.jpg"
              },
              {
                name: "Maria L.",
                university: "TU Berlin",
                text: "The alumni mentorship program provided invaluable insights. Highly recommend!",
                image: "/testimonials/student3.jpg"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden mr-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.university}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-500 to-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Start your journey today with expert guidance and AI-driven career planning!
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsAuthModalOpen(true)}
              className="bg-white text-blue-500 px-8 py-3 rounded-full font-bold inline-flex items-center space-x-2 hover:bg-blue-50 transition-colors"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Floating 3D Elements */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
        <div className="relative w-[800px] h-[800px] animate-slow-spin">
          <Globe className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 text-blue-500/20" />
          <Book className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 text-green-500/20" />
        </div>
      </div>
    </>
  );
}

export default App;