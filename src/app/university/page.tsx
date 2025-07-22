"use client";
import { useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Button from '@/components/Button';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}
import { ChevronDown, MapPin, Star, Newspaper, ArrowLeft, ArrowRight } from 'lucide-react';

  // Utility function to create URL-friendly slugs
  const createSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-'); // Replace multiple hyphens with single hyphen
  };

  const universities = [
    { id: 1, name: 'Harvard University', country: 'USA', type: 'Private', image: 'https://images.unsplash.com/photo-1589995228333-f2b47a8e93de?q=80&w=2070&auto=format&fit=crop', description: 'An Ivy League university in Cambridge, Massachusetts, known for its academic excellence and influential alumni.' },
    { id: 2, name: 'University of Cambridge', country: 'UK', type: 'Public', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop', description: 'A historic institution in the UK, celebrated for its contributions to science and the arts.' },
    { id: 3, name: 'ETH Zurich', country: 'Switzerland', type: 'Public', image: 'https://images.unsplash.com/photo-1541848003348-015ea4388924?q=80&w=2070&auto=format&fit=crop', description: 'A leading university for science and technology, located in the heart of Europe.' },
    { id: 4, name: 'National University of Singapore', country: 'Singapore', type: 'Public', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop', description: 'Asia\'s top university, offering a global approach to education and research.' },
    { id: 5, name: 'University of Toronto', country: 'Canada', type: 'Public', image: 'https://images.unsplash.com/photo-1591854068922-23291f865939?q=80&w=2070&auto=format&fit=crop', description: 'Canada\'s leading institution of learning, discovery and knowledge creation.' },
    { id: 6, name: 'University of Tokyo', country: 'Japan', type: 'Public', image: 'https://images.unsplash.com/photo-1579829657828-d33991de3f33?q=80&w=2070&auto=format&fit=crop', description: 'A world-class research university in Japan, fostering a rich and diverse academic community.' },
    { id: 7, name: 'University of Melbourne', country: 'Australia', type: 'Public', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2070&auto=format&fit=crop', description: 'A top-ranked Australian university with a strong focus on research and innovation.' },
    { id: 8, name: 'Peking University', country: 'China', type: 'Public', image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop', description: 'A major Chinese research university, and a member of the elite C9 League of Chinese universities.' },
    { id: 9, name: 'Sorbonne University', country: 'France', type: 'Public', image: 'https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?q=80&w=1974&auto=format&fit=crop', description: 'A public research university in Paris, France, with a long and rich history of academic excellence.' },
    { id: 10, name: 'Technical University of Munich', country: 'Germany', type: 'Public', image: 'https://images.unsplash.com/photo-1609619385012-10d378933327?q=80&w=2070&auto=format&fit=crop', description: 'One of Europe\'s leading research universities, specializing in engineering and technology.' },
    { id: 11, name: 'University of Oxford', country: 'UK', type: 'Public', image: 'https://images.unsplash.com/photo-1529113241094-e49831001405?q=80&w=2070&auto=format&fit=crop', description: 'The oldest university in the English-speaking world, renowned for its tutorial-based teaching.' },
    { id: 12, name: 'Stanford University', country: 'USA', type: 'Private', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop', description: 'A private research university in Stanford, California, known for its entrepreneurial spirit.' },
];

const topUniversities = universities.slice(0, 5);

const recentNews = [
  { id: 1, title: 'New Scholarship Programs Announced for 2025', href: '#' },
  { id: 2, title: 'Tips for a Successful University Application', href: '#' },
  { id: 3, title: 'Student Visa Requirements: What\'s New?', href: '#' },
  { id: 4, title: 'Exploring Extracurriculars for a Stronger Profile', href: '#' },
];

const ITEMS_PER_PAGE = 9;

const UniversityPage = () => {
  const [country, setCountry] = useState('');
  const [type, setType] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredUniversities = universities.filter(uni => {
    return (country ? uni.country === country : true) && (type ? uni.type === type : true);
  });

  const totalPages = Math.ceil(filteredUniversities.length / ITEMS_PER_PAGE);
  const paginatedUniversities = filteredUniversities.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Find Your University</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore top universities from around the world. Use the filters to narrow down your search and find the perfect fit for your academic journey.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content: Filters + University Grid */}
          <div className="lg:col-span-9">
            <div className="flex flex-col md:flex-row gap-6 mb-10 justify-start">
              <div className="relative">
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="appearance-none w-full md:w-64 bg-white border border-gray-300 rounded-lg py-3 px-4 pr-8 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All Countries</option>
                  {[...new Set(universities.map(u => u.country))].sort().map(c => <option key={c} value={c}>{c}</option>)}
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
                  {[...new Set(universities.map(u => u.type))].sort().map(t => <option key={t} value={t}>{t}</option>)}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDown size={20} />
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {paginatedUniversities.map((uni, index) => (
                <div
                  key={uni.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="relative">
                    <img src={uni.image} alt={`Image of ${uni.name}`} className="w-full h-48 object-cover" />
                    <span className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 text-xs font-bold rounded-full shadow-md">{uni.type}</span>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <MapPin size={14} className="mr-1" />
                      <span>{uni.country}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 h-14 overflow-hidden">{uni.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 flex-grow h-20 overflow-hidden">{uni.description}</p>
                    <Link href={`/university/${createSlug(uni.name)}`} className="mt-auto self-start inline-block bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300">
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center items-center space-x-4">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ArrowLeft size={16} className="mr-2" />
                  Previous
                </button>

                <div className="flex items-center space-x-2">
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => handlePageChange(i + 1)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        currentPage === i + 1
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-white border border-gray-300 text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Next
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-3 space-y-10">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Star className="mr-2 text-yellow-500" /> Top Universities
              </h3>
              <ul className="space-y-4">
                {topUniversities.map(uni => (
                  <li key={uni.id} className="flex items-start space-x-3">
                    <img src={uni.image} alt={uni.name} className="w-16 h-16 rounded-lg object-cover" />
                    <div>
                      <a href="#" className="font-semibold text-gray-700 hover:text-blue-600 transition-colors text-sm leading-tight">{uni.name}</a>
                      <p className="text-xs text-gray-500">{uni.country}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Newspaper className="mr-2 text-blue-600" /> Recent News
              </h3>
              <ul className="space-y-3">
                {recentNews.map(news => (
                  <li key={news.id}>
                    <a href={news.href} className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium">
                      {news.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

        </div>
      </main>
    </div>
  );
};

export default UniversityPage;

// Export universities data for use in dynamic routes
export { universities };
