import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Users, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const FarmersSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { scale: 0.96, y: 60 },
        {
          scale: 1.04,
          y: -30,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1.5,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const farmerCooperatives = [
    {
      region: 'Tamil Nadu Agrarian Belt',
      crops: 'Black Sesame, Groundnut & Heirloom Rice',
      members: '320+ Farming Families',
      practice: '100% Desi Cow Dung Compost & Jeevamrutha',
    },
    {
      region: 'Deccan Plateau, Maharashtra',
      crops: 'Ancient Emmer Khapli Wheat & Pulses',
      members: '180+ Certified Smallholders',
      practice: 'Dryland regenerative soil tillage',
    },
    {
      region: 'Nilgiris & Western Ghats',
      crops: 'Wildflower Forest Honey & Spices',
      members: 'Tribal Honey Collectors Guild',
      practice: 'Non-destructive ethical comb harvest',
    },
  ];

  return (
    <section
      id="farmers"
      ref={containerRef}
      style={{
        position: 'relative',
        backgroundColor: '#F8F9F3',
        padding: '7rem 2rem',
        overflow: 'hidden',
        borderTop: '1px solid rgba(24, 36, 10, 0.08)',
      }}
    >
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <span className="badge-organic">
              <Users size={14} color="#4E6E10" />
              SOIL STEWARDS OF BHARAT
            </span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 4.5vw, 4.2rem)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: '#18240A',
              marginBottom: '1.2rem',
            }}
          >
            THE PEOPLE BEHIND EVERY PRODUCT
          </h2>
          <p
            style={{
              fontSize: '1.15rem',
              color: '#2C3B1C',
              maxWidth: '720px',
              margin: '0 auto 1.5rem',
              fontWeight: 400,
              lineHeight: 1.7,
            }}
          >
            Our farmers are at the heart of NAMO. Every naturally grown crop begins with the people who cultivate
            the land, protect the soil and preserve agricultural knowledge passed through generations.
          </p>

          <p
            style={{
              fontSize: '1.4rem',
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontWeight: 500,
              color: '#3B5710',
              letterSpacing: '0.04em',
            }}
          >
            FROM THEIR FIELDS TO YOUR FAMILY.
          </p>
        </div>

        {/* Cinematic Authentic Farmer Visual Banner */}
        <div
          ref={imgRef}
          style={{
            position: 'relative',
            borderRadius: '28px',
            overflow: 'hidden',
            boxShadow: '0 25px 60px -15px rgba(24, 36, 10, 0.15)',
            border: '1px solid rgba(99, 141, 8, 0.25)',
            marginBottom: '4.5rem',
            height: 'clamp(320px, 50vh, 680px)',
            backgroundColor: '#F0F4E8',
          }}
        >
          <img
            src="/assets/farmers.jpg"
            alt="Authentic Indian farmers gently cradling fertile organic soil and green seedlings in lush farmland at sunrise"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
          {/* Subtle cinematic overlays */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(24, 36, 10, 0.9) 0%, rgba(24, 36, 10, 0.25) 40%, transparent 80%)',
            }}
          />

          {/* Floating Quotes & Fair Trade Banner */}
          <div
            style={{
              position: 'absolute',
              bottom: '2.5rem',
              left: '2.5rem',
              right: '2.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '1.5rem',
            }}
          >
            <div style={{ maxWidth: '600px' }}>
              <span
                style={{
                  fontSize: '0.72rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#A8E63A',
                  fontWeight: 800,
                  display: 'block',
                  marginBottom: '0.4rem',
                }}
              >
                ETHICAL FARMER PARTNERSHIPS
              </span>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.2rem, 1.8vw, 1.7rem)',
                  color: '#FFFFFF',
                  fontStyle: 'italic',
                  lineHeight: 1.4,
                }}
              >
                "We don't pour poison into our mother earth. We feed her Jeevamrutha, and she feeds our children with pure health."
              </p>
            </div>

            <div
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                borderRadius: '16px',
                padding: '1.2rem 1.6rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              }}
            >
              <Heart size={24} color="#3B5710" />
              <div>
                <span style={{ fontSize: '0.72rem', color: '#687656', letterSpacing: '0.1em', fontWeight: 600 }}>DIRECT REMUNERATION</span>
                <p style={{ fontSize: '1.05rem', fontWeight: 800, color: '#18240A' }}>+35% Above Mandi Rates</p>
              </div>
            </div>
          </div>
        </div>

        {/* Farmer Co-operative Clusters (White Luxury Cards) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {farmerCooperatives.map((coop, i) => (
            <div
              key={i}
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(99, 141, 8, 0.2)',
                borderRadius: '20px',
                padding: '2rem',
                boxShadow: '0 4px 15px rgba(24, 36, 10, 0.04)',
                transition: 'all 0.35s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#4E6E10';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(24, 36, 10, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(99, 141, 8, 0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(24, 36, 10, 0.04)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem' }}>
                <MapPin size={18} color="#4E6E10" />
                <h4 style={{ color: '#18240A', fontSize: '1.1rem', fontWeight: 700 }}>{coop.region}</h4>
              </div>
              <p style={{ fontSize: '0.88rem', color: '#3B5710', fontWeight: 700, marginBottom: '0.6rem' }}>
                {coop.crops}
              </p>
              <p style={{ fontSize: '0.82rem', color: '#556345', lineHeight: 1.5, marginBottom: '1.2rem' }}>
                {coop.practice}
              </p>
              <span
                style={{
                  fontSize: '0.72rem',
                  letterSpacing: '0.08em',
                  fontWeight: 600,
                  color: '#243810',
                  background: '#F0F4E8',
                  padding: '0.4rem 0.9rem',
                  borderRadius: '9999px',
                  display: 'inline-block',
                }}
              >
                {coop.members}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
