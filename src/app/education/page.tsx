'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  BookOpen,
  Users,
  Target,
  Lightbulb,
  Star,
  CheckCircle,
  ArrowRight,
  Calendar,
  TrendingUp,
  Award
} from 'lucide-react';
import Button from '@/components/Button';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const EducationPage: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const programsRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animations
      gsap.fromTo(
        ".hero-content",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );

      // Programs section animations
      gsap.fromTo(
        ".programs-header",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: programsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(
        ".program-card",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".program-card",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Benefits section animations
      gsap.fromTo(
        ".benefit-card",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: benefitsRef.current,
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
    });

    return () => ctx.revert();
  }, []);

  const programs = [
    {
      icon: BookOpen,
      title: 'Academic Excellence',
      description: 'Comprehensive programs designed to enhance learning outcomes and academic performance.',
      features: [
        'Personalized learning paths',
        'Expert faculty guidance',
        'Interactive study materials',
        'Regular progress assessments',
        'Peer collaboration opportunities',
        'Academic skill development'
      ],
    },
    {
      icon: Users,
      title: 'Leadership Training',
      description: 'Develop essential leadership skills and prepare for future career advancement.',
      features: [
        'Leadership workshops',
        'Team management training',
        'Communication skills development',
        'Project leadership experience',
        'Mentorship programs',
        'Industry networking events'
      ],
    },
    {
      icon: Target,
      title: 'Career Preparation',
      description: 'Strategic career planning and professional development for future success.',
      features: [
        'Career counseling sessions',
        'Industry insights and trends',
        'Resume and portfolio building',
        'Interview preparation',
        'Professional networking',
        'Job placement assistance'
      ],
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Research',
      description: 'Foster creativity and research skills through hands-on projects and innovation labs.',
      features: [
        'Research methodology training',
        'Innovation lab access',
        'Project-based learning',
        'Patent and publication support',
        'Industry collaboration',
        'Technology integration'
      ],
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: '95% Success Rate',
      description: 'Our students consistently achieve their academic and career goals'
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Learn from industry professionals and academic experts'
    },
    {
      icon: Award,
      title: 'Recognized Certification',
      description: 'Earn certificates valued by top employers worldwide'
    },
    {
      icon: Star,
      title: 'Premium Resources',
      description: 'Access to cutting-edge learning materials and technology'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 text-white py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-content text-center">
            <div className="mb-6 md:mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-white/20 rounded-full backdrop-blur-sm mb-4 md:mb-6">
                <BookOpen size={40} className="text-yellow-300 md:hidden" />
                <BookOpen size={48} className="text-yellow-300 hidden md:block" />
              </div>
            </div>
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 text-white leading-tight">
              Educational
              <span className="block text-yellow-300">Excellence</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto mb-6 md:mb-8 leading-relaxed px-4 sm:px-0">
              Unlock your potential with our innovative educational programs designed to shape tomorrow's leaders. 
              Experience personalized learning, expert guidance, and career-focused training.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section ref={programsRef} className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="programs-header text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 px-4 sm:px-0">Our Learning Programs</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
              Choose from our carefully crafted programs designed to meet your educational goals and career aspirations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              const gradients = [
                'from-blue-500 to-cyan-500',
                'from-purple-500 to-pink-500',
                'from-green-500 to-emerald-500',
                'from-orange-500 to-red-500'
              ];
              const gradient = gradients[index % gradients.length];
              return (
                <div
                  key={program.title}
                  className="program-card bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
                >
                  <div className={`bg-gradient-to-r ${gradient} p-4 sm:p-6 text-white`}>
                    <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                      <div className="bg-white/20 p-2 sm:p-3 rounded-2xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                        <Icon size={28} className="text-white sm:hidden" />
                        <Icon size={36} className="text-white hidden sm:block" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">{program.title}</h3>
                    </div>
                    <p className="text-white/90 text-sm sm:text-base leading-relaxed">{program.description}</p>
                  </div>
                  <div className="p-4 sm:p-6">
                    <ul className="space-y-2 sm:space-y-3">
                      {program.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2 sm:space-x-3">
                          <div className="flex-shrink-0 mt-1">
                            <CheckCircle size={16} className="text-green-500 sm:hidden" />
                            <CheckCircle size={18} className="text-green-500 hidden sm:block" />
                          </div>
                          <span className="text-gray-700 leading-relaxed text-sm sm:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-16 md:py-20 lg:py-24 bg-gradient-to-r from-indigo-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4 px-4 sm:px-0">Why Choose Our Programs</h2>
            <p className="text-base sm:text-lg text-indigo-100 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
              Experience the difference with our proven approach to education and professional development
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="benefit-card text-center">
                  <div className="bg-white/20 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 backdrop-blur-sm">
                    <Icon size={28} className="text-yellow-300 sm:hidden" />
                    <Icon size={36} className="text-yellow-300 hidden sm:block" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{benefit.title}</h3>
                  <p className="text-indigo-100 leading-relaxed text-sm sm:text-base">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="cta-content">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 leading-tight px-4 sm:px-0">
              Start Your Learning Journey Today
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
              Join thousands of successful learners who have transformed their careers through our innovative educational programs. 
              Your future begins with the next step.
            </p>
            <div className="flex justify-center">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={Calendar}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 font-semibold px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base"
              >
                Book Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationPage;
