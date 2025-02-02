import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, FileText, Mail, Clock, Award, CheckCircle, Sparkles, GraduationCap, FileCheck, Shield } from 'lucide-react';

interface Writer {
  id: number;
  name: string;
  avatar: string;
  role: string;
  experience: string;
  rating: number;
  specialization: string[];
  completedProjects: number;
}

export function SopLor() {
  const [selectedWriter, setSelectedWriter] = useState<Writer | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<any>(null);

  const writers: Writer[] = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Senior SOP Writer",
      experience: "8+ years",
      rating: 4.9,
      specialization: ["Engineering", "Computer Science", "MBA"],
      completedProjects: 500
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "LOR Specialist",
      experience: "10+ years",
      rating: 4.8,
      specialization: ["Medicine", "Research", "Academia"],
      completedProjects: 750
    },
    {
      id: 3,
      name: "Emma Thompson",
      role: "Senior Writer",
      experience: "6+ years",
      rating: 4.7,
      specialization: ["Business", "Arts", "Social Sciences"],
      completedProjects: 400
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Technical Writer",
      experience: "7+ years",
      rating: 4.9,
      specialization: ["Engineering", "Technology", "Science"],
      completedProjects: 600
    },
    {
      id: 5,
      name: "Anna Schmidt",
      role: "Academic Writer",
      experience: "9+ years",
      rating: 4.8,
      specialization: ["Psychology", "Education", "Humanities"],
      completedProjects: 550
    },
    {
      id: 6,
      name: "David Kumar",
      role: "Research Specialist",
      experience: "8+ years",
      rating: 4.9,
      specialization: ["Life Sciences", "Research", "Healthcare"],
      completedProjects: 480
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A1628]">
      {/* Enhanced Hero Section */}
      <div className="relative pt-24 pb-16 overflow-hidden">
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-500/10 dark:to-green-500/10 backdrop-blur-sm border border-blue-200 dark:border-white/10 mb-8">
              <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
              <span className="text-blue-600 dark:text-blue-400 font-medium">Professional Document Writing</span>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white sm:text-6xl mb-6 tracking-tight">
              <span className="block">SOP & LOR Writing</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-400 dark:to-green-400">
                Services
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stand out with compelling documents that showcase your potential to German universities
            </p>
          </motion.div>
        </div>
      </div>

      {/* Writers Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Our Expert Writers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {writers.map((writer, index) => (
            <WriterCard 
              key={writer.id}
              writer={writer}
              onSelect={(data) => {
                setSelectedWriter(writer);
                setModalData(data);
                setIsModalOpen(true);
              }}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Features and Process Section */}
      <div className="mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Enhanced Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg dark:shadow-none border border-gray-100 dark:border-gray-700"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <Shield className="w-8 h-8 text-green-500 mr-3" />
                Why Choose Our Writing Services?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: GraduationCap,
                    title: "Professional Guidance",
                    description: "Expert guidance for SOP and LOR writing tailored to German universities"
                  },
                  {
                    icon: FileCheck,
                    title: "Quality Assurance",
                    description: "Multiple revision rounds with expert review and feedback"
                  },
                  {
                    icon: Clock,
                    title: "Quick Turnaround",
                    description: "Fast delivery without compromising on quality"
                  },
                  {
                    icon: Shield,
                    title: "Plagiarism-Free Guarantee",
                    description: "100% original content with plagiarism check reports"
                  },
                  {
                    icon: Award,
                    title: "University-Specific",
                    description: "Customized documents aligned with university requirements"
                  },
                  {
                    icon: FileText,
                    title: "Comprehensive Service",
                    description: "Complete support from draft to final submission"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800/70 transition-all duration-300"
                  >
                    <feature.icon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-gray-900 dark:text-white font-semibold">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Process Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg dark:shadow-none border border-gray-100 dark:border-gray-700"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Our Process</h2>
              <div className="space-y-8">
                {[
                  {
                    step: 1,
                    title: "Information Gathering",
                    description: "Fill out our detailed questionnaire about your background, achievements, and goals"
                  },
                  {
                    step: 2,
                    title: "Writer Assignment",
                    description: "Get matched with an expert writer specialized in your field of study"
                  },
                  {
                    step: 3,
                    title: "Draft Creation",
                    description: "Our experts craft your documents with compelling narratives that highlight your strengths"
                  },
                  {
                    step: 4,
                    title: "Initial Review",
                    description: "First round of review and feedback to align with your expectations"
                  },
                  {
                    step: 5,
                    title: "Refinement",
                    description: "Multiple revision rounds to perfect your documents with your feedback"
                  },
                  {
                    step: 6,
                    title: "Quality Check",
                    description: "Thorough review for grammar, formatting, and university guidelines"
                  },
                  {
                    step: 7,
                    title: "Final Delivery",
                    description: "Receive your polished documents ready for submission"
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-start relative"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-gray-900 dark:text-white font-semibold">{step.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Writer Selection Modal */}
      <WriterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        writer={selectedWriter}
        sopCount={modalData?.sopCount || 0}
        lorCount={modalData?.lorCount || 0}
        totalPrice={modalData?.totalPrice || 0}
      />
    </div>
  );
}

// Enhanced Writer Card Component
function WriterCard({ writer, onSelect, index }: { writer: Writer; onSelect: (data: any) => void; index: number }) {
  const [sopCount, setSopCount] = useState(1);
  const [lorCount, setLorCount] = useState(0);
  const totalPrice = (sopCount * 20) + (lorCount * 10);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
    >
      <div className="p-6">
        {/* Writer Info */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {writer.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{writer.role}</p>
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            {writer.rating}
          </div>
        </div>

        {/* Writer Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <Clock className="w-4 h-4 mr-2" />
            {writer.experience}
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <FileText className="w-4 h-4 mr-2" />
            {writer.completedProjects}+ Projects
          </div>
        </div>

        {/* Document Selection */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-between">
            <label className="text-sm text-gray-600 dark:text-gray-300">SOPs:</label>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setSopCount(Math.max(0, sopCount - 1))}
                className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-white"
              >
                -
              </button>
              <span className="w-8 text-center text-gray-900 dark:text-white">{sopCount}</span>
              <button
                onClick={() => setSopCount(sopCount + 1)}
                className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-white"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="text-sm text-gray-600 dark:text-gray-300">LORs:</label>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setLorCount(Math.max(0, lorCount - 1))}
                className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-white"
              >
                -
              </button>
              <span className="w-8 text-center text-gray-900 dark:text-white">{lorCount}</span>
              <button
                onClick={() => setLorCount(lorCount + 1)}
                className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-white"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Price and Select Button */}
        <button
          onClick={() => onSelect({
            writer,
            sopCount,
            lorCount,
            totalPrice
          })}
          className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl font-medium hover:from-blue-600 hover:to-green-600 transition-all duration-300 flex items-center justify-between"
        >
          <span>Select Writer</span>
          <span className="flex items-center">
            ${totalPrice}
            <ArrowRight className="w-4 h-4 ml-2" />
          </span>
        </button>
      </div>
    </motion.div>
  );
}

// Writer Modal Component
function WriterModal({ isOpen, onClose, writer, sopCount, lorCount, totalPrice }: { isOpen: boolean; onClose: () => void; writer: Writer | null; sopCount: number; lorCount: number; totalPrice: number }) {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg w-96"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          {writer?.name}
        </h2>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <label className="text-sm text-gray-600 dark:text-gray-300">SOPs:</label>
            <div className="flex items-center space-x-2">
              <button
                onClick={(e) => { e.stopPropagation(); sopCount > 0 && setSopCount(sopCount - 1); }}
                className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-white"
              >
                -
              </button>
              <span className="w-8 text-center text-gray-900 dark:text-white">{sopCount}</span>
              <button
                onClick={(e) => { e.stopPropagation(); setSopCount(sopCount + 1); }}
                className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-white"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="text-sm text-gray-600 dark:text-gray-300">LORs:</label>
            <div className="flex items-center space-x-2">
              <button
                onClick={(e) => { e.stopPropagation(); lorCount > 0 && setLorCount(lorCount - 1); }}
                className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-white"
              >
                -
              </button>
              <span className="w-8 text-center text-gray-900 dark:text-white">{lorCount}</span>
              <button
                onClick={(e) => { e.stopPropagation(); setLorCount(lorCount + 1); }}
                className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-white"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-300">Total Price:</span>
          <span className="text-sm text-gray-900 dark:text-white">${totalPrice}</span>
        </div>
        <div className="mt-6 flex items-center justify-end">
          <button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl font-medium hover:from-blue-600 hover:to-green-600 transition-all duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
} 