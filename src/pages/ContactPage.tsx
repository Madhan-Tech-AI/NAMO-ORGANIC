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
      q: 'What is NAMO Organics and where is it based?',
      a: "NAMO Organics is a certified organic products company based in Tamil Nadu, India, founded by Fathima Ali. We manufacture and supply a range of Panchakavya-based organic agricultural inputs, organic food products, and organic healthcare nutrition — all rooted in India's 5,000-year-old tradition of natural farming. Our products serve farmers, consumers, and institutional buyers across India and international markets including the Gulf region.",
    },
    {
      q: 'What does "Panchakavya-based" mean and why does it matter?',
      a: "Panchakavya refers to a formulation derived from five products of the native desi cow — cow dung, cow urine, cow milk, cow curd, and cow ghee — often combined with natural ingredients like jaggery, tender coconut, and banana. This combination has been used in Indian agriculture for over 5,000 years as a soil conditioner, natural fertilizer, and pest deterrent. Unlike synthetic fertilizers, Panchakavya-based inputs restore the soil's natural microbial life, improve water retention, and produce lasting fertility — without harming the land or the people who eat from it.",
    },
    {
      q: 'What organic agricultural products does NAMO Organics offer?',
      a: 'NAMO Organics offers two primary agricultural inputs: an organic liquid fertilizer and an organic liquid pesticide, both Panchakavya-based and formulated to work together as a complete soil and crop management system. These are designed for use on paddy, vegetables, fruit trees, pulses, and cash crops. We also supply to international agricultural agencies and government bodies for large-scale deployment on degraded farmland.',
    },
    {
      q: "How is NAMO's organic fertilizer different from chemical fertilizers?",
      a: "Chemical fertilizers deliver a short burst of nutrients directly to the plant — but over time, they strip the soil of its natural microbial ecosystem, reduce water retention, and leave the land increasingly dependent on synthetic inputs. NAMO's organic fertilizer works differently. It feeds the soil's own microbial community, which in turn makes nutrients available to the plant naturally and continuously. The result is not just better yields — it is healthier, more resilient soil that improves season after season rather than degrading.",
    },
    {
      q: 'What organic food products does NAMO Organics offer?',
      a: 'Our organic value-added food range includes certified organic rice, raw honey, cold-pressed oils, and organic tea — all sourced from farms using our own Panchakavya-based agricultural inputs. What you buy from our food range is grown on the same soil we have spent years restoring. No synthetic pesticides. No chemical fertilizers. No shortcuts.',
    },
    {
      q: 'How is NAMO\'s organic food different from regular "natural" products sold elsewhere?',
      a: 'The term "natural" is unregulated in India — any product can use it. NAMO\'s food products are sourced exclusively from FSSAI-certified organic farms. More importantly, they are grown on farmland that has been treated with our own Panchakavya inputs — meaning the soil health, the farming practices, and the certification chain are all under our direct oversight. We do not source from unknown third parties and relabel. What we sell, we have grown.',
    },
    {
      q: 'What organic healthcare products does NAMO Organics offer?',
      a: 'NAMO Organics offers two certified organic health nutrition products: a standard health mix (Sathu Maavu) for adults, and a paediatric health mix specially formulated for infants from 6 months and children up to 12 years. Both are sprouted grain blends with no added sugar, no artificial flavour, and no synthetic additives — made entirely from certified organic ingredients.',
    },
    {
      q: "Is NAMO's paediatric health mix safe for infants?",
      a: 'Yes. Our paediatric health mix is formulated specifically for infants from 6 months onwards and children up to 12 years. The grains are sprouted before processing — which breaks down complex starches into simpler, more easily digestible forms — making it gentle on developing digestive systems. There are no synthetic additives, no refined sugar, and no artificial flavouring of any kind. It is certified organic under FSSAI standards.',
    },
    {
      q: 'Can I order NAMO Organics products online?',
      a: 'Yes — our consumer food and healthcare products are available for online inquiry and order. For agricultural inputs, bulk orders, and institutional or government procurement, please contact us directly through our enquiry form or WhatsApp (+91 9500164786) and our team will revert with product specifications, pricing, and availability.',
    },
    {
      q: 'Do you supply in bulk to farms, institutions, or government bodies?',
      a: 'Yes. We regularly supply organic agricultural inputs in bulk to farms, agricultural cooperatives, and government agencies. We are registered on the Government e-Marketplace (GeM) for institutional procurement. For bulk enquiries, please use our contact form and select "Agricultural / Bulk Order" as your enquiry type — our team will respond within 24 hours.',
    },
    {
      q: "Why is organic farming better for India's long-term food security?",
      a: 'India has over 120 million hectares of degraded agricultural land — most of it damaged by decades of synthetic fertilizer use. Chemical inputs boost short-term yields but destroy the soil\'s natural microbial ecosystem over time, requiring ever-increasing doses to achieve the same output. This is a cycle that ends in non-productive land and farmer debt. Organic farming — particularly Panchakavya-based natural farming — reverses this cycle by restoring soil biology, improving water retention, and building long-term fertility. It is not just better for individual farms. It is the only sustainable path for Indian agriculture at a national scale.',
    },
    {
      q: 'Is NAMO Organics aligned with any government initiative for organic farming?',
      a: 'Yes. NAMO Organics is aligned with India\'s national push toward natural and organic farming, including the Government of India\'s Paramparagat Krishi Vikas Yojana (PKVY) and the broader Natural Farming Mission which promotes chemical-free agricultural practices. Our products are also registered on GeM for government procurement, making them directly accessible to state and central government agricultural programmes.',
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
