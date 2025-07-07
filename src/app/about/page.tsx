'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Users,
  Award,
  Globe,
  Target,
  Heart,
  Star,
  Lightbulb,
  Shield,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { icon: Users, number: '10,000+', label: 'Students Helped', color: 'text-blue-600' },
    { icon: Globe, number: '50+', label: 'Countries Served', color: 'text-green-600' },
    { icon: Award, number: '500+', label: 'University Partners', color: 'text-purple-600' },
    { icon: Star, number: '98%', label: 'Success Rate', color: 'text-yellow-600' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every service we provide, ensuring the highest quality guidance for our students.'
    },
    {
      icon: Heart,
      title: 'Student-Centric',
      description: 'Every decision we make is guided by what\'s best for our students\' academic and personal growth.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards and transparency in all our interactions and services.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously evolve our services to meet the changing needs of international education.'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Founder & CEO',
      education: 'PhD Education Policy, Harvard',
      experience: '15+ years',
      specialization: 'US & UK Education Systems',
      image: '/api/placeholder/150/150',
      description: 'Former admissions officer at Harvard University with expertise in international student recruitment.'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Visa Services',
      education: 'JD Immigration Law, NYU',
      experience: '12+ years',
      specialization: 'Immigration & Visa Law',
      image: '/api/placeholder/150/150',
      description: 'Immigration lawyer specializing in student visas with 98% approval rate track record.'
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'Academic Counselor',
      education: 'PhD Psychology, Oxford',
      experience: '10+ years',
      specialization: 'Academic Planning & Career Guidance',
      image: '/api/placeholder/150/150',
      description: 'Educational psychologist helping students make informed decisions about their academic future.'
    },
    {
      name: 'James Thompson',
      role: 'Travel Services Director',
      education: 'MBA International Business',
      experience: '8+ years',
      specialization: 'International Travel & Logistics',
      image: '/api/placeholder/150/150',
      description: 'Former airline executive with extensive experience in student travel arrangements worldwide.'
    }
  ];

  const timeline = [
    {
      year: '2015',
      title: 'Foundation',
      description: 'EduTravel was founded with a mission to make international education accessible to students worldwide.'
    },
    {
      year: '2017',
      title: 'First 1,000 Students',
      description: 'Reached our first milestone of helping 1,000 students achieve their international education dreams.'
    },
    {
      year: '2019',
      title: 'Global Expansion',
      description: 'Expanded operations to 25 countries and established partnerships with 200+ universities.'
    },
    {
      year: '2021',
      title: 'Digital Innovation',
      description: 'Launched our comprehensive digital platform for virtual consultations and document management.'
    },
    {
      year: '2023',
      title: 'Industry Recognition',
      description: 'Received "Best Education Consultancy" award and reached 10,000+ successful student placements.'
    },
    {
      year: '2024',
      title: 'Future Vision',
      description: 'Expanding AI-powered services and sustainable education solutions for the next generation.'
    }
  ];

  const testimonials = [
    {
      name: 'Alex Rodriguez',
      role: 'MIT Graduate',
      text: 'EduTravel made my impossible dream possible. Their guidance through every step was invaluable.',
      rating: 5
    },
    {
      name: 'Fatima Al-Rashid',
      role: 'Oxford Student',
      text: 'Professional, caring, and incredibly knowledgeable. They truly care about your success.',
      rating: 5
    },
    {
      name: 'Li Wei',
      role: 'Stanford MBA',
      text: 'From application to visa to settling in, they supported me throughout my entire journey.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About EduTravel</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Empowering students worldwide to achieve their international education dreams through 
              personalized guidance, expert support, and unwavering commitment to success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 hover:bg-yellow-300 transition-colors"
                >
                  <Phone size={20} />
                  <span>Meet Our Team</span>
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-800 transition-colors"
              >
                <span>Our Story</span>
              </motion.button>
            </div>
          </motion.div>
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
                  <div className={`${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-white shadow-lg`}>
                    <Icon size={32} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To democratize access to world-class international education by providing personalized, 
                comprehensive support that removes barriers and empowers students to achieve their academic 
                and career aspirations anywhere in the world.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Personalized Guidance</h4>
                    <p className="text-gray-600">Tailored advice for each student's unique background and goals.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">End-to-End Support</h4>
                    <p className="text-gray-600">From initial consultation to successful graduation and beyond.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Global Network</h4>
                    <p className="text-gray-600">Partnerships with top universities and institutions worldwide.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-900">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the world's most trusted education consultancy, recognized for transforming lives 
                through education and creating a global community of successful, culturally aware leaders 
                who make positive impacts in their chosen fields.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-3">What Sets Us Apart</h4>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-center space-x-2">
                    <Star size={16} className="text-yellow-500" />
                    <span>98% visa approval success rate</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star size={16} className="text-yellow-500" />
                    <span>24/7 student support system</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star size={16} className="text-yellow-500" />
                    <span>Partnerships with 500+ universities</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star size={16} className="text-yellow-500" />
                    <span>Expert team with 100+ years combined experience</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center bg-white p-6 rounded-xl shadow-lg"
                >
                  <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
                    <Icon size={32} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600">Experienced professionals dedicated to your success</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <div className="space-y-1 text-sm text-gray-600 mb-4">
                    <p>{member.education}</p>
                    <p>{member.experience} experience</p>
                    <p className="text-purple-600 font-medium">{member.specialization}</p>
                  </div>
                  <p className="text-gray-700 text-sm">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Milestones in our commitment to student success</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="flex-1">
                    <div className={`bg-white rounded-xl p-6 shadow-lg ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                      <div className="text-blue-600 font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="bg-blue-600 w-4 h-4 rounded-full z-10 relative"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Alumni Say</h2>
            <p className="text-xl text-gray-600">Success stories from students who trusted us with their dreams</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <p className="text-gray-700 italic mb-4">{`"${testimonial.text}"`}</p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-blue-600 text-sm">{testimonial.role}</p>
                </div>
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
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of successful students who trusted EduTravel with their international education dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 hover:bg-yellow-300 transition-colors"
                >
                  <Mail size={20} />
                  <span>Contact Our Team</span>
                </motion.button>
              </Link>
              <Link href="/education">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
