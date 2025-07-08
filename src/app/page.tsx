'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import TeamCarousel from '@/components/TeamCarousel';
import { 
  GraduationCap, 
  Plane, 
  FileText, 
  Star, 
  Users, 
  Award, 
  Globe,
  CheckCircle,
  ArrowRight,
  BookOpen,
  MapPin,
  Clock
} from 'lucide-react';

const HomePage: React.FC = () => {
  const stats = [
    { icon: Users, number: '10,000+', label: 'Students Helped' },
    { icon: Globe, number: '50+', label: 'Countries' },
    { icon: Award, number: '500+', label: 'University Partners' },
    { icon: Star, number: '98%', label: 'Success Rate' },
  ];

  const services = [
    {
      icon: GraduationCap,
      title: 'Education Services',
      description: 'Complete guidance for studying abroad including admissions, scholarships, and course selection.',
      features: ['University Admissions', 'Scholarship Guidance', 'Course Selection', 'Document Preparation'],
      link: '/education',
      color: 'bg-blue-500'
    },
    {
      icon: Plane,
      title: 'Travel Services',
      description: 'Comprehensive travel planning and booking services for your educational journey.',
      features: ['Flight Booking', 'Hotel Reservations', 'Travel Insurance', 'Itinerary Planning'],
      link: '/travel',
      color: 'bg-green-500'
    },
    {
      icon: FileText,
      title: 'Visa Services',
      description: 'Expert assistance with visa applications and documentation for smooth approval.',
      features: ['Visa Application', 'Document Review', 'Interview Preparation', 'Status Tracking'],
      link: '/visa',
      color: 'bg-purple-500'
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      country: 'USA',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'EduTravel made my dream of studying in Germany a reality. Their guidance was invaluable throughout the entire process.'
    },
    {
      name: 'Ahmad Rahman',
      country: 'Bangladesh',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'The visa application process was seamless with their expert help. I got my student visa approved in just 3 weeks!'
    },
    {
      name: 'Maria Garcia',
      country: 'Spain',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'From university selection to travel arrangements, they handled everything professionally. Highly recommended!'
    },
  ];

  const team = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      image: '/api/placeholder/400/400',
      about: 'John leads the company with a vision for global education access. With 15+ years in the industry, he ensures every student gets the best guidance.'
    },
    {
      name: 'Jane Smith',
      role: 'Head of Education',
      image: '/api/placeholder/400/400',
      about: 'Jane specializes in university admissions and scholarship strategies, helping thousands of students achieve their academic dreams.'
    },
    {
      name: 'Peter Jones',
      role: 'Lead Travel Consultant',
      image: '/api/placeholder/400/400',
      about: 'Peter crafts seamless travel experiences for students, from flights to accommodation, ensuring a stress-free journey abroad.'
    },
    {
      name: 'Samuel Green',
      role: 'Visa Expert',
      image: '/api/placeholder/400/400',
      about: 'Samuel is a visa specialist with a 98% approval rate, guiding students through every step of the application process.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Your Gateway to
                <span className="block text-yellow-400">Global Education</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Transform your dreams into reality with our comprehensive education, travel, and visa services. 
                We guide you every step of the way to your international education journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/education">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-yellow-400 text-blue-900 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg flex items-center justify-center space-x-2 hover:bg-yellow-300 transition-colors whitespace-nowrap"
                  >
                    <BookOpen size={20} />
                    <span>Explore Education</span>
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg flex items-center justify-center space-x-2 hover:bg-white hover:text-blue-800 transition-colors whitespace-nowrap"
                  >
                    <span>Get Consultation</span>
                    <ArrowRight size={20} />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
                <h3 className="text-2xl font-semibold">Quick Start</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-400" size={20} />
                    <span>Free consultation call</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-400" size={20} />
                    <span>Personalized study plan</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-400" size={20} />
                    <span>University shortlisting</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-400" size={20} />
                    <span>Application support</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for your international education journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className={`${service.color} p-6 text-white`}>
                    <Icon size={48} className="mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-blue-100">{service.description}</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2">
                          <CheckCircle size={16} className="text-green-500" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={service.link}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap"
                      >
                        Learn More
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamCarousel team={team} />

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600">Real experiences from students who achieved their dreams</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm flex items-center">
                      <MapPin size={12} className="mr-1" />
                      {testimonial.country}
                    </p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic">&quot;{testimonial.text}&quot;</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Begin Your Adventure Today</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Your global education and travel journey starts here. Connect with our expert consultants for personalized guidance and unlock a world of opportunities. Let's build your future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-400 text-blue-900 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg flex items-center justify-center space-x-2 hover:bg-yellow-300 transition-colors whitespace-nowrap"
                >
                  <Users size={20} />
                  <span>Request a Callback</span>
                </motion.button>
              </Link>
              <Link href="/university">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center space-x-2 whitespace-nowrap"
                >
                  <Globe size={20} />
                  <span>View Universities</span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
