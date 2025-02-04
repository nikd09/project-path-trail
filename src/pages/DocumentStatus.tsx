import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, MessageSquare, Calendar, CheckCircle, 
  AlertCircle, Clock, Download, User, X, Send 
} from 'lucide-react';

interface Document {
  id: string;
  type: 'SOP' | 'LOR';
  university: string;
  status: 'draft' | 'review' | 'completed';
  lastUpdated: string;
  comments?: string;
}

interface TimeSlot {
  id: string;
  time: string;
  date: string;
  available: boolean;
}

export function DocumentStatus() {
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);

  const writer = {
    name: "Dr. Sarah Wilson",
    expertise: "SOP & LOR Specialist",
    experience: "8+ years",
    languages: "English, German",
    nextAvailable: "Tomorrow, 10:00 AM"
  };

  const documents: Document[] = [
    {
      id: 'sop-tum',
      type: 'SOP',
      university: 'Technical University of Munich',
      status: 'completed',
      lastUpdated: '2024-03-15',
      comments: 'Final draft ready for submission'
    },
    {
      id: 'sop-rwth',
      type: 'SOP',
      university: 'RWTH Aachen',
      status: 'review',
      lastUpdated: '2024-03-16',
      comments: 'Under review by writer'
    },
    {
      id: 'lor-prof1',
      type: 'LOR',
      university: 'All Universities',
      status: 'draft',
      lastUpdated: '2024-03-14',
      comments: 'Initial draft in progress'
    }
  ];

  // Available time slots for next 3 days
  const timeSlots: TimeSlot[] = [
    { id: '1', time: '10:00 AM', date: 'Tomorrow', available: true },
    { id: '2', time: '2:00 PM', date: 'Tomorrow', available: true },
    { id: '3', time: '11:00 AM', date: '22 Mar 2024', available: true },
    { id: '4', time: '3:00 PM', date: '22 Mar 2024', available: true },
    { id: '5', time: '10:00 AM', date: '23 Mar 2024', available: true },
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
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-[#1a2942] rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-white mb-2">
          Documents Status
        </h1>
        <p className="text-gray-400">
          Track your SOP, LOR and connect with your writer
        </p>
      </div>

      {/* Writer Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#1a2942] rounded-2xl p-6"
      >
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-purple-500/10 rounded-xl">
                <User className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">{writer.name}</h2>
                <p className="text-gray-400">{writer.expertise}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="text-sm">
                <p className="text-gray-400">Experience</p>
                <p className="text-white">{writer.experience}</p>
              </div>
              <div className="text-sm">
                <p className="text-gray-400">Languages</p>
                <p className="text-white">{writer.languages}</p>
              </div>
            </div>
          </div>
          <div className="flex space-x-3">
            <button 
              onClick={() => setIsMessageModalOpen(true)}
              className="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-lg hover:bg-purple-500/20 transition-colors flex items-center space-x-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Message</span>
            </button>
            <button 
              onClick={() => setIsBookingModalOpen(true)}
              className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors flex items-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
        <div className="mt-4 p-3 bg-blue-500/10 rounded-lg">
          <div className="flex items-center text-sm text-blue-400">
            <Clock className="w-4 h-4 mr-2" />
            <span>Next Available: {writer.nextAvailable}</span>
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

      {/* SOP & LOR Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#1a2942] rounded-2xl"
      >
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-lg font-semibold text-white">SOP & LOR Status</h2>
        </div>
        <div className="divide-y divide-gray-700">
          {documents.map((doc) => (
            <div key={doc.id} className="p-6 hover:bg-[#243755] transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-400/10 rounded-xl">
                    <FileText className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{doc.type}</h3>
                    <p className="text-sm text-gray-400">{doc.university}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Last updated: {new Date(doc.lastUpdated).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <StatusBadge status={doc.status} />
                  {doc.status === 'completed' && (
                    <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                      <Download className="w-5 h-5 text-green-400" />
                    </button>
                  )}
                </div>
              </div>
              {doc.comments && (
                <p className="mt-3 text-gray-400 text-sm">{doc.comments}</p>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function StatusBadge({ status }: { status: Document['status'] }) {
  const statusConfig = {
    draft: {
      color: 'text-yellow-400 bg-yellow-400/10',
      text: 'Draft',
      icon: Clock
    },
    review: {
      color: 'text-blue-400 bg-blue-400/10',
      text: 'In Review',
      icon: AlertCircle
    },
    completed: {
      color: 'text-green-400 bg-green-400/10',
      text: 'Completed',
      icon: CheckCircle
    }
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <span className={`flex items-center space-x-2 px-3 py-1 rounded-lg ${config.color}`}>
      <Icon className="w-4 h-4" />
      <span>{config.text}</span>
    </span>
  );
} 