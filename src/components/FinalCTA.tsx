import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const FinalCTA: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        bgRef.current,
        { scale: 1.02, yPercent: 0 },
        {
          scale: 1.1,
          yPercent: 12,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      style={{
        position: 'relative',
        height: '90vh',
        minHeight: '620px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      {/* Background Cinematic Sunset Landscape */}
      <div
        ref={bgRef}
        style={{
          position: 'absolute',
          inset: '-5%',
          width: '110%',
          height: '110%',
          backgroundImage: 'url(/assets/sunset-farm.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          filter: 'brightness(0.9) contrast(1.05)',
        }}
      />

      {/* Atmospheric Warm Golden Sunlight Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, rgba(248, 249, 243, 0.45) 0%, rgba(248, 249, 243, 0.92) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '820px',
        }}
      >
        <span className="badge-organic" style={{ marginBottom: '1.5rem' }}>
          RETURN TO NATURAL LIVING
        </span>

        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
            fontWeight: 400,
            lineHeight: 1.08,
            color: '#18240A',
            marginBottom: '1.5rem',
          }}
        >
          CHOOSE NATURE. <br />
          <span
            style={{
              fontStyle: 'italic',
              fontWeight: 500,
              color: '#3B5710',
            }}
          >
            CHOOSE BETTER.
          </span>
        </h2>

        <p
          style={{
            fontSize: 'clamp(1.1rem, 1.6vw, 1.35rem)',
            lineHeight: 1.6,
            color: '#2C3B1C',
            fontWeight: 400,
            maxWidth: '560px',
            margin: '0 auto 3rem',
          }}
        >
          Bring the goodness of naturally sourced products into your everyday life.
          Wholesome nutrition unhindered by modern chemicals.
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1.4rem',
            alignItems: 'center',
          }}
        >
          <a href="#products" className="btn-primary" style={{ padding: '1.1rem 2.5rem', fontSize: '0.9rem' }}>
            EXPLORE THE NAMO COLLECTION <ArrowRight size={16} />
          </a>
          <a href="#footer" className="btn-secondary" style={{ padding: '1.1rem 2.2rem', fontSize: '0.9rem' }}>
            GET IN TOUCH
          </a>
        </div>
      </div>
    </section>
  );
};
