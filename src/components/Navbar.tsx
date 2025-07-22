'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import { Menu, X, GraduationCap, Plane, FileText, School } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const navItems = [
    { name: 'Home', href: '/', icon: null },
    { name: 'Education', href: '/education', icon: GraduationCap },
    { name: 'Travel', href: '/travel', icon: Plane },
    { name: 'University', href: '/university', icon: School },
    { name: 'About', href: '/about', icon: null },
    { name: 'Contact', href: '/contact', icon: null },
  ];

  // Debug function to test navigation
  const handleNavClick = (href: string, name: string, event?: React.MouseEvent) => {
    console.log(`Navigating to: ${href} (${name})`);
    setIsOpen(false);
    
    // Fallback navigation using router.push if Link doesn't work
    setTimeout(() => {
      router.push(href);
    }, 100);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close mobile menu on window resize (desktop view)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

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
        // Prevent body scroll when mobile menu is open
        document.body.classList.add('mobile-menu-open');
        gsap.fromTo(mobileMenu, 
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
        );
      } else {
        // Restore body scroll when mobile menu is closed
        document.body.classList.remove('mobile-menu-open');
        gsap.to(mobileMenu, { 
          opacity: 0, 
          y: -10, 
          duration: 0.3, 
          ease: "power2.in" 
        });
      }
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isOpen]);

  return (
    <nav ref={navRef} className="mobile-navbar-fixed mobile-navbar-wrapper">
      <div className="max-w-7xl mx-auto mobile-navbar-content">
        <div className="flex justify-between navbar-height items-center">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <div
                ref={logoRef}
                className="flex items-center"
              >
                <img 
                  src="/logo.png" 
                  alt="NextGen EduMirate Solutions" 
                  className="navbar-logo"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  prefetch={false}
                  onClick={() => handleNavClick(item.href, item.name)}
                  className="nav-item flex items-center space-x-1 text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {Icon && <Icon size={16} />}
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mobile-menu-button"
              aria-label="Toggle mobile menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <>
          <div 
            className="mobile-menu-overlay active"
            onClick={() => setIsOpen(false)}
          />
          <div
            ref={mobileMenuRef}
            className="mobile-menu-container"
          >
            <div className="mobile-menu-spacing">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link 
                    key={item.name} 
                    href={item.href}
                    onClick={() => handleNavClick(item.href, item.name)}
                    className="mobile-nav-item"
                    role="menuitem"
                  >
                    {Icon && <Icon size={20} />}
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
