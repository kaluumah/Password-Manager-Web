import React, { useEffect, useState, useRef } from "react";

const AboutSection = () => {
  const [beams, setBeams] = useState([]);
  const [particles, setParticles] = useState([]);
  const animationRef = useRef(null);

  useEffect(() => {
    // Create initial beams
    const initialBeams = [];
    for (let i = 0; i < 5; i++) {
      initialBeams.push({
        id: i,
        left: 20 + i * 15,
        width: 3 + Math.random() * 5, // Increased width here
        opacity: 0.2 + Math.random() * 0.4,
        animationDuration: 3 + Math.random() * 4,
      });
    }
    setBeams(initialBeams);

    // Create initial falling particles
    const initialParticles = [];
    for (let i = 0; i < 15; i++) {
      initialParticles.push(createParticle(i));
    }
    setParticles(initialParticles);

    // Animation loop for falling particles
    const animate = () => {
      setParticles((prevParticles) => {
        return prevParticles.map((particle) => {
          // Update particle position
          const newTop = particle.top + particle.speed;

          // Reset particle if it goes off screen
          if (newTop > 100) {
            return createParticle(particle.id);
          }

          return {
            ...particle,
            top: newTop,
          };
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Function to create a new particle
  const createParticle = (id) => ({
    id,
    left: Math.random() * 100,
    top: -5 - Math.random() * 10, // Start above the visible area
    size: 0.5 + Math.random() * 1,
    opacity: 0.5 + Math.random() * 0.5,
    speed: 0.05 + Math.random() * 0.1, // Controls falling speed
  });

  return (
    <section className="aboutsection relative w-64 h-64  overflow-hidden rounded-md ">
      {/* Light beams */}
      {beams.map((beam) => (
        <div
          key={`beam-${beam.id}`}
          className="absolute h-full animate-pulse "
          style={{
            left: `${beam.left}%`,
            width: `${beam.width}px`,
            opacity: beam.opacity,
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)",
            animationDuration: `${beam.animationDuration}s`,
          }}
        />
      ))}

      {/* Falling particles */}
      {particles.map((particle) => (
        <div
          key={`particle-${particle.id}`}
          className="absolute rounded-full bg-white "
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
          }}
        />
      ))}

      {/* Center glow */}
      <div
        className="absolute left-1/2 top-1/2 w-24 h-24 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)",
          transform: "translate(-50%, -50%)",
        }}
      />
    </section>
  );
};

export default AboutSection;
