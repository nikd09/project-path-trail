import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard,
  Upload,
  Building2,
  FileText,
  Briefcase,
  Settings,
  LogOut,
  Search,
  GraduationCap,
  Bell,
  Calendar,
  Clock,
  ChevronRight,
  Users,
  FileCheck,
  Pen,
  TrendingUp,
  BookOpen,
  MessageSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppointmentModal } from '../components/AppointmentModal';
import { UniversityDetailsModal } from '../components/UniversityDetailsModal';
import { Toaster } from 'react-hot-toast';

const sidebarLinks = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: Upload, label: 'Upload Centre', path: '/upload-centre' },
  { icon: Building2, label: 'Universities', path: '/universities' },
  { icon: FileText, label: 'Documents Status', path: '/documents' },
  { icon: Briefcase, label: 'Other Services', path: '/services' },
  { icon: Settings, label: 'Settings', path: '/settings' },
  { icon: LogOut, label: 'Logout', path: '/logout' }
];

export function Dashboard() {
  const [activeLink, setActiveLink] = useState('Dashboard');
  const userName = "Nikhil";
  const [showNotifications, setShowNotifications] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedUniversityId, setSelectedUniversityId] = useState<string>('');

  return (
    <>
      <Toaster position="top-right" />
      
      <div className="flex min-h-screen bg-white dark:bg-[#0A1628] text-gray-900 dark:text-white">
        {/* Left Sidebar with Glass Effect */}
        <div className="w-64 fixed h-full bg-white dark:bg-[#111C2E] border-r border-gray-200 dark:border-white/10">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                PathFinder
              </span>
            </div>

            <nav className="space-y-1">
              {sidebarLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    activeLink === link.label
                      ? 'bg-blue-50 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5'
                  }`}
                  onClick={() => setActiveLink(link.label)}
                >
                  <link.icon className="w-5 h-5" />
                  <span>{link.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-64">
          {/* Top Navigation with Glass Effect */}
          <div className="sticky top-0 z-10 bg-white/80 dark:bg-[#111C2E]/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/10">
            <div className="flex items-center justify-between px-8 py-4">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search universities, documents..."
                  className="pl-10 pr-4 py-2 rounded-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Bell className="w-6 h-6 text-gray-400 dark:text-gray-400 cursor-pointer hover:text-gray-600 dark:hover:text-white transition-colors" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center">3</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Nikhil</h3>
                    <p className="text-sm text-gray-400">Student</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20">
                    ND
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="p-8">
            {/* Welcome Card with Gradient */}
            <div className="bg-blue-50 dark:bg-gradient-to-br dark:from-[#1a2942] dark:to-[#2a3f5f] rounded-2xl p-8 mb-8">
              <div className="relative z-10">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome back, Nikhil!</h1>
                <p className="text-gray-600 dark:text-gray-400">Stay updated in your student portal</p>
              </div>
            </div>

            {/* Main Stats with Animated Progress */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-[#1a2942] rounded-2xl p-6 border border-gray-200 dark:border-white/10 group hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Application Progress</h3>
                  </div>
                  <div className="relative">
                    <p className="text-4xl font-bold text-blue-400 mb-2">75%</p>
                    <div className="w-full h-2 bg-blue-950 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '75%' }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-[#1a2942] rounded-2xl p-6 border border-gray-200 dark:border-white/10 group hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-green-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Documents Completed</h3>
                  </div>
                  <div className="relative">
                    <p className="text-4xl font-bold text-green-400 mb-2">8/10</p>
                    <div className="w-full h-2 bg-green-950 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '80%' }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-[#1a2942] rounded-2xl p-6 border border-gray-200 dark:border-white/10 group hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Pending Messages</h3>
                  </div>
                  <div className="relative">
                    <p className="text-4xl font-bold text-purple-400 mb-2">3</p>
                    <div className="w-full h-2 bg-purple-950 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '30%' }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Secondary Stats with Hover Effects */}
            <div className="grid grid-cols-4 gap-6 mb-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-[#1a2942] rounded-2xl p-6 border border-gray-200 dark:border-white/10 group hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                <div className="relative z-10">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Documents Uploaded</h3>
                  <p className="text-3xl font-bold text-blue-400">3/5</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-[#1a2942] rounded-2xl p-6 border border-gray-200 dark:border-white/10 group hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                <div className="relative z-10">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Universities Applied</h3>
                  <p className="text-3xl font-bold text-green-400">2/4</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-[#1a2942] rounded-2xl p-6 border border-gray-200 dark:border-white/10 group hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                <div className="relative z-10">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Pending Tasks</h3>
                  <p className="text-3xl font-bold text-orange-400">2</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-[#1a2942] rounded-2xl p-6 border border-gray-200 dark:border-white/10 group hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                <div className="relative z-10">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Next Consultation</h3>
                  <p className="text-lg text-gray-400">Tomorrow, 10:00 AM</p>
                </div>
              </motion.div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-2 gap-6">
              {/* Consultant Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-[#1a2942] rounded-2xl p-6 border border-gray-200 dark:border-white/10 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Your Consultant</h2>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                          <Users className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">Dr. Sarah Wilson</h3>
                          <p className="text-sm text-gray-400">German University Expert</p>
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={() => setIsAppointmentModalOpen(true)}
                      className="px-4 py-2 bg-purple-50 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 rounded-lg font-medium hover:bg-purple-100 dark:hover:bg-purple-500/30 transition-colors"
                    >
                      Book Appointment
                    </button>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">Next Available Slots</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <button className="p-3 text-left bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        <p className="font-medium text-gray-900 dark:text-white">Tomorrow</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">10:00 AM</p>
                      </button>
                      <button className="p-3 text-left bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        <p className="font-medium text-gray-900 dark:text-white">Thursday</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">2:00 PM</p>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Documents Status */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-[#1a2942] rounded-2xl p-6 border border-gray-200 dark:border-white/10 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                <div className="relative z-10">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Documents Status</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                          <FileCheck className="w-5 h-5 text-green-400" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 dark:text-white">Statement of Purpose</h3>
                          <span className="px-3 py-1 bg-green-50 dark:bg-green-500/20 text-green-600 dark:text-green-400 rounded-full text-sm">
                            Completed
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Add more document status items */}
                  </div>
                </div>
              </motion.div>

              {/* University Applications */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-[#1a2942] rounded-2xl p-6 border border-gray-200 dark:border-white/10 hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                <div className="relative z-10">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">University Applications</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">TU Munich</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">M.Sc. Computer Science</p>
                      <div className="flex justify-between items-center">
                        <span className="px-3 py-1 bg-yellow-50 dark:bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 rounded-full text-sm">
                          In Progress
                        </span>
                        <button 
                          onClick={() => {
                            setSelectedUniversityId("TU Munich");
                            setIsDetailsModalOpen(true);
                          }}
                          className="text-blue-500 dark:text-blue-400 font-medium hover:text-blue-600 dark:hover:text-blue-300"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">TU Berlin</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">M.Sc. Computer Science</p>
                      <div className="flex justify-between items-center">
                        <span className="px-3 py-1 bg-green-50 dark:bg-green-500/20 text-green-600 dark:text-green-400 rounded-full text-sm">
                          Submitted
                        </span>
                        <button 
                          onClick={() => {
                            setSelectedUniversityId("TU Berlin");
                            setIsDetailsModalOpen(true);
                          }}
                          className="text-blue-500 dark:text-blue-400 font-medium hover:text-blue-600 dark:hover:text-blue-300"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Writer Assignment */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-[#1a2942] rounded-2xl p-6 border border-gray-200 dark:border-white/10 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                <div className="relative z-10">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Assigned Writer</h2>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                      <Pen className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Emma Thompson</h3>
                      <p className="text-sm text-gray-400">SOP & LOR Specialist</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Documents Progress</span>
                      <span className="text-gray-900 font-medium">80%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 dark:bg-purple-400 rounded-full" style={{ width: '80%' }} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
        consultant={{
          id: "1",
          name: "Dr. Sarah Wilson",
          role: "German University Expert"
        }}
      />
      
      <UniversityDetailsModal
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
        universityId={selectedUniversityId}
      />
    </>
  );
}

// Add this to your CSS
const gridBackground = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l7.9-7.9h-.828zm5.656 0L19.515 8.485 17.343 10.657 28 0h-2.83zM32.656 0L26.172 6.485 24 8.657 34.657 0h-2zm5.657 0L30.828 7.485 28.657 9.657 39.314 0h-2.83zm5.657 0l-7.485 7.485-2.172 2.172L39.314 0h2.83zm5.657 0l-7.485 7.485-2.172 2.172L44.97 0h2.83zm5.657 0l-7.485 7.485-2.172 2.172L50.627 0h2.83zm5.657 0l-7.485 7.485-2.172 2.172L56.284 0h2.83z' fill='%23fff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
};

export default Dashboard; 