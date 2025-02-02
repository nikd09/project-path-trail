import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';

export const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <Compass 
          className="w-8 h-8 text-emerald-500"
        />
      </motion.div>
      <span className="text-xl font-bold text-gray-900 dark:text-white transition-colors">
        PathFinder
      </span>
    </Link>
  );
};

export default Logo; 