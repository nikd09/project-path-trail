import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

export function BookingSuccess() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    if (sessionId) {
      // Update booking status in your database
      const updateBooking = async () => {
        await supabase
          .from('bookings')
          .update({ status: 'paid' })
          .eq('stripe_session_id', sessionId);
      };

      updateBooking();
    }
  }, [sessionId]);

  return (
    <div className="min-h-screen pt-24 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Booking Confirmed!
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Thank you for your payment. You will receive a confirmation email shortly.
        </p>
      </div>
    </div>
  );
} 