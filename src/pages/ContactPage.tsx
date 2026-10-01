import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ChevronDown, Check, Send } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'product-inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const faqs = [
    {
      q: 'How long do NAMO cold-pressed oils last in the kitchen pantry?',
      a: 'Because our oils are cold-pressed below 42°C on traditional Vaagai timber and filtered naturally without chemical deodorizers, naturally occurring antioxidants like sesamol and vitamin E remain 100% active. Stored away from direct sunlight in our heavy amber glass bottles, they maintain peak freshness for 12 months.',
    },
    {
      q: 'Why does my NAMO raw forest honey crystallize over time?',
      a: 'Natural crystallization is the single most definitive proof of authentic, raw, unheated honey! Commercial supermarket honeys are boiled at 70°C and ultra-filtered to destroy natural pollen so they never crystallize. Real raw honey retains living enzymes and flower pollen that naturally form smooth crystals. Simply warm the jar in a bowl of warm water if you prefer a liquid texture.',
    },
    {
      q: 'What is the Vedic Bilona method for A2 cow ghee?',
      a: 'Commercial ghee is made in huge dairy factories by separating raw milk cream in high-speed centrifugal separators. In contrast, the Vedic Bilona method begins by boiling pure indigenous Gir and Sahiwal A2 milk, converting it into cultured whole curd overnight, and churning it with two-way wooden bilona rods to obtain makkhan (butter), which is then slow-simmered on open flames.',
    },
    {
      q: 'How do you ensure safe delivery of fragile glass bottles across India?',
      a: 'We pack every glass bottle in custom-molded, 100% biodegradable corrugated cardboard air jackets and heavy-duty double-wall shippers. We guarantee zero breakage during transit — if any shipment arrives compromised, we send a replacement immediately at no charge.',
    },
    {
      q: 'Can I visit the NAMO partner organic farms and pressing units in Tamil Nadu?',
      a: 'Yes! We actively welcome conscious consumers, doctors, chefs, and families to visit our partner farm clusters in Villupuram and Kaveri delta. Please submit a Farm Visit request in the form above at least two weeks in advance so our agrarian team can coordinate your visit.',
    },
  ];

  return (
    <div style={{ backgroundColor: '#F8F9F3', minHeight: '100vh', paddingBottom: '7rem' }}>
      {/* Editorial Header */}
      <div
        style={{
          backgroundColor: '#1E2516',
          color: '#EDE8DC',
          padding: '6rem 2rem 5rem',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.2rem' }}>
            <span
              style={{
                backgroundColor: 'rgba(255, 219, 21, 0.15)',
                border: '1px solid #FFDB15',
                color: '#FFDB15',
                padding: '0.4rem 1rem',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                fontWeight: 800,
                letterSpacing: '0.14em',
              }}
            >
              FARM DISPATCH & SUPPORT
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: '#FFFFFF',
              marginBottom: '1.5rem',
            }}
          >
            CONNECT WITH NAMO ORGANIC
          </h1>

          <p
            style={{
              fontSize: '1.2rem',
              lineHeight: 1.7,
              color: '#B5AFA4',
              maxWidth: '750px',
              margin: '0 auto',
            }}
          >
            Have a question about a harvest batch, bulk pantry supply, or visiting our farms?
            Our agrarian care team is here to assist you.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1440px', margin: '4rem auto 0', padding: '0 2rem' }}>
        {/* Main Grid: Contact Info + Form */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '3.5rem',
            marginBottom: '6rem',
          }}
        >
          {/* Left Column: Direct Details */}
          <div>
            <span className="badge-organic" style={{ marginBottom: '1rem', display: 'inline-block' }}>
              DIRECT CONTACT
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)',
                color: '#18240A',
                marginBottom: '1.5rem',
                lineHeight: 1.2,
              }}
            >
              We are rooted in Tamil Nadu, serving conscious households nationwide.
            </h2>
            <p style={{ fontSize: '1rem', color: '#556345', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Whether you need guidance choosing the right edible oil for Ayurvedic cooking, or want to verify a laboratory screening report, our specialists respond promptly.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.2rem',
                  backgroundColor: '#FFFFFF',
                  padding: '1.2rem',
                  borderRadius: '16px',
                  border: '1px solid rgba(24, 36, 10, 0.08)',
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    backgroundColor: '#F0F4E8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Phone size={20} color="#4E6E10" />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#6B7959', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Telephone / WhatsApp Care
                  </span>
                  <a
                    href="tel:+919500164786"
                    style={{ fontSize: '1.15rem', fontWeight: 800, color: '#18240A', textDecoration: 'none', display: 'block' }}
                  >
                    +91 9500164786
                  </a>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.2rem',
                  backgroundColor: '#FFFFFF',
                  padding: '1.2rem',
                  borderRadius: '16px',
                  border: '1px solid rgba(24, 36, 10, 0.08)',
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    backgroundColor: '#F0F4E8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Mail size={20} color="#4E6E10" />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#6B7959', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Email Support
                  </span>
                  <a
                    href="mailto:support@namoorg.com"
                    style={{ fontSize: '1.15rem', fontWeight: 800, color: '#18240A', textDecoration: 'none', display: 'block' }}
                  >
                    support@namoorg.com
                  </a>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.2rem',
                  backgroundColor: '#FFFFFF',
                  padding: '1.2rem',
                  borderRadius: '16px',
                  border: '1px solid rgba(24, 36, 10, 0.08)',
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    backgroundColor: '#F0F4E8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <MapPin size={20} color="#4E6E10" />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#6B7959', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Central Headquarters
                  </span>
                  <p style={{ fontSize: '0.98rem', fontWeight: 700, color: '#18240A', margin: 0 }}>
                    NAMO Organic Natural Foods Pvt. Ltd., Tamil Nadu, India
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.2rem',
                  backgroundColor: '#FFFFFF',
                  padding: '1.2rem',
                  borderRadius: '16px',
                  border: '1px solid rgba(24, 36, 10, 0.08)',
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    backgroundColor: '#F0F4E8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Clock size={20} color="#4E6E10" />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#6B7959', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Customer Care Hours
                  </span>
                  <p style={{ fontSize: '0.98rem', fontWeight: 700, color: '#18240A', margin: 0 }}>
                    Monday – Saturday: 9:00 AM – 7:00 PM IST
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              boxShadow: '0 15px 45px rgba(24, 36, 10, 0.06)',
              border: '1px solid rgba(99, 141, 8, 0.2)',
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: '#E6F0D8',
                    color: '#4E6E10',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                  }}
                >
                  <Check size={32} />
                </div>
                <h3 style={{ fontSize: '1.8rem', color: '#18240A', marginBottom: '0.8rem' }}>
                  Inquiry Received
                </h3>
                <p style={{ color: '#556345', lineHeight: 1.7, marginBottom: '2rem' }}>
                  Thank you for writing to NAMO Organic. One of our farm dispatch specialists will reach out to {formData.email} within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                  style={{ padding: '0.75rem 1.8rem' }}
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: '#18240A', marginBottom: '0.5rem' }}>
                  Send a Direct Dispatch
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#6B7959', marginBottom: '2rem' }}>
                  Fill in your details and message below.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#18240A', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sundaram"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1.2rem',
                        borderRadius: '12px',
                        border: '1.5px solid rgba(24, 36, 10, 0.15)',
                        backgroundColor: '#F8F9F3',
                        fontSize: '0.92rem',
                        outline: 'none',
                        color: '#18240A',
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#18240A', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.85rem 1.2rem',
                          borderRadius: '12px',
                          border: '1.5px solid rgba(24, 36, 10, 0.15)',
                          backgroundColor: '#F8F9F3',
                          fontSize: '0.92rem',
                          outline: 'none',
                          color: '#18240A',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#18240A', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.85rem 1.2rem',
                          borderRadius: '12px',
                          border: '1.5px solid rgba(24, 36, 10, 0.15)',
                          backgroundColor: '#F8F9F3',
                          fontSize: '0.92rem',
                          outline: 'none',
                          color: '#18240A',
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#18240A', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      Inquiry Category
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1.2rem',
                        borderRadius: '12px',
                        border: '1.5px solid rgba(24, 36, 10, 0.15)',
                        backgroundColor: '#F8F9F3',
                        fontSize: '0.92rem',
                        outline: 'none',
                        color: '#18240A',
                        cursor: 'pointer',
                      }}
                    >
                      <option value="product-inquiry">Product & Harvest Questions</option>
                      <option value="traceability">Batch Traceability / Lab Certificate</option>
                      <option value="bulk-order">Wholesale & Corporate Gifting</option>
                      <option value="farm-visit">Schedule an Agrarian Farm Visit</option>
                      <option value="feedback">Customer Feedback / Founder Note</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#18240A', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us what you need or how we can help..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1.2rem',
                        borderRadius: '12px',
                        border: '1.5px solid rgba(24, 36, 10, 0.15)',
                        backgroundColor: '#F8F9F3',
                        fontSize: '0.92rem',
                        outline: 'none',
                        color: '#18240A',
                        resize: 'vertical',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{
                      padding: '1rem',
                      fontSize: '0.9rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.6rem',
                      marginTop: '0.5rem',
                    }}
                  >
                    <Send size={16} /> SEND DISPATCH
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div style={{ marginTop: '5rem', maxWidth: '960px', margin: '5rem auto 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="badge-organic">FREQUENTLY ASKED QUESTIONS</span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)',
                color: '#18240A',
                marginTop: '0.6rem',
              }}
            >
              Essential Questions on Organic Food Purity
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '16px',
                    border: '1px solid rgba(24, 36, 10, 0.08)',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '1.4rem 1.8rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <span style={{ fontSize: '1.05rem', fontWeight: 700, color: '#18240A' }}>
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={20}
                      color="#4E6E10"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                        flexShrink: 0,
                        marginLeft: '1rem',
                      }}
                    />
                  </button>
                  {isOpen && (
                    <div style={{ padding: '0 1.8rem 1.6rem', color: '#3D4A2D', fontSize: '0.95rem', lineHeight: 1.7 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
