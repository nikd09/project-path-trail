import * as React from 'react';
import { ambitionsData } from '../data/ambitions-data';
import { Book, GraduationCap, Award, Building2, Briefcase, Layout, Video, ScrollText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getCareerSummary, getSalaryRange, getJobGrowth, getKeySkills, getCareerPath } from '../utils/careerData';

interface RoadmapGeneratorProps {
  isDarkMode: boolean;
}

export function RoadmapGenerator({ isDarkMode }: RoadmapGeneratorProps) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedAmbition, setSelectedAmbition] = React.useState<typeof ambitionsData[0] | null>(null);
  const [selectedSection, setSelectedSection] = React.useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const found = ambitionsData.find(
      (a) => a.ambition.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSelectedAmbition(found || null);
    setSelectedSection(null);
  };

  const cards = [
    { id: 'overview', title: 'Overview', icon: Layout, description: 'Get a comprehensive career path overview' },
    { id: 'books', title: 'Books', icon: Book, description: 'Essential reading materials' },
    { id: 'courses', title: 'Courses', icon: GraduationCap, description: 'Online and offline learning paths' },
    { id: 'videos', title: 'Videos', icon: Video, description: 'Tutorials and inspirational content' },
    { id: 'universities', title: 'Universities', icon: Building2, description: 'Top educational institutions' },
    { id: 'certifications', title: 'Certifications', icon: Award, description: 'Professional certifications' },
    { id: 'subjects', title: 'Subjects', icon: ScrollText, description: 'Core subjects to master' },
    { id: 'exams', title: 'Exams', icon: Briefcase, description: 'Important tests and assessments' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section - Similar to Image 1 */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Simplified */}
            <div>
              <h1 className="text-4xl font-bold mb-4">
                Generate Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-green-400">
                  Career
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-500">
                  Roadmap
                </span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Let AI guide you through personalized career paths and educational opportunities tailored to your goals and aspirations.
              </p>
            </div>

            {/* Right Column - Improved Card Animations */}
            <div className="relative h-[400px]">
              {/* Career Path Card */}
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ 
                  x: 0, 
                  opacity: 1,
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 0.8,
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                className="absolute top-10 right-0 w-80 h-64 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-xl"
              >
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Career Path</h3>
                    <p>Discover your ideal career trajectory in Germany</p>
                  </div>
                  <div className="flex justify-end">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>

              {/* University Match Card */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ 
                  x: 0, 
                  opacity: 1,
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                className="absolute bottom-10 left-0 w-80 h-64 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl p-6 text-white shadow-xl"
              >
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">University Match</h3>
                    <p>Find the perfect university for your goals</p>
                  </div>
                  <div className="flex justify-end">
                    <Building2 className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>

              {/* Subtle Floating Particles */}
              <div className="absolute inset-0">
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -50, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: Math.random() * 2 + 3,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 px-4 sm:px-6 lg:px-8 min-h-screen bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Your Roadmap to{' '}
              <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                {selectedAmbition ? selectedAmbition.ambition : 'Success'}
              </span>
            </h1>
            
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
              <div className="flex gap-4">
          <input
            type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Enter your desired career (e.g., Chemical Engineer)"
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-blue-500 transition-colors"
                />
          <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg hover:opacity-90 transition-opacity"
                >
                  Generate
          </button>
        </div>
            </form>
          </div>

          {selectedAmbition && !selectedSection && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {cards.map((card) => (
                <motion.div
                  key={card.id}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-xl p-6 rounded-xl border border-gray-200 dark:border-gray-700 cursor-pointer hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-colors"
                  onClick={() => setSelectedSection(card.id)}
                >
                  <card.icon className="w-8 h-8 text-blue-500 dark:text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{card.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{card.description}</p>
                </motion.div>
              ))}
            </motion.div>
          )}

          {selectedSection && selectedAmbition && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-xl p-8 rounded-xl border border-gray-200 dark:border-gray-700"
            >
              <button
                onClick={() => setSelectedSection(null)}
                className="mb-6 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                ← Back to categories
              </button>

              <div className="space-y-6">
                {selectedSection === 'overview' && (
                  <div className="space-y-8">
                    <div className="prose prose-lg max-w-none">
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                        Career Overview: {selectedAmbition.ambition}
                      </h2>
                      
                      {/* Career Summary Card */}
                      <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 dark:from-blue-500/20 dark:to-green-500/20 p-6 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700 mb-8">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {getCareerSummary(selectedAmbition.ambition)}
                        </p>
              </div>

                      {/* Key Information Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Average Salary */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-gray-100/50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700"
                        >
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                            <span className="bg-blue-500/10 dark:bg-blue-500/20 p-2 rounded-lg mr-3">💰</span>
                            Average Salary Range
                          </h3>
                          <p className="text-gray-700 dark:text-gray-300">
                            {getSalaryRange(selectedAmbition.ambition)}
                          </p>
                        </motion.div>

                        {/* Job Growth */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                          className="bg-gray-100/50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700"
                        >
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                            <span className="bg-green-500/10 dark:bg-green-500/20 p-2 rounded-lg mr-3">📈</span>
                            Job Growth Outlook
                          </h3>
                          <p className="text-gray-700 dark:text-gray-300">
                            {getJobGrowth(selectedAmbition.ambition)}
                          </p>
                        </motion.div>

                        {/* Required Skills */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="bg-gray-100/50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700"
                        >
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                            <span className="bg-purple-500/10 dark:bg-purple-500/20 p-2 rounded-lg mr-3">🎯</span>
                            Key Skills Required
                          </h3>
                          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                            {getKeySkills(selectedAmbition.ambition).map((skill, index) => (
                              <li key={index}>{skill}</li>
        ))}
      </ul>
                        </motion.div>
                      </div>

                      {/* Career Path Timeline */}
                      <div className="mt-12">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Career Progression Path</h3>
                        <div className="relative">
                          {getCareerPath(selectedAmbition.ambition).map((step, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start mb-8 relative"
                            >
                              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center text-white font-bold">
                                {index + 1}
                              </div>
                              <div className="ml-6">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h4>
                                <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
                              </div>
                              {index < getCareerPath(selectedAmbition.ambition).length - 1 && (
                                <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-blue-500 to-green-500" />
                              )}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {selectedSection === 'books' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Recommended Books</h2>
                    <div className="grid gap-4">
                      {selectedAmbition.books.map((book, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-gray-200/50 dark:bg-gray-700/50 p-4 rounded-lg hover:bg-gray-300/50 dark:hover:bg-gray-600/50 transition-colors"
                        >
                          <p className="text-gray-700 dark:text-gray-300">{book}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedSection === 'courses' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Recommended Courses</h2>
                    <div className="grid gap-4">
                      {selectedAmbition.courses.map((course, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-gray-200/50 dark:bg-gray-700/50 p-4 rounded-lg hover:bg-gray-300/50 dark:hover:bg-gray-600/50 transition-colors"
                        >
                          <p className="text-gray-700 dark:text-gray-300">{course}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedSection === 'videos' && (
                  <div>
                    {/* Videos content */}
                  </div>
                )}

                {selectedSection === 'universities' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Top Universities</h2>
                    <div className="grid gap-4">
                      {selectedAmbition.universities.map((university, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-gray-200/50 dark:bg-gray-700/50 p-4 rounded-lg hover:bg-gray-300/50 dark:hover:bg-gray-600/50 transition-colors"
                        >
                          <p className="text-gray-700 dark:text-gray-300">{university}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedSection === 'certifications' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Required Certifications</h2>
                    <div className="grid gap-4">
                      {selectedAmbition.certifications.map((cert, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-gray-200/50 dark:bg-gray-700/50 p-4 rounded-lg hover:bg-gray-300/50 dark:hover:bg-gray-600/50 transition-colors"
                        >
                          <p className="text-gray-700 dark:text-gray-300">{cert}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedSection === 'subjects' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Core Subjects</h2>
                    <div className="grid gap-4">
                      {selectedAmbition.subjects.map((subject, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-gray-200/50 dark:bg-gray-700/50 p-4 rounded-lg hover:bg-gray-300/50 dark:hover:bg-gray-600/50 transition-colors"
                        >
                          <p className="text-gray-700 dark:text-gray-300">{subject}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedSection === 'exams' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Required Exams</h2>
                    <div className="grid gap-4">
                      {selectedAmbition.exams.map((exam, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-gray-200/50 dark:bg-gray-700/50 p-4 rounded-lg hover:bg-gray-300/50 dark:hover:bg-gray-600/50 transition-colors"
                        >
                          <p className="text-gray-700 dark:text-gray-300">{exam}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
    </div>
            </motion.div>
          )}

          {searchQuery && !selectedAmbition && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-600 dark:text-gray-400 py-8"
            >
              No roadmap found for "{searchQuery}". Try a different career path.
            </motion.div>
          )}

          {/* Add auto-scroll when search is submitted */}
          {React.useEffect(() => {
            if (selectedAmbition) {
              const element = document.getElementById('roadmap-results');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }
          }, [selectedAmbition])}

          {/* Add id for scroll target */}
          <div id="roadmap-results">
            {/* ... rest of the content (cards and sections) remains same ... */}
          </div>
        </div>
      </div>
    </div>
  );
}