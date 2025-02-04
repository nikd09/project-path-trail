import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, Home, CreditCard, Book, Users, 
  GraduationCap, ArrowRight, Globe, MessageSquare,
  Plane, User, Calendar, Clock, CheckCircle, AlertCircle, X, Send, Building,
  Lock, Heart
} from 'lucide-react';

interface TimeSlot {
  id: string;
  time: string;
  date: string;
  available: boolean;
}

interface VisaStep {
  id: number;
  title: string;
  status: 'completed' | 'current' | 'pending';
  date?: string;
}

export function OtherServices() {
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);

  const timeSlots: TimeSlot[] = [
    { id: '1', time: '11:00 AM', date: 'Tomorrow', available: true },
    { id: '2', time: '3:00 PM', date: 'Tomorrow', available: true },
    { id: '3', time: '2:00 PM', date: '23 Mar 2024', available: true },
  ];

  const visaSteps: VisaStep[] = [
    {
      id: 1,
      title: 'Documents Collection',
      status: 'completed',
      date: '15 Mar 2024'
    },
    {
      id: 2,
      title: 'Application Submission',
      status: 'completed',
      date: '18 Mar 2024'
    },
    {
      id: 3,
      title: 'Appointment Scheduled',
      status: 'current',
      date: '25 Mar 2024'
    }
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;
    console.log('Sending message:', message);
    alert('Message sent successfully!');
    setMessage('');
    setIsMessageModalOpen(false);
  };

  const handleBookAppointment = () => {
    if (!selectedSlot) return;
    console.log('Booking appointment:', selectedSlot);
    alert('Appointment booked successfully!');
    setSelectedSlot(null);
    setIsBookingModalOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-[#1a2942] rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-white mb-2">
          Service Status
        </h1>
        <p className="text-gray-400">
          Track your services and connect with your mentor
        </p>
      </div>

      {/* Alumni Mentor Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#1a2942] rounded-2xl p-6"
      >
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Your Alumni Mentor</h2>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Michael Schmidt</p>
                  <p className="text-gray-400 text-sm">German Student Mentor</p>
                  <p className="text-green-400 text-sm">Online</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-[#243755] rounded-lg">
                <p className="text-gray-400 text-sm">University</p>
                <p className="text-white">TU Munich</p>
              </div>
              <div className="p-3 bg-[#243755] rounded-lg">
                <p className="text-gray-400 text-sm">Field of Study</p>
                <p className="text-white">Computer Science</p>
              </div>
              <div className="p-3 bg-[#243755] rounded-lg">
                <p className="text-gray-400 text-sm">Experience</p>
                <p className="text-white">3+ years in Germany</p>
              </div>
              <div className="p-3 bg-[#243755] rounded-lg">
                <p className="text-gray-400 text-sm">Languages</p>
                <p className="text-white">German (C1), English</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
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
                <span>Book Session</span>
              </button>
            </div>
            <div className="p-3 bg-blue-500/10 rounded-lg">
              <div className="flex items-center text-sm text-blue-400">
                <Clock className="w-4 h-4 mr-2" />
                <span>Next Available: Tomorrow, 11:00 AM</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Health Insurance Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#1a2942] rounded-2xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-green-500/10 rounded-xl">
              <Heart className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Health Insurance</h2>
              <p className="text-gray-400">TK Insurance</p>
            </div>
          </div>
          <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm">
            Active
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-[#243755] rounded-xl">
            <p className="text-gray-400 text-sm mb-1">Policy Number</p>
            <p className="text-white font-medium">A123456789</p>
          </div>
          <div className="p-4 bg-[#243755] rounded-xl">
            <p className="text-gray-400 text-sm mb-1">Coverage</p>
            <p className="text-white font-medium">Full Medical</p>
          </div>
          <div className="p-4 bg-[#243755] rounded-xl">
            <p className="text-gray-400 text-sm mb-1">Valid Until</p>
            <p className="text-green-400 font-medium">31 Dec 2024</p>
          </div>
        </div>
      </motion.div>

      {/* Coracle Info Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#1a2942] rounded-2xl p-6"
      >
        <div className="flex items-center space-x-4 mb-6">
          <div className="p-3 bg-purple-500/10 rounded-xl">
            <Building className="w-6 h-6 text-purple-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Coracle Account</h2>
            <p className="text-gray-400">Student ID: COR-2024-1234</p>
          </div>
        </div>
        <div className="flex items-center justify-between p-4 bg-[#243755] rounded-xl">
          <div className="flex items-center space-x-3">
            <Lock className="w-5 h-5 text-purple-400" />
            <div>
              <p className="text-white">Account Status</p>
              <p className="text-sm text-gray-400">Premium Access</p>
            </div>
          </div>
          <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm">
            Active
          </span>
        </div>
      </motion.div>

      {/* Visa Process Status Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#1a2942] rounded-2xl p-6"
      >
        <div className="flex items-center space-x-4 mb-6">
          <div className="p-3 bg-blue-500/10 rounded-xl">
            <Plane className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Visa Process Status</h2>
            <p className="text-gray-400">Student Visa (Type D)</p>
          </div>
        </div>
        <div className="space-y-6">
          {visaSteps.map((step) => (
            <div key={step.id} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step.status === 'completed' ? 'bg-green-500' :
                step.status === 'current' ? 'bg-blue-500' :
                'bg-gray-700'
              }`}>
                {step.status === 'completed' ? (
                  <CheckCircle className="w-5 h-5 text-white" />
                ) : (
                  <span className="text-white">{step.id}</span>
                )}
              </div>
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <p className={`font-medium ${
                    step.status === 'completed' ? 'text-green-400' :
                    step.status === 'current' ? 'text-blue-400' :
                    'text-gray-400'
                  }`}>
                    {step.title}
                  </p>
                  {step.date && (
                    <span className="text-sm text-gray-400">{step.date}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
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
                <h2 className="text-xl font-bold text-white">Message Michael Schmidt</h2>
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
                <h2 className="text-xl font-bold text-white">Book Mentoring Session</h2>
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
    </div>
  );
} 