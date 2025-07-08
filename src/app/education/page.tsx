'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  GraduationCap,
  BookOpen,
  Award,
  FileText,
  Clock,
  CheckCircle,
  ArrowRight,
  Globe,
  DollarSign,
  Calendar
} from 'lucide-react';

const EducationPage: React.FC = () => {
  const services = [
    {
      icon: GraduationCap,
      title: 'University Admissions',
      description: 'Complete guidance for university applications and admissions process.',
      features: [
        'University selection and shortlisting',
        'Application form assistance',
        'Personal statement writing',
        'Recommendation letter guidance',
        'Portfolio preparation',
        'Interview preparation'
      ],
    },
    {
      icon: Award,
      title: 'Scholarship Guidance',
      description: 'Find and apply for scholarships to fund your education abroad.',
      features: [
        'Scholarship research and matching',
        'Application strategy development',
        'Essay and proposal writing',
        'Financial aid consultation',
        'Merit scholarship applications',
        'Need-based aid guidance'
      ],
    },
    {
      icon: BookOpen,
      title: 'Course Selection',
      description: 'Expert advice on choosing the right courses and programs.',
      features: [
        'Program evaluation and comparison',
        'Career pathway planning',
        'Credit transfer assessment',
        'Prerequisites analysis',
        'Course scheduling assistance',
        'Academic planning'
      ],
    },
    {
      icon: FileText,
      title: 'Document Preparation',
      description: 'Professional assistance with all required documentation.',
      features: [
        'Document checklist creation',
        'Transcript evaluation',
        'Certificate authentication',
        'Translation services',
        'Notarization assistance',
        'Document organization'
      ],
    }
  ];

  const destinations = [
    {
      country: 'United States',
      universities: '4,000+',
      scholarships: '500+',
      avgCost: '$35,000/year',
      popular: ['Harvard', 'MIT', 'Stanford', 'Yale']
    },
    {
      country: 'United Kingdom',
      universities: '160+',
      scholarships: '200+',
      avgCost: '£25,000/year',
      popular: ['Oxford', 'Cambridge', 'Imperial', 'UCL']
    },
    {
      country: 'Canada',
      universities: '100+',
      scholarships: '300+',
      avgCost: 'CAD 30,000/year',
      popular: ['Toronto', 'UBC', 'McGill', 'Waterloo']
    },
    {
      country: 'Australia',
      universities: '40+',
      scholarships: '150+',
      avgCost: 'AUD 35,000/year',
      popular: ['Melbourne', 'Sydney', 'ANU', 'UNSW']
    },
    {
      country: 'Germany',
      universities: '400+',
      scholarships: '100+',
      avgCost: '€500/year',
      popular: ['TUM', 'LMU', 'Heidelberg', 'RWTH']
    },
    {
      country: 'Netherlands',
      universities: '14+',
      scholarships: '50+',
      avgCost: '€12,000/year',
      popular: ['TU Delft', 'Amsterdam', 'Utrecht', 'Leiden']
    }
  ];

  const testimonials = [
    {
      name: 'Alex Chen',
      university: 'Stanford University',
      program: 'Computer Science',
      scholarship: '$45,000 scholarship',
      text: 'The team helped me navigate the complex application process and secure a substantial scholarship. I couldn\'t have done it without their expertise.',
      image: '/api/placeholder/60/60'
    },
    {
      name: 'Priya Sharma',
      university: 'University of Oxford',
      program: 'Economics',
      scholarship: 'Full tuition waiver',
      text: 'From university selection to scholarship applications, they provided comprehensive support throughout my journey to Oxford.',
      image: '/api/placeholder/60/60'
    },
    {
      name: 'Mohammed Al-Rashid',
      university: 'University of Toronto',
      program: 'Engineering',
      scholarship: '$30,000 scholarship',
      text: 'Their personalized approach and attention to detail made all the difference in my successful application to UofT.',
      image: '/api/placeholder/60/60'
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'Free consultation to understand your goals, background, and preferences.',
      duration: '1 hour'
    },
    {
      step: 2,
      title: 'Profile Assessment',
      description: 'Comprehensive evaluation of your academic and extracurricular profile.',
      duration: '2-3 days'
    },
    {
      step: 3,
      title: 'University Shortlisting',
      description: 'Personalized list of universities based on your profile and preferences.',
      duration: '1 week'
    },
    {
      step: 4,
      title: 'Application Strategy',
      description: 'Detailed timeline and strategy for each application.',
      duration: '3-5 days'
    },
    {
      step: 5,
      title: 'Document Preparation',
      description: 'Assistance with essays, recommendations, and all required documents.',
      duration: '2-4 weeks'
    },
    {
      step: 6,
      title: 'Application Submission',
      description: 'Review and submission of all applications before deadlines.',
      duration: '1 week'
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
            <GraduationCap size={80} className="mx-auto mb-6 text-yellow-400" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Education Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Transform your academic dreams into reality with our comprehensive education consulting services. 
              From university selection to scholarship applications, we guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-yellow-400 text-blue-900 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg flex items-center justify-center space-x-2 hover:bg-yellow-300 transition-colors whitespace-nowrap"
                >
                  <Calendar size={20} />
                  <span>Schedule Consultation</span>
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-white hover:text-blue-800 transition-colors whitespace-nowrap"
              >
                <span>Download Guide</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Education Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support for every aspect of your international education journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Icon size={32} className="text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2 text-gray-700">
                            <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Study Destinations</h2>
            <p className="text-xl text-gray-600">Explore top countries and universities for international education</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.country}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <Globe size={24} className="text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900">{destination.country}</h3>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Universities:</span>
                    <span className="font-semibold">{destination.universities}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Scholarships:</span>
                    <span className="font-semibold">{destination.scholarships}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Avg. Cost:</span>
                    <span className="font-semibold">{destination.avgCost}</span>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600 mb-2">Popular Universities:</p>
                  <div className="flex flex-wrap gap-1">
                    {destination.popular.map((uni) => (
                      <span key={uni} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                        {uni}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">Step-by-step guidance to ensure your success</p>
          </motion.div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="flex-1">
                  <div className={`bg-white rounded-xl p-6 shadow-lg ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                        <p className="text-sm text-gray-500 flex items-center space-x-1">
                          <Clock size={14} />
                          <span>{step.duration}</span>
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                <div className="w-px h-16 bg-blue-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Real students, real results</p>
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
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.university}</p>
                    <p className="text-sm text-blue-600">{testimonial.program}</p>
                  </div>
                </div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  {testimonial.scholarship}
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
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Educational Journey?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get personalized guidance from our education experts and take the first step towards your dream university.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-yellow-400 text-blue-900 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg flex items-center justify-center space-x-2 hover:bg-yellow-300 transition-colors whitespace-nowrap"
                >
                  <Calendar size={20} />
                  <span>Book Free Consultation</span>
                </motion.button>
              </Link>
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap"
                >
                  <span>Learn More</span>
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

export default EducationPage;
