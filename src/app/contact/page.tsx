'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare,
  User,
  Building2,
  Globe,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      description: "Call us for immediate assistance"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@edutravel.com", "support@edutravel.com"],
      description: "Send us your questions anytime"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      details: ["123 Education Street", "Learning City, LC 12345"],
      description: "Visit our main office"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      description: "We're here to help during business hours"
    }
  ];

  const officeLocations = [
    {
      city: "New York",
      address: "123 Education Street, Learning City, LC 12345",
      phone: "+1 (555) 123-4567",
      email: "ny@edutravel.com",
      hours: "Mon-Fri: 9AM-6PM"
    },
    {
      city: "Los Angeles",
      address: "456 Travel Boulevard, Adventure City, AC 67890",
      phone: "+1 (555) 987-6543",
      email: "la@edutravel.com",
      hours: "Mon-Fri: 8AM-5PM"
    },
    {
      city: "London",
      address: "789 Study Lane, Knowledge Town, KT 11223",
      phone: "+44 20 1234 5678",
      email: "london@edutravel.com",
      hours: "Mon-Fri: 9AM-5PM GMT"
    }
  ];

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We provide comprehensive education consulting, travel planning, visa assistance, and cultural exchange programs. Our services include university admissions guidance, scholarship applications, travel itinerary planning, and complete visa processing support."
    },
    {
      question: "How long does the visa process take?",
      answer: "Visa processing times vary by country and visa type. Student visas typically take 2-8 weeks, while tourist visas may take 1-4 weeks. We provide timeline estimates and expedited services when available."
    },
    {
      question: "Do you offer scholarships?",
      answer: "Yes! We partner with over 200 universities worldwide to offer exclusive scholarship opportunities. Our team helps identify and apply for merit-based, need-based, and program-specific scholarships."
    },
    {
      question: "What are your consultation fees?",
      answer: "Initial consultations are completely free. Our service packages are transparent with no hidden fees. We offer flexible payment plans and our success fee structure ensures we're invested in your success."
    },
    {
      question: "Can you help with accommodation?",
      answer: "Absolutely! We assist with finding suitable accommodation including university dormitories, homestays, shared apartments, and private housing. We ensure safe, comfortable, and budget-friendly options."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      university: "Oxford University",
      program: "Master's in International Relations",
      image: "/api/placeholder/80/80",
      text: "EduTravel made my dream of studying at Oxford a reality. Their scholarship guidance helped me secure a full scholarship, and their visa support was seamless.",
      rating: 5
    },
    {
      name: "Ahmed Hassan",
      university: "MIT",
      program: "PhD in Computer Science",
      image: "/api/placeholder/80/80",
      text: "The team&apos;s expertise in STEM programs was incredible. They guided me through the entire application process and helped me get into my top choice university.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      university: "University of Toronto",
      program: "Bachelor&apos;s in Business",
      image: "/api/placeholder/80/80",
      text: "From application to arrival, EduTravel supported me every step of the way. Their travel planning service made my transition to Canada so smooth.",
      rating: 5
    },
    {
      name: "James Chen",
      university: "Cambridge University",
      program: "Master's in Engineering",
      image: "/api/placeholder/80/80",
      text: "Exceptional service! They not only helped me get admitted but also secured significant financial aid. I couldn't have done it without their expertise.",
      rating: 5
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Emily Watson",
      role: "Education Director",
      specialization: "University Admissions & Scholarships",
      image: "/api/placeholder/120/120",
      experience: "15+ years",
      achievements: "Helped 2000+ students get into top universities",
      quote: "Every student deserves access to world-class education."
    },
    {
      name: "Michael Chen",
      role: "Visa Specialist",
      specialization: "Student & Tourist Visas",
      image: "/api/placeholder/120/120",
      experience: "12+ years",
      achievements: "99.2% visa approval rate",
      quote: "Turning visa dreams into travel realities."
    },
    {
      name: "Sarah Thompson",
      role: "Travel Coordinator",
      specialization: "Educational Travel Planning",
      image: "/api/placeholder/120/120",
      experience: "10+ years",
      achievements: "Organized 500+ successful trips",
      quote: "Creating unforgettable educational journeys."
    },
    {
      name: "David Kumar",
      role: "Financial Aid Advisor",
      specialization: "Scholarships & Funding",
      image: "/api/placeholder/120/120",
      experience: "8+ years",
      achievements: "Secured $50M+ in scholarships",
      quote: "Making education affordable for everyone."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get In <span className="text-yellow-400">Touch</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Ready to start your educational journey? Our expert team is here to guide you 
              every step of the way. Contact us today for personalized assistance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                <div className="space-y-1 mb-3">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
                <p className="text-xs text-gray-500">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-gray-50 rounded-2xl p-8 shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  autoComplete="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  autoComplete="email"
                  required
                  suppressHydrationWarning
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  autoComplete="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Interest *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select a service</option>
                  <option value="education">Education Consulting</option>
                  <option value="travel">Travel Planning</option>
                  <option value="visa">Visa Services</option>
                  <option value="scholarship">Scholarship Guidance</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Brief subject line"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Tell us about your goals, timeline, and how we can help you..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-4 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-200 ${
                isSubmitted 
                  ? 'bg-green-600 text-white' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {isSubmitted ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  <span>Message Sent!</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Office Locations</h2>
            <p className="text-lg text-gray-600">
              Visit us at any of our global offices for in-person consultation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <Building2 className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{office.city}</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 text-gray-400 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-600 text-sm">{office.address}</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-gray-400 mr-2" />
                    <p className="text-gray-600 text-sm">{office.phone}</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-gray-400 mr-2" />
                    <p className="text-gray-600 text-sm">{office.email}</p>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-gray-400 mr-2" />
                    <p className="text-gray-600 text-sm">{office.hours}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our services
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-200"
              >
                <div className="flex items-start">
                  <MessageSquare className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Our Students Say - Testimonials */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-lg text-gray-600">
              Success stories from students who achieved their dreams with our help
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{testimonial.text}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{testimonial.program}</span>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Expert Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our dedicated professionals bring decades of combined experience in education, 
              immigration, and travel services to help you achieve your goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 mb-3">{member.specialization}</p>
                <div className="text-xs text-gray-500 space-y-1 mb-3">
                  <p>Experience: {member.experience}</p>
                  <p>{member.achievements}</p>
                </div>
                <p className="text-sm italic text-gray-700 border-l-2 border-blue-200 pl-3">
                  "{member.quote}"
                </p>
              </motion.div>
            ))}
          </div>

          {/* Why Choose Our Team */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-6">Why Choose Our Team?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-3">
                  <Globe className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-2">Global Network</h4>
                <p className="text-sm text-blue-100">Partnerships with 500+ universities worldwide</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-3">
                  <User className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-2">Personalized Service</h4>
                <p className="text-sm text-blue-100">Dedicated counselor for every student</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-3">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-2">Proven Success</h4>
                <p className="text-sm text-blue-100">95% success rate in admissions and visas</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with our experts and take the first step 
              towards achieving your educational and travel goals.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold flex items-center space-x-2 mx-auto hover:bg-gray-50 transition-all duration-200"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
