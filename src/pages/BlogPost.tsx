import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from 'react-share';

const blogContents: { [key: string]: any } = {
  'study-in-germany': {
    title: 'Complete Guide to Studying in Germany 2024',
    date: '2024-03-15',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952',
    category: 'Education',
    content: `
      <h2 class="text-2xl font-bold mb-4">Introduction to German Education System</h2>
      <p class="mb-6">Germany's higher education system is renowned worldwide for its excellence and accessibility. With over 400 universities and institutions, it offers a diverse range of programs for international students.</p>

      <h2 class="text-2xl font-bold mb-4">Requirements for Admission</h2>
      <ul class="list-disc pl-6 mb-6">
        <li>High school diploma or equivalent qualification</li>
        <li>German language proficiency (usually B2/C1 level)</li>
        <li>Proof of financial resources</li>
        <li>Health insurance</li>
        <li>Valid passport</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4">Application Process</h2>
      <p class="mb-6">The application process typically involves several steps:</p>
      <ol class="list-decimal pl-6 mb-6">
        <li>Choose your program and university</li>
        <li>Verify admission requirements</li>
        <li>Prepare necessary documents</li>
        <li>Submit application through uni-assist or directly to the university</li>
        <li>Wait for admission decision</li>
        <li>Apply for student visa</li>
      </ol>
    `
  },
  'german-student-visa': {
    title: 'German Student Visa Application Process',
    date: '2024-03-10',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173',
    category: 'Visa',
    content: `
      <h2 class="text-2xl font-bold mb-4">Types of Student Visas</h2>
      <p class="mb-6">Understanding the different types of student visas available for studying in Germany.</p>

      <h2 class="text-2xl font-bold mb-4">Required Documents</h2>
      <ul class="list-disc pl-6 mb-6">
        <li>Valid passport</li>
        <li>University admission letter</li>
        <li>Proof of financial resources</li>
        <li>Health insurance</li>
        <li>German language proficiency proof</li>
      </ul>
    `
  },
  'cost-of-living': {
    title: 'Cost of Living for Students in Germany',
    date: '2024-03-05',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e',
    category: 'Finance',
    content: `
      <h2 class="text-2xl font-bold mb-4">Monthly Living Expenses</h2>
      <p class="mb-6">A detailed breakdown of typical monthly expenses in Germany:</p>

      <h3 class="text-xl font-bold mb-3">Accommodation</h3>
      <ul class="list-disc pl-6 mb-6">
        <li>Student dormitory: €200-300</li>
        <li>Shared apartment: €300-450</li>
        <li>Private apartment: €500+</li>
      </ul>

      <h3 class="text-xl font-bold mb-3">Other Expenses</h3>
      <ul class="list-disc pl-6 mb-6">
        <li>Food: €200-250</li>
        <li>Transportation: €50-100</li>
        <li>Health Insurance: €110</li>
        <li>Internet & Phone: €30-50</li>
        <li>Study Materials: €50</li>
      </ul>
    `
  },
  'learn-german': {
    title: 'Best Ways to Learn German Language',
    date: '2024-03-01',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1527866959252-deab85ef7d1b',
    category: 'Language',
    content: `
      <h2 class="text-2xl font-bold mb-4">Why Learn German?</h2>
      <p class="mb-6">Learning German opens up numerous opportunities for studying and working in Germany. Here's a comprehensive guide to mastering the language.</p>

      <h2 class="text-2xl font-bold mb-4">Learning Methods</h2>
      <ul class="list-disc pl-6 mb-6">
        <li>Language schools and intensive courses</li>
        <li>Online learning platforms (Duolingo, Babbel, etc.)</li>
        <li>Language exchange partners</li>
        <li>German media consumption</li>
        <li>Practice groups and conversation clubs</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4">Recommended Resources</h2>
      <p class="mb-6">Here are some excellent resources to help you learn German:</p>
      <ul class="list-disc pl-6 mb-6">
        <li>Deutsche Welle's free online courses</li>
        <li>Goethe-Institut's learning materials</li>
        <li>German podcasts for learners</li>
        <li>YouTube channels for German learners</li>
      </ul>
    `
  },
  'scholarships': {
    title: 'Top Scholarships for International Students',
    date: '2024-02-28',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1604872441539-ef1db9b25f92',
    category: 'Finance',
    content: `
      <h2 class="text-2xl font-bold mb-4">Major Scholarship Programs</h2>
      <p class="mb-6">Germany offers numerous scholarship opportunities for international students:</p>

      <h3 class="text-xl font-bold mb-3">DAAD Scholarships</h3>
      <ul class="list-disc pl-6 mb-6">
        <li>Full degree scholarships</li>
        <li>Research grants</li>
        <li>Exchange programs</li>
        <li>Application deadlines and requirements</li>
      </ul>

      <h3 class="text-xl font-bold mb-3">Erasmus+ Program</h3>
      <ul class="list-disc pl-6 mb-6">
        <li>Exchange opportunities</li>
        <li>Funding amounts</li>
        <li>Eligibility criteria</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4">Application Tips</h2>
      <ul class="list-disc pl-6 mb-6">
        <li>Start applications early</li>
        <li>Prepare required documents</li>
        <li>Write compelling motivation letters</li>
        <li>Get strong recommendation letters</li>
      </ul>
    `
  },
  'student-jobs': {
    title: 'Finding Part-Time Jobs as a Student',
    date: '2024-02-25',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216',
    category: 'Work',
    content: `
      <h2 class="text-2xl font-bold mb-4">Working While Studying</h2>
      <p class="mb-6">Understanding the rules and opportunities for student jobs in Germany:</p>

      <h3 class="text-xl font-bold mb-3">Work Regulations</h3>
      <ul class="list-disc pl-6 mb-6">
        <li>120 full days or 240 half days per year</li>
        <li>Visa requirements</li>
        <li>Tax considerations</li>
      </ul>

      <h3 class="text-xl font-bold mb-3">Popular Student Jobs</h3>
      <ul class="list-disc pl-6 mb-6">
        <li>Research Assistant (HiWi)</li>
        <li>Tutor or Teaching Assistant</li>
        <li>Café/Restaurant Work</li>
        <li>Internships in Companies</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4">Finding Opportunities</h2>
      <ul class="list-disc pl-6 mb-6">
        <li>University job boards</li>
        <li>Online job portals</li>
        <li>Company websites</li>
        <li>Networking events</li>
      </ul>
    `
  },
  'health-insurance': {
    title: 'Guide to Health Insurance for International Students',
    date: '2024-02-20',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
    category: 'Insurance',
    content: `
      <h2 class="text-2xl font-bold mb-4">Health Insurance Requirements</h2>
      <p class="mb-6">Health insurance is mandatory for all students in Germany. Here's what you need to know:</p>

      <h3 class="text-xl font-bold mb-3">Types of Health Insurance</h3>
      <ul class="list-disc pl-6 mb-6">
        <li>Public Health Insurance (Gesetzliche Krankenversicherung)</li>
        <li>Private Health Insurance (Private Krankenversicherung)</li>
        <li>Travel Insurance (not sufficient for enrollment)</li>
      </ul>

      <h3 class="text-xl font-bold mb-3">Coverage Details</h3>
      <ul class="list-disc pl-6 mb-6">
        <li>Doctor visits and medical treatments</li>
        <li>Hospital stays</li>
        <li>Prescription medications</li>
        <li>Basic dental care</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4">How to Choose Insurance</h2>
      <p class="mb-6">Factors to consider when selecting health insurance:</p>
      <ul class="list-disc pl-6 mb-6">
        <li>Age (under/over 30)</li>
        <li>Length of stay</li>
        <li>Pre-existing conditions</li>
        <li>Budget considerations</li>
      </ul>
    `
  },
  'accommodation-guide': {
    title: 'Finding Student Accommodation in Germany',
    date: '2024-02-15',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    category: 'Housing',
    content: `
      <h2 class="text-2xl font-bold mb-4">Housing Options</h2>
      <p class="mb-6">Different types of student accommodation available:</p>

      <h3 class="text-xl font-bold mb-3">Student Residences</h3>
      <ul class="list-disc pl-6 mb-6">
        <li>Application process</li>
        <li>Costs and deposits</li>
        <li>Facilities and amenities</li>
      </ul>

      <h3 class="text-xl font-bold mb-3">Private Housing</h3>
      <ul class="list-disc pl-6 mb-6">
        <li>WG (Shared apartments)</li>
        <li>Studio apartments</li>
        <li>Tips for apartment hunting</li>
      </ul>
    `
  },
  'blocked-account': {
    title: 'Opening a Blocked Account in Germany',
    date: '2024-02-10',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc',
    category: 'Finance',
    content: `
      <h2 class="text-2xl font-bold mb-4">What is a Blocked Account?</h2>
      <p class="mb-6">A blocked account (Sperrkonto) is a special type of bank account required for international students to prove their financial capability during their stay in Germany.</p>

      <h3 class="text-xl font-bold mb-3">Key Requirements</h3>
      <ul class="list-disc pl-6 mb-6">
        <li>Minimum deposit: €11,208 (as of 2024)</li>
        <li>Monthly withdrawal limit: €934</li>
        <li>Valid passport or ID</li>
        <li>University admission letter</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4">Opening Process</h2>
      <ol class="list-decimal pl-6 mb-6">
        <li>Choose a bank (Deutsche Bank, Fintiba, etc.)</li>
        <li>Complete online application</li>
        <li>Verify identity</li>
        <li>Transfer funds</li>
        <li>Receive account confirmation</li>
      </ol>

      <h2 class="text-2xl font-bold mb-4">Important Tips</h2>
      <ul class="list-disc pl-6 mb-6">
        <li>Start the process early</li>
        <li>Consider transfer fees</li>
        <li>Keep all documentation</li>
        <li>Understand withdrawal rules</li>
      </ul>
    `
  },
  'student-banking': {
    title: 'Banking Guide for International Students',
    date: '2024-02-05',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc',
    category: 'Finance',
    content: `
      <h2 class="text-2xl font-bold mb-4">Banking in Germany</h2>
      <p class="mb-6">Understanding the German banking system and setting up your finances as an international student.</p>

      <h3 class="text-xl font-bold mb-3">Types of Bank Accounts</h3>
      <ul class="list-disc pl-6 mb-6">
        <li>Girokonto (Current Account)</li>
        <li>Sparkonto (Savings Account)</li>
        <li>Digital Banking Options</li>
      </ul>

      <h3 class="text-xl font-bold mb-3">Required Documents</h3>
      <ul class="list-disc pl-6 mb-6">
        <li>Valid passport</li>
        <li>Student ID/University enrollment</li>
        <li>Registration certificate (Meldebescheinigung)</li>
        <li>Tax ID (if applicable)</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4">Banking Tips</h2>
      <ul class="list-disc pl-6 mb-6">
        <li>Compare account fees</li>
        <li>Check ATM networks</li>
        <li>Consider online banks</li>
        <li>Set up direct debits</li>
      </ul>
    `
  },
  'transportation': {
    title: 'Public Transportation for Students',
    date: '2024-02-01',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1527786356703-4b100091cd2c',
    category: 'Transport',
    content: `
      <h2 class="text-2xl font-bold mb-4">German Public Transport System</h2>
      <p class="mb-6">Germany's extensive public transportation network makes traveling easy and affordable for students.</p>

      <h3 class="text-xl font-bold mb-3">Transport Options</h3>
      <ul class="list-disc pl-6 mb-6">
        <li>U-Bahn (Subway)</li>
        <li>S-Bahn (Suburban Trains)</li>
        <li>Buses and Trams</li>
        <li>Regional Trains</li>
      </ul>

      <h3 class="text-xl font-bold mb-3">Student Benefits</h3>
      <ul class="list-disc pl-6 mb-6">
        <li>Semester ticket coverage</li>
        <li>Discounted rates</li>
        <li>Night bus services</li>
        <li>Holiday travel options</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4">Travel Tips</h2>
      <ul class="list-disc pl-6 mb-6">
        <li>Download transport apps</li>
        <li>Understand zones and tariffs</li>
        <li>Plan routes in advance</li>
        <li>Consider bike sharing</li>
      </ul>
    `
  },
  'student-life': {
    title: 'Student Life in German Universities',
    date: '2024-01-28',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
    category: 'Lifestyle',
    content: `
      <h2 class="text-2xl font-bold mb-4">Campus Life</h2>
      <p class="mb-6">Experience the vibrant student life and culture at German universities.</p>

      <h3 class="text-xl font-bold mb-3">Student Organizations</h3>
      <ul class="list-disc pl-6 mb-6">
        <li>Student unions (AStA)</li>
        <li>Sports clubs</li>
        <li>Cultural groups</li>
        <li>Academic societies</li>
      </ul>

      <h3 class="text-xl font-bold mb-3">Social Activities</h3>
      <ul class="list-disc pl-6 mb-6">
        <li>University events</li>
        <li>International meetups</li>
        <li>Language tandems</li>
        <li>Cultural festivals</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4">Student Support</h2>
      <ul class="list-disc pl-6 mb-6">
        <li>Academic advisors</li>
        <li>International office</li>
        <li>Career services</li>
        <li>Mental health support</li>
      </ul>
    `
  }
};

export function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogContents[id || ''];
  const shareUrl = window.location.href;

  // Add social share section after the content
  const SocialShare = () => (
    <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Share2 className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          <span className="text-gray-600 dark:text-gray-300">Share this article:</span>
        </div>
        <div className="flex space-x-4">
          <FacebookShareButton url={shareUrl} quote={post.title}>
            <FacebookIcon size={32} round className="hover:opacity-80 transition-opacity" />
          </FacebookShareButton>
          
          <TwitterShareButton url={shareUrl} title={post.title}>
            <TwitterIcon size={32} round className="hover:opacity-80 transition-opacity" />
          </TwitterShareButton>
          
          <LinkedinShareButton url={shareUrl} title={post.title}>
            <LinkedinIcon size={32} round className="hover:opacity-80 transition-opacity" />
          </LinkedinShareButton>
          
          <WhatsappShareButton url={shareUrl} title={post.title}>
            <WhatsappIcon size={32} round className="hover:opacity-80 transition-opacity" />
          </WhatsappShareButton>
        </div>
      </div>
    </div>
  );

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1>Blog post not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-24">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link 
            to="/blog" 
            className="inline-flex items-center text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="mb-8">
            <span className="px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-green-500 rounded-full">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {post.title}
          </h1>

          <div className="flex items-center space-x-6 text-gray-500 dark:text-gray-400 mb-8">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {post.readTime}
            </div>
          </div>

          <div className="relative h-96 rounded-xl overflow-hidden mb-12">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div 
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Add social share section */}
          <SocialShare />
        </motion.div>
      </article>
    </div>
  );
}

export default BlogPost; 