import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader, FileText, CheckCircle, Clock } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

interface UniversityDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  universityId: string;
}

export function UniversityDetailsModal({ isOpen, onClose, universityId }: UniversityDetailsModalProps) {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState<any>(null);

  useEffect(() => {
    if (isOpen && universityId) {
      fetchUniversityDetails();
    }
  }, [isOpen, universityId]);

  const fetchUniversityDetails = async () => {
    try {
      const { data, error } = await supabase
        .from('university_applications')
        .select(`
          *,
          documents:application_documents(*)
        `)
        .eq('id', universityId)
        .single();

      if (error) throw error;
      setDetails(data);
    } catch (error) {
      console.error('Error fetching details:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white dark:bg-[#1a2942] rounded-2xl p-6 w-full max-w-2xl relative"
          >
            {loading ? (
              <div className="flex items-center justify-center h-64">
                <Loader className="w-8 h-8 animate-spin text-blue-500" />
              </div>
            ) : (
              <>
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <X className="w-5 h-5" />
                </button>

                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Application Details - {details?.university_name}
                </h2>

                <div className="space-y-6">
                  {/* Application Status */}
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Application Status
                    </h3>
                    <div className="flex items-center space-x-2">
                      {details?.status === 'submitted' ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <Clock className="w-5 h-5 text-yellow-500" />
                      )}
                      <span className="text-gray-600 dark:text-gray-300 capitalize">
                        {details?.status}
                      </span>
                    </div>
                  </div>

                  {/* Documents */}
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                      Required Documents
                    </h3>
                    <div className="space-y-3">
                      {details?.documents.map((doc: any) => (
                        <div
                          key={doc.id}
                          className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                        >
                          <div className="flex items-center space-x-3">
                            <FileText className="w-5 h-5 text-blue-500" />
                            <span className="text-gray-900 dark:text-white">
                              {doc.name}
                            </span>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm ${
                            doc.status === 'verified'
                              ? 'bg-green-50 dark:bg-green-500/20 text-green-600 dark:text-green-400'
                              : 'bg-yellow-50 dark:bg-yellow-500/20 text-yellow-600 dark:text-yellow-400'
                          }`}>
                            {doc.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                      Application Timeline
                    </h3>
                    {/* Add timeline component here */}
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
} 