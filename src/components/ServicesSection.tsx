import React from 'react';
import {
  Boxes,
  Briefcase,
  MonitorSmartphone,
  Presentation,
  PackageCheck,
  ShoppingBag,
  Users2,
  Headphones,
  Sprout,
  ArrowRight
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      num: '01',
      title: 'Organic Fertilizer Supply',
      desc: 'High-quality, eco-friendly fertilizers formulated for healthier crops, living soils, and enhanced yields.',
      icon: Boxes,
      badge: 'Bio Inputs',
    },
    {
      num: '02',
      title: 'Agriculture-Based Projects',
      desc: 'End-to-end turnkey projects for sustainable agrarian initiatives, soil enrichment, and farm conversions.',
      icon: Briefcase,
      badge: 'Turnkey',
    },
    {
      num: '03',
      title: 'Agricultural Software',
      desc: 'Smart digital solutions and field management software for modern, precise, and data-driven farming.',
      icon: MonitorSmartphone,
      badge: 'AgriTech',
    },
    {
      num: '04',
      title: 'Workshops & Exhibitions',
      desc: 'Hands-on awareness workshops and educational exhibitions spreading organic knowledge across farming clusters.',
      icon: Presentation,
      badge: 'Outreach',
    },
    {
      num: '05',
      title: 'Organic Agricultural Products',
      desc: 'Pure, natural, and chemical-free agricultural produce and certified commodities for healthier living.',
      icon: PackageCheck,
      badge: 'Produce',
    },
    {
      num: '06',
      title: 'E-Commerce Portal',
      desc: 'A dedicated platform bringing authentic organic products and bio-inputs directly to consumers and farms.',
      icon: ShoppingBag,
      badge: 'Digital',
    },
    {
      num: '07',
      title: 'B2B & B2C Distribution',
      desc: 'Connecting farmers, agricultural enterprises, and consumers within a unified, transparent supply network.',
      icon: Users2,
      badge: 'Commerce',
    },
    {
      num: '08',
      title: 'Farmer Advisory Services',
      desc: 'Specialized agronomic guidance, soil test interpretations, and pest protection advisories for cultivators.',
      icon: Headphones,
      badge: 'Advisory',
    },
    {
      num: '09',
      title: 'Improving Soil Fertility',
      desc: 'Revitalizing depleted soils with active biological humus and organic formulations for sustained productivity.',
      icon: Sprout,
      badge: 'Soil Vitality',
    },
  ];

  return (
    <section
      id="services"
      style={{
        padding: '6rem 2rem',
        backgroundColor: '#FFFFFF',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#F0F4E8',
              color: '#293B14',
              padding: '0.35rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            <Briefcase size={14} color="#67A020" />
            <span>06 — OUR SERVICES</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              color: '#18240A',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              marginBottom: '1rem',
            }}
          >
            Healthy Soil. Thriving Farmers. A Greener Tomorrow.
          </h2>

          <p
            style={{
              fontSize: '1.1rem',
              lineHeight: 1.7,
              color: '#4A583A',
              maxWidth: '820px',
              margin: '0 auto',
            }}
          >
            NAMO provides a comprehensive range of agricultural products, field services, and
            technology-oriented solutions to power India’s organic revolution.
          </p>
        </div>

        {/* 9 Services Grid (Perfect Equal Heights & Proportions) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '1.8rem',
            marginBottom: '3.5rem',
            alignItems: 'stretch',
          }}
        >
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                style={{
                  backgroundColor: '#F8F9F3',
                  borderRadius: '16px',
                  padding: '2rem 1.8rem',
                  border: '1px solid rgba(24, 36, 10, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  transition: 'all 0.25s ease',
                  position: 'relative',
                }}
                className="service-card"
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#4E6E10',
                        backgroundColor: '#E4ECCF',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '9999px',
                      }}
                    >
                      {item.badge}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        color: '#67A020',
                      }}
                    >
                      {item.num}
                    </span>
                  </div>

                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: '#FFFFFF',
                      boxShadow: '0 4px 12px rgba(24, 36, 10, 0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.2rem',
                      color: '#293B14',
                    }}
                  >
                    <Icon size={22} color="#293B14" />
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                      fontSize: '1.18rem',
                      fontWeight: 700,
                      color: '#18240A',
                      marginBottom: '0.65rem',
                      lineHeight: 1.35,
                      minHeight: '2.8rem',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {item.title}
                  </h3>

                  <p style={{ fontFamily: 'var(--font-body, "Inter", sans-serif)', fontSize: '0.92rem', color: '#556645', lineHeight: 1.65, minHeight: '4.4rem' }}>
                    {item.desc}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: '1.6rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(24, 36, 10, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    color: '#293B14',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                  }}
                >
                  <span>Inquire Service</span>
                  <ArrowRight size={13} color="#67A020" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Advisory CTA Banner */}
        <div
          style={{
            backgroundColor: '#F0F4E8',
            border: '1.5px solid rgba(103, 160, 32, 0.35)',
            borderRadius: '16px',
            padding: '2.2rem 2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                fontSize: '1.25rem',
                fontWeight: 800,
                color: '#18240A',
                marginBottom: '0.3rem',
              }}
            >
              Need Farmer Advisory or Custom Project Deployment?
            </h4>
            <p style={{ fontSize: '0.94rem', color: '#4A583A' }}>
              Connect directly with our agricultural specialists and project coordinators.
            </p>
          </div>

          <a
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#1b4d35',
              color: '#FFFFFF',
              padding: '0.75rem 1.8rem',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(27, 77, 53, 0.2)',
            }}
          >
            <span>Request Advisory</span>
            <ArrowRight size={15} color="#FFDB15" />
          </a>
        </div>
      </div>

      <style>{`
        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 28px rgba(41, 59, 20, 0.08);
          border-color: #67A020;
          background-color: #FFFFFF;
        }
      `}</style>
    </section>
  );
};
