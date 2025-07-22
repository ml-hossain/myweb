'use client';

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from './TestimonialCard';

interface Testimonial {
  name: string;
  country: string;
  university: string;
  program: string;
  image: string;
  rating: number;
  text: string;
}

interface TestimonialsSliderProps {
  testimonials: Testimonial[];
}

const TestimonialsSlider: React.FC<TestimonialsSliderProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const cardsPerView = 3;
  const totalSlides = Math.ceil(testimonials.length / cardsPerView);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Button hover animations
      const buttons = document.querySelectorAll('.gsap-slider-button');
      buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
          gsap.to(button, { scale: 1.1, duration: 0.2 });
        });
        button.addEventListener('mouseleave', () => {
          gsap.to(button, { scale: 1, duration: 0.2 });
        });
      });
    });

    return () => ctx.revert();
  }, []);

  // Auto-play functionality with pause and resume
  useEffect(() => {
    if (!isAutoPlaying || isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, isPaused, totalSlides]);

  // Reset auto-play after user interaction
  useEffect(() => {
    if (!isAutoPlaying) {
      // Clear any existing timeout
      if (autoPlayTimeoutRef.current) {
        clearTimeout(autoPlayTimeoutRef.current);
      }
      
      // Resume auto-play after 10 seconds of inactivity
      autoPlayTimeoutRef.current = setTimeout(() => {
        setIsAutoPlaying(true);
      }, 10000);
    }

    return () => {
      if (autoPlayTimeoutRef.current) {
        clearTimeout(autoPlayTimeoutRef.current);
      }
    };
  }, [isAutoPlaying]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (autoPlayTimeoutRef.current) {
        clearTimeout(autoPlayTimeoutRef.current);
      }
    };
  }, []);

  const animateSlide = (direction: 'next' | 'prev') => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cards = slider.querySelectorAll('.testimonial-card');
    
    if (direction === 'next') {
      gsap.to(cards, {
        x: -100,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.1,
        onComplete: () => {
          gsap.set(cards, { x: 100, opacity: 0 });
          gsap.to(cards, {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
            stagger: 0.1
          });
        }
      });
    } else {
      gsap.to(cards, {
        x: 100,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.1,
        onComplete: () => {
          gsap.set(cards, { x: -100, opacity: 0 });
          gsap.to(cards, {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
            stagger: 0.1
          });
        }
      });
    }
  };

  const nextSlide = () => {
    setIsAutoPlaying(false);
    const newIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    animateSlide('next');
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    const newIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    animateSlide('prev');
  };

  const getCurrentCards = () => {
    const startIndex = currentIndex * cardsPerView;
    const endIndex = startIndex + cardsPerView;
    return testimonials.slice(startIndex, endIndex);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  // Pause auto-play on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* Slider Container */}
      <div className="relative overflow-hidden">
        <div
          ref={sliderRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {getCurrentCards().map((testimonial, index) => (
            <div key={`${currentIndex}-${index}`} className="testimonial-card">
              <TestimonialCard
                name={testimonial.name}
                country={testimonial.country}
                university={testimonial.university}
                program={testimonial.program}
                image={testimonial.image}
                rating={testimonial.rating}
                text={testimonial.text}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center mt-8 space-x-4">
        <button
          className="gsap-slider-button bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-black hover:text-white transition-colors border-2 border-gray-600"
          onClick={prevSlide}
          disabled={totalSlides <= 1}
        >
          <ChevronLeft size={24} />
        </button>

        {/* Dots Indicator */}
        <div className="flex space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        <button
          className="gsap-slider-button bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-black hover:text-white transition-colors border-2 border-gray-600"
          onClick={nextSlide}
          disabled={totalSlides <= 1}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Slide Counter */}
      <div className="text-center mt-4 text-sm text-gray-500">
        {currentIndex + 1} of {totalSlides}
      </div>
    </div>
  );
};

export default TestimonialsSlider;
