import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="footer"
      style={{
        backgroundColor: '#070c01',
        color: '#EDE8DC',
        padding: '6rem 2rem 3rem',
        borderTop: '1px solid rgba(118, 184, 42, 0.25)',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        {/* Top Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3.5rem',
            marginBottom: '4.5rem',
          }}
        >
          {/* Column 1: Brand & Identity */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.2rem', textDecoration: 'none' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle at 35% 30%, #A8E63A 0%, #638D08 70%, #101800 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                🌱
              </div>
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.6rem',
                    fontWeight: 800,
                    letterSpacing: '0.15em',
                    color: '#FFFFFF',
                    lineHeight: 1,
                    display: 'block',
                  }}
                >
                  NAMO
                </span>
                <span
                  style={{
                    fontSize: '0.65rem',
                    letterSpacing: '0.22em',
                    color: '#A8E63A',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                  }}
                >
                  Natural Agriculture Modern Organic
                </span>
              </div>
            </Link>

            <p style={{ fontSize: '0.92rem', color: '#B5AFA4', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              Organic Household & Consumer Products. Reviving ancient Indian agriculture with modern certifications and farm-to-family traceability.
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                borderRadius: '9999px',
                background: 'rgba(118, 184, 42, 0.1)',
                border: '1px solid rgba(118, 184, 42, 0.25)',
                color: '#A8E63A',
                fontSize: '0.75rem',
                fontWeight: 600,
              }}
            >
              <ShieldCheck size={14} /> 100% Certified Organic & Traceable
            </div>
          </div>

          {/* Column 2: Product Categories */}
          <div>
            <h4
              style={{
                fontSize: '0.85rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#A8E63A',
                fontWeight: 700,
                marginBottom: '1.4rem',
              }}
            >
              OUR HARVEST CATEGORIES
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', padding: 0 }}>
              {[
                { label: 'Cold-Pressed Edible Oils (Vaagai Marachekku)', to: '/product/sesame-oil' },
                { label: 'A2 Desi Cow Bilona Ghee', to: '/product/a2-ghee' },
                { label: 'Raw Forest Honey (Unpasteurized)', to: '/product/organic-honey' },
                { label: 'Stone-Ground Whole Wheat & Grains', to: '/product/wheat-flour' },
                { label: 'Unpolished Organic Dals & Pulses', to: '/products?category=dals' },
                { label: 'Hand-Sorted Raw Nuts & Dry Fruits', to: '/products?category=nuts' },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.to}
                    style={{
                      color: '#B5AFA4',
                      textDecoration: 'none',
                      fontSize: '0.88rem',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#A8E63A')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#B5AFA4')}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Leadership & Governance */}
          <div>
            <h4
              style={{
                fontSize: '0.85rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#A8E63A',
                fontWeight: 700,
                marginBottom: '1.4rem',
              }}
            >
              FOUNDERSHIP & LEADERSHIP
            </h4>
            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.78rem', color: '#768565', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Founder & Managing Director
              </span>
              <p style={{ fontSize: '1.15rem', color: '#FFFFFF', fontWeight: 600, marginTop: '2px' }}>
                Mrs. Fathima Ali
              </p>
              <p style={{ fontSize: '0.85rem', color: '#B5AFA4', marginTop: '6px', lineHeight: 1.5 }}>
                Championing women-led agrarian collectives and regenerative native Indian farming systems.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#EDE8DC', fontSize: '0.9rem' }}>
                <Phone size={16} color="#A8E63A" />
                <span>+91 9500164786</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#EDE8DC', fontSize: '0.9rem' }}>
                <Mail size={16} color="#A8E63A" />
                <span>support@namoorg.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#EDE8DC', fontSize: '0.9rem' }}>
                <MapPin size={16} color="#A8E63A" />
                <span>Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter & Ethics */}
          <div>
            <h4
              style={{
                fontSize: '0.85rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#A8E63A',
                fontWeight: 700,
                marginBottom: '1.4rem',
              }}
            >
              FARM DISPATCHES
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#B5AFA4', lineHeight: 1.6, marginBottom: '1.2rem' }}>
              Subscribe to seasonal harvest announcements, cold-pressing schedules, and traditional Ayurvedic kitchen wisdom.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '9999px',
                  padding: '0.65rem 1.2rem',
                  color: '#FFFFFF',
                  fontSize: '0.85rem',
                  outline: 'none',
                  flexGrow: 1,
                }}
              />
              <button
                className="btn-primary"
                style={{ padding: '0.65rem 1.2rem', fontSize: '0.75rem' }}
                onClick={() => alert('Thank you for subscribing to NAMO Farm Dispatches!')}
              >
                JOIN
              </button>
            </div>
          </div>
        </div>

        {/* Core Pillars Ribbon */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '1.5rem 0',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '2.5rem',
            textAlign: 'center',
            marginBottom: '3rem',
          }}
        >
          {['100% ORGANIC', 'NO PRESERVATIVES', 'CHEMICAL-FREE', 'FARM TRACEABLE', 'TRADITIONAL METHODS'].map((tag, i) => (
            <span
              key={i}
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
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
          <p>© {new Date().getFullYear()} NAMO — Natural Agriculture Modern Organic. All rights reserved.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <Link to="/why-namo" style={{ color: '#768565', textDecoration: 'none' }}>
              Terms of Purity
            </Link>
            <Link to="/traceability" style={{ color: '#768565', textDecoration: 'none' }}>
              Traceability Ledger
            </Link>
            <Link to="/contact" style={{ color: '#768565', textDecoration: 'none' }}>
              Contact HQ
            </Link>
            <button
              onClick={scrollToTop}
              style={{
                background: 'rgba(118, 184, 42, 0.15)',
                border: '1px solid rgba(118, 184, 42, 0.3)',
                color: '#A8E63A',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
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
