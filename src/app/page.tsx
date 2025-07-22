'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
import TestimonialsSlider from '@/components/TestimonialsSlider';
import Button from '@/components/Button';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const HomePage: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const expertRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animations
      gsap.fromTo(
        ".hero-content",
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
      );
      
      gsap.fromTo(
        ".hero-sidebar",
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.8, delay: 0.2, ease: "power2.out" }
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
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Services section animations
      gsap.fromTo(
        ".services-header",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(
        ".service-card",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".service-card",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Expert section animations
      gsap.fromTo(
        ".expert-header",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: expertRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(
        ".expert-image",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: expertRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(
        ".expert-content",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.4,
          scrollTrigger: {
            trigger: expertRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(
        ".expert-text",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          delay: 0.6,
          scrollTrigger: {
            trigger: expertRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Testimonials section animations
      gsap.fromTo(
        ".testimonials-header",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: testimonialsRef.current,
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

      // Service card hover animations
      const serviceCards = document.querySelectorAll('.service-card');
      serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { y: -10, duration: 0.3 });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { y: 0, duration: 0.3 });
        });
      });

      // Expert image hover animation
      const expertImage = document.querySelector('.expert-image');
      if (expertImage) {
        expertImage.addEventListener('mouseenter', () => {
          gsap.to(expertImage, { scale: 1.05, duration: 0.3 });
        });
        expertImage.addEventListener('mouseleave', () => {
          gsap.to(expertImage, { scale: 1, duration: 0.3 });
        });
      }
    });

    return () => ctx.revert();
  }, []);

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
    {
      name: 'David Chen',
      country: 'China',
      university: 'Stanford University',
      program: 'Master\'s in Computer Science',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80',
      rating: 5,
      text: 'The personalized approach and attention to detail was exceptional. They helped me navigate the complex application process and I got accepted to my dream university.'
    },
    {
      name: 'Emma Wilson',
      country: 'Australia',
      university: 'Harvard University',
      program: 'MBA',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80',
      rating: 5,
      text: 'Outstanding service! The team was always available to answer my questions and provided invaluable guidance throughout my MBA application journey.'
    },
    {
      name: 'Raj Patel',
      country: 'India',
      university: 'Cambridge University',
      program: 'PhD in Engineering',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80',
      rating: 5,
      text: 'Their expertise in research programs and funding opportunities was remarkable. I secured both admission and a research scholarship thanks to their guidance.'
    },
    {
      name: 'Sofia Martinez',
      country: 'Mexico',
      university: 'London School of Economics',
      program: 'Master\'s in Economics',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80',
      rating: 5,
      text: 'The visa process was handled so professionally. I was nervous about the requirements, but their step-by-step guidance made everything clear and manageable.'
    },
    {
      name: 'James Thompson',
      country: 'Canada',
      university: 'University of Melbourne',
      program: 'Master\'s in Medicine',
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80',
      rating: 5,
      text: 'Exceptional support for medical program applications. They understood the unique requirements and helped me craft a compelling application that stood out.'
    },
    {
      name: 'Yuki Tanaka',
      country: 'Japan',
      university: 'ETH Zurich',
      program: 'Master\'s in Data Science',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80',
      rating: 5,
      text: 'The cultural preparation and pre-departure support was incredible. They helped me adapt to European academic culture and made my transition seamless.'
    }
  ];

  const expert = {
    name: 'Dr. Muhammad Rahman',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    about: 'Dr. Muhammad Rahman is the visionary founder of NextGen EduMirate Solutions with over 18 years of experience in international education consulting. He holds a PhD in Educational Leadership from Harvard University and has personally guided over 5,000 students to achieve their dreams of studying abroad. His expertise spans across university admissions, scholarship strategies, and global education trends. Under his leadership, NextGen EduMirate Solutions has maintained a 98% success rate in student placements and has established partnerships with over 500 universities worldwide. Dr. Rahman is a sought-after speaker at international education conferences and has authored multiple research papers on cross-cultural education adaptation.'
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="hero-content space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Your Gateway to
                <span className="block text-yellow-400">Global Education</span>
              </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
                Transform your dreams into reality with our comprehensive education, travel, and visa services. 
                We guide you every step of the way to your international education journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  href="/education"
                  variant="primary"
                  size="lg"
                  icon={BookOpen}
                  className="bg-yellow-400 text-primary-900 hover:bg-black hover:text-white"
                >
                  Explore Education
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                  className="border-2 border-white text-white hover:bg-black hover:text-white hover:border-black"
                >
                  Get Consultation
                </Button>
              </div>
            </div>
            
            <div className="hero-sidebar relative">
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
                  <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} />
                  </div>
                  <div className="text-3xl font-bold text-black mb-2">{stat.number}</div>
                  <div className="text-black">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="services-header text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for your international education journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="service-card bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col"
                >
                  <div className={`${service.color} p-6 text-white`}>
                    <Icon size={48} className="mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-white">{service.description}</p>
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
                    <Button
                      href={service.link}
                      variant="primary"
                      size="md"
                      fullWidth
                      className="mt-auto"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet Our Expert Section */}
      <section ref={expertRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="expert-header text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1e3a8a' }}>Meet Our Expert</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get to know the visionary leader behind NextGen EduMirate Solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="expert-image flex justify-center lg:justify-end">
              <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover rounded-full shadow-2xl"
                />
              </div>
            </div>
            
            {/* Content Section */}
            <div className="expert-content text-center lg:text-left">
              <h3
                className="expert-text text-2xl font-semibold mb-4"
                style={{ color: '#1e3a8a' }}
              >
                Meet Our Expert
              </h3>
              <h4
                className="expert-text text-4xl lg:text-5xl font-bold mb-4 leading-tight"
                style={{ color: '#1e3a8a' }}
              >
                {expert.name}
              </h4>
              <p
                className="expert-text text-xl font-light mb-6 text-gray-600"
              >
                {expert.role}
              </p>
              <div
                className="expert-text text-lg leading-relaxed text-gray-700 max-w-2xl mx-auto lg:mx-0"
              >
                <p className="mb-4">
                  {expert.about.substring(0, 300)}...
                </p>
                <p>
                  {expert.about.substring(300, 600)}...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="testimonials-header text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600">Real experiences from students who achieved their dreams</p>
          </div>

          <TestimonialsSlider testimonials={testimonials} />
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 bg-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="cta-content">
            <h2 className="text-4xl font-bold mb-4">Begin Your Adventure Today</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Your global education and travel journey starts here. Connect with our expert consultants for personalized guidance and unlock a world of opportunities. Let's build your future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={Users}
                className="bg-yellow-400 text-primary-900 hover:bg-black hover:text-white"
              >
                Request a Callback
              </Button>
              <Button
                href="/university"
                variant="outline"
                size="lg"
                icon={Globe}
                className="border-2 border-white text-white hover:bg-black hover:text-white hover:border-black"
              >
                View Universities
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
