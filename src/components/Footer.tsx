import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe, ArrowUp, Building } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinksCol1 = [
    { label: 'Home Overview', to: '/' },
    { label: 'About Company', to: '/about' },
    { label: 'Vision & Mission', to: '/about#vision' },
    { label: 'Challenges Facing Agriculture', to: '/about#problem' },
    { label: 'Our Solutions', to: '/about#solutions' },
  ];

  const navLinksCol2 = [
    { label: 'Our Agrarian Services', to: '/services' },
    { label: 'Focus Products (Panchakavya)', to: '/products' },
    { label: 'Why Choose NAMO', to: '/products#why-namo' },
    { label: 'Panchakavya Benefits (-40% Water)', to: '/products#benefits' },
  ];

  const navLinksCol3 = [
    { label: 'Market Opportunity (US $24B)', to: '/market' },
    { label: 'Target Customers (Farmers & FPOs)', to: '/market#customers' },
    { label: 'Value Proposition', to: '/market#value-prop' },
    { label: 'Revenue Model', to: '/market#revenue-model' },
    { label: 'Aim to Scale', to: '/market#scale' },
    { label: 'Contact HQ & Inquiry', to: '/contact' },
  ];

  return (
    <footer
      id="footer"
      style={{
        backgroundColor: '#070c01',
        color: '#EDE8DC',
        padding: '5.5rem 2rem 2.5rem',
        borderTop: '2px solid rgba(103, 160, 32, 0.25)',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        {/* Top Brand Statement / Section 16 Brand Closing */}
        <div
          style={{
            borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
            paddingBottom: '3.5rem',
            marginBottom: '3.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem',
          }}
        >
          <div style={{ maxWidth: '800px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <img
                src="/assets/Fashions__11_-removebg-preview.png"
                alt="NAMO Logo"
                style={{ height: '60px', width: 'auto' }}
              />
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                    fontSize: '1.8rem',
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                    color: '#FFFFFF',
                    lineHeight: 1,
                    display: 'block',
                  }}
                >
                  NAMO ORGANIC
                </span>
                <span
                  style={{
                    fontSize: '0.72rem',
                    letterSpacing: '0.14em',
                    color: '#A8E63A',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                  }}
                >
                  Natural Agriculture & Modern Organic Private Limited
                </span>
              </div>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)',
                color: '#FFDB15',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                lineHeight: 1.25,
                marginTop: '0.8rem',
                marginBottom: '0.6rem',
              }}
            >
              Saving India’s Soil. Nourishing India’s Families.
            </h3>

            <p style={{ fontSize: '0.98rem', color: '#B5AFA4', lineHeight: 1.7, maxWidth: '720px' }}>
              Building healthier agricultural systems through Panchakavya organic bio-inputs, sustainable
              farming practices, and farmer-oriented agricultural products.
            </p>
          </div>

          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1.5px solid rgba(255, 219, 21, 0.3)',
              borderRadius: '20px',
              padding: '1.6rem 2rem',
              minWidth: '280px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#FFDB15', marginBottom: '0.6rem' }}>
              <Building size={16} />
              <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Corporate Registration
              </span>
            </div>
            <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '0.04em' }}>
              Organic Agriculture Enterprise
            </div>
            <div style={{ fontSize: '0.8rem', color: '#A8E63A', marginTop: '0.4rem' }}>
              Chennai, Tamil Nadu, India
            </div>
          </div>
        </div>

        {/* 4 Column Navigation & Contact Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
          }}
        >
          {/* Col 1: Overview Links */}
          <div>
            <h4
              style={{
                fontSize: '0.82rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#A8E63A',
                fontWeight: 800,
                marginBottom: '1.25rem',
              }}
            >
              COMPANY & PHILOSOPHY
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {navLinksCol1.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.to}
                    style={{
                      color: '#B5AFA4',
                      textDecoration: 'none',
                      fontSize: '0.88rem',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#FFDB15')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#B5AFA4')}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Solutions & Market Links */}
          <div>
            <h4
              style={{
                fontSize: '0.82rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#A8E63A',
                fontWeight: 800,
                marginBottom: '1.25rem',
              }}
            >
              SOLUTIONS & PRODUCTS
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {navLinksCol2.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.to}
                    style={{
                      color: '#B5AFA4',
                      textDecoration: 'none',
                      fontSize: '0.88rem',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#FFDB15')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#B5AFA4')}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Strategy & Outreach Links */}
          <div>
            <h4
              style={{
                fontSize: '0.82rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#A8E63A',
                fontWeight: 800,
                marginBottom: '1.25rem',
              }}
            >
              STRATEGY & GROWTH
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {navLinksCol3.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.to}
                    style={{
                      color: '#B5AFA4',
                      textDecoration: 'none',
                      fontSize: '0.88rem',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#FFDB15')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#B5AFA4')}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Official Contact Direct Info */}
          <div>
            <h4
              style={{
                fontSize: '0.82rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#A8E63A',
                fontWeight: 800,
                marginBottom: '1.25rem',
              }}
            >
              DIRECT INQUIRIES
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Phone size={15} color="#FFDB15" />
                <a href="tel:+919500829886" style={{ color: '#EDE8DC', textDecoration: 'none', fontWeight: 600 }}>
                  +91 95008 29886
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Mail size={15} color="#FFDB15" />
                <a href="mailto:namoorganicpvtltd@gmail.com" style={{ color: '#EDE8DC', textDecoration: 'none', wordBreak: 'break-all' }}>
                  namoorganicpvtltd@gmail.com
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <Globe size={15} color="#FFDB15" style={{ marginTop: '2px' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  <a href="https://www.namoorg.com" target="_blank" rel="noopener noreferrer" style={{ color: '#EDE8DC', textDecoration: 'none' }}>
                    www.namoorg.com
                  </a>
                  <a href="https://www.namohydrogen.com" target="_blank" rel="noopener noreferrer" style={{ color: '#EDE8DC', textDecoration: 'none' }}>
                    www.namohydrogen.com
                  </a>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <MapPin size={15} color="#FFDB15" style={{ marginTop: '2px' }} />
                <span style={{ color: '#B5AFA4', lineHeight: 1.5 }}>
                  5B, Jain's La Gardenia, Kothari Road, Nungambakkam, Chennai - 600034, Tamil Nadu, India.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars Ribbon */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '1.4rem 0',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '2.5rem',
            textAlign: 'center',
            marginBottom: '2.5rem',
          }}
        >
          {['ORGANIC AGRICULTURE', 'PANCHAKAVYA FORMULATIONS', 'SOIL FERTILITY', 'SUSTAINABLE LIVING', 'NATURE FEEDS LIFE'].map((tag, i) => (
            <span
              key={i}
              style={{
                fontSize: '0.74rem',
                letterSpacing: '0.18em',
                fontWeight: 700,
                color: '#A8E63A',
              }}
            >
              • {tag}
            </span>
          ))}
        </div>

        {/* Bottom Credits & Back to Top */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            fontSize: '0.8rem',
            color: '#768565',
          }}
        >
          <p>© {new Date().getFullYear()} Natural Agriculture & Modern Organic Private Limited. All rights reserved.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span>Chennai, Tamil Nadu, India</span>
            <button
              onClick={scrollToTop}
              style={{
                background: 'rgba(118, 184, 42, 0.15)',
                border: '1px solid rgba(118, 184, 42, 0.3)',
                color: '#A8E63A',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              title="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
