'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FileText,
  CheckCircle,
  Clock,
  AlertCircle,
  Users,
  Globe,
  Calendar,
  Phone,
  ArrowRight,
  Star,
  Shield,
  BookOpen,
  CreditCard,
  MapPin,
  Award
} from 'lucide-react';

const VisaPage: React.FC = () => {
  const visaTypes = [
    {
      country: 'United States',
      type: 'F-1 Student Visa',
      processingTime: '3-5 weeks',
      fee: '$160',
      successRate: '95%',
      requirements: [
        'Form I-20 from US institution',
        'SEVIS fee payment',
        'Valid passport',
        'Financial documentation',
        'DS-160 form completion',
        'Visa interview'
      ],
      tips: 'Book interview appointment early, especially during peak season (May-August).'
    },
    {
      country: 'United Kingdom',
      type: 'Student Visa (Tier 4)',
      processingTime: '3 weeks',
      fee: '£348',
      successRate: '97%',
      requirements: [
        'CAS from UK institution',
        'English proficiency proof',
        'Financial requirements',
        'TB test (if applicable)',
        'Academic qualifications',
        'Biometric appointment'
      ],
      tips: 'Ensure you have 28-day bank statements and maintain required balance throughout.'
    },
    {
      country: 'Canada',
      type: 'Study Permit',
      processingTime: '4-6 weeks',
      fee: 'CAD $150',
      successRate: '96%',
      requirements: [
        'Letter of acceptance',
        'Proof of funds',
        'Statement of purpose',
        'Medical exam (if required)',
        'Police clearance',
        'Biometric data'
      ],
      tips: 'Apply online through IRCC portal and ensure all documents are properly translated.'
    },
    {
      country: 'Australia',
      type: 'Student Visa (500)',
      processingTime: '4-6 weeks',
      fee: 'AUD $620',
      successRate: '94%',
      requirements: [
        'CoE from Australian institution',
        'GTE statement',
        'English proficiency',
        'Health insurance (OSHC)',
        'Financial capacity',
        'Health examinations'
      ],
      tips: 'Complete health examinations early as they can delay the process significantly.'
    },
    {
      country: 'Germany',
      type: 'Student Visa',
      processingTime: '6-8 weeks',
      fee: '€75',
      successRate: '93%',
      requirements: [
        'University admission letter',
        'Proof of financial resources',
        'Academic records',
        'Health insurance',
        'Language proficiency',
        'Motivation letter'
      ],
      tips: 'Book appointment at German consulate well in advance, especially in major cities.'
    },
    {
      country: 'Netherlands',
      type: 'Student Visa/Residence Permit',
      processingTime: '2-4 weeks',
      fee: '€171',
      successRate: '98%',
      requirements: [
        'Letter of acceptance',
        'Proof of sufficient funds',
        'Valid passport',
        'Health insurance',
        'Clean criminal record',
        'TB test'
      ],
      tips: 'EU/EEA students don\'t need visa, only residence registration upon arrival.'
    }
  ];

  const services = [
    {
      icon: FileText,
      title: 'Document Review',
      description: 'Comprehensive review of all visa application documents',
      features: [
        'Document checklist creation',
        'Form completion assistance',
        'Financial document verification',
        'Academic record evaluation',
        'Translation service coordination',
        'Missing document identification'
      ],
      price: 'From $99'
    },
    {
      icon: Users,
      title: 'Interview Preparation',
      description: 'Mock interviews and coaching for visa interview success',
      features: [
        'Common questions practice',
        'Confidence building exercises',
        'Country-specific preparation',
        'Body language coaching',
        'Response strategy development',
        'Follow-up interview support'
      ],
      price: 'From $149'
    },
    {
      icon: Clock,
      title: 'Application Tracking',
      description: 'Real-time updates on your visa application status',
      features: [
        'Application status monitoring',
        'Processing time estimates',
        'Update notifications',
        'Embassy communication',
        'Delay management',
        'Result notification'
      ],
      price: 'Free with service'
    },
    {
      icon: Shield,
      title: 'Emergency Support',
      description: '24/7 support for urgent visa-related issues',
      features: [
        'Urgent appointment booking',
        'Document replacement assistance',
        'Embassy liaison services',
        'Legal consultation',
        'Appeal process support',
        'Crisis management'
      ],
      price: 'From $199'
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'Free assessment of your visa requirements and eligibility',
      icon: Users,
      duration: '30 minutes'
    },
    {
      step: 2,
      title: 'Document Preparation',
      description: 'Gather and organize all required documents with our checklist',
      icon: FileText,
      duration: '1-2 weeks'
    },
    {
      step: 3,
      title: 'Application Review',
      description: 'Thorough review of application before submission',
      icon: CheckCircle,
      duration: '2-3 days'
    },
    {
      step: 4,
      title: 'Submission & Tracking',
      description: 'Submit application and monitor progress with regular updates',
      icon: Clock,
      duration: 'Ongoing'
    },
    {
      step: 5,
      title: 'Interview Preparation',
      description: 'Mock interviews and coaching (if interview required)',
      icon: Award,
      duration: '1 week'
    },
    {
      step: 6,
      title: 'Visa Approval',
      description: 'Receive your visa and pre-departure briefing',
      icon: Star,
      duration: '1 day'
    }
  ];

  const successStories = [
    {
      name: 'Aisha Patel',
      country: 'USA',
      visa: 'F-1 Student Visa',
      university: 'Stanford University',
      story: 'Initially rejected due to incomplete financial documentation. Our team helped restructure the application and secured approval on the second attempt.',
      timeline: 'Approved in 3 weeks',
      image: '/api/placeholder/60/60'
    },
    {
      name: 'James Wilson',
      country: 'UK',
      visa: 'Student Visa',
      university: 'University of Cambridge',
      story: 'Complex case involving previous visa refusal. Our interview coaching and document restructuring led to successful approval.',
      timeline: 'Approved in 4 weeks',
      image: '/api/placeholder/60/60'
    },
    {
      name: 'Sofia Chen',
      country: 'Canada',
      visa: 'Study Permit',
      university: 'University of Toronto',
      story: 'Rushed application with tight deadlines. Our emergency processing service secured the permit just in time for semester start.',
      timeline: 'Approved in 10 days',
      image: '/api/placeholder/60/60'
    }
  ];

  const commonChallenges = [
    {
      challenge: 'Financial Documentation',
      solution: 'We help structure bank statements, sponsorship letters, and scholarship documents to meet specific country requirements.',
      icon: CreditCard
    },
    {
      challenge: 'Interview Anxiety',
      solution: 'Our mock interview sessions build confidence and prepare you for any question with country-specific coaching.',
      icon: Users
    },
    {
      challenge: 'Document Translation',
      solution: 'We coordinate certified translations of all academic and personal documents through verified agencies.',
      icon: Globe
    },
    {
      challenge: 'Tight Deadlines',
      solution: 'Our emergency processing service fast-tracks applications without compromising quality or success rates.',
      icon: Clock
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <FileText size={80} className="mx-auto mb-6 text-yellow-400" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Visa Services</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
              Expert visa consultation and application support for international students. 
              Navigate complex visa processes with confidence and achieve 97% success rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 hover:bg-yellow-300 transition-colors"
                >
                  <Calendar size={20} />
                  <span>Free Consultation</span>
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-800 transition-colors"
              >
                <span>Check Requirements</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visa Requirements by Country */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Visa Requirements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive guide to student visa requirements for popular study destinations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {visaTypes.map((visa, index) => (
              <motion.div
                key={visa.country}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
                      <Globe size={20} className="text-purple-600" />
                      <span>{visa.country}</span>
                    </h3>
                    <p className="text-purple-600 font-medium">{visa.type}</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {visa.successRate} success
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                  <div>
                    <div className="text-gray-600 text-sm">Processing Time</div>
                    <div className="font-semibold text-purple-600">{visa.processingTime}</div>
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm">Visa Fee</div>
                    <div className="font-semibold text-purple-600">{visa.fee}</div>
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm">Success Rate</div>
                    <div className="font-semibold text-green-600">{visa.successRate}</div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                  <ul className="space-y-1">
                    {visa.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                        <CheckCircle size={14} className="text-green-500 flex-shrink-0" />
                        <span>{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <AlertCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-blue-900 text-sm">Pro Tip:</h5>
                      <p className="text-blue-800 text-sm">{visa.tips}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Visa Services</h2>
            <p className="text-xl text-gray-600">Complete support throughout your visa application journey</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-center mb-6">
                    <div className="bg-purple-100 p-4 rounded-lg inline-block mb-4">
                      <Icon size={32} className="text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    <div className="text-purple-600 font-semibold">{service.price}</div>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                        <CheckCircle size={12} className="text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Visa Process</h2>
            <p className="text-xl text-gray-600">Streamlined approach to visa success</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200"></div>
            <div className="space-y-12">
              {process.map((step, index) => {
                const Icon = step.icon;
                return (
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
                          <div className="bg-purple-100 p-3 rounded-lg">
                            <Icon size={24} className="text-purple-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                            <p className="text-sm text-gray-500 flex items-center space-x-1">
                              <Clock size={14} />
                              <span>{step.duration}</span>
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold z-10 relative">
                        {step.step}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Challenges & Solutions</h2>
            <p className="text-xl text-gray-600">How we help overcome typical visa application obstacles</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commonChallenges.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.challenge}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <Icon size={24} className="text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Challenge: {item.challenge}</h3>
                      <div className="flex items-start space-x-2">
                        <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                        <p className="text-gray-600"><strong>Our Solution:</strong> {item.solution}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Real students, real visa approvals</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{story.name}</h4>
                    <p className="text-sm text-gray-600 flex items-center space-x-1">
                      <MapPin size={12} />
                      <span>{story.country} - {story.visa}</span>
                    </p>
                    <p className="text-sm text-purple-600">{story.university}</p>
                  </div>
                </div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  {story.timeline}
                </div>
                <p className="text-gray-700 text-sm italic">"{story.story}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Visa Application?</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Don't let visa complexities delay your education dreams. Get expert guidance and increase your chances of approval.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 hover:bg-yellow-300 transition-colors"
                >
                  <Phone size={20} />
                  <span>Free Visa Assessment</span>
                </motion.button>
              </Link>
              <Link href="/education">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
                >
                  <span>Explore Education Services</span>
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

export default VisaPage;
