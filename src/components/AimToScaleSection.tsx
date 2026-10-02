import React from 'react';
import { Rocket, Coins, Factory, Truck, ShoppingCart } from 'lucide-react';

export const AimToScaleSection: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Greater Investment',
      desc: 'Expanding regional operations through strategic capital deployment, opening new agro-economic territories and accelerating field support.',
      icon: Coins,
      tag: 'Capital & Expansion',
    },
    {
      num: '02',
      title: 'Manufacturing Capabilities',
      desc: 'Scaling standardized bio-fertilizer production infrastructure, enhancing automated fermentation quality, and broadening product ranges.',
      icon: Factory,
      tag: 'Infrastructure Scale',
    },
    {
      num: '03',
      title: 'Farmer Procurement',
      desc: 'Directly procuring certified harvest from partner farmers using our bio-inputs, strengthening fair-trade ties and rural household incomes.',
      icon: Truck,
      tag: 'Direct Buy-Back',
    },
    {
      num: '04',
      title: 'E-Commerce Expansion',
      desc: 'Expanding digital and institutional supply chains to deliver traceable organic produce straight to conscious households across India.',
      icon: ShoppingCart,
      tag: 'Digital Reach',
    },
  ];

  return (
    <section
      id="scale"
      style={{
        padding: '6.5rem 2rem',
        backgroundColor: '#FFFFFF',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#F0F4E8',
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
            <Rocket size={14} color="#67A020" />
            <span>14 — AIM TO SCALE</span>
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
            Growing Together for a Sustainable Future
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-body, "Inter", sans-serif)',
              fontSize: '1.15rem',
              lineHeight: 1.7,
              color: '#4A583A',
              maxWidth: '840px',
              margin: '0 auto',
            }}
          >
            At NAMO ORGANIC, we are committed to scaling our impact through strategic investments,
            innovation, strong farmer partnerships and wider market access for healthier and
            prosperous communities.
          </p>
        </div>

        {/* 4 Scale Vectors Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}
        >
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                style={{
                  backgroundColor: '#F8F9F3',
                  borderRadius: '24px',
                  padding: '2.4rem 2rem',
                  border: '1.5px solid rgba(24, 36, 10, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  transition: 'all 0.25s ease',
                  position: 'relative',
                }}
                className="scale-card"
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
                      {item.tag}
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
                      {item.num}
                    </span>
                  </div>

                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      backgroundColor: '#FFFFFF',
                      boxShadow: '0 6px 18px rgba(24, 36, 10, 0.08)',
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
                      minHeight: '2.8rem',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-body, "Inter", sans-serif)',
                      fontSize: '0.96rem',
                      color: '#4A583A',
                      lineHeight: 1.7,
                      minHeight: '4.8rem',
                    }}
                  >
                    {item.desc}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: '1.8rem',
                    paddingTop: '1.2rem',
                    borderTop: '1px solid rgba(24, 36, 10, 0.08)',
                    color: '#67A020',
                    fontSize: '0.84rem',
                    fontWeight: 700,
                  }}
                >
                  • Growth Directive
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .scale-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(41, 59, 20, 0.1);
          border-color: #67A020;
          background-color: #FFFFFF;
        }
      `}</style>
    </section>
  );
};
