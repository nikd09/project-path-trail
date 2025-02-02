import React from 'react';
import { ArrowRight, Euro, Rocket, CheckCircle, Globe } from 'lucide-react';

export function HousingBanking() {
  const CORACLE_URL = "https://www.coracle.de";  // Replace with actual Coracle URL

  return (
    <div className="min-h-screen pt-24 bg-white dark:bg-[#0A1628]">
      {/* Hero Section with Enhanced Background */}
      <div className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-green-50/50 dark:from-[#0A1628]/50 dark:to-[#1A2942]/50" />
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(99, 179, 237, 0.1) 1px, transparent 0)',
            backgroundSize: '40px 40px' 
          }} />
          
          {/* Enhanced Floating Elements */}
          <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-[100px] animate-pulse" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-600 dark:text-blue-400 font-medium mb-6">
                Fast, Fully Digital, the Best Price
              </div>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-gray-600 dark:text-gray-400">Powered by</span>
                <img 
                  src="/partners/coracle-logo.svg"
                  alt="Coracle"
                  className="h-8 dark:brightness-0 dark:invert"
                />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Blocked Account
                <span className="block text-blue-600 dark:text-[#4D7EF2]">
                  Germany
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                Get all the benefits, minus all the complications!
              </p>
              <p className="text-3xl font-semibold text-gray-900 dark:text-white mb-8">
                Starting at <span className="text-blue-600 dark:text-[#4D7EF2]">€59*</span>
              </p>
              <a
                href={CORACLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 dark:from-[#4D7EF2] dark:to-[#22C55E] text-white rounded-full font-medium hover:from-blue-700 hover:to-green-700 dark:hover:from-[#4169E1] dark:hover:to-[#1EA34D] transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
              >
                Open Now
                <ArrowRight className="w-6 h-6 ml-2" />
              </a>
            </div>
            <div className="relative z-10">
              <div className="relative">
                {/* Enhanced Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-green-500/20 dark:from-[#4D7EF2]/20 dark:to-[#22C55E]/20 rounded-3xl blur-3xl transform -rotate-6" />
                <img 
                  src="/student-with-books.png"
                  alt="Student ready for Germany" 
                  className="relative w-[140%] max-w-none ml-[-20%] transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid with Enhanced Design */}
      <div className="relative py-20 bg-gray-50 dark:bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Open your{' '}
            <span className="text-blue-600 dark:text-[#4D7EF2]">German Blocked Account</span>{' '}
            online
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Euro,
                title: "Fair price",
                description: "Just 99 Euros. That's it. No monthly fees, no hidden charges, no cash backs, etc."
              },
              {
                icon: Rocket,
                title: "Rocket Fast Opening",
                description: "Open your blocked account within 2 hours"
              },
              {
                icon: CheckCircle,
                title: "100% Acceptance Rate",
                description: "Accepted by all German Embassies & Consulates"
              },
              {
                icon: Globe,
                title: "Local Currency Transfer",
                description: "Transfer in your local currency and save money on international transfers"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
              >
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <a
              href={CORACLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Create Account Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* Accommodation Services Section */}
      <div className="relative py-20 bg-white dark:bg-[#0A1628] overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header with Enhanced Design */}
          <div className="text-center mb-20 relative">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 relative group">
              <span className="inline-block relative">
                Accommodation Services
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Access Germany's top platforms for student accommodation. Find your perfect home with our trusted partners.
            </p>
          </div>

          {/* Partner Cards - Fixed Layout */}
          <div className="grid grid-cols-5 gap-6">
            {[
              {
                logo: "/partners/immoscout24-logo.svg",
                name: "ImmobilienScout24",
                description: "Germany's largest real estate platform",
                url: "https://www.immobilienscout24.de",
                bgGradient: "from-emerald-400/20 via-emerald-500/20 to-teal-500/20",
                darkMode: true,
                maxWidth: "140px"
              },
              {
                logo: "/partners/wunderflats-logo.svg",
                name: "Wunderflats",
                description: "Furnished apartments for students",
                url: "https://wunderflats.com",
                bgGradient: "from-violet-400/20 via-violet-500/20 to-purple-500/20",
                darkMode: false,
                maxWidth: "140px"
              },
              {
                logo: "/partners/wg-gesucht-logo.png",
                name: "WG-Gesucht",
                description: "Shared accommodation finder",
                url: "https://www.wg-gesucht.de",
                bgGradient: "from-orange-400/20 via-orange-500/20 to-amber-500/20",
                darkMode: false,
                maxWidth: "200px"
              },
              {
                logo: "/partners/ebay-kleinanzeigen-logo.svg",
                name: "eBay Kleinanzeigen",
                description: "Local classified ads for housing",
                url: "https://www.ebay-kleinanzeigen.de",
                bgGradient: "from-green-400/20 via-green-500/20 to-emerald-500/20",
                darkMode: false
              },
              {
                logo: "/partners/housinganywhere-logo.svg",
                name: "HousingAnywhere",
                description: "International student housing platform",
                url: "https://housinganywhere.com",
                bgGradient: "from-orange-400/20 via-orange-500/20 to-red-500/20",
                darkMode: false
              }
            ].map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 h-[300px] flex flex-col hover:-translate-y-2"
              >
                {/* Gradient Background Effect */}
                <div 
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${partner.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Logo Container */}
                  <div className="h-28 mb-6 flex items-center justify-center p-2">
                    <img 
                      src={partner.logo}
                      alt={partner.name}
                      className={`transition-transform duration-500 ${
                        partner.darkMode ? 'dark:brightness-0 dark:invert' : ''
                      } group-hover:scale-110`}
                      style={{ 
                        maxWidth: partner.maxWidth || "140px",
                        height: "auto",
                        objectFit: "contain",
                        filter: partner.darkMode ? 'contrast(1.2)' : 'none'
                      }}
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {partner.description}
                    </p>
                  </div>
                  
                  {/* Visit Website Link */}
                  <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                    Visit Website
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 