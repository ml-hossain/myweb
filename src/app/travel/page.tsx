'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Plane,
  Hotel,
  Shield,
  MapPin,
  Calendar,
  CreditCard,
  CheckCircle,
  ArrowRight,
  Star,
  Car,
  Camera,
  Briefcase
} from 'lucide-react';

const TravelPage: React.FC = () => {
  const services = [
    {
      icon: Plane,
      title: 'Flight Booking',
      description: 'Best deals on international flights with flexible booking options.',
      features: [
        'Student discount flights',
        'Flexible booking policies',
        'Multi-city itineraries',
        'Baggage allowance optimization',
        '24/7 booking support',
        'Price alerts and monitoring'
      ],
      price: 'No booking fees',
      popular: true
    },
    {
      icon: Hotel,
      title: 'Accommodation',
      description: 'Student-friendly lodging options from hostels to apartments.',
      features: [
        'Student housing options',
        'Verified accommodations',
        'Flexible cancellation',
        'Virtual property tours',
        'Local area insights',
        'Budget optimization'
      ],
      price: 'Best price guarantee',
      popular: false
    },
    {
      icon: Shield,
      title: 'Travel Insurance',
      description: 'Comprehensive coverage for your international education journey.',
      features: [
        'Student-specific coverage',
        'Medical emergency protection',
        'Study interruption coverage',
        'Personal belongings protection',
        'Emergency evacuation',
        'Mental health support'
      ],
      price: 'From $30/month',
      popular: true
    },
    {
      icon: MapPin,
      title: 'Itinerary Planning',
      description: 'Personalized travel plans for your study abroad experience.',
      features: [
        'Custom travel itineraries',
        'Local attractions guide',
        'Transportation planning',
        'Cultural orientation',
        'Safety briefings',
        'Emergency contacts'
      ],
      price: 'Free with package',
      popular: false
    },
    {
      icon: Car,
      title: 'Airport Transfers',
      description: 'Safe and reliable transportation from airport to accommodation.',
      features: [
        'Pre-arranged pickups',
        'Student rate discounts',
        'Meet & greet service',
        'Luggage assistance',
        'Real-time tracking',
        'Multiple payment options'
      ],
      price: 'From $25',
      popular: false
    },
    {
      icon: Briefcase,
      title: 'Travel Packages',
      description: 'All-inclusive packages designed for international students.',
      features: [
        'Flight + accommodation bundles',
        'Orientation programs',
        'Airport transfers included',
        'City tours and activities',
        'Student community access',
        'Ongoing support'
      ],
      price: 'Custom pricing',
      popular: true
    }
  ];

  const destinations = [
    {
      city: 'London',
      country: 'United Kingdom',
      avgFlight: '$450',
      avgStay: '£80/night',
      highlights: ['Student areas: Camden, King\'s Cross', 'Free museums', 'Oyster Card discounts'],
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=300&h=200&fit=crop'
    },
    {
      city: 'New York',
      country: 'United States',
      avgFlight: '$520',
      avgStay: '$120/night',
      highlights: ['Student MetroCard', 'Broadway discounts', 'University partnerships'],
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=300&h=200&fit=crop'
    },
    {
      city: 'Toronto',
      country: 'Canada',
      avgFlight: '$380',
      avgStay: 'CAD 90/night',
      highlights: ['TTC student discount', 'Multicultural communities', 'Safe and clean'],
      image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=300&h=200&fit=crop'
    },
    {
      city: 'Melbourne',
      country: 'Australia',
      avgFlight: '$680',
      avgStay: 'AUD 95/night',
      highlights: ['Free city circle tram', 'Coffee culture', 'Student suburbs'],
      image: 'https://images.unsplash.com/photo-1514395462725-fb4566210144?w=300&h=200&fit=crop'
    },
    {
      city: 'Berlin',
      country: 'Germany',
      avgFlight: '$420',
      avgStay: '€70/night',
      highlights: ['Student semester ticket', 'Rich history', 'Affordable living'],
      image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=300&h=200&fit=crop'
    },
    {
      city: 'Amsterdam',
      country: 'Netherlands',
      avgFlight: '$390',
      avgStay: '€85/night',
      highlights: ['Bike-friendly city', 'Student housing', 'Central Europe access'],
      image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=300&h=200&fit=crop'
    }
  ];

  const packages = [
    {
      name: 'Essential Student Package',
      price: 'From $899',
      duration: 'Arrival support',
      features: [
        'Round-trip flight booking',
        'Travel insurance (3 months)',
        'Airport transfer',
        'Basic accommodation (first week)',
        'Orientation materials',
        'Emergency support hotline'
      ],
      popular: false
    },
    {
      name: 'Premium Student Package',
      price: 'From $1,499',
      duration: 'First semester support',
      features: [
        'Round-trip flight booking',
        'Comprehensive travel insurance',
        'Airport transfer + city tour',
        'Accommodation (first month)',
        'Mobile phone setup',
        'Bank account assistance',
        'Cultural orientation program',
        '24/7 support for 6 months'
      ],
      popular: true
    },
    {
      name: 'Complete Journey Package',
      price: 'From $2,299',
      duration: 'Full academic year',
      features: [
        'Round-trip flight booking',
        'Annual travel insurance',
        'Airport transfers (arrival & departure)',
        'Accommodation search assistance',
        'Complete settling-in support',
        'Regular check-ins',
        'Holiday travel planning',
        'Emergency assistance',
        'Graduate celebration trip'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Emma Thompson',
      destination: 'University of Edinburgh',
      trip: 'London Study Abroad',
      rating: 5,
      text: 'The travel package made my transition to studying in London seamless. Everything was organized perfectly!',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332e234?w=60&h=60&fit=crop&crop=face'
    },
    {
      name: 'Carlos Rodriguez',
      destination: 'University of Toronto',
      trip: 'Toronto Student Package',
      rating: 5,
      text: 'Great value for money! The accommodation they found was perfect and the airport transfer was so convenient.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face'
    },
    {
      name: 'Yuki Tanaka',
      destination: 'Technical University Munich',
      trip: 'Berlin Cultural Experience',
      rating: 5,
      text: 'Not only did they handle all travel arrangements, but the cultural orientation helped me adapt quickly to German life.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face'
    }
  ];

  const tips = [
    {
      icon: Calendar,
      title: 'Book Early',
      description: 'Reserve flights 2-3 months in advance for better prices and availability.'
    },
    {
      icon: Shield,
      title: 'Get Insurance',
      description: 'Travel insurance is essential for international students - don\'t skip it!'
    },
    {
      icon: CreditCard,
      title: 'Notify Banks',
      description: 'Inform your bank about international travel to avoid card blocks.'
    },
    {
      icon: Camera,
      title: 'Document Everything',
      description: 'Keep digital and physical copies of all important documents.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Plane size={80} className="mx-auto mb-6 text-yellow-400" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Travel Services</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Seamless travel solutions designed specifically for international students. 
              From flights to accommodation, we handle every detail of your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-yellow-400 text-green-900 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 hover:bg-yellow-300 transition-colors"
                >
                  <MapPin size={20} />
                  <span>Plan My Trip</span>
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-800 transition-colors"
              >
                <span>View Packages</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Travel Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive travel solutions tailored for international students
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow ${
                    service.popular ? 'ring-2 ring-green-500' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <div className="bg-green-100 p-4 rounded-lg inline-block mb-4">
                      <Icon size={40} className="text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="text-green-600 font-semibold text-lg">{service.price}</div>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-gray-700">
                        <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Student Destinations</h2>
            <p className="text-xl text-gray-600">Top cities chosen by international students</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500"></div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <MapPin size={20} className="text-green-600" />
                    <h3 className="text-xl font-semibold text-gray-900">{destination.city}</h3>
                    <span className="text-gray-500">{destination.country}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Avg. Flight</p>
                      <p className="font-semibold text-green-600">{destination.avgFlight}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Avg. Stay</p>
                      <p className="font-semibold text-green-600">{destination.avgStay}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Student Highlights:</p>
                    <ul className="space-y-1">
                      {destination.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-start space-x-1">
                          <CheckCircle size={12} className="text-green-500 mt-1 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Packages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Travel Packages</h2>
            <p className="text-xl text-gray-600">Choose the perfect package for your study abroad journey</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative bg-white rounded-xl shadow-lg overflow-hidden ${
                  pkg.popular ? 'ring-2 ring-green-500 transform scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="bg-green-500 text-white text-center py-2 font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-green-600">{pkg.price}</span>
                    <p className="text-gray-600">{pkg.duration}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                      pkg.popular
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Choose Package
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Travel Tips</h2>
            <p className="text-xl text-gray-600">Essential advice for international student travelers</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <motion.div
                  key={tip.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-green-100 p-4 rounded-full inline-block mb-4">
                    <Icon size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{tip.title}</h3>
                  <p className="text-gray-600 text-sm">{tip.description}</p>
                </motion.div>
              );
            })}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Experiences</h2>
            <p className="text-xl text-gray-600">What our travelers say about their journeys</p>
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
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-blue-600">{testimonial.destination}</p>
                    <p className="text-sm text-green-600">{testimonial.trip}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic text-sm leading-relaxed">&quot;{testimonial.text}&quot;</p>
              </motion.div>
            ))}}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Plan Your Journey?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let our travel experts create the perfect itinerary for your study abroad adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-2 mx-auto sm:mx-0 hover:bg-green-700 transition-all duration-200"
                >
                  <MapPin className="w-5 h-5" />
                  <span>Start Planning</span>
                </motion.button>
              </Link>
              <Link href="/visa">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl font-semibold flex items-center space-x-2 mx-auto sm:mx-0 hover:bg-yellow-300 transition-all duration-200"
                >
                  <span>Check Visa Requirements</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TravelPage;
