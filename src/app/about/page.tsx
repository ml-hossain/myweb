'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
import Button from '@/components/Button';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutPage: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animations
      gsap.fromTo(
        ".hero-content",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );

      // Stats section animations
      gsap.fromTo(
        ".stat-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Mission section animations
      gsap.fromTo(
        ".mission-content",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: missionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(
        ".vision-content",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: missionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Values section animations
      gsap.fromTo(
        ".values-header",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(
        ".value-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Team section animations
      gsap.fromTo(
        ".team-header",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(
        ".team-member",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // CTA section animations
      gsap.fromTo(
        ".cta-content",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Button hover animations
      const buttons = document.querySelectorAll('.gsap-button');
      buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
          gsap.to(button, { scale: 1.05, duration: 0.2 });
        });
        button.addEventListener('mouseleave', () => {
          gsap.to(button, { scale: 1, duration: 0.2 });
        });
      });
    });

    return () => ctx.revert();
  }, []);

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
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80',
      description: 'Former admissions officer at Harvard University with expertise in international student recruitment.'
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'Academic Counselor',
      education: 'PhD Psychology, Oxford',
      experience: '10+ years',
      specialization: 'Academic Planning & Career Guidance',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80',
      description: 'Educational psychologist helping students make informed decisions about their academic future.'
    },
    {
      name: 'James Thompson',
      role: 'Travel Services Director',
      education: 'MBA International Business',
      experience: '8+ years',
      specialization: 'International Travel & Logistics',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80',
      description: 'Former airline executive with extensive experience in student travel arrangements worldwide.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-content text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About NextGen EduMirate Solutions</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Empowering students worldwide to achieve their international education dreams through 
              personalized guidance, expert support, and unwavering commitment to success.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="bg-yellow-400 text-gray-900 hover:bg-white hover:text-black hover:shadow-lg transform hover:scale-105 transition-all duration-200 px-6 py-3 text-base font-semibold rounded-xl border border-yellow-500 shadow-md"
              >
                📞 Meet Our Team
              </Button>
              <Link
                href="#story"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:shadow-lg transform hover:scale-105 transition-all duration-200 px-6 py-3 text-base font-semibold rounded-xl shadow-md bg-transparent cursor-pointer story-button-hover"
              >
                📖 Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="stat-item text-center"
                >
                  <div className={`${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-white shadow-lg`}>
                    <Icon size={32} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={missionRef} className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="mission-content space-y-6">
              <h2 className="text-4xl font-bold text-white">Our Mission</h2>
              <p className="text-lg text-primary-100 leading-relaxed">
                To democratize access to world-class international education by providing personalized, 
                comprehensive support that removes barriers and empowers students to achieve their academic 
                and career aspirations anywhere in the world.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-400 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-white">Personalized Guidance</h4>
                    <p className="text-primary-100">Tailored advice for each student's unique background and goals.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-400 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-white">End-to-End Support</h4>
                    <p className="text-primary-100">From initial consultation to successful graduation and beyond.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-400 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-white">Global Network</h4>
                    <p className="text-primary-100">Partnerships with top universities and institutions worldwide.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="vision-content space-y-6">
              <h2 className="text-4xl font-bold text-white">Our Vision</h2>
              <p className="text-lg text-primary-100 leading-relaxed">
                To be the world's most trusted education consultancy, recognized for transforming lives 
                through education and creating a global community of successful, culturally aware leaders 
                who make positive impacts in their chosen fields.
              </p>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <h4 className="font-semibold text-yellow-400 mb-3">What Sets Us Apart</h4>
                <ul className="space-y-2 text-white">
                  <li className="flex items-center space-x-2">
                    <Star size={16} className="text-yellow-400" />
                    <span>98% visa approval success rate</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star size={16} className="text-yellow-400" />
                    <span>24/7 student support system</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star size={16} className="text-yellow-400" />
                    <span>Partnerships with 500+ universities</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star size={16} className="text-yellow-400" />
                    <span>Expert team with 100+ years combined experience</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="values-header text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="value-item text-center bg-white p-6 rounded-xl shadow-lg"
                >
                  <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
                    <Icon size={32} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="team-header text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-primary-100">Experienced professionals dedicated to your success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="team-member bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="cta-content">
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of successful students who trusted NextGen EduMirate Solutions with their international education dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={Mail}
                iconPosition="right"
                className="bg-white text-gray-900 hover:bg-white hover:text-black hover:shadow-lg transform hover:scale-105 transition-all duration-200 px-6 py-3 text-base font-semibold rounded-xl border border-blue-200 shadow-md"
              >
                📧 Contact Our Team
              </Button>
              <Button
                href="/education"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                className="bg-yellow-400 text-gray-900 hover:bg-white hover:text-black hover:shadow-lg transform hover:scale-105 transition-all duration-200 px-6 py-3 text-base font-semibold rounded-xl border border-yellow-500 shadow-md"
              >
                🚀 Explore Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
