import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingBag, Menu, X, ChevronDown, Mail, Truck, User, Search } from 'lucide-react';
import { AuthModal } from './AuthModal';
import { PRODUCTS } from '../data/products';

interface NavbarProps {
  onOpenCart: () => void;
  cartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCart, cartCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLeftLinks = [
    { label: 'HOME', to: '/' },
    { label: 'OUR STORY', to: '/story' },
    { label: 'WHY NAMO', to: '/why-namo' },
  ];

  const navRightLinks = [
    { label: 'OUR JOURNEY', to: '/journey' },
    { label: 'PRODUCTS', to: '/products' },
    { label: 'CONTACT', to: '/contact' },
  ];

  const productBarLinks = [
    { label: 'COLD PRESSED OILS', to: '/product/sesame-oil' },
    { label: 'A2 COW GHEE', to: '/product/a2-ghee' },
    { label: 'NAMO ORGANIC HONEY', to: '/product/organic-honey' },
    { label: 'NAMO ORGANIC JAGGERY POWDER', to: '/product/jaggery-powder' },
    { label: 'ALL PRODUCTS', to: '/products' },
  ];

  const searchSuggestions = searchQuery.trim()
    ? PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchFocused(false);
    }
  };

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
  };

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
          ? '0 6px 20px -5px rgba(24, 36, 10, 0.12)'
          : '0 2px 10px rgba(24, 36, 10, 0.04)',
        transition: 'all 0.25s ease',
      }}
    >
      {/* ===================================================================
          TIER 1: TOP BAR (#795648 Warm Earth Brown)
          Left Corner: Facebook | Instagram | Mail
          Right Corner: Track Your Order | Login / Signup
          =================================================================== */}
      <div
        className="top-bar-container"
        style={{
          backgroundColor: '#795648',
          color: '#FFFFFF',
          padding: '0.35rem 2rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
        }}
      >
        <div
          style={{
            maxWidth: '1500px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          {/* Left Corner: Exactly 3 Icons (Facebook, Instagram, Mail) */}
          <div
            className="top-bar-socials"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.1rem',
            }}
          >
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              title="NAMO Organic Facebook"
              className="social-icon-link"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              title="NAMO Organic Instagram"
              className="social-icon-link"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* Mail Icon */}
            <a
              href="mailto:care@namoorganic.com"
              title="Email Us: care@namoorganic.com"
              className="social-icon-link"
            >
              <Mail size={14} />
            </a>
          </div>

          {/* Right Corner: Track Your Order and Login/Signup */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              fontSize: '0.74rem',
              letterSpacing: '0.04em',
            }}
          >
            <Link
              to="/traceability"
              style={{
                color: '#FFFFFF',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontWeight: 650,
                opacity: 0.95,
                transition: 'all 0.2s ease',
              }}
              className="top-bar-link"
              title="Track order batch, harvest origin and lab purity reports"
            >
              <Truck size={13} style={{ opacity: 0.9 }} />
              <span>Track Your Order</span>
            </Link>

            <span style={{ color: 'rgba(255, 255, 255, 0.35)', userSelect: 'none' }}>|</span>

            <button
              onClick={() => setIsAuthOpen(true)}
              style={{
                background: 'none',
                border: 'none',
                color: '#FFFFFF',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.74rem',
                fontWeight: 650,
                letterSpacing: '0.04em',
                cursor: 'pointer',
                padding: 0,
                opacity: 0.95,
                transition: 'all 0.2s ease',
              }}
              className="top-bar-link"
              title="Sign in or register account"
            >
              <User size={13} style={{ opacity: 0.9 }} />
              <span>Login / Signup</span>
            </button>
          </div>
        </div>
      </div>

      {/* ===================================================================
          TIER 2: MIDDLE BAR (Clean White Centered Header)
          3 Left Links | Center Bigger Official Logo | 3 Right Links | Search
          =================================================================== */}
      <div
        className="middle-navbar-container"
        style={{
          padding: isScrolled ? '0.35rem 2rem' : '0.55rem 2rem',
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid rgba(24, 36, 10, 0.08)',
          width: '100%',
        }}
      >
        <div
          style={{
            maxWidth: '1500px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
            position: 'relative',
            width: '100%',
          }}
          className="middle-navbar-grid"
        >
          {/* Left Column: 3 Nav Links aligned to the right (hugs the center logo) */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: 'clamp(0.8rem, 1.6vw, 2.2rem)',
              whiteSpace: 'nowrap',
            }}
            className="desktop-nav-split"
          >
            {navLeftLinks.map((link) => {
              const active = isActive(link.to);
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  style={{
                    color: active ? '#293B14' : '#334024',
                    textDecoration: 'none',
                    fontSize: '0.84rem',
                    fontWeight: active ? 800 : 700,
                    letterSpacing: '0.1em',
                    transition: 'all 0.2s ease',
                    padding: '0.35rem 0.2rem',
                    borderBottom: active ? '2px solid #293B14' : '2px solid transparent',
                    whiteSpace: 'nowrap',
                    display: 'inline-block',
                  }}
                  className="nav-link-hover"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Center Column: Official Brand Logo — Dead Center of the Screen (50%) */}
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 clamp(0.6rem, 1.2vw, 1.6rem)',
              flexShrink: 0,
            }}
            title="NAMO — Natural Agriculture & Modern Organic"
          >
            <img
              id="navbar-center-logo"
              src="/assets/Fashions__11_-removebg-preview.png"
              alt="NAMO Natural Agriculture & Modern Organic"
              style={{
                height: isScrolled ? '72px' : '90px',
                width: 'auto',
                maxHeight: '94px',
                objectFit: 'contain',
                display: 'block',
                transition: 'height 0.25s ease',
              }}
            />
          </Link>

          {/* Right Column: 3 Nav Links + Search Option Placed Properly Right Beside Navigation */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: 'clamp(0.8rem, 1.5vw, 1.8rem)',
              whiteSpace: 'nowrap',
            }}
            className="desktop-nav-right-group"
          >
            <nav
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(0.8rem, 1.5vw, 1.8rem)',
                whiteSpace: 'nowrap',
              }}
              className="desktop-nav-split"
            >
              {navRightLinks.map((link) => {
                const active = isActive(link.to);
                return (
                  <Link
                    key={link.label}
                    to={link.to}
                    style={{
                      color: active ? '#293B14' : '#334024',
                      textDecoration: 'none',
                      fontSize: '0.84rem',
                      fontWeight: active ? 800 : 700,
                      letterSpacing: '0.1em',
                      transition: 'all 0.2s ease',
                      padding: '0.35rem 0.2rem',
                      borderBottom: active ? '2px solid #293B14' : '2px solid transparent',
                      whiteSpace: 'nowrap',
                      display: 'inline-block',
                    }}
                    className="nav-link-hover"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Subtle Divider between CONTACT and Search */}
            <div
              style={{
                width: '1px',
                height: '18px',
                backgroundColor: 'rgba(27, 77, 53, 0.25)',
                margin: '0 0.1rem',
                flexShrink: 0,
              }}
              className="desktop-search-divider"
            />

            {/* Search Option: Placed Properly beside CONTACT (NOT in the far corner!) */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                flexShrink: 0,
              }}
              className="navbar-search-desktop"
            >
              <form
                onSubmit={handleSearchSubmit}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  borderBottom: isSearchFocused ? '1.5px solid #1b4d35' : '1.5px solid rgba(27, 77, 53, 0.4)',
                  paddingBottom: '3px',
                  transition: 'all 0.2s ease',
                  width: isSearchFocused || searchQuery ? '200px' : '160px',
                }}
              >
                <button
                  type="submit"
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    color: isSearchFocused ? '#1b4d35' : '#47634F',
                    transition: 'color 0.2s ease',
                  }}
                  title="Search products"
                >
                  <Search size={15} />
                </button>
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setTimeout(() => setIsSearchFocused(false), 250)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: '#18240A',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    letterSpacing: '0.02em',
                    width: '100%',
                  }}
                  className="nav-search-input"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      searchInputRef.current?.focus();
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      color: '#666',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <X size={12} />
                  </button>
                )}
              </form>

              {/* Live Search Suggestions Dropdown */}
              {isSearchFocused && searchSuggestions.length > 0 && (
                <div
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 8px)',
                    left: 0,
                    width: '300px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    boxShadow: '0 16px 40px rgba(0, 0, 0, 0.25)',
                    padding: '0.5rem 0',
                    zIndex: 2200,
                    border: '1px solid rgba(27, 77, 53, 0.2)',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      padding: '0.4rem 0.9rem',
                      fontSize: '0.68rem',
                      fontWeight: 800,
                      color: '#1b4d35',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      borderBottom: '1px solid rgba(24, 36, 10, 0.06)',
                    }}
                  >
                    Matching Products ({searchSuggestions.length})
                  </div>
                  {searchSuggestions.slice(0, 5).map((p) => (
                    <Link
                      key={p.id}
                      to={`/product/${p.id}`}
                      onClick={() => {
                        setSearchQuery('');
                        setIsSearchFocused(false);
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.65rem',
                        padding: '0.5rem 0.9rem',
                        textDecoration: 'none',
                        transition: 'background 0.15s ease',
                        borderBottom: '1px solid rgba(24, 36, 10, 0.04)',
                      }}
                      className="nav-search-result-item"
                    >
                      <img
                        src={p.image}
                        alt={p.name}
                        style={{
                          width: '34px',
                          height: '34px',
                          objectFit: 'cover',
                          borderRadius: '4px',
                          flexShrink: 0,
                        }}
                      />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div
                          style={{
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            color: '#18240A',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {p.shortName || p.name}
                        </div>
                        <div style={{ fontSize: '0.72rem', color: '#1b4d35', fontWeight: 800 }}>
                          {p.price}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Hamburger (Only on mobile/small tablet) */}
          <div style={{ display: 'none', alignItems: 'center', gap: '0.8rem' }} className="mobile-header-actions">
            <button
              onClick={onOpenCart}
              style={{
                background: '#243810',
                border: 'none',
                color: '#FFFFFF',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                position: 'relative',
              }}
            >
              <ShoppingBag size={16} />
              {cartCount > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-4px',
                    right: '-4px',
                    background: '#FFDB15',
                    color: '#18240A',
                    fontSize: '0.65rem',
                    fontWeight: 900,
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#18240A',
                cursor: 'pointer',
                padding: '0.2rem',
              }}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* ===================================================================
          TIER 3: RICH FOREST GREEN PRODUCT BAR (#1b4d35)
          All Options Perfectly Centered in Single Row: Products + Gold "MY CART"
          =================================================================== */}
      <div
        style={{
          backgroundColor: '#1b4d35',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.25)',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          padding: '0 1rem',
          width: '100%',
        }}
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '44px',
          }}
        >
          {/* Exactly All Options Centered in Single Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(0.6rem, 1.8vw, 2.2rem)',
              padding: '0.35rem 0',
              whiteSpace: 'nowrap',
              flexWrap: 'nowrap',
            }}
            className="product-bar-scrollable"
          >
            {productBarLinks.map((item) => {
              const active = location.pathname === item.to;
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  style={{
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    fontSize: '0.8rem',
                    fontWeight: active ? 900 : 700,
                    letterSpacing: '0.07em',
                    transition: 'all 0.2s ease',
                    padding: '0.35rem 0.6rem',
                    borderRadius: '4px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    backgroundColor: active ? 'rgba(255, 255, 255, 0.18)' : 'transparent',
                    whiteSpace: 'nowrap',
                  }}
                  className="product-bar-link"
                >
                  {item.label}
                  {item.label !== 'ALL PRODUCTS' && (
                    <ChevronDown size={11} color="#FFFFFF" style={{ opacity: 0.7 }} />
                  )}
                </Link>
              );
            })}

            {/* Subtle Divider between ALL PRODUCTS and MY CART */}
            <div
              style={{
                width: '1px',
                height: '18px',
                backgroundColor: 'rgba(255, 255, 255, 0.25)',
                margin: '0 0.15rem',
                flexShrink: 0,
              }}
              className="desktop-cart-divider"
            />

            {/* High-Visibility Gold "MY CART" Button — Centered with all products! */}
            <button
              onClick={onOpenCart}
              style={{
                backgroundColor: '#FFDB15',
                color: '#18240A',
                border: 'none',
                borderRadius: '6px',
                padding: '0.4rem 1.1rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                fontSize: '0.78rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                cursor: 'pointer',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.25)',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
              className="nav-cart-btn"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#FFE54C';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFDB15';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <ShoppingBag size={14} color="#18240A" />
              <span>MY CART</span>
              <span
                style={{
                  backgroundColor: '#18240A',
                  color: '#FFDB15',
                  fontSize: '0.7rem',
                  fontWeight: 900,
                  padding: '0.1rem 0.45rem',
                  borderRadius: '9999px',
                  marginLeft: '2px',
                }}
              >
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            top: isScrolled ? '96px' : '110px',
            backgroundColor: '#F8F9F3',
            zIndex: 1090,
            overflowY: 'auto',
            padding: '1.5rem 1.25rem 5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.2)',
          }}
        >
          {/* Mobile Search Bar */}
          <div>
            <form
              onSubmit={(e) => {
                handleSearchSubmit(e);
                setMobileMenuOpen(false);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#FFFFFF',
                borderRadius: '8px',
                padding: '0.6rem 0.9rem',
                border: '1.5px solid #1b4d35',
                gap: '0.6rem',
              }}
            >
              <Search size={16} color="#1b4d35" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  border: 'none',
                  outline: 'none',
                  fontSize: '0.9rem',
                  width: '100%',
                }}
              />
            </form>
          </div>

          {/* Quick Account Actions */}
          <div style={{ display: 'flex', gap: '0.8rem' }}>
            <Link
              to="/traceability"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                flex: 1,
                backgroundColor: '#795648',
                color: '#FFFFFF',
                padding: '0.65rem',
                borderRadius: '6px',
                textAlign: 'center',
                textDecoration: 'none',
                fontSize: '0.8rem',
                fontWeight: 700,
              }}
            >
              Track Order
            </Link>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsAuthOpen(true);
              }}
              style={{
                flex: 1,
                backgroundColor: '#1b4d35',
                color: '#FFFFFF',
                padding: '0.65rem',
                borderRadius: '6px',
                border: 'none',
                fontSize: '0.8rem',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Login / Signup
            </button>
          </div>

          {/* Main Navigation Pages */}
          <div>
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 800,
                letterSpacing: '0.18em',
                color: '#1b4d35',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '0.8rem',
              }}
            >
              Main Navigation
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[...navLeftLinks, ...navRightLinks].map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    color: isActive(link.to) ? '#1b4d35' : '#18240A',
                    textDecoration: 'none',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    padding: '0.4rem 0',
                    borderBottom: '1px solid rgba(24, 36, 10, 0.06)',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Key Product Categories */}
          <div>
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 800,
                letterSpacing: '0.18em',
                color: '#1b4d35',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '0.8rem',
              }}
            >
              Harvest Products
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {productBarLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    backgroundColor: '#1b4d35',
                    color: '#FFFFFF',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontSize: '0.84rem',
                    fontWeight: 800,
                    textAlign: 'left',
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Interactive Login / Signup Modal */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />

      {/* Scoped CSS Styles */}
      <style>{`
        .top-bar-link:hover {
          color: #FFDB15 !important;
          opacity: 1 !important;
        }
        .social-icon-link {
          color: #EDE8DC;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          opacity: 0.9;
          text-decoration: none;
        }
        .social-icon-link:hover {
          color: #FFDB15;
          opacity: 1;
          transform: translateY(-2px);
        }
        .nav-link-hover:hover {
          color: #1b4d35 !important;
          border-bottom: 2px solid #1b4d35 !important;
        }
        .product-bar-link {
          color: #FFFFFF !important;
        }
        .product-bar-link:hover {
          background-color: rgba(255, 255, 255, 0.12) !important;
          color: #FFDB15 !important;
        }
        .nav-search-input::placeholder {
          color: rgba(24, 36, 10, 0.5);
        }
        .nav-search-result-item:hover {
          background-color: #F8F9F3;
        }
        @media (max-width: 1040px) {
          .middle-navbar-grid {
            display: flex !important;
            justify-content: space-between !important;
            align-items: center !important;
            padding: 0.2rem 0 !important;
          }
          .desktop-nav-split,
          .desktop-nav-right-group,
          .desktop-search-divider,
          .desktop-cart-divider,
          .navbar-search-desktop,
          .desktop-search-balancer,
          .desktop-cart-balancer,
          .nav-cart-btn {
            display: none !important;
          }
          .mobile-header-actions {
            display: flex !important;
          }
        }
        @media (max-width: 768px) {
          .top-bar-container {
            padding: 0.3rem 0.85rem !important;
          }
          .top-bar-socials {
            display: none !important;
          }
          .middle-navbar-container {
            padding: 0.25rem 0.85rem !important;
          }
          #navbar-center-logo {
            height: 52px !important;
            max-height: 52px !important;
          }
          .product-bar-scrollable {
            overflow-x: auto;
            flex-wrap: nowrap !important;
            justify-content: flex-start !important;
            scrollbar-width: none;
            -webkit-overflow-scrolling: touch;
            padding: 0.35rem 0.5rem !important;
          }
          .product-bar-scrollable::-webkit-scrollbar {
            display: none;
          }
        }
        @media (max-width: 480px) {
          #navbar-center-logo {
            height: 44px !important;
            max-height: 44px !important;
          }
        }
      `}</style>
    </header>
  );
};
