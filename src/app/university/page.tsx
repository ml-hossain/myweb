
"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const universities = [
  { id: 1, name: 'Harvard University', country: 'USA', type: 'Private' },
  { id: 2, name: 'University of Cambridge', country: 'UK', type: 'Public' },
  { id: 3, name: 'ETH Zurich', country: 'Switzerland', type: 'Public' },
  { id: 4, name: 'National University of Singapore', country: 'Singapore', type: 'Public' },
  { id: 5, name: 'University of Toronto', country: 'Canada', type: 'Public' },
  { id: 6, name: 'University of Tokyo', country: 'Japan', type: 'Public' },
  { id: 7, name: 'University of Melbourne', country: 'Australia', type: 'Public' },
  { id: 8, name: 'Peking University', country: 'China', type: 'Public' },
  { id: 9, name: 'Sorbonne University', country: 'France', type: 'Public' },
  { id: 10, name: 'Technical University of Munich', country: 'Germany', type: 'Public' },
  { id: 11, name: 'University of Oxford', country: 'UK', type: 'Public' },
  { id: 12, name: 'Stanford University', country: 'USA', type: 'Private' },
  { id: 13, name: 'MIT', country: 'USA', type: 'Private' },
  { id: 14, name: 'UBC', country: 'Canada', type: 'Public' },
];

const UniversityPage = () => {
  const [country, setCountry] = useState('');
  const [type, setType] = useState('');

  const filteredUniversities = universities.filter(uni => {
    return (country ? uni.country === country : true) && (type ? uni.type === type : true);
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Find Your University</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore top universities from around the world. Use the filters to narrow down your search and find the perfect fit for your academic journey.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6 mb-10 justify-center">
          <div className="relative">
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="appearance-none w-full md:w-64 bg-white border border-gray-300 rounded-lg py-3 px-4 pr-8 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Countries</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
              <option value="Germany">Germany</option>
              <option value="France">France</option>
              <option value="Japan">Japan</option>
              <option value="China">China</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Singapore">Singapore</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <ChevronDown size={20} />
            </div>
          </div>
          <div className="relative">
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="appearance-none w-full md:w-64 bg-white border border-gray-300 rounded-lg py-3 px-4 pr-8 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Types</option>
              <option value="Public">Public</option>
              <option value="Private">Private</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <ChevronDown size={20} />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredUniversities.map((uni, index) => (
            <motion.div
              key={uni.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{uni.name}</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <span className="mr-4">{uni.country}</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">{uni.type}</span>
                </div>
                <a href="#" className="font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300">
                  Learn More &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default UniversityPage;
