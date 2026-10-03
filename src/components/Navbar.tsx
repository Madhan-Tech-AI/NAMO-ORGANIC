import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Mail, Phone, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Multi-page navigation links — clean, concise, 6 items that fit comfortably
  const navLinks = [
    { label: 'HOME', to: '/' },
    { label: 'ABOUT US', to: '/about' },
    { label: 'SERVICES', to: '/services' },
    { label: 'FOCUS PRODUCTS', to: '/products' },
    { label: 'MARKET & SCALE', to: '/market' },
    { label: 'CONTACT', to: '/contact' },
  ];

  return (
    <header
      id="global-navbar"
      style={{
        position: 'sticky',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1100,
        backgroundColor: '#FFFFFF',
        boxShadow: isScrolled
          ? '0 10px 30px -10px rgba(24, 36, 10, 0.12)'
          : '0 2px 10px rgba(24, 36, 10, 0.04)',
        transition: 'all 0.25s ease',
      }}
    >
      {/* ===================================================================
          TIER 1: CORPORATE TOP BAR (#795648 Warm Earth Brown)
          Official Phone, Email & Location
          =================================================================== */}
      <div
        className="top-bar-container"
        style={{
          backgroundColor: '#795648',
          color: '#FFFFFF',
          padding: '0.4rem 2rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
        }}
      >
        <div
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem',
            fontSize: '0.78rem',
          }}
        >
          {/* Left: Contact Hotlines */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="tel:+919500829886"
              style={{
                color: '#FFFFFF',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                opacity: 0.95,
                fontWeight: 600,
              }}
            >
              <Phone size={13} color="#FFDB15" />
              <span>+91 95008 29886</span>
            </a>

            <span style={{ color: 'rgba(255, 255, 255, 0.4)' }}>|</span>

            <a
              href="mailto:namoorganicpvtltd@gmail.com"
              style={{
                color: '#FFFFFF',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                opacity: 0.95,
                fontWeight: 600,
              }}
            >
              <Mail size={13} color="#FFDB15" />
              <span>namoorganicpvtltd@gmail.com</span>
            </a>
          </div>

          {/* Right: Corporate Details */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '0.74rem',
              letterSpacing: '0.04em',
            }}
            className="corporate-top-meta"
          >
            <span style={{ opacity: 0.95 }}>Chennai, Tamil Nadu, India</span>
          </div>
        </div>
      </div>

      {/* ===================================================================
          TIER 2: MAIN MULTI-PAGE NAVIGATION BAR
          Clean layout: Logo | 6 Balanced Nav Links | "Partner With Us" CTA
          =================================================================== */}
      <div
        className="corporate-nav-tier"
        style={{
          padding: isScrolled ? '0.45rem 2rem' : '0.65rem 2rem',
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid rgba(24, 36, 10, 0.08)',
          width: '100%',
          transition: 'padding 0.25s ease',
        }}
      >
        <div
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'clamp(0.75rem, 1.5vw, 1.5rem)',
          }}
        >
          {/* Brand Logo & Name */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="corp-brand-link"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.70rem',
              flexShrink: 0,
            }}
            title="Natural Agriculture & Modern Organic Private Limited"
          >
            <img
              id="navbar-center-logo"
              src="/assets/Fashions__11_-removebg-preview.png"
              alt="NAMO Logo"
              className="corp-brand-logo"
              style={{
                height: isScrolled ? '44px' : '52px',
                width: 'auto',
                objectFit: 'contain',
                transition: 'height 0.25s ease',
                flexShrink: 0,
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flexShrink: 0 }}>
              <span
                className="corp-brand-title"
                style={{
                  fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                  fontSize: isScrolled ? '1.12rem' : '1.24rem',
                  fontWeight: 800,
                  letterSpacing: '0.025em',
                  color: '#18240A',
                  lineHeight: 1.1,
                  transition: 'font-size 0.25s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                NAMO ORGANIC
              </span>
              <span
                className="corp-brand-subtitle"
                style={{
                  fontSize: 'clamp(0.54rem, 0.60vw, 0.62rem)',
                  letterSpacing: '0.04em',
                  fontWeight: 700,
                  color: '#1b4d35',
                  textTransform: 'uppercase',
                  lineHeight: 1.2,
                  whiteSpace: 'nowrap',
                  display: 'block',
                }}
              >
                Natural Agriculture & Modern Organic Pvt. Ltd.
              </span>
            </div>
          </Link>

          {/* Desktop Multi-Page Navigation Links */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(0.6rem, 1.25vw, 1.6rem)',
              whiteSpace: 'nowrap',
            }}
            className="corporate-desktop-nav"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => `corp-nav-link ${isActive ? 'active-corp-link' : ''}`}
                style={({ isActive }) => ({
                  color: isActive ? '#1b4d35' : '#293B14',
                  textDecoration: 'none',
                  fontSize: '0.82rem',
                  fontWeight: isActive ? 800 : 700,
                  letterSpacing: '0.08em',
                  padding: '0.45rem 0.2rem',
                  transition: 'all 0.2s ease',
                  borderBottom: isActive ? '2.5px solid #1b4d35' : '2.5px solid transparent',
                  position: 'relative',
                })}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Action CTA: Partner With Us */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              flexShrink: 0,
            }}
            className="corporate-cta-container"
          >
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                backgroundColor: '#1b4d35',
                color: '#FFFFFF',
                padding: '0.55rem 1.3rem',
                borderRadius: '9999px',
                fontSize: '0.8rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(27, 77, 53, 0.25)',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
              }}
              className="corp-cta-btn"
            >
              <span>Partner With Us</span>
              <ArrowUpRight size={14} color="#FFDB15" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#18240A',
                cursor: 'pointer',
                padding: '0.4rem',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              className="corp-hamburger-btn"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderTop: '1px solid rgba(24, 36, 10, 0.08)',
            borderBottom: '2px solid #1b4d35',
            padding: '1.25rem 1.5rem 2rem',
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
            maxHeight: '80vh',
            overflowY: 'auto',
          }}
          className="corp-mobile-drawer"
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem',
            }}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMobileMenuOpen(false)}
                style={({ isActive }) => ({
                  color: isActive ? '#1b4d35' : '#18240A',
                  textDecoration: 'none',
                  fontSize: '0.96rem',
                  fontWeight: isActive ? 800 : 700,
                  letterSpacing: '0.05em',
                  padding: '0.65rem 0',
                  borderBottom: '1px solid rgba(24, 36, 10, 0.05)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                })}
              >
                <span>{link.label}</span>
                <span style={{ color: '#1b4d35', fontWeight: 800 }}>→</span>
              </NavLink>
            ))}

            <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(24, 36, 10, 0.1)' }}>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#1b4d35',
                  color: '#FFFFFF',
                  padding: '0.85rem 1.5rem',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                <span>Partner With NAMO</span>
                <ArrowUpRight size={16} color="#FFDB15" />
              </Link>

              <div style={{ marginTop: '1.2rem', fontSize: '0.82rem', color: '#666', lineHeight: 1.6 }}>
                <div><strong>Helpline:</strong> +91 95008 29886</div>
                <div><strong>Email:</strong> namoorganicpvtltd@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Responsive and Hover Styles */}
      <style>{`
        .corp-nav-link:hover {
          color: #1b4d35 !important;
          transform: translateY(-1px);
        }
        .active-corp-link {
          color: #1b4d35 !important;
        }
        .corp-cta-btn:hover {
          background-color: #133a28 !important;
          box-shadow: 0 6px 18px rgba(27, 77, 53, 0.35) !important;
          transform: translateY(-1px);
        }
        @media (max-width: 1024px) {
          .corporate-desktop-nav {
            display: none !important;
          }
          .corp-hamburger-btn {
            display: flex !important;
          }
        }
        @media (max-width: 640px) {
          .corporate-top-meta {
            display: none !important;
          }
          .corporate-cta-container .corp-cta-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
