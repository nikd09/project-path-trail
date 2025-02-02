import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

export function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [bookingData, setBookingData] = useState<any>(null);

  useEffect(() => {
    const bookingId = new URLSearchParams(location.search).get('booking_id');
    if (!bookingId) {
      navigate('/');
      return;
    }

    const fetchBooking = async () => {
      const { data, error } = await supabase
        .from('bookings')
        .select('*')
        .eq('id', bookingId)
        .single();

      if (error) {
        console.error('Error fetching booking:', error);
        navigate('/');
        return;
      }

      setBookingData(data);
      setLoading(false);
    };

    fetchBooking();
  }, [location.search, navigate]);

  const handlePayment = async () => {
    // Here you would integrate with your payment provider
    // For now, we'll just mark the booking as paid
    try {
      const { error } = await supabase
        .from('bookings')
        .update({ payment_status: 'completed' })
        .eq('id', bookingData.id);

      if (error) throw error;

      // Redirect to success page or show success message
      navigate('/booking-success');
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A1628] py-20">
      <div className="max-w-md mx-auto px-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Complete Your Booking
          </h1>
          
          <div className="space-y-4 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Session Duration:</span>
              <span className="text-gray-900 dark:text-white">{bookingData.duration} minutes</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Amount:</span>
              <span className="text-gray-900 dark:text-white">${bookingData.amount}</span>
            </div>
          </div>

          <button
            onClick={handlePayment}
            className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl font-medium hover:from-blue-600 hover:to-green-600 transition-all duration-300"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
} 