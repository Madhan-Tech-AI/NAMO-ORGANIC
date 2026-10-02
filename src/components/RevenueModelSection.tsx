import React from 'react';
import { GitFork, ArrowRight, Store, Handshake, Users } from 'lucide-react';

export const RevenueModelSection: React.FC = () => {
  const steps = [
    { label: 'Farmers', sub: 'Primary Producers' },
    { label: 'FPOs', sub: 'Collectives' },
    { label: 'Distributors', sub: 'Regional Hubs' },
    { label: 'B2C Organic Products', sub: 'Value-Add Goods' },
    { label: 'E-Commerce', sub: 'Digital Portals' },
    { label: 'Consumers', sub: 'Health Conscious Families' },
  ];

  const channels = [
    {
      num: '01',
      title: 'Appointment of Local Dealers & Distributors',
      desc: 'Selling products through agricultural departments, horticulture and development departments, institutional bodies, and grassroots retail dealership teams.',
      icon: Store,
      badge: 'Institutional & Retail',
    },
    {
      num: '02',
      title: 'FPO Partnerships',
      desc: 'The company proposes to support FPOs and farmers by procuring organically cultivated produce from farmers who use organic fertilizers and marketing it through B2B, B2C and e-commerce channels.',
      icon: Handshake,
      badge: 'Buy-Back & Marketing',
    },
    {
      num: '03',
      title: 'Direct Selling Methods',
      desc: 'Directly marketing organic fertilizers to FPOs, agrarian entrepreneurs, and village-level leaders interested in distributing or promoting sustainable inputs across villages.',
      icon: Users,
      badge: 'Village Direct Outreach',
    },
  ];

  return (
    <section
      id="revenue-model"
      style={{
        padding: '6.5rem 2rem',
        backgroundColor: '#F8F9F3',
        position: 'relative',
        borderTop: '1px solid rgba(24, 36, 10, 0.06)',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
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
            <GitFork size={14} color="#4E6E10" />
            <span>13 — REVENUE MODEL</span>
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
            Multi-Channel Commercial Architecture
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
            A circular agrarian economic model connecting grassroots farmers directly to institutional
            distributors, regional cooperatives, and consumer markets.
          </p>
        </div>

        {/* Circular Flow Visual Diagram */}
        <div
          style={{
            backgroundColor: '#1b4d35',
            color: '#FFFFFF',
            borderRadius: '24px',
            padding: '2.5rem 2rem',
            marginBottom: '4.5rem',
            boxShadow: '0 16px 40px rgba(27, 77, 53, 0.22)',
          }}
        >
          <div
            style={{
              textAlign: 'center',
              fontSize: '0.8rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              fontWeight: 800,
              color: '#FFDB15',
              marginBottom: '2rem',
            }}
          >
            END-TO-END VALUE CHAIN FLOW
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            {steps.map((s, idx) => (
              <React.Fragment key={s.label}>
                <div
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    border: '1.5px solid rgba(255, 219, 21, 0.35)',
                    borderRadius: '16px',
                    padding: '1rem 1.4rem',
                    textAlign: 'center',
                    minWidth: '150px',
                  }}
                >
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.2rem' }}>
                    {s.label}
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#FFDB15', fontWeight: 600 }}>
                    {s.sub}
                  </div>
                </div>

                {idx < steps.length - 1 && (
                  <ArrowRight size={20} color="#FFDB15" style={{ opacity: 0.8 }} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 3 Channels Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {channels.map((ch) => {
            const Icon = ch.icon;
            return (
              <div
                key={ch.num}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '24px',
                  padding: '2.4rem 2rem',
                  border: '1.5px solid rgba(103, 160, 32, 0.22)',
                  boxShadow: '0 12px 35px rgba(24, 36, 10, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  transition: 'all 0.25s ease',
                  position: 'relative',
                }}
                className="channel-card"
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.5rem',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: '#293B14',
                        backgroundColor: '#E4ECCF',
                        padding: '0.35rem 0.8rem',
                        borderRadius: '9999px',
                      }}
                    >
                      {ch.badge}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                        fontSize: '1.5rem',
                        fontWeight: 800,
                        color: '#67A020',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {ch.num}
                    </span>
                  </div>

                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      backgroundColor: '#F0F4E8',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.3rem',
                      color: '#293B14',
                    }}
                  >
                    <Icon size={26} color="#293B14" />
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                      fontSize: '1.28rem',
                      fontWeight: 800,
                      color: '#18240A',
                      marginBottom: '0.8rem',
                      lineHeight: 1.35,
                      minHeight: '3.6rem',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {ch.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-body, "Inter", sans-serif)',
                      fontSize: '0.96rem',
                      color: '#4A583A',
                      lineHeight: 1.7,
                      minHeight: '5.2rem',
                    }}
                  >
                    {ch.desc}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: '1.8rem',
                    paddingTop: '1.2rem',
                    borderTop: '1px solid rgba(24, 36, 10, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#293B14',
                    fontSize: '0.84rem',
                    fontWeight: 700,
                  }}
                >
                  <span>Active Commercial Route</span>
                  <ArrowRight size={15} color="#67A020" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .channel-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(41, 59, 20, 0.12);
          border-color: #67A020;
        }
      `}</style>
    </section>
  );
};
