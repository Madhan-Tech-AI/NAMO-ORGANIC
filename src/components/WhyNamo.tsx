import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Leaf, ShieldAlert, Sparkles, MapPin, History, RefreshCw } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const WhyNamo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.children;
      if (!cards) return;

      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const reasons = [
    {
      icon: <History size={28} color="#4E6E10" />,
      number: '01',
      title: 'ANCIENT WISDOM. MODERN CERTIFICATION.',
      description: 'Rooted in Panchakavya and supported by modern standards including ISO 9001:2015, FSSAI, and GeM compliance — tradition proven, then certified.',
      badge: 'ISO & FSSAI',
    },
    {
      icon: <Leaf size={28} color="#3B5710" />,
      number: '02',
      title: 'EAT HEALTHY. BE HEALTHY.',
      description: 'NAMO products are developed without harmful synthetic inputs, helping farmers grow cleaner and healthier food for every family at the table.',
      badge: 'Zero Synthetics',
    },
    {
      icon: <Sparkles size={28} color="#B5872A" />,
      number: '03',
      title: 'PRECISION AGRICULTURE',
      description: 'Drone-compatible liquid formulations support uniform coverage, reduced waste, and efficient farming practices — built for modern fields.',
      badge: 'Modern Organic',
    },
    {
      icon: <RefreshCw size={28} color="#4E6E10" />,
      number: '04',
      title: 'WATER-SMART FARMING',
      description: 'NAMO bio-stimulants improve soil water retention and strengthen root systems, helping farms sustain with less water across seasons.',
      badge: '30% Water Savings',
    },
    {
      icon: <MapPin size={28} color="#3B5710" />,
      number: '05',
      title: 'TRANSPARENT FROM SOIL TO SHELF',
      description: "We name every ingredient. We show every certification. We trace every product from source farm to your hands. If we can't tell you what's in it, we won't sell it.",
      badge: 'Farm Traceable',
    },
    {
      icon: <ShieldAlert size={28} color="#B5872A" />,
      number: '06',
      title: 'GOING GLOBAL THE RIGHT WAY',
      description: "India's organic wisdom, now supplied to government agricultural agencies in Bahrain, Saudi Arabia, Oman, and the UAE — because healthy soil science has no borders.",
      badge: '4 Gulf Countries',
    },
  ];

  return (
    <section
      id="why-namo"
      ref={containerRef}
      style={{
        position: 'relative',
        backgroundColor: '#F8F9F3',
        padding: 'clamp(3.5rem, 8vw, 7rem) clamp(1rem, 4vw, 2rem)',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 4.5rem)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <span className="badge-organic">THE NAMO BENCHMARK</span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.2rem, 4.5vw, 4.2rem)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: '#18240A',
              marginBottom: '1rem',
            }}
          >
            WHY CONSCIOUS FAMILIES CHOOSE NAMO
          </h2>
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              color: '#556345',
              maxWidth: '620px',
              margin: '0 auto',
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            We don’t believe in industrial shortcuts. Every jar, pouch, and bottle represents an unyielding vow to soil purity and human vitality.
          </p>
        </div>

        {/* 6 Immersive Visual Cards (Clean White Luxury Cards) */}
        <div
          ref={cardsRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(1.2rem, 3vw, 2rem)',
          }}
        >
          {reasons.map((item, idx) => (
            <div
              key={idx}
              style={{
                position: 'relative',
                background: '#FFFFFF',
                borderRadius: '24px',
                padding: 'clamp(1.5rem, 4vw, 2.8rem) clamp(1.2rem, 3vw, 2.4rem)',
                border: '1px solid rgba(99, 141, 8, 0.2)',
                boxShadow: '0 15px 35px -10px rgba(24, 36, 10, 0.05)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#4E6E10';
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 25px 50px -10px rgba(24, 36, 10, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(99, 141, 8, 0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 15px 35px -10px rgba(24, 36, 10, 0.05)';
              }}
            >
              {/* Card Header */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '2rem',
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '16px',
                      background: 'rgba(103, 160, 32, 0.12)',
                      border: '1px solid rgba(103, 160, 32, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.8rem',
                      fontWeight: 800,
                      color: 'rgba(24, 36, 10, 0.12)',
                    }}
                  >
                    {item.number}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    color: '#18240A',
                    marginBottom: '1rem',
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.94rem',
                    lineHeight: 1.65,
                    color: '#3D4A2D',
                    fontWeight: 400,
                    marginBottom: '2rem',
                  }}
                >
                  {item.description}
                </p>
              </div>

              {/* Bottom Badge */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '1.2rem',
                  borderTop: '1px solid rgba(24, 36, 10, 0.08)',
                }}
              >
                <span
                  style={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#3B5710',
                    fontWeight: 700,
                  }}
                >
                  {item.badge}
                </span>
                <span style={{ fontSize: '0.75rem', color: '#768565', fontWeight: 600 }}>Standard 100%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
