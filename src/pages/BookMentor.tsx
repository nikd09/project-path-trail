import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Star } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabaseClient';

export function BookMentor() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const mentor = location.state?.mentor;

  // Add debug logging
  console.log('Location state:', location.state);
  console.log('Mentor data:', mentor);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [duration, setDuration] = useState<'30' | '60'>('30');
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    // Simulate a brief loading state to ensure everything is mounted
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (pageLoading) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0A1628] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  if (!mentor) {
    navigate('/alumni-mentorship');
    return (
      <div className="min-h-screen bg-white dark:bg-[#0A1628] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl text-gray-600 dark:text-gray-300">
            No mentor selected. Redirecting...
          </h2>
        </div>
      </div>
    );
  }

  const handleBooking = async () => {
    if (!user || !selectedDate) return;

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('bookings')
        .insert({
          mentor_id: mentor.id,
          user_id: user.id,
          booking_date: selectedDate.toISOString(),
          duration: parseInt(duration),
          amount: duration === '30' ? mentor.pricing.thirtyMin : mentor.pricing.sixtyMin
        })
        .select()
        .single();

      if (error) throw error;

      navigate(`/payment?booking_id=${data.id}`);
    } catch (error) {
      console.error('Error booking session:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A1628] py-20">
      <div className="max-w-3xl mx-auto px-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
          {/* Mentor Info */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Book Session with {mentor.name}
              </h1>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="mr-4">{mentor.university}</span>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>{mentor.rating}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Session Duration */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Select Session Duration
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => setDuration('30')}
                className={`p-4 rounded-xl border-2 transition-all ${
                  duration === '30'
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                    : 'border-gray-200 dark:border-gray-700 hover:border-blue-300'
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-900 dark:text-white">30 Minutes</span>
                  <span className="text-blue-600 dark:text-blue-400">${mentor.pricing.thirtyMin}</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-left">
                  Quick consultation for specific questions
                </p>
              </button>

              <button
                onClick={() => setDuration('60')}
                className={`p-4 rounded-xl border-2 transition-all ${
                  duration === '60'
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                    : 'border-gray-200 dark:border-gray-700 hover:border-blue-300'
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-900 dark:text-white">60 Minutes</span>
                  <span className="text-blue-600 dark:text-blue-400">${mentor.pricing.sixtyMin}</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-left">
                  In-depth discussion and detailed guidance
                </p>
              </button>
            </div>
          </div>

          {/* Date & Time Selection */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Select Date & Time
            </h2>
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
              <DatePicker
                selected={selectedDate}
                onChange={setSelectedDate}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={30}
                dateFormat="MMMM d, yyyy h:mm aa"
                minDate={new Date()}
                className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholderText="Select date and time"
              />
            </div>
          </div>

          {/* Summary & Action */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-600 dark:text-gray-300">Total Amount:</span>
              <span className="text-xl font-semibold text-gray-900 dark:text-white">
                ${duration === '30' ? mentor.pricing.thirtyMin : mentor.pricing.sixtyMin}
              </span>
            </div>

            <button
              onClick={handleBooking}
              disabled={!selectedDate || loading}
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl font-medium hover:from-blue-600 hover:to-green-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Processing...' : 'Proceed to Payment'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 