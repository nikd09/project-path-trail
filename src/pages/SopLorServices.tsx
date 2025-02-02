import React from 'react';
import { FileText, CheckCircle, ArrowRight, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export function SopLorServices() {
  const features = [
    'Professional guidance for SOP and LOR writing',
    'Expert review and editing services',
    'University-specific customization',
    'Plagiarism-free content guarantee',
    'Multiple revision rounds',
    'Quick turnaround time'
  ];

  const services = [
    {
      title: 'Statement of Purpose (SOP)',
      price: '€79',
      features: [
        'Personal story development',
        'Academic journey highlight',
        'Career goals alignment',
        'University-specific customization',
        '2 revision rounds',
        '3-4 days delivery'
      ]
    },
    {
      title: 'Letter of Recommendation (LOR)',
      price: '€59',
      features: [
        'Professional formatting',
        'Academic achievements highlight',
        'Character trait emphasis',
        'Relationship context',
        '2 revision rounds',
        '2-3 days delivery'
      ]
    },
    {
      title: 'Complete Package',
      price: '€129',
      features: [
        'Both SOP and LOR writing',
        'Priority processing',
        'Extended revisions (3 rounds)',
        'Express delivery option',
        'Direct writer communication',
        'Format for multiple universities'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            SOP & LOR Writing Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Stand out with compelling documents that showcase your potential to German universities
          </p>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose Our Writing Services?
            </h2>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Our Process
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Information Gathering</h3>
                  <p className="text-gray-600 dark:text-gray-400">Fill out our detailed questionnaire about your background and goals</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Draft Creation</h3>
                  <p className="text-gray-600 dark:text-gray-400">Our experts craft your documents with compelling narratives</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Review & Revisions</h3>
                  <p className="text-gray-600 dark:text-gray-400">Multiple revision rounds to perfect your documents</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Packages */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Choose Your Package
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {service.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 dark:text-gray-400">
                      <Star className="w-4 h-4 text-blue-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/order-documents"
                  className="block w-full text-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Create Your Documents?</h2>
          <p className="mb-6">Let our experts help you craft compelling SOP and LOR that stand out</p>
          <Link
            to="/order-documents"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-500 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Start Writing
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
} 