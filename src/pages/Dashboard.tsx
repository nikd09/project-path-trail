import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, Book, MessageSquare, User, Calendar, 
  X, Send, CheckCircle, Clock 
} from 'lucide-react';

interface TimeSlot {
  id: string;
  time: string;
  date: string;
  available: boolean;
}

export function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0A1628] p-6 space-y-6">
      {/* Welcome Section */}
      <div className="bg-[#1a2942] rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-white mb-2">
          Welcome back, Nikhil!
        </h1>
        <p className="text-gray-400">
          Stay updated in your student portal
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          icon={TrendingUp}
          title="Application Progress"
          value="75%"
          color="blue"
        />
        <StatsCard
          icon={Book}
          title="Documents Completed"
          value="8/10"
          color="green"
        />
        <StatsCard
          icon={MessageSquare}
          title="Pending Messages"
          value="3"
          color="purple"
        />
      </div>

      {/* Info Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <InfoCard title="Documents Uploaded" value="3/5" color="blue" />
        <InfoCard title="Universities Applied" value="2/4" color="green" />
        <InfoCard title="Pending Tasks" value="2" color="orange" />
        <InfoCard 
          title="Next Consultation" 
          value="Tomorrow, 10:00 AM" 
          color="gray"
          valueClass="text-sm"
        />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ConsultantCard />
        <DocumentStatusCard />
      </div>

      {/* University Applications Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#1a2942] rounded-2xl p-6"
      >
        <h2 className="text-xl font-bold text-white mb-4">University Applications</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-[#243755] rounded-xl">
            <div>
              <h3 className="text-white font-medium">TU Munich</h3>
              <p className="text-sm text-gray-400">M.Sc. Computer Science</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="px-3 py-1 bg-yellow-500/10 text-yellow-400 rounded-full text-sm">
                In Progress
              </span>
              <button className="text-blue-400 hover:text-blue-300 text-sm">
                View Details
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-[#243755] rounded-xl">
            <div>
              <h3 className="text-white font-medium">TU Berlin</h3>
              <p className="text-sm text-gray-400">M.Sc. Computer Science</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm">
                Submitted
              </span>
              <button className="text-blue-400 hover:text-blue-300 text-sm">
                View Details
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Assigned Writer Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#1a2942] rounded-2xl p-6"
      >
        <h2 className="text-xl font-bold text-white mb-4">Assigned Writer</h2>
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-white font-medium">Emma Thompson</h3>
            <p className="text-sm text-gray-400">SOP & LOR Specialist</p>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-400 text-sm mb-2">Documents Progress</p>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-purple-500 h-2 rounded-full" style={{ width: '75%' }}></div>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-lg hover:bg-purple-500/20 transition-colors">
            View Details
          </button>
        </div>
      </motion.div>
    </div>
  );
}

function StatsCard({ 
  icon: Icon, 
  title, 
  value, 
  color 
}: { 
  icon: any; 
  title: string; 
  value: string; 
  color: 'blue' | 'green' | 'purple'; 
}) {
  const colors = {
    blue: "text-blue-400",
    green: "text-green-400",
    purple: "text-purple-400"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#1a2942] rounded-2xl p-6"
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className={`p-2 rounded-xl bg-opacity-10 ${colors[color]} bg-current`}>
          <Icon className={`w-6 h-6 ${colors[color]}`} />
        </div>
        <h3 className="text-white font-medium">{title}</h3>
      </div>
      <p className={`text-4xl font-bold ${colors[color]}`}>{value}</p>
    </motion.div>
  );
}

function InfoCard({ 
  title, 
  value, 
  color, 
  valueClass = "text-2xl" 
}: { 
  title: string; 
  value: string; 
  color: string; 
  valueClass?: string; 
}) {
  const colors = {
    blue: "text-blue-400",
    green: "text-green-400",
    orange: "text-orange-400",
    gray: "text-gray-400"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#1a2942] rounded-2xl p-6"
    >
      <h3 className="text-white font-medium mb-2">{title}</h3>
      <p className={`font-bold ${valueClass} ${colors[color as keyof typeof colors]}`}>
        {value}
      </p>
    </motion.div>
  );
}

function ConsultantCard() {
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);

  const timeSlots: TimeSlot[] = [
    { id: '1', time: '10:00 AM', date: 'Tomorrow', available: true },
    { id: '2', time: '2:00 PM', date: 'Tomorrow', available: true },
    { id: '3', time: '11:00 AM', date: '22 Mar 2024', available: true },
    { id: '4', time: '3:00 PM', date: '22 Mar 2024', available: true }
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    // Here you would typically send the message to your backend
    console.log('Sending message:', message);
    
    // Show success feedback
    alert('Message sent successfully!');
    setMessage('');
    setIsMessageModalOpen(false);
  };

  const handleBookAppointment = () => {
    if (!selectedSlot) return;
    
    // Here you would typically send the booking to your backend
    console.log('Booking appointment:', selectedSlot);
    
    // Show success feedback
    alert('Appointment booked successfully!');
    setSelectedSlot(null);
    setIsBookingModalOpen(false);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#1a2942] rounded-2xl p-6"
      >
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Your Consultant</h3>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-medium">Dr. Sarah Wilson</p>
                <p className="text-gray-400 text-sm">German University Expert</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button 
              onClick={() => setIsMessageModalOpen(true)}
              className="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-lg hover:bg-purple-500/20 transition-colors flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Message</span>
            </button>
            <button 
              onClick={() => setIsBookingModalOpen(true)}
              className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
        <div className="mt-4 p-3 bg-blue-500/10 rounded-lg">
          <div className="flex items-center text-sm text-blue-400">
            <Clock className="w-4 h-4 mr-2" />
            <span>Next Available: Tomorrow, 10:00 AM</span>
          </div>
        </div>
      </motion.div>

      {/* Message Modal */}
      <AnimatePresence>
        {isMessageModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#1a2942] rounded-2xl p-6 w-full max-w-lg mx-4"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-white">Message Dr. Sarah Wilson</h2>
                <button 
                  onClick={() => setIsMessageModalOpen(false)}
                  className="text-gray-400 hover:text-gray-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                className="w-full h-32 bg-[#243755] text-white rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <div className="flex justify-end">
                <button
                  onClick={handleSendMessage}
                  disabled={!message.trim()}
                  className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Booking Modal */}
      <AnimatePresence>
        {isBookingModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#1a2942] rounded-2xl p-6 w-full max-w-lg mx-4"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-white">Book Appointment</h2>
                <button 
                  onClick={() => setIsBookingModalOpen(false)}
                  className="text-gray-400 hover:text-gray-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-4 mb-6">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.id}
                    onClick={() => setSelectedSlot(slot)}
                    className={`w-full p-4 rounded-lg transition-colors flex items-center justify-between ${
                      selectedSlot?.id === slot.id
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'bg-[#243755] text-white hover:bg-[#2a4060]'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5" />
                      <div className="text-left">
                        <p className="font-medium">{slot.date}</p>
                        <p className="text-sm text-gray-400">{slot.time}</p>
                      </div>
                    </div>
                    {selectedSlot?.id === slot.id && (
                      <CheckCircle className="w-5 h-5" />
                    )}
                  </button>
                ))}
              </div>
              <div className="flex justify-end">
                <button
                  onClick={handleBookAppointment}
                  disabled={!selectedSlot}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Booking</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

function DocumentStatusCard() {
  const documents = [
    { name: "Statement of Purpose", status: "completed" }
    // Add more documents as needed
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#1a2942] rounded-2xl p-6"
    >
      <h3 className="text-xl font-bold text-white mb-6">Documents Status</h3>
      {documents.map((doc) => (
        <div key={doc.name} className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
              <Book className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <p className="text-white font-medium">{doc.name}</p>
              <p className="text-green-400 text-sm">Completed</p>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
} 