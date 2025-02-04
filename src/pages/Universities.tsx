import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';

interface University {
  id: string;
  name: string;
  location: string;
  course: string;
  ranking: string;
  deadline: string;
  applicationStatus: 'not_started' | 'in_progress' | 'submitted' | 'accepted';
  requirements: string[];
  tuitionFee: string;
  programDuration: string;
}

export function Universities() {
  const universities: University[] = [
    {
      id: 'tum',
      name: 'Technical University of Munich',
      location: 'Munich, Germany',
      course: 'M.Sc. Mechanical Engineering',
      ranking: '#1 in Germany',
      deadline: 'January 15, 2025',
      applicationStatus: 'in_progress',
      requirements: ['B.Tech in Mechanical/Automotive', 'IELTS: 6.5', 'GPA: 8.0/10'],
      tuitionFee: '€0',
      programDuration: '4 Semesters'
    },
    {
      id: 'rwth',
      name: 'RWTH Aachen University',
      location: 'Aachen, Germany',
      course: 'M.Sc. Mechanical Engineering',
      ranking: '#2 in Germany',
      deadline: 'March 1, 2025',
      applicationStatus: 'not_started',
      requirements: ['Bachelor in Mechanical Engineering', 'IELTS: 6.5', 'GPA: 7.5/10'],
      tuitionFee: '€0',
      programDuration: '4 Semesters'
    },
    {
      id: 'hsd',
      name: 'Hochschule Düsseldorf',
      location: 'Düsseldorf, Germany',
      course: 'M.Sc. Mechanical Engineering',
      ranking: '#3 in North Rhine-Westphalia',
      deadline: 'July 15, 2025',
      applicationStatus: 'not_started',
      requirements: ['Bachelor in Mechanical Engineering', 'IELTS: 6.0', 'GPA: 2.5/4.0'],
      tuitionFee: '€0',
      programDuration: '4 Semesters'
    },
    {
      id: 'stuttgart',
      name: 'University of Stuttgart',
      location: 'Stuttgart, Germany',
      course: 'M.Sc. Mechanical Engineering',
      ranking: '#4 in Germany',
      deadline: 'March 15, 2025',
      applicationStatus: 'submitted',
      requirements: ['Bachelor in Mechanical Engineering', 'IELTS: 6.5', 'GPA: 7.0/10'],
      tuitionFee: '€1,500/semester',
      programDuration: '4 Semesters'
    },
    {
      id: 'darmstadt',
      name: 'TU Darmstadt',
      location: 'Darmstadt, Germany',
      course: 'M.Sc. Mechanical & Process Engineering',
      ranking: '#5 in Germany',
      deadline: 'May 1, 2025',
      applicationStatus: 'not_started',
      requirements: ['Bachelor in Mechanical/Process', 'IELTS: 6.5', 'GPA: 7.0/10'],
      tuitionFee: '€0',
      programDuration: '4 Semesters'
    },
    {
      id: 'hamburg',
      name: 'Hamburg University of Technology',
      location: 'Hamburg, Germany',
      course: 'M.Sc. Mechanical Engineering',
      ranking: '#6 in Germany',
      deadline: 'June 1, 2025',
      applicationStatus: 'accepted',
      requirements: ['Bachelor in Mechanical Engineering', 'IELTS: 6.0', 'GPA: 7.0/10'],
      tuitionFee: '€0',
      programDuration: '4 Semesters'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-[#1a2942] rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-white mb-2">
          Shortlisted Universities
        </h1>
        <p className="text-gray-400">
          Track your applications to top German universities for Mechanical Engineering
        </p>
      </div>

      {/* Universities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {universities.map((university, index) => (
          <UniversityCard key={university.id} university={university} index={index} />
        ))}
      </div>
    </div>
  );
}

function UniversityCard({ university, index }: { university: University; index: number }) {
  const statusConfig = {
    not_started: {
      color: 'text-gray-400 bg-gray-400/10',
      text: 'Not Started'
    },
    in_progress: {
      color: 'text-yellow-400 bg-yellow-400/10',
      text: 'In Progress'
    },
    submitted: {
      color: 'text-blue-400 bg-blue-400/10',
      text: 'Submitted'
    },
    accepted: {
      color: 'text-green-400 bg-green-400/10',
      text: 'Accepted'
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-[#1a2942] rounded-2xl p-6"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{university.name}</h3>
          <div className="flex items-center text-gray-400 mb-2">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{university.location}</span>
          </div>
          <div className="text-blue-400 font-medium">{university.course}</div>
        </div>
        <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-lg text-sm">
          {university.ranking}
        </span>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between text-sm">
          <div className="text-gray-400">
            <Clock className="w-4 h-4 inline mr-1" />
            Application Deadline
          </div>
          <div className="text-white">{university.deadline}</div>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="text-gray-400">Duration</div>
          <div className="text-white">{university.programDuration}</div>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="text-gray-400">Tuition Fee</div>
          <div className="text-white">{university.tuitionFee}</div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-700">
        <span className={`flex items-center space-x-2 px-3 py-1 rounded-lg ${
          statusConfig[university.applicationStatus].color
        }`}>
          {university.applicationStatus === 'accepted' ? (
            <CheckCircle className="w-4 h-4" />
          ) : (
            <AlertCircle className="w-4 h-4" />
          )}
          <span>{statusConfig[university.applicationStatus].text}</span>
        </span>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors">
          <span>View Details</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
} 