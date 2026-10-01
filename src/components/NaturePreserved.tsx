import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sprout, Sun, Droplets, Compass } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const NaturePreserved: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth scroll parallax for the soil & seedling image
      gsap.fromTo(
        imageRef.current,
        { y: 80, scale: 0.95 },
        {
          y: -40,
          scale: 1.04,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        }
      );

      // Fade & reveal text blocks
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const soilMetrics = [
    {
      icon: <Sprout size={20} color="#4E6E10" />,
      title: 'Panchakavya Microbiome',
      desc: 'Formulations derived from native desi cow inputs that naturally activate soil biology.',
    },
    {
      icon: <Droplets size={20} color="#3B5710" />,
      title: '100% Chemical Free',
      desc: 'Zero synthetic fertilizers, chemical insecticides, or toxic petroleum solvents.',
    },
    {
      icon: <Sun size={20} color="#B5872A" />,
      title: '30% Water Savings',
      desc: 'Enhanced soil humus and water retention, helping crops thrive with less irrigation.',
    },
    {
      icon: <Compass size={20} color="#4E6E10" />,
      title: '20% Yield Improvement',
      desc: 'Natural bio-stimulants validated across paddy, vegetables, and tea plantations.',
    },
  ];

  return (
    <section
      id="story"
      ref={sectionRef}
      style={{
        position: 'relative',
        backgroundColor: '#F0F4E8',
        padding: '8rem 2rem',
        overflow: 'hidden',
        borderTop: '1px solid rgba(24, 36, 10, 0.08)',
        borderBottom: '1px solid rgba(24, 36, 10, 0.08)',
      }}
    >
      <div
        style={{
          maxWidth: '1360px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '5rem',
          alignItems: 'center',
        }}
      >
        {/* Left Column: Macro Soil & Sprout Image with Layered Card */}
        <div style={{ position: 'relative' }}>
          <div
            ref={imageRef}
            style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -15px rgba(24, 36, 10, 0.15)',
              border: '1px solid rgba(99, 141, 8, 0.25)',
              backgroundColor: '#FFFFFF',
            }}
          >
            <img
              src="/assets/nature-soil.jpg"
              alt="Rich organic Indian soil with green seedling emerging in morning sunlight"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
            {/* Subtle Gradient Edge Overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(24, 36, 10, 0.75) 0%, transparent 50%)',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '1.8rem',
                left: '2rem',
                right: '2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: '0.7rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#A8E63A',
                    fontWeight: 700,
                  }}
                >
                  SOIL FOUNDATION
                </span>
                <p style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 600, marginTop: '2px' }}>
                  Microbial Diversity & High Carbon Purity
                </p>
              </div>
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  padding: '0.5rem 0.9rem',
                  borderRadius: '12px',
                  color: '#243810',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                }}
              >
                0.00% SYNTHETICS
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Copy & Soil Purity Breakdown */}
        <div ref={textRef}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <span className="badge-organic">ROOTED IN PURITY</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 4vw, 3.8rem)',
              fontWeight: 400,
              lineHeight: 1.12,
              marginBottom: '1.8rem',
              color: '#18240A',
            }}
          >
            NATURE, PRESERVED. <br />
            <span
              style={{
                fontStyle: 'italic',
                fontWeight: 500,
                color: '#3B5710',
              }}
            >
              TRADITION, RENEWED.
            </span>
          </h2>

          <p
            style={{
              fontSize: '1.15rem',
              lineHeight: 1.75,
              color: '#2C3B1C',
              fontWeight: 400,
              marginBottom: '1.5rem',
            }}
          >
            From India's most trusted organic roots — chemical-free food for your kitchen, chemical-free inputs for your farm. Because real purity has no shortcuts.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.75,
              color: '#556345',
              fontWeight: 400,
              marginBottom: '3rem',
            }}
          >
            NAMO — Natural Agriculture Modern Organic — works to rebuild soil health, reduce chemical dependency, and support sustainable farming across India. Built on the belief that the land feeding this country deserves restoration.
          </p>

          {/* Metric Grid (Clean White Floating Cards) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {soilMetrics.map((metric, i) => (
              <div
                key={i}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(99, 141, 8, 0.2)',
                  borderRadius: '16px',
                  padding: '1.4rem',
                  boxShadow: '0 4px 15px rgba(24, 36, 10, 0.04)',
                  transition: 'all 0.35s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#4E6E10';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(24, 36, 10, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(99, 141, 8, 0.2)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(24, 36, 10, 0.04)';
                }}
              >
                <div style={{ marginBottom: '0.8rem' }}>{metric.icon}</div>
                <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#18240A', marginBottom: '0.4rem' }}>
                  {metric.title}
                </h4>
                <p style={{ fontSize: '0.82rem', color: '#556345', lineHeight: 1.55 }}>
                  {metric.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
