import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Award, ShieldCheck, Leaf } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const HeroParallax: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const midRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const fgRef = useRef<HTMLDivElement>(null);
  const typoRef = useRef<HTMLDivElement>(null);
  const mistRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Atmospheric Particle Canvas (Golden Morning Pollen & Sun Dust)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Create 45 ambient pollen/dust particles
    const particles = Array.from({ length: 45 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.2 + 0.6,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: -Math.random() * 0.5 - 0.1,
      alpha: Math.random() * 0.7 + 0.2,
      pulse: Math.random() * 0.05 + 0.02,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.alpha += Math.sin(Date.now() * 0.002) * 0.005;

        // Wrap around
        if (p.y < 0) p.y = height;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(215, 175, 70, ${Math.max(0.1, Math.min(0.8, p.alpha))})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(218, 185, 90, 0.4)';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Multi-Layer GSAP ScrollTrigger Parallax
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Background moves very slowly with subtle zoom
      tl.to(
        bgRef.current,
        {
          yPercent: 18,
          scale: 1.08,
          ease: 'none',
        },
        0
      );

      // Midground crops move slightly faster
      tl.to(
        midRef.current,
        {
          yPercent: 32,
          scale: 1.12,
          ease: 'none',
        },
        0
      );

      // Hero stone products podium moves forward toward viewer
      tl.to(
        productsRef.current,
        {
          yPercent: 45,
          scale: 1.18,
          ease: 'none',
        },
        0
      );

      // Foreground leaves move significantly faster for layered depth
      tl.to(
        fgRef.current,
        {
          yPercent: 68,
          scale: 1.28,
          ease: 'none',
        },
        0
      );

      // Mist moves horizontally & dissolves
      tl.to(
        mistRef.current,
        {
          xPercent: 12,
          opacity: 0.2,
          ease: 'none',
        },
        0
      );

      // Typography moves up & gently fades out
      tl.to(
        typoRef.current,
        {
          y: -120,
          opacity: 0,
          ease: 'power2.out',
        },
        0
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: '#F8F9F3',
      }}
    >
      {/* LAYER 0: Background Vast Agricultural Landscape */}
      <div
        ref={bgRef}
        className="parallax-layer"
        style={{
          position: 'absolute',
          inset: '-5%',
          width: '110%',
          height: '110%',
          backgroundImage: 'url(/assets/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          filter: 'brightness(1.05) contrast(1.02)',
        }}
      />

      {/* Atmospheric Soft Sun Light Rays */}
      <div className="light-rays" />

      {/* Atmospheric Dust & Pollen Particles */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 4,
        }}
      />

      {/* Atmospheric Morning Mist Overlay (Light Theme Dawn Mist) */}
      <div
        ref={mistRef}
        style={{
          position: 'absolute',
          bottom: 0,
          left: '-10%',
          width: '120%',
          height: '65%',
          background: 'linear-gradient(to top, rgba(248, 249, 243, 0.98) 0%, rgba(248, 249, 243, 0.6) 40%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 5,
        }}
      />

      {/* LAYER 1: Midground Organic Crop Rows */}
      <div
        ref={midRef}
        className="parallax-layer"
        style={{
          position: 'absolute',
          inset: '-2%',
          width: '104%',
          height: '104%',
          backgroundImage: 'url(/assets/hero-mid.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          mixBlendMode: 'normal',
          opacity: 0.92,
          maskImage: 'linear-gradient(to bottom, transparent 15%, black 45%, black 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 15%, black 45%, black 100%)',
          zIndex: 6,
        }}
      />

      {/* LAYER 2: Hero Stone Products Podium */}
      <div
        ref={productsRef}
        className="parallax-layer"
        style={{
          position: 'absolute',
          bottom: '-2%',
          right: '2%',
          width: '68%',
          maxWidth: '920px',
          height: '82%',
          backgroundImage: 'url(/assets/hero-products.jpg)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right bottom',
          filter: 'drop-shadow(0 25px 35px rgba(24,36,10,0.25))',
          maskImage: 'radial-gradient(ellipse 95% 90% at 75% 75%, black 50%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 95% 90% at 75% 75%, black 50%, transparent 95%)',
          zIndex: 10,
        }}
      />

      {/* LAYER 3: Foreground Botanical Foliage & Dewdrops */}
      <div
        ref={fgRef}
        className="parallax-layer"
        style={{
          position: 'absolute',
          inset: '-5%',
          width: '110%',
          height: '110%',
          backgroundImage: 'url(/assets/hero-fg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          pointerEvents: 'none',
          opacity: 0.88,
          zIndex: 14,
        }}
      />

      {/* LAYER 4: Hero Editorial Typography (Center-Left) */}
      <div
        ref={typoRef}
        style={{
          position: 'absolute',
          top: '20%',
          left: '7%',
          maxWidth: '680px',
          zIndex: 16,
          pointerEvents: 'auto',
        }}
        className="hero-typo-container"
      >
        {/* Brand Tagline */}
        <div style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span className="badge-organic">
            <Sparkles size={13} color="#4E6E10" />
            NATURAL AGRICULTURE · MODERN ORGANIC
          </span>
        </div>

        {/* Main Headline */}
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.6rem, 5.2vw, 5.2rem)',
            fontWeight: 400,
            lineHeight: 1.08,
            letterSpacing: '0.01em',
            color: '#18240A',
            marginBottom: '1.5rem',
            textShadow: '0 2px 20px rgba(255, 255, 255, 0.8)',
          }}
        >
          PURE BY NATURE. <br />
          <span
            style={{
              fontStyle: 'italic',
              fontWeight: 500,
              color: '#3B5710',
            }}
          >
            ROOTED IN TRADITION.
          </span>
        </h1>

        {/* Supporting Editorial Paragraph */}
        <p
          style={{
            fontSize: 'clamp(1rem, 1.3vw, 1.25rem)',
            color: '#2F3C1F',
            fontWeight: 400,
            lineHeight: 1.6,
            maxWidth: '520px',
            marginBottom: '2.5rem',
            textShadow: '0 1px 10px rgba(255, 255, 255, 0.9)',
          }}
        >
          Bringing India’s timeless agricultural wisdom into a cleaner, healthier future.
          Unrefined, chemical-free, and directly traceable to verified organic soils.
        </p>

        {/* Action CTAs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.2rem', alignItems: 'center' }}>
          <a href="#products" className="btn-primary">
            EXPLORE OUR PRODUCTS
          </a>
          <a href="#story" className="btn-secondary">
            DISCOVER OUR STORY
          </a>
        </div>

        {/* Heritage Trust Badges */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.8rem',
            marginTop: '3.5rem',
            paddingTop: '1.8rem',
            borderTop: '1.5px solid rgba(24, 36, 10, 0.12)',
          }}
          className="hero-trust-badges"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Leaf size={16} color="#4E6E10" />
            <span style={{ fontSize: '0.78rem', letterSpacing: '0.06em', color: '#243810', fontWeight: 600 }}>100% Certified Organic</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Award size={16} color="#4E6E10" />
            <span style={{ fontSize: '0.78rem', letterSpacing: '0.06em', color: '#243810', fontWeight: 600 }}>Vedic Bilona Churn</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShieldCheck size={16} color="#4E6E10" />
            <span style={{ fontSize: '0.78rem', letterSpacing: '0.06em', color: '#243810', fontWeight: 600 }}>Zero Chemical Refining</span>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          zIndex: 18,
          pointerEvents: 'none',
        }}
      >
        <span
          style={{
            fontSize: '0.68rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#4E6E10',
            fontWeight: 700,
          }}
        >
          Scroll to explore
        </span>
        <div
          style={{
            width: '20px',
            height: '32px',
            borderRadius: '12px',
            border: '1.5px solid rgba(78, 110, 16, 0.4)',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '6px',
            backgroundColor: '#FFFFFF',
          }}
        >
          <div
            style={{
              width: '3px',
              height: '8px',
              borderRadius: '2px',
              backgroundColor: '#4E6E10',
              animation: 'scrollBob 2s infinite ease-in-out',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scrollBob {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(8px); opacity: 0.3; }
        }
        @media (max-width: 900px) {
          .hero-typo-container {
            top: 16% !important;
            left: 5% !important;
            right: 5% !important;
            max-width: 100% !important;
          }
          .hero-trust-badges {
            flex-wrap: wrap !important;
            gap: 1rem !important;
            margin-top: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};
