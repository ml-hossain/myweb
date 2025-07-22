'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { Menu, X, GraduationCap, Plane, FileText, School } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: 'Home', href: '/', icon: null },
    { name: 'Education', href: '/education', icon: GraduationCap },
    { name: 'Travel', href: '/travel', icon: Plane },
    { name: 'University', href: '/university', icon: School },
    { name: 'About', href: '/about', icon: null },
    { name: 'Contact', href: '/contact', icon: null },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Logo hover animation
      const logo = logoRef.current;
      if (logo) {
        logo.addEventListener('mouseenter', () => {
          gsap.to(logo, { scale: 1.05, duration: 0.2 });
        });
        logo.addEventListener('mouseleave', () => {
          gsap.to(logo, { scale: 1, duration: 0.2 });
        });
      }

      // Nav items hover animations
      const navItems = document.querySelectorAll('.nav-item');
      navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
          gsap.to(item, { y: -2, duration: 0.2 });
        });
        item.addEventListener('mouseleave', () => {
          gsap.to(item, { y: 0, duration: 0.2 });
        });
      });

      // Mobile nav items hover animations
      const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
      mobileNavItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
          gsap.to(item, { x: 4, duration: 0.2 });
        });
        item.addEventListener('mouseleave', () => {
          gsap.to(item, { x: 0, duration: 0.2 });
        });
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const mobileMenu = mobileMenuRef.current;
    if (mobileMenu) {
      if (isOpen) {
        gsap.fromTo(mobileMenu, 
          { opacity: 0, height: 0 },
          { opacity: 1, height: 'auto', duration: 0.3 }
        );
      } else {
        gsap.to(mobileMenu, { opacity: 0, height: 0, duration: 0.3 });
      }
    }
  }, [isOpen]);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <div
                ref={logoRef}
                className="flex items-center"
              >
                <img 
                  src="/logo.png" 
                  alt="NextGen EduMirate Solutions" 
                  className="h-12 w-auto"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.name} href={item.href} prefetch={false}>
                  <div
                    className="nav-item flex items-center space-x-1 text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {Icon && <Icon size={16} />}
                    <span>{item.name}</span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden bg-white border-t"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.name} href={item.href}>
                  <div
                    onClick={() => setIsOpen(false)}
                    className="mobile-nav-item flex items-center space-x-2 text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {Icon && <Icon size={16} />}
                    <span>{item.name}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
