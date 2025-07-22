'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, MapPin } from 'lucide-react';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface TestimonialCardProps {
  name: string;
  country: string;
  university: string;
  program: string;
  image: string;
  rating: number;
  text: string;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  country,
  university,
  program,
  image,
  rating,
  text,
  index
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (card) {
      // Initial animation
      gsap.fromTo(card, 
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Hover animations
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { scale: 1.02, duration: 0.3 });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { scale: 1, duration: 0.3 });
      });
    }
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0 w-full"
    >
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-primary-600">{university}</p>
          <p className="text-gray-600 text-sm flex items-center">
            <MapPin size={12} className="mr-1" />
            {country}
          </p>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex mb-2">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} size={16} className="text-yellow-400 fill-current" />
          ))}
        </div>
        <p className="text-xs text-gray-500">{program}</p>
      </div>
      <p className="text-gray-700 italic text-sm leading-relaxed">"{text}"</p>
    </div>
  );
};

export default TestimonialCard;
