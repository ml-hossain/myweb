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
      university: 'Oxford University',
      program: 'Master\'s in International Relations',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80',
      rating: 5,
      text: 'NextGen EduMirate Solutions made my dream of studying at Oxford a reality. Their scholarship guidance helped me secure a full scholarship, and their visa support was seamless.'
    },
    {
      name: 'Ahmad Rahman',
      country: 'Bangladesh',
      university: 'MIT',
      program: 'PhD in Computer Science',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80',
      rating: 5,
      text: 'The team\'s expertise in STEM programs was incredible. They guided me through the entire application process and helped me get into my top choice university.'
    },
    {
      name: 'Maria Garcia',
      country: 'Spain',
      university: 'University of Toronto',
      program: 'Bachelor\'s in Business',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80',
      rating: 5,
      text: 'From application to arrival, NextGen EduMirate Solutions supported me every step of the way. Their travel planning service made my transition to Canada so smooth.'
    },
  ];

  const team = [
    {
      name: 'Dr. Muhammad Rahman',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      about: 'Dr. Muhammad Rahman is the visionary founder of NextGen EduMirate Solutions with over 18 years of experience in international education consulting. He holds a PhD in Educational Leadership from Harvard University and has personally guided over 5,000 students to achieve their dreams of studying abroad. His expertise spans across university admissions, scholarship strategies, and global education trends. Under his leadership, NextGen EduMirate Solutions has maintained a 98% success rate in student placements and has established partnerships with over 500 universities worldwide. Dr. Rahman is a sought-after speaker at international education conferences and has authored multiple research papers on cross-cultural education adaptation.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Education Services',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      about: 'Sarah Johnson brings 12+ years of specialized expertise in university admissions and academic planning. She graduated summa cum laude from Oxford University with a Master\'s in International Education Policy. Sarah has personally reviewed over 10,000 university applications and has an intimate understanding of admission requirements across top institutions in the US, UK, Canada, and Australia. Her strategic approach to profile building and application crafting has helped students secure admissions to Ivy League schools, Russell Group universities, and other prestigious institutions. She also leads our scholarship division, having secured over $50 million in scholarships for students over her career.'
    },
    {
      name: 'Ahmed Al-Rashid',
      role: 'Senior Visa Consultant',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      about: 'Ahmed Al-Rashid is our visa specialist with an outstanding 99.2% visa approval rate across all major study destinations. With 15 years of experience in immigration law and student visa processing, he holds certifications from multiple immigration authorities and maintains up-to-date knowledge of ever-changing visa regulations. Ahmed has successfully processed over 8,000 student visa applications and specializes in complex cases including visa appeals and re-applications. His multilingual abilities (Arabic, English, French, and German) enable him to serve students from diverse backgrounds. He regularly conducts visa preparation workshops and has authored the comprehensive "Student Visa Success Guide" used by counselors worldwide.'
    },
    {
      name: 'Lisa Chen',
      role: 'Director of Student Services',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      about: 'Lisa Chen oversees our comprehensive student support services, ensuring every student receives personalized attention throughout their journey. With a Master\'s degree in Psychology from Stanford University and 10 years in student counseling, she understands the emotional and practical challenges students face when moving abroad. Lisa has developed our proprietary pre-departure orientation program and ongoing support system that includes academic mentoring, cultural adaptation assistance, and career guidance. She leads a team of 25 counselors and has personally mentored over 3,000 students. Her innovative approach to student welfare has been recognized by the International Association of Student Affairs Professionals.'
    },
    {
      name: 'David Thompson',
      role: 'Travel & Logistics Manager',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      about: 'David Thompson manages all travel and logistics operations with meticulous attention to detail and cost optimization. He brings 14 years of experience from the travel industry, including 8 years with international airlines and 6 years in educational travel. David has coordinated travel arrangements for over 12,000 students and has established partnerships with major airlines to secure exclusive student discounts. His expertise includes complex itinerary planning, travel insurance coordination, and emergency travel assistance. He holds certifications in International Air Transport Association (IATA) and is our go-to expert for last-minute travel changes and emergency situations. David\'s proactive approach has saved students thousands of dollars in travel costs while ensuring seamless journey experiences.'
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'Academic Advisor & Research Specialist',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      about: 'Dr. Priya Sharma is our academic advisor specializing in STEM programs and research opportunities. She holds a PhD in Computer Science from MIT and has worked as a professor at leading universities before joining NextGen EduMirate Solutions. Dr. Sharma has extensive knowledge of research programs, graduate assistantships, and academic funding opportunities across top-tier institutions. She has helped over 2,500 students identify the perfect academic programs aligned with their career goals and has a particular expertise in emerging fields like AI, data science, and biotechnology. Her network of academic contacts spans across 40+ countries, enabling her to provide insider insights into program selection and research opportunities that significantly enhance students\' academic and career prospects.'
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
                  className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col"
                >
                  <div className={`${service.color} p-6 text-white`}>
                    <Icon size={48} className="mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-blue-100">{service.description}</p>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <ul className="space-y-3 mb-6 flex-1">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2">
                          <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={service.link} className="mt-auto">
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
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-blue-600">{testimonial.university}</p>
                    <p className="text-gray-600 text-sm flex items-center">
                      <MapPin size={12} className="mr-1" />
                      {testimonial.country}
                    </p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">{testimonial.program}</p>
                </div>
                <p className="text-gray-700 italic text-sm leading-relaxed">&quot;{testimonial.text}&quot;</p>
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
