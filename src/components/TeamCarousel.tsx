'use client';

import React from 'react';
import { motion } from 'framer-motion';

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
            <motion.div
              key={member.name}
              initial={false}
              animate={{
                x: `${(index - current) * 100}%`,
              }}
              transition={{
                duration: 1.5,
                ease: [0.25, 0.1, 0.25, 1.0],
              }}
              className="absolute inset-0 w-full h-full bg-white flex items-center justify-center"
            >
              <div className="w-full h-full flex items-center justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                  {/* Image Section */}
                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ 
                      x: index === current ? 0 : 100,
                      opacity: index === current ? 1 : 0
                    }}
                    transition={{
                      duration: 1.2,
                      delay: index === current ? 0.3 : 0,
                      ease: [0.25, 0.1, 0.25, 1.0]
                    }}
                    className="relative"
                  >
                    <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full shadow-2xl"
                      />
                    </div>
                  </motion.div>
                  
                  {/* Content Section */}
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ 
                      x: index === current ? 0 : -100,
                      opacity: index === current ? 1 : 0
                    }}
                    transition={{
                      duration: 1.2,
                      delay: index === current ? 0.5 : 0,
                      ease: [0.25, 0.1, 0.25, 1.0]
                    }}
                    className="text-center lg:text-left"
                  >
                    <motion.h2 
                      className="text-2xl md:text-3xl font-semibold mb-4 text-blue-600"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: index === current ? 1 : 0,
                        y: index === current ? 0 : 20
                      }}
                      transition={{ duration: 1.5, delay: index === current ? 0.8 : 0 }}
                    >
                      Meet Our Expert
                    </motion.h2>
                    <motion.h3 
                      className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900"
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ 
                        opacity: index === current ? 1 : 0,
                        y: index === current ? 0 : 40
                      }}
                      transition={{ duration: 1.8, delay: index === current ? 1.0 : 0 }}
                    >
                      {member.name}
                    </motion.h3>
                    <motion.p 
                      className="text-xl md:text-2xl font-light mb-8 text-blue-700"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ 
                        opacity: index === current ? 1 : 0,
                        y: index === current ? 0 : 30
                      }}
                      transition={{ duration: 1.6, delay: index === current ? 1.2 : 0 }}
                    >
                      {member.role}
                    </motion.p>
                    <motion.p 
                      className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 text-gray-700"
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ 
                        opacity: index === current ? 1 : 0,
                        y: index === current ? 0 : 25
                      }}
                      transition={{ duration: 1.4, delay: index === current ? 1.4 : 0 }}
                    >
                      {member.about}
                    </motion.p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex justify-center space-x-4">
            {team.map((_, idx) => (
              <button
                key={idx}
                className={`w-4 h-4 rounded-full border-2 border-blue-400 transition-all duration-500 ease-out ${
                  current === idx ? 'bg-blue-600 scale-125' : 'bg-white hover:bg-blue-200'
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
