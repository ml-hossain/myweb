'use client';

import React from 'react';
import { gsap } from 'gsap';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  about: string;
}

interface TeamCarouselProps {
  team: TeamMember[];
}

const TeamCarousel: React.FC<TeamCarouselProps> = ({ team }) => {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % team.length);
    }, 4000); // 4 seconds for smooth experience
    return () => clearInterval(timer);
  }, [team.length]);

  return (
    <section className="relative h-screen overflow-hidden bg-white">
      <div className="relative w-full h-full bg-white">
        {/* Container for all slides */}
        <div className="relative w-full h-full flex">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="absolute inset-0 w-full h-full bg-white flex items-center justify-center"
              style={{
                transform: `translateX(${(index - current) * 100}%)`,
                transition: 'transform 1.5s cubic-bezier(0.25, 0.1, 0.25, 1.0)'
              }}
            >
              <div className="w-full h-full flex items-start justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
                  {/* Image Section */}
                  <div
                    className="relative flex justify-center lg:justify-end"
                    style={{
                      transform: `translateX(${index === current ? 0 : 100}px)`,
                      opacity: index === current ? 1 : 0,
                      transition: 'transform 1.2s ease-out, opacity 1.2s ease-out'
                    }}
                  >
                    <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px]">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full shadow-2xl"
                      />
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div
                    className="text-center lg:text-left px-4 lg:px-0"
                    style={{
                      transform: `translateX(${index === current ? 0 : -100}px)`,
                      opacity: index === current ? 1 : 0,
                      transition: 'transform 1.2s ease-out, opacity 1.2s ease-out'
                    }}
                  >
                    <h2 
                      className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-blue-600"
                      style={{
                        opacity: index === current ? 1 : 0,
                        transform: `translateY(${index === current ? 0 : 20}px)`,
                        transition: 'opacity 1.5s ease-out, transform 1.5s ease-out'
                      }}
                    >
                      Meet Our Expert
                    </h2>
                    <h3 
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-gray-900"
                      style={{
                        opacity: index === current ? 1 : 0,
                        transform: `translateY(${index === current ? 0 : 40}px)`,
                        transition: 'opacity 1.8s ease-out, transform 1.8s ease-out'
                      }}
                    >
                      {member.name}
                    </h3>
                    <p 
                      className="text-lg sm:text-xl md:text-2xl font-light mb-6 sm:mb-8 text-blue-700"
                      style={{
                        opacity: index === current ? 1 : 0,
                        transform: `translateY(${index === current ? 0 : 30}px)`,
                        transition: 'opacity 1.6s ease-out, transform 1.6s ease-out'
                      }}
                    >
                      {member.role}
                    </p>
                    <p 
                      className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 text-gray-700 pr-0 lg:pr-8"
                      style={{
                        opacity: index === current ? 1 : 0,
                        transform: `translateY(${index === current ? 0 : 25}px)`,
                        transition: 'opacity 1.4s ease-out, transform 1.4s ease-out'
                      }}
                    >
                      {member.about.length > 300 
                        ? `${member.about.substring(0, 300)}...` 
                        : member.about
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex justify-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-6 py-3">
            {team.map((_, idx) => (
              <button
                key={idx}
                className={`w-4 h-4 rounded-full border-2 border-white transition-all duration-500 ease-out touch-manipulation ${
                  current === idx ? 'bg-white scale-125' : 'bg-transparent hover:bg-white/50'
                }`}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to team member ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCarousel;
