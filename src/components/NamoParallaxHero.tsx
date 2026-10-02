import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

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

  // Showcase Products Data (3 Flagship Products matching Reference Images & Brochure)
  const heroProducts = [
    {
      id: 'panchakavya-fertilizer',
      title: 'NAMO Organic Fertilizers',
      titleAccent: 'Based on Panchakavya',
      tagline: 'Traditional 5-Ingredient Soil Microbiome Restorer',
      desc: 'Natural agricultural inputs designed to support healthy plant growth and sustainable farming practices. Prepared from five pure cow-derived bio-inputs (Milk, Curd, Ghee, Dung, Urine) to revitalize depleted soils, enhance microflora, and reduce crop irrigation requirements by up to 40%.',
      specs: [
        { label: '5 Bio-Inputs', val: 'Pure Panchakavya' },
        { label: 'Water Savings', val: 'Up to 40%' },
        { label: 'Soil Health', val: 'Rich Microflora' },
      ],
      image: '/assets/namo-panchakavya-transparent-cropped.png',
      alt: 'NAMO Organic Fertilizers Based on Panchakavya',
      shortName: 'Fertilizers',
    },
    {
      id: 'panchakavya-pesticide',
      title: 'NAMO Organic Pesticides',
      titleAccent: 'Based on Panchakavya',
      tagline: 'Residue-Free Ecological Crop Protection & Pest Defense',
      desc: 'Natural crop protection solutions engineered to protect plants from pests while preserving beneficial pollinator insects and maintaining a healthy, balanced soil ecosystem. Safe for plants, farmers, and consumers.',
      specs: [
        { label: 'Pest Defense', val: 'Target Eco-Shield' },
        { label: 'Chemicals', val: 'Zero Toxic Residue' },
        { label: 'Ecosystem', val: 'Pollinator Friendly' },
      ],
      image: '/assets/namo-panchakavya-transparent-cropped.png',
      alt: 'NAMO Organic Pesticides Based on Panchakavya',
      shortName: 'Pesticides',
    },
    {
      id: 'algae-extract',
      title: 'NAMO Algae Extract',
      titleAccent: 'Cattle Feed Supplement',
      tagline: 'Bioactive Oceanic Nutrition for Dairy Cattle Wellness',
      desc: 'Natural nutritional feed supplement rich in oceanic macro-algae, bioactive nutrients, and essential minerals. Fortifies dairy cattle immunity, optimizes ruminal digestion, and sustainably boosts daily milk yields with superior fat and SNF profiles.',
      specs: [
        { label: 'Origin', val: 'Pure Marine Algae' },
        { label: 'Target', val: 'Dairy Cattle' },
        { label: 'Key Impact', val: 'Yield & Immunity' },
      ],
      image: '/assets/namo-algae-extract-transparent-cropped.png',
      alt: 'NAMO Algae Extract Cattle Feed Supplement',
      shortName: 'Cattle Feed',
    },
  ];

  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSelectProduct = (index: number) => {
    if (index === activeProductIndex) return;
    setIsTransitioning(true);
    setActiveProductIndex(index);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 320);
  };

  const nextProduct = () => {
    handleSelectProduct((activeProductIndex + 1) % heroProducts.length);
  };

  const prevProduct = () => {
    handleSelectProduct((activeProductIndex - 1 + heroProducts.length) % heroProducts.length);
  };

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
      const mm = gsap.matchMedia();

      // Mobile setup (<= 768px): Instant reveal, fully interactive without 420% pinned dead scroll space
      mm.add('(max-width: 768px)', () => {
        gsap.set(whiteBackdrop, { opacity: 0 });
        gsap.set(bigLogo, { opacity: 0 });
        gsap.set(parallaxBg, { opacity: 0 });
        gsap.set(fgContainer, { opacity: 0 });
        gsap.set(heroBg, { opacity: 1 });
        gsap.set(heroContent, { opacity: 1, y: 0 });
        if (textVignette) gsap.set(textVignette, { opacity: 1 });

        const navEl = document.getElementById('global-navbar');
        if (navEl) {
          navEl.style.opacity = '1';
          navEl.style.pointerEvents = 'auto';
        }
      });

      // Desktop setup (> 768px): Master Pinned Scroll Timeline with 7 Cinematic Parallax Phases
      mm.add('(min-width: 769px)', () => {
        if (prefersReducedMotion) {
          // Simple static fallback for reduced motion
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

        // Initial Reset for Desktop Parallax
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
      });
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

  return (
    <section
      ref={wrapperRef}
      id="namo-parallax-hero-wrapper"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#F8F9F3',
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
          backgroundColor: '#F8F9F3',
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
            LAYER 1B (HERO SECTION BACKGROUND): Light-Themed Organic Farmland
            Lush sunlit rolling green hills and tea plantation landscape!
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
            src="/assets/light_organic_farmland_bg.jpg"
            alt="Light Themed Organic Farmland Background"
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: isMobile ? '65% center' : 'center center',
              willChange: 'opacity',
              opacity: 0,
              display: 'block',
            }}
          />
        </div>

        {/* ===================================================================
            LAYER 2: Soft Luminous Text Vignette Gradient
            Ensures crystal-clear dark typography contrast on left over sunlit landscape
            =================================================================== */}
        <div
          ref={textVignetteRef}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 3,
            background: isMobile
              ? 'linear-gradient(to bottom, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.82) 48%, rgba(255, 255, 255, 0.20) 100%)'
              : 'linear-gradient(to right, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.88) 38%, rgba(255, 255, 255, 0.35) 62%, transparent 85%)',
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
            LAYER 6: HOME PAGE HERO SECTION — LIGHT THEMED ORGANIC SHOWCASE
            Left: Dynamic active product narrative, technical specs, CTAs
            Right: 3-Bottle panoramic showcase (center active + left/right side-back) with stage arrows
            (Bottom carousel bar completely removed; no wood stage)
            =================================================================== */}
        <div
          ref={heroContentRef}
          className="hero-main-container"
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 10,
            width: '100%',
            height: '100%',
            maxWidth: '1560px',
            margin: '0 auto',
            padding: isMobile
              ? 'clamp(7.6rem, 14vh, 8.8rem) 1rem 1.25rem 1rem'
              : 'clamp(4.8rem, 8vh, 6.2rem) clamp(1.8rem, 3.8vw, 4.5rem) clamp(1.5rem, 3.2vh, 2.5rem)',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: isMobile ? 'space-between' : 'space-between',
            boxSizing: 'border-box',
            opacity: 0,
            overflowY: isMobile ? 'auto' : 'hidden',
            overflowX: 'hidden',
            WebkitOverflowScrolling: 'touch',
            willChange: 'transform, opacity',
            pointerEvents: 'auto',
          }}
        >
          {/* LEFT/TOP: Product Details & Action Buttons */}
          <div
            className="hero-content-inner"
            style={{
              flex: isMobile ? 'none' : '0 1 54%',
              width: '100%',
              maxWidth: isMobile ? '560px' : '660px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: isMobile ? 'center' : 'flex-start',
              textAlign: isMobile ? 'center' : 'left',
              margin: isMobile ? '0 auto' : '0',
              zIndex: 12,
            }}
          >
            {/* Product Title & Accent */}
            <div
              style={{
                width: '100%',
                opacity: isTransitioning ? 0 : 1,
                transform: isTransitioning ? 'translateY(6px)' : 'translateY(0)',
                transition: 'opacity 0.28s ease, transform 0.28s ease',
              }}
            >
              <h1
                style={{
                  fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                  fontSize: isMobile ? 'clamp(1.30rem, 5.0vw, 1.60rem)' : 'clamp(2.35rem, 3.4vw, 3.35rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.025em',
                  color: '#18240A',
                  margin: isMobile ? '0 0 0.15rem 0' : '0 0 0.6rem 0',
                  lineHeight: isMobile ? 1.15 : 1.12,
                  textShadow: '0 2px 18px rgba(255, 255, 255, 0.95)',
                  textAlign: isMobile ? 'center' : 'left',
                }}
              >
                {heroProducts[activeProductIndex].title}{' '}
                <span
                  style={{
                    color: '#1B4D35',
                    display: isMobile ? 'inline' : 'block',
                    fontSize: isMobile ? '0.92em' : '0.90em',
                  }}
                >
                  {heroProducts[activeProductIndex].titleAccent}
                </span>
              </h1>

              {/* Tagline */}
              <div
                style={{
                  color: '#4E6E10',
                  fontSize: isMobile ? '0.72rem' : 'clamp(1.0rem, 1.25vw, 1.2rem)',
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                  marginBottom: isMobile ? '0.30rem' : '1.1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: isMobile ? 'center' : 'flex-start',
                  gap: '0.5rem',
                }}
              >
                <span>{heroProducts[activeProductIndex].tagline}</span>
              </div>

              {/* Product Narrative */}
              <p
                style={{
                  fontSize: isMobile ? '0.76rem' : 'clamp(1.02rem, 1.18vw, 1.14rem)',
                  lineHeight: isMobile ? 1.40 : 1.68,
                  color: '#28381A',
                  maxWidth: isMobile ? '520px' : '620px',
                  margin: isMobile ? '0 auto 0.55rem auto' : '0 0 1.75rem 0',
                  fontWeight: 450,
                  textAlign: isMobile ? 'center' : 'left',
                  display: isMobile ? '-webkit-box' : 'block',
                  WebkitLineClamp: isMobile ? 3 : undefined,
                  WebkitBoxOrient: isMobile ? 'vertical' : undefined,
                  overflow: isMobile ? 'hidden' : 'visible',
                }}
              >
                {heroProducts[activeProductIndex].desc}
              </p>

              {/* Technical Spec Highlight Pills (Strictly 3 Columns on Mobile & Desktop) */}
              <div
                className="hero-specs-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? 'repeat(3, minmax(0, 1fr))' : 'repeat(3, 1fr)',
                  gap: isMobile ? '0.35rem' : 'clamp(0.65rem, 1vw, 0.9rem)',
                  maxWidth: isMobile ? '100%' : '620px',
                  width: '100%',
                  marginBottom: isMobile ? '0.55rem' : '2.1rem',
                }}
              >
                {heroProducts[activeProductIndex].specs.map((spec, i) => (
                  <div
                    key={i}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.94)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      border: '1.5px solid rgba(103, 160, 32, 0.35)',
                      borderRadius: isMobile ? '10px' : '16px',
                      padding: isMobile ? '0.35rem 0.25rem' : 'clamp(0.65rem, 1.1vh, 0.85rem) clamp(0.85rem, 1.1vw, 1.15rem)',
                      boxShadow: '0 6px 24px rgba(24, 36, 10, 0.08)',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        color: '#4E6E10',
                        fontSize: isMobile ? '0.55rem' : 'clamp(0.70rem, 0.78vw, 0.76rem)',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        marginBottom: isMobile ? '0.1rem' : '0.25rem',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {spec.label}
                    </div>
                    <div
                      style={{
                        color: '#18240A',
                        fontSize: isMobile ? '0.72rem' : 'clamp(0.96rem, 1.12vw, 1.10rem)',
                        fontWeight: 800,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {spec.val}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons - Forced strictly in the Same Line on Desktop & Mobile */}
            <div
              className="hero-cta-group"
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: isMobile ? '0.45rem' : 'clamp(0.75rem, 1.2vw, 1.1rem)',
                flexWrap: 'nowrap',
                width: '100%',
              }}
            >
              <Link
                to="/products"
                className="hero-btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: isMobile ? '0.35rem' : '0.55rem',
                  backgroundColor: '#FFDB15',
                  border: '1.5px solid #FFDB15',
                  color: '#18240A',
                  padding: isMobile ? '0.62rem 0.5rem' : 'clamp(0.82rem, 1.3vh, 0.96rem) clamp(1.35rem, 1.8vw, 2.1rem)',
                  borderRadius: '9999px',
                  fontSize: isMobile ? '0.68rem' : 'clamp(0.82rem, 0.96vw, 0.92rem)',
                  fontWeight: 900,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 8px 24px rgba(255, 219, 21, 0.45)',
                  transition: 'all 0.25s ease',
                  cursor: 'pointer',
                  flex: isMobile ? '1 1 50%' : '0 0 auto',
                  minWidth: 0,
                }}
              >
                <span>{isMobile ? 'Specifications' : 'Explore Specifications'}</span>
                <ArrowRight size={isMobile ? 12 : 15} color="#18240A" />
              </Link>

              <Link
                to="/contact"
                className="hero-btn-secondary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: isMobile ? '0.35rem' : '0.55rem',
                  backgroundColor: '#1B4D35',
                  border: '1.5px solid #1B4D35',
                  color: '#FFFFFF',
                  padding: isMobile ? '0.62rem 0.5rem' : 'clamp(0.82rem, 1.3vh, 0.96rem) clamp(1.35rem, 1.8vw, 2.1rem)',
                  borderRadius: '9999px',
                  fontSize: isMobile ? '0.68rem' : 'clamp(0.82rem, 0.96vw, 0.92rem)',
                  fontWeight: 800,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 8px 24px rgba(27, 77, 53, 0.25)',
                  transition: 'all 0.25s ease',
                  cursor: 'pointer',
                  flex: isMobile ? '1 1 50%' : '0 0 auto',
                  minWidth: 0,
                }}
              >
                <span>{isMobile ? 'Bulk Supply' : 'Inquire Bulk Supply'}</span>
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE: 3-Bottle Panoramic Product Showcase (Center Mid, Proportional on Mobile) */}
          <div
            className="hero-showcase-stage"
            style={{
              flex: isMobile ? 'none' : '0 1 46%',
              width: isMobile ? '100%' : 'auto',
              height: isMobile ? '230px' : '100%',
              marginTop: isMobile ? '0.4rem' : '0',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'auto',
            }}
          >
            {/* Stage Showcase Area - Centered in Mid */}
            <div
              style={{
                position: 'relative',
                width: isMobile ? '270px' : 'clamp(380px, 38vw, 540px)',
                height: isMobile ? '210px' : 'clamp(480px, 64vh, 620px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Floating Stage Carousel Arrows */}
              <button
                type="button"
                onClick={prevProduct}
                aria-label="Previous Product"
                className="stage-nav-arrow prev-arrow"
                style={{
                  position: 'absolute',
                  left: isMobile ? '2px' : '-24px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: isMobile ? '34px' : '52px',
                  height: isMobile ? '34px' : '52px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1.5px solid rgba(27, 77, 53, 0.22)',
                  color: '#1B4D35',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 25,
                  boxShadow: '0 8px 24px rgba(24, 36, 10, 0.14)',
                  transition: 'all 0.25s ease',
                }}
              >
                <ChevronLeft size={isMobile ? 18 : 30} color="#1B4D35" />
              </button>

              <button
                type="button"
                onClick={nextProduct}
                aria-label="Next Product"
                className="stage-nav-arrow next-arrow"
                style={{
                  position: 'absolute',
                  right: isMobile ? '2px' : '-24px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: isMobile ? '34px' : '52px',
                  height: isMobile ? '34px' : '52px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1.5px solid rgba(27, 77, 53, 0.22)',
                  color: '#1B4D35',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 25,
                  boxShadow: '0 8px 24px rgba(24, 36, 10, 0.14)',
                  transition: 'all 0.25s ease',
                }}
              >
                <ChevronRight size={isMobile ? 18 : 30} color="#1B4D35" />
              </button>

              {/* 3 Showcase Bottles (Proper Center Mid, Proportional Size on Mobile, No Badges) */}
              {heroProducts.map((p, idx) => {
                const offset = (idx - activeProductIndex + heroProducts.length) % heroProducts.length;
                const isCenter = offset === 0;
                const isRight = offset === 1;

                return (
                  <div
                    key={p.id}
                    className={`showcase-bottle-slot ${isCenter ? 'is-active' : 'is-standby'}`}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: isCenter
                        ? 'translate(-50%, -50%) scale(1.08) rotate(0deg)'
                        : isRight
                          ? (isMobile
                            ? 'translate(calc(-50% + 50px), -50%) scale(0.70) rotate(3deg)'
                            : 'translate(calc(-50% + clamp(125px, 11vw, 165px)), -50%) scale(0.72) rotate(4deg)')
                          : (isMobile
                            ? 'translate(calc(-50% - 50px), -50%) scale(0.70) rotate(-3deg)'
                            : 'translate(calc(-50% - clamp(125px, 11vw, 165px)), -50%) scale(0.72) rotate(-4deg)'),
                      zIndex: isCenter ? 12 : 5,
                      opacity: isCenter ? 1 : 0.88,
                      cursor: isCenter ? 'default' : 'pointer',
                      transition: 'transform 0.65s cubic-bezier(0.34, 1.35, 0.64, 1), opacity 0.4s ease, filter 0.4s ease',
                      willChange: 'transform, opacity',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                    onClick={() => {
                      if (!isCenter) handleSelectProduct(idx);
                    }}
                  >
                    {/* Bottle Graphic (Transparent PNG, Sized to fit screen) */}
                    <img
                      src={p.image}
                      alt={p.alt}
                      style={{
                        height: isCenter
                          ? (isMobile ? '195px' : 'clamp(450px, 60vh, 580px)')
                          : (isMobile ? '130px' : 'clamp(320px, 42vh, 410px)'),
                        width: 'auto',
                        maxWidth: '100%',
                        objectFit: 'contain',
                        filter: isCenter
                          ? 'drop-shadow(0 18px 28px rgba(24, 36, 10, 0.32)) drop-shadow(0 4px 10px rgba(24, 36, 10, 0.18))'
                          : 'brightness(0.92) contrast(0.98) drop-shadow(0 12px 18px rgba(24, 36, 10, 0.20))',
                        userSelect: 'none',
                        transition: 'filter 0.4s ease',
                      }}
                    />

                    {/* Natural Soft Ground Contact Shadows */}
                    {isCenter ? (
                      <div
                        style={{
                          width: '68%',
                          height: isMobile ? '14px' : '22px',
                          borderRadius: '50%',
                          background:
                            'radial-gradient(ellipse at center, rgba(20, 35, 15, 0.40) 0%, rgba(20, 35, 15, 0.12) 50%, transparent 75%)',
                          filter: isMobile ? 'blur(3px)' : 'blur(5px)',
                          marginTop: isMobile ? '-5px' : '-10px',
                          pointerEvents: 'none',
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: '56%',
                          height: isMobile ? '10px' : '14px',
                          borderRadius: '50%',
                          background:
                            'radial-gradient(ellipse at center, rgba(20, 35, 15, 0.30) 0%, transparent 70%)',
                          filter: 'blur(3px)',
                          marginTop: isMobile ? '-4px' : '-6px',
                          pointerEvents: 'none',
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Micro-interaction Hover & Keyframe Styles */}
      <style>{`
        .hero-cta-group {
          display: flex !important;
          flex-direction: row !important;
          flex-wrap: nowrap !important;
          align-items: center !important;
        }
        .hero-specs-grid {
          display: grid !important;
          grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
        }
        @media (max-width: 768px) {
          .hero-specs-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
            gap: 0.35rem !important;
          }
          .hero-cta-group {
            display: flex !important;
            flex-direction: row !important;
            flex-wrap: nowrap !important;
            gap: 0.45rem !important;
            width: 100% !important;
          }
          .hero-btn-primary, .hero-btn-secondary {
            flex: 1 1 50% !important;
            min-width: 0 !important;
            padding: 0.62rem 0.4rem !important;
            font-size: 0.68rem !important;
            letter-spacing: 0.04em !important;
            justify-content: center !important;
            white-space: nowrap !important;
          }
        }
        .stage-nav-arrow:hover {
          background-color: #1B4D35 !important;
          border-color: #1B4D35 !important;
          color: #FFDB15 !important;
          transform: translateY(-50%) scale(1.12);
          box-shadow: 0 10px 28px rgba(27, 77, 53, 0.35) !important;
        }
        .stage-nav-arrow:hover svg {
          stroke: #FFDB15 !important;
        }
        .showcase-bottle-slot.is-standby:hover {
          opacity: 1 !important;
        }
        .showcase-bottle-slot.is-standby:hover img {
          filter: brightness(1.0) contrast(1.0) drop-shadow(0 18px 28px rgba(24, 36, 10, 0.35)) !important;
        }
        .hero-btn-primary:hover {
          background-color: #ffe033 !important;
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(255, 219, 21, 0.55) !important;
        }
        .hero-btn-secondary:hover {
          background-color: #246545 !important;
          border-color: #246545 !important;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(27, 77, 53, 0.35) !important;
        }
      `}</style>
    </section>
  );
};
