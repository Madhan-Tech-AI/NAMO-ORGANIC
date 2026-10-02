import React, { useState } from 'react';
import { Phone, Mail, Globe, MapPin, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    stakeholderType: 'Farmer',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section
      id="contact"
      style={{
        padding: '6.5rem 2rem',
        backgroundColor: '#F8F9F3',
        position: 'relative',
        borderTop: '1px solid rgba(24, 36, 10, 0.06)',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#E4ECCF',
              color: '#293B14',
              padding: '0.4rem 1.1rem',
              borderRadius: '9999px',
              fontSize: '0.78rem',
              fontWeight: 800,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            <Mail size={14} color="#4E6E10" />
            <span>15 — CONTACT US</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
              fontSize: 'clamp(2.2rem, 4.2vw, 3.4rem)',
              color: '#18240A',
              fontWeight: 800,
              letterSpacing: '-0.025em',
              lineHeight: 1.2,
              marginBottom: '1rem',
            }}
          >
            Let's Grow a Healthier, Greener Tomorrow Together
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-body, "Inter", sans-serif)',
              fontSize: '1.15rem',
              lineHeight: 1.7,
              color: '#4A583A',
              maxWidth: '820px',
              margin: '0 auto',
            }}
          >
            Reach out to our corporate headquarters in Chennai for farmer advisories, bulk bio-fertilizer
            orders, FPO partnership agreements, or dealership opportunities.
          </p>
        </div>

        {/* 2 Column Layout: Corporate Credentials & Inquiry Form */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Official Contact Card */}
          <div
            style={{
              backgroundColor: '#1b4d35',
              color: '#FFFFFF',
              borderRadius: '24px',
              padding: '3.5rem 3rem',
              boxShadow: '0 20px 45px rgba(27, 77, 53, 0.25)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                fontSize: '0.78rem',
                fontWeight: 800,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#FFDB15',
                marginBottom: '1rem',
              }}
            >
              CORPORATE HEADQUARTERS
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                fontSize: '1.8rem',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
                lineHeight: 1.25,
                marginBottom: '2rem',
              }}
            >
              Natural Agriculture & Modern Organic Private Limited
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
              {/* Phone */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Phone size={20} color="#FFDB15" />
                </div>
                <div>
                  <div style={{ fontSize: '0.76rem', color: '#A8E63A', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                    Direct Telephone Helpline
                  </div>
                  <a
                    href="tel:+919500829886"
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      textDecoration: 'none',
                      marginTop: '2px',
                      display: 'inline-block',
                    }}
                  >
                    +91 95008 29886
                  </a>
                </div>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Mail size={20} color="#FFDB15" />
                </div>
                <div>
                  <div style={{ fontSize: '0.76rem', color: '#A8E63A', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                    Official Corporate Email
                  </div>
                  <a
                    href="mailto:namoorganicpvtltd@gmail.com"
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      textDecoration: 'none',
                      marginTop: '2px',
                      display: 'inline-block',
                      wordBreak: 'break-all',
                    }}
                  >
                    namoorganicpvtltd@gmail.com
                  </a>
                </div>
              </div>

              {/* Websites */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Globe size={20} color="#FFDB15" />
                </div>
                <div>
                  <div style={{ fontSize: '0.76rem', color: '#A8E63A', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                    Official Web Domains
                  </div>
                  <div style={{ marginTop: '3px', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                    <a
                      href="https://www.namoorg.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', textDecoration: 'none' }}
                    >
                      www.namoorg.com
                    </a>
                    <a
                      href="https://www.namohydrogen.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', textDecoration: 'none' }}
                    >
                      www.namohydrogen.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Registered Address */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={20} color="#FFDB15" />
                </div>
                <div>
                  <div style={{ fontSize: '0.76rem', color: '#A8E63A', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                    Registered Office Address
                  </div>
                  <p style={{ fontSize: '0.98rem', color: 'rgba(255, 255, 255, 0.95)', lineHeight: 1.6, marginTop: '3px' }}>
                    5B, Jain's La Gardenia, Kothari Road,<br />
                    Nungambakkam, Chennai - 600034,<br />
                    Tamil Nadu, India.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Static Inquiry Form */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              padding: '3.5rem 3rem',
              border: '1.5px solid rgba(103, 160, 32, 0.2)',
              boxShadow: '0 12px 35px rgba(24, 36, 10, 0.05)',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                fontSize: '1.75rem',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: '#18240A',
                marginBottom: '0.5rem',
              }}
            >
              Send an Inquiry to NAMO
            </h3>
            <p style={{ fontSize: '0.94rem', color: '#556645', marginBottom: '2rem' }}>
              Whether you are an individual farmer, an FPO representative, a prospective distributor, or an
              institutional partner, our team will respond promptly.
            </p>

            {formSubmitted ? (
              <div
                style={{
                  backgroundColor: '#F0F4E8',
                  border: '1.5px solid #67A020',
                  borderRadius: '16px',
                  padding: '2.5rem 2rem',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: '#E4ECCF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.2rem auto',
                    color: '#293B14',
                  }}
                >
                  <CheckCircle2 size={32} color="#4E6E10" />
                </div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#18240A', marginBottom: '0.5rem' }}>
                  Thank You, {formData.name || 'Partner'}!
                </h4>
                <p style={{ fontSize: '0.96rem', color: '#4A583A', lineHeight: 1.6 }}>
                  Your inquiry has been logged with NAMO's agrarian advisory team. A representative will contact you
                  shortly at <strong>{formData.phone || formData.email || '+91 95008 29886'}</strong>.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  style={{
                    marginTop: '1.5rem',
                    backgroundColor: '#1b4d35',
                    color: '#FFFFFF',
                    border: 'none',
                    padding: '0.65rem 1.6rem',
                    borderRadius: '9999px',
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                  }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#18240A', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '10px',
                      border: '1.5px solid rgba(24, 36, 10, 0.15)',
                      backgroundColor: '#F8F9F3',
                      fontSize: '0.95rem',
                      outline: 'none',
                      color: '#18240A',
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.2rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#18240A', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Phone Number *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '10px',
                        border: '1.5px solid rgba(24, 36, 10, 0.15)',
                        backgroundColor: '#F8F9F3',
                        fontSize: '0.95rem',
                        outline: 'none',
                        color: '#18240A',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#18240A', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '10px',
                        border: '1.5px solid rgba(24, 36, 10, 0.15)',
                        backgroundColor: '#F8F9F3',
                        fontSize: '0.95rem',
                        outline: 'none',
                        color: '#18240A',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#18240A', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    I Am Inquiring As:
                  </label>
                  <select
                    value={formData.stakeholderType}
                    onChange={(e) => setFormData({ ...formData, stakeholderType: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '10px',
                      border: '1.5px solid rgba(24, 36, 10, 0.15)',
                      backgroundColor: '#F8F9F3',
                      fontSize: '0.95rem',
                      outline: 'none',
                      color: '#18240A',
                    }}
                  >
                    <option value="Farmer">Individual Farmer / Cultivator</option>
                    <option value="FPO">Farmer Producer Organisation (FPO)</option>
                    <option value="Distributor">Dealer / Retail Distributor</option>
                    <option value="Institutional">Government / Agri-Project Head</option>
                    <option value="Other">General Agronomy Inquiry</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#18240A', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Requirement or Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your farm acreage, crops grown, fertilizer requirement, or partnership proposal..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '10px',
                      border: '1.5px solid rgba(24, 36, 10, 0.15)',
                      backgroundColor: '#F8F9F3',
                      fontSize: '0.95rem',
                      outline: 'none',
                      color: '#18240A',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.6rem',
                    backgroundColor: '#1b4d35',
                    color: '#FFFFFF',
                    border: 'none',
                    padding: '0.95rem 2rem',
                    borderRadius: '9999px',
                    fontSize: '0.88rem',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    boxShadow: '0 6px 20px rgba(27, 77, 53, 0.25)',
                    transition: 'all 0.2s ease',
                    marginTop: '0.5rem',
                  }}
                  className="contact-submit-btn"
                >
                  <span>Submit Inquiry</span>
                  <Send size={16} color="#FFDB15" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-submit-btn:hover {
          background-color: #123725 !important;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(27, 77, 53, 0.35) !important;
        }
      `}</style>
    </section>
  );
};
