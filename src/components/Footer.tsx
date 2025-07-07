'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const currentYear = 2025; // Static year to avoid hydration mismatch

  useEffect(() => {
    setIsClient(true);
  }, []);

  const quickLinks = [
    { name: 'Education Services', href: '/education' },
    { name: 'Travel Services', href: '/travel' },
    { name: 'Visa Services', href: '/visa' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const educationServices = [
    { name: 'University Admissions', href: '/education#admissions' },
    { name: 'Scholarship Guidance', href: '/education#scholarships' },
    { name: 'Course Selection', href: '/education#courses' },
    { name: 'Document Preparation', href: '/education#documents' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            {isClient ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl font-bold text-blue-400"
              >
                EduTravel
              </motion.div>
            ) : (
              <div className="text-2xl font-bold text-blue-400">
                EduTravel
              </div>
            )}
            <p className="text-gray-300">
              Your trusted partner for education abroad and travel services. We help you achieve your dreams of studying and traveling worldwide.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-blue-400" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-blue-400" />
                <span className="text-sm">info@edutravel.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-blue-400" />
                <span className="text-sm">123 Education St, City, Country</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            {isClient ? (
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg font-semibold text-blue-400"
              >
                Quick Links
              </motion.h3>
            ) : (
              <h3 className="text-lg font-semibold text-blue-400">
                Quick Links
              </h3>
            )}
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Education Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">
              Education Services
            </h3>
            <ul className="space-y-2">
              {educationServices.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors hover:scale-110 transform duration-200"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} EduTravel. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
