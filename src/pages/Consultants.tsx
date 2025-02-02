import React from 'react';

export function Consultants() {
  return (
    <div className="min-h-screen pt-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Our Consultants
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add consultant cards here */}
          {/* Example card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-green-500" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Dr. Sarah Johnson
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Education Consultant
              </p>
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
                Schedule Meeting
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 