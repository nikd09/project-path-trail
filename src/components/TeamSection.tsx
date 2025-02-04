import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  image: string;
  linkedIn?: string;
  email?: string;
}

export function TeamSection() {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Ajay Adhitya Balasubramanian",
      image: "/team/ajay.jpg", // Place your images in public/team folder
      linkedIn: "https://linkedin.com/in/ajay-adhitya",
      email: "ajay@example.com"
    },
    {
      id: 2,
      name: "Kesavarthanan Gali Makesh Kumar",
      image: "/team/kesav.jpg",
      linkedIn: "https://linkedin.com/in/kesavarthanan",
      email: "kesav@example.com"
    },
    {
      id: 3,
      name: "Nikhil Deshmukh",
      image: "/team/nikhil.jpg",
      linkedIn: "https://linkedin.com/in/nikhil-deshmukh",
      email: "nikhil@example.com"
    },
    {
      id: 4,
      name: "Rishab Nair",
      image: "/team/rishab.jpg",
      linkedIn: "https://linkedin.com/in/rishab-nair",
      email: "rishab@example.com"
    },
    {
      id: 5,
      name: "Rushikesh Bagul",
      image: "/team/rushikesh.jpg",
      linkedIn: "https://linkedin.com/in/rushikesh-bagul",
      email: "rushikesh@example.com"
    },
    {
      id: 6,
      name: "Soyeon Woo",
      image: "/team/soyeon.jpg",
      linkedIn: "https://linkedin.com/in/soyeon-woo",
      email: "soyeon@example.com"
    }
  ];

  console.log('TeamSection rendering with members:', teamMembers);

  return (
    <section className="py-16 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-10"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: member.id * 0.1 }}
                className="bg-[#1a2942] rounded-2xl p-6 hover:bg-[#243755] transition-colors"
              >
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white text-center mb-2">
                    {member.name}
                  </h3>
                  <div className="flex items-center space-x-4 mt-4">
                    {member.linkedIn && (
                      <a
                        href={member.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="text-gray-400 hover:text-gray-300 transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 