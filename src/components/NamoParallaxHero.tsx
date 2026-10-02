import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const NamoParallaxHero: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const parallaxBgRef = useRef<HTMLImageElement>(null);
  const heroBgRef = useRef<HTMLImageElement>(null);
  const fgContainerRef = useRef<HTMLDivElement>(null);
  const fgImgRef = useRef<HTMLImageElement>(null);
  const whiteBackdropRef = useRef<HTMLDivElement>(null);
  const bigLogoRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const textVignetteRef = useRef<HTMLDivElement>(null);

  // Responsive check for mobile view (<= 768px)
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 768;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const stage = stageRef.current;
    const parallaxBg = parallaxBgRef.current;
    const heroBg = heroBgRef.current;
    const fgContainer = fgContainerRef.current;
    const whiteBackdrop = whiteBackdropRef.current;
    const bigLogo = bigLogoRef.current;
    const heroContent = heroContentRef.current;
    const textVignette = textVignetteRef.current;

    if (!wrapper || !stage || !parallaxBg || !heroBg || !fgContainer || !whiteBackdrop || !bigLogo || !heroContent) {
      return;
    }

    // If loaded already scrolled down past the intro, show the navbar immediately
    if (window.scrollY > window.innerHeight * 0.8) {
      const navEl = document.getElementById('global-navbar');
      if (navEl) {
        navEl.style.opacity = '1';
        navEl.style.pointerEvents = 'auto';
      }
    }

    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (prefersReducedMotion) {
        // Simple static fallback
        gsap.set(whiteBackdrop, { opacity: 0 });
        gsap.set(bigLogo, { opacity: 0 });
        gsap.set(parallaxBg, { opacity: 0 });
        gsap.set(heroBg, { opacity: 1 });
        gsap.set(heroContent, { opacity: 1, y: 0 });
        if (textVignette) gsap.set(textVignette, { opacity: 1 });
        const navEl = document.getElementById('global-navbar');
        if (navEl) {
          navEl.style.opacity = '1';
          navEl.style.pointerEvents = 'auto';
        }
        return;
      }

      // Initial Reset
      gsap.set(parallaxBg, { yPercent: 0, scale: 1, opacity: 1, transformOrigin: 'center top', force3D: true });
      gsap.set(heroBg, { opacity: 0, force3D: true });
      gsap.set(fgContainer, { yPercent: 0, scale: 1, opacity: 1, transformOrigin: 'center bottom', force3D: true });
      gsap.set(whiteBackdrop, { opacity: 0, force3D: true });
      gsap.set(bigLogo, {
        xPercent: -50,
        yPercent: -50,
        x: 0,
        y: 0,
        opacity: 0,
        scale: 0.85,
        transformOrigin: '50% 50%',
        force3D: true,
      });
      gsap.set(heroContent, { opacity: 0, y: 28, force3D: true });
      if (textVignette) gsap.set(textVignette, { opacity: 0, force3D: true });

      // Master Pinned Scroll Timeline with Expanded Runway and Enhanced Scrub Damping
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: 'top top',
          end: '+=420%',
          pin: stage,
          pinSpacing: true,
          scrub: 1.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const navEl = document.getElementById('global-navbar');
            if (!navEl) return;

            // Phase 4: Navbar reveals smoothly as the flying logo reaches its center slot
            // Starts fading in at progress 0.60, reaches 100% by progress 0.84
            if (self.progress >= 0.84) {
              navEl.style.opacity = '1';
              navEl.style.pointerEvents = 'auto';
            } else if (self.progress >= 0.60) {
              const p = (self.progress - 0.60) / (0.84 - 0.60);
              navEl.style.opacity = String(p);
              navEl.style.pointerEvents = p > 0.6 ? 'auto' : 'none';
            } else {
              navEl.style.opacity = '0';
              navEl.style.pointerEvents = 'none';
            }
          },
        },
      });

      // =======================================================================
      // PHASE 1: Landscape Parallax (0.0 -> 0.32)
      // Desktop: Translucent NAMO Over Misty Mountain Sunrise
      // Mobile: Golden Mists Over Mountain Forests
      // Foreground drops away smoothly with linear scroll tracking
      // =======================================================================
      tl.to(
        fgContainer,
        {
          yPercent: 112,
          scale: 1.06,
          ease: 'none',
          duration: 0.32,
        },
        0
      );

      tl.to(
        parallaxBg,
        {
          yPercent: -12,
          scale: 1.10,
          ease: 'none',
          duration: 0.32,
        },
        0
      );

      // =======================================================================
      // PHASE 2: Warm Ivory Glow Backdrop FADES IN for Logo (0.24 -> 0.44)
      // =======================================================================
      tl.to(
        whiteBackdrop,
        {
          opacity: 1,
          ease: 'power1.inOut',
          duration: 0.20,
        },
        0.24
      );

      // =======================================================================
      // PHASE 3: Big Center NAMO Logo Appears on Warm Ivory Glow (0.36 -> 0.52)
      // =======================================================================
      tl.fromTo(
        bigLogo,
        {
          opacity: 0,
          scale: 0.85,
          xPercent: -50,
          yPercent: -50,
          x: 0,
          y: 0,
        },
        {
          opacity: 1,
          scale: 1,
          xPercent: -50,
          yPercent: -50,
          x: 0,
          y: 0,
          ease: 'power1.out',
          duration: 0.16,
        },
        0.36
      );

      // Dedicated Center Stage Pause: Logo rests proudly in center before flight (0.52 -> 0.58)
      tl.to({}, { duration: 0.06 });

      // =======================================================================
      // PHASE 4: The Logo FLIES Upward and Shrinks into Navbar Center! (0.58 -> 0.84)
      // Smooth, steady power1.inOut curve avoids aggressive speed spikes
      // =======================================================================
      tl.to(
        bigLogo,
        {
          xPercent: -50,
          yPercent: -50,
          y: () => {
            const navLogo = document.getElementById('navbar-center-logo');
            if (navLogo) {
              const rect = navLogo.getBoundingClientRect();
              const logoCenterY = rect.top + rect.height / 2;
              return logoCenterY - window.innerHeight / 2;
            }
            return -(window.innerHeight / 2 - 76);
          },
          x: () => {
            const navLogo = document.getElementById('navbar-center-logo');
            if (navLogo) {
              const rect = navLogo.getBoundingClientRect();
              const logoCenterX = rect.left + rect.width / 2;
              return logoCenterX - window.innerWidth / 2;
            }
            return 0;
          },
          scale: () => {
            const navLogo = document.getElementById('navbar-center-logo');
            if (navLogo) {
              const rect = navLogo.getBoundingClientRect();
              return (rect.height / 240) || 0.28;
            }
            return 0.28;
          },
          ease: 'power1.inOut',
          duration: 0.26,
        },
        0.58
      );

      // Dissolve proxy logo right as real navbar logo reaches 100% opacity
      tl.to(
        bigLogo,
        {
          opacity: 0,
          duration: 0.04,
          ease: 'power1.out',
        },
        0.84
      );

      // =======================================================================
      // PHASE 5: Warm Ivory Glow FADES OUT & Golden Mists FADES IN (0.58 -> 0.78)
      // Strictly keeping Warm Ivory Glow ONLY on the logo background!
      // Parallax sunrise background is swapped out for Golden Mists Over Mountain Forests!
      // =======================================================================
      tl.to(
        whiteBackdrop,
        {
          opacity: 0,
          ease: 'power1.inOut',
          duration: 0.20,
        },
        0.58
      );

      tl.to(
        heroBg,
        {
          opacity: 1,
          ease: 'power1.inOut',
          duration: 0.20,
        },
        0.58
      );

      tl.to(
        parallaxBg,
        {
          opacity: 0,
          duration: 0.10,
        },
        0.58
      );

      // =======================================================================
      // PHASE 6: Home Page Hero Section Texts FADE IN on Golden Mists (0.72 -> 0.88)
      // Displays NAMO ORGANIC headline, badge, subtitle, paragraph, CTA on Golden Mists!
      // =======================================================================
      if (textVignette) {
        tl.fromTo(
          textVignette,
          { opacity: 0 },
          { opacity: 1, duration: 0.16, ease: 'power1.out' },
          0.72
        );
      }

      tl.fromTo(
        heroContent,
        {
          opacity: 0,
          y: 28,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.16,
          ease: 'power1.out',
        },
        0.72
      );

      // =======================================================================
      // PHASE 7: Settle & Hold (0.88 -> 1.0)
      // Hero section fully displayed on Golden Mists background with navbar docked
      // Then unpins seamlessly into NaturePreserved!
      // =======================================================================
      tl.to({}, { duration: 0.12 });
    }, wrapper);

    return () => {
      ctx.revert();
      const navEl = document.getElementById('global-navbar');
      if (navEl) {
        navEl.style.opacity = '1';
        navEl.style.pointerEvents = 'auto';
      }
    };
  }, []);

  const handleScrollToNext = (e: React.MouseEvent) => {
    e.preventDefault();
    const target =
      document.getElementById('story') ||
      document.getElementById('products') ||
      document.querySelector('main > section:nth-of-type(2)');

    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={wrapperRef}
      id="namo-parallax-hero-wrapper"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#0E170C',
        overflow: 'hidden',
      }}
    >
      {/* 100vh Pinned Stage Container */}
      <div
        ref={stageRef}
        id="namo-parallax-hero-stage"
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0E170C',
        }}
      >
        {/* ===================================================================
            LAYER 1A (PARALLAX BACKGROUND): 
            Desktop: Translucent NAMO Over Misty Mountain Sunrise
            Mobile: Golden Mists Over Mountain Forests
            ONLY in the parallax effect background!
            =================================================================== */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        >
          <picture
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              display: 'block',
              overflow: 'hidden',
            }}
          >
            {/* Mobile View: Golden Mists Over Mountain Forests */}
            <source
              media="(max-width: 768px)"
              srcSet="/assets/Golden%20Mists%20Over%20Mountain%20Forests.png"
            />
            {/* Desktop View: Translucent NAMO Over Misty Mountain Sunrise */}
            <source
              media="(min-width: 769px)"
              srcSet="/assets/Translucent%20NAMO%20Over%20Misty%20Mountain%20Sunrise.png"
            />
            <img
              ref={parallaxBgRef}
              src={
                isMobile
                  ? '/assets/Golden Mists Over Mountain Forests.png'
                  : '/assets/Translucent NAMO Over Misty Mountain Sunrise.png'
              }
              alt={
                isMobile
                  ? 'Golden Mists Over Mountain Forests'
                  : 'Translucent NAMO Over Misty Mountain Sunrise'
              }
              style={{
                position: 'absolute',
                left: 0,
                bottom: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 45%',
                willChange: 'transform, opacity',
                transform: 'translate3d(0, 0, 0)',
                display: 'block',
              }}
            />
          </picture>
        </div>

        {/* ===================================================================
            LAYER 1B (HERO SECTION BACKGROUND): Golden Mists Over Mountain Forests
            Kept strictly as the background in the home page hero section!
            =================================================================== */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        >
          <img
            ref={heroBgRef}
            src="/assets/Golden Mists Over Mountain Forests.png"
            alt="Golden Mists Over Mountain Forests"
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 45%',
              willChange: 'opacity',
              opacity: 0,
              display: 'block',
            }}
          />
        </div>

        {/* ===================================================================
            LAYER 2: Atmospheric Text Vignette Gradient
            Appears along with the hero texts for pristine contrast on Golden Mists
            =================================================================== */}
        <div
          ref={textVignetteRef}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 3,
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(14, 23, 12, 0.35) 0%, rgba(14, 23, 12, 0.70) 100%)',
            pointerEvents: 'none',
            opacity: 0,
            willChange: 'opacity',
          }}
        />

        {/* ===================================================================
            LAYER 3 (FOREGROUND): Lush Forest Floor Border Overlay
            Merged seamlessly at the bottom edge during initial state
            =================================================================== */}
        <div
          ref={fgContainerRef}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            zIndex: 4,
            pointerEvents: 'none',
          }}
        >
          <img
            ref={fgImgRef}
            src="/assets/Lush Forest Floor Border Overlay.png"
            alt="Lush Forest Floor Border Overlay"
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center bottom',
              willChange: 'transform',
              transform: 'translate3d(0, 0, 0)',
              display: 'block',
            }}
          />
        </div>

        {/* ===================================================================
            LAYER 4: Warm Ivory Glow Backdrop (LOGO BACKGROUND ONLY!)
            Fades in when scrolling for center logo, then FADES OUT as logo flies up!
            Never shown on the home page hero section!
            =================================================================== */}
        <div
          ref={whiteBackdropRef}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 5,
            opacity: 0,
            pointerEvents: 'none',
            overflow: 'hidden',
            backgroundColor: '#F8F6F0',
            willChange: 'opacity',
          }}
        >
          <img
            src="/assets/Warm Ivory Glow Background.png"
            alt="Warm Ivory Glow Background"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center center',
              display: 'block',
            }}
          />
        </div>

        {/* ===================================================================
            LAYER 5: Big Center NAMO Logo
            Positioned dead center, appears over Warm Ivory Glow, then FLIES into Navbar Center!
            =================================================================== */}
        <div
          ref={bigLogoRef}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 6,
            opacity: 0,
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            willChange: 'transform, opacity',
          }}
        >
          <img
            src="/assets/Fashions__11_-removebg-preview.png"
            alt="NAMO Natural Agriculture & Modern Organic"
            style={{
              width: '240px',
              height: '240px',
              maxWidth: 'min(70vw, 300px)',
              maxHeight: 'min(70vw, 300px)',
              objectFit: 'contain',
              display: 'block',
              filter: 'drop-shadow(0 14px 28px rgba(34, 46, 20, 0.10))',
            }}
          />
        </div>

        {/* ===================================================================
            LAYER 6: HOME PAGE HERO SECTION (ON GOLDEN MISTS BACKGROUND!)
            Reveals as logo flies into navbar and ivory glow dissolves away
            =================================================================== */}
        <div
          ref={heroContentRef}
          style={{
            position: 'relative',
            zIndex: 10,
            maxWidth: '960px',
            margin: '0 auto',
            padding: '7rem 1.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            opacity: 0,
            willChange: 'transform, opacity',
          }}
        >
          {/* Top Capsule Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              backgroundColor: 'rgba(27, 77, 53, 0.85)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              border: '1.2px solid rgba(255, 219, 21, 0.5)',
              borderRadius: '9999px',
              padding: '0.45rem 1.35rem',
              marginBottom: '1.6rem',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            }}
          >
            <Sparkles size={14} color="#FFDB15" />
            <span
              style={{
                color: '#FFDB15',
                fontSize: '0.74rem',
                fontWeight: 800,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
              }}
            >
              PURE FOREST HARVESTS • SINGLE-ORIGIN VEDIC SOILS
            </span>
          </div>

          {/* Main Hero Headline */}
          <h1
            style={{
              fontFamily: 'var(--font-serif, "Cinzel", "Playfair Display", Georgia, serif)',
              fontSize: 'clamp(2.8rem, 6.5vw, 5.6rem)',
              fontWeight: 600,
              letterSpacing: '0.18em',
              color: '#FFFFFF',
              margin: '0 0 0.9rem 0',
              lineHeight: 1.12,
              textShadow: '0 4px 30px rgba(0, 0, 0, 0.7), 0 2px 8px rgba(0, 0, 0, 0.5)',
              textTransform: 'uppercase',
            }}
          >
            NAMO ORGANIC
          </h1>

          {/* Sub-headline */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.9rem',
              color: '#FFE26A',
              fontSize: 'clamp(0.85rem, 1.4vw, 1.15rem)',
              fontWeight: 800,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              marginBottom: '1.6rem',
              textShadow: '0 2px 14px rgba(0, 0, 0, 0.7)',
              flexWrap: 'wrap',
            }}
          >
            <span>NATURAL AGRICULTURE</span>
            <span style={{ fontSize: '0.75em', opacity: 0.85 }}>•</span>
            <span>MODERN ORGANIC</span>
          </div>

          {/* Supporting Editorial Paragraph */}
          <p
            style={{
              fontSize: 'clamp(0.95rem, 1.35vw, 1.18rem)',
              lineHeight: 1.75,
              color: 'rgba(255, 255, 255, 0.94)',
              maxWidth: '740px',
              margin: '0 auto 2.2rem auto',
              textShadow: '0 2px 16px rgba(0, 0, 0, 0.75)',
              fontWeight: 400,
            }}
          >
            Wood cold-pressed edible oils, bilona cultured A2 cow ghee, and unheated wild
            apiary honey — harvested with timeless Vedic care, verified by modern laboratory
            purity.
          </p>

          {/* Action CTA Button */}
          <a
            href="#story"
            onClick={handleScrollToNext}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
              backgroundColor: '#1b4d35',
              border: '1.5px solid rgba(255, 219, 21, 0.7)',
              color: '#FFFFFF',
              padding: '0.85rem 2.2rem',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              fontWeight: 800,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.45)',
              transition: 'all 0.25s ease',
              cursor: 'pointer',
            }}
            className="hero-cta-button"
          >
            <span>ENTER THE HARVEST</span>
            <ChevronDown size={16} color="#FFDB15" />
          </a>
        </div>
      </div>

      {/* Micro-interaction Hover Styles */}
      <style>{`
        .hero-cta-button:hover {
          background-color: #246545 !important;
          border-color: #FFDB15 !important;
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.55), 0 0 20px rgba(255, 219, 21, 0.3) !important;
        }
      `}</style>
    </section>
  );
};
