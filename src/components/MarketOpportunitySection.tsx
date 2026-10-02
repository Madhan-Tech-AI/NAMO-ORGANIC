import { BarChart3, TrendingUp, CheckCircle } from 'lucide-react';

export const MarketOpportunitySection: React.FC = () => {
  const drivers = [
    'Growing population',
    'Rising incomes',
    'Increasing preference for healthy food',
    'Increasing preference for sustainable food',
    'Growing focus on organic farming',
    'Increasing exports',
  ];

  return (
    <section
      id="market"
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
            <BarChart3 size={14} color="#67A020" />
            <span>10 — MARKET OPPORTUNITY</span>
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
            India's Agricultural Market
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
            Comprehensive market data and sector forecasts highlighting the exponential demand
            for organic bio-inputs and certified sustainable harvests.
          </p>
        </div>

        {/* 3 Large Stat Hero Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            marginBottom: '4.5rem',
          }}
        >
          {/* Stat 1: US $24 Billion */}
          <div
            style={{
              backgroundColor: '#F8F9F3',
              borderRadius: '24px',
              padding: '2.6rem 2.2rem',
              border: '1.5px solid rgba(24, 36, 10, 0.08)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              transition: 'all 0.25s ease',
            }}
            className="market-stat-card"
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#293B14',
                  backgroundColor: '#E4ECCF',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  marginBottom: '1.4rem',
                }}
              >
                <TrendingUp size={14} /> By 2026 Estimate
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                  fontSize: 'clamp(2.5rem, 3.8vw, 3.2rem)',
                  fontWeight: 800,
                  color: '#1b4d35',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                  marginBottom: '1rem',
                }}
              >
                US $24B
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-body, "Inter", sans-serif)',
                  fontSize: '0.98rem',
                  color: '#4A583A',
                  lineHeight: 1.7,
                  minHeight: '5.2rem',
                }}
              >
                India's agricultural sector is estimated to reach <strong>US $24 billion by 2026</strong>,
                driven by rising domestic demand, increasing exports and a growing focus on sustainable
                and organic farming.
              </p>
            </div>

            <div style={{ marginTop: '2rem', paddingTop: '1.2rem', borderTop: '1px solid rgba(24, 36, 10, 0.08)', color: '#67A020', fontSize: '0.84rem', fontWeight: 700 }}>
              • Surging Organic Adoption
            </div>
          </div>

          {/* Stat 2: 70% Retail */}
          <div
            style={{
              backgroundColor: '#1b4d35',
              color: '#FFFFFF',
              borderRadius: '24px',
              padding: '2.6rem 2.2rem',
              boxShadow: '0 16px 40px rgba(27, 77, 53, 0.22)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              transition: 'all 0.25s ease',
            }}
            className="market-stat-card"
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#18240A',
                  backgroundColor: '#FFDB15',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  marginBottom: '1.4rem',
                }}
              >
                6th Largest Worldwide
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                  fontSize: 'clamp(2.5rem, 3.8vw, 3.2rem)',
                  fontWeight: 800,
                  color: '#FFDB15',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                  marginBottom: '1rem',
                }}
              >
                70%
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-body, "Inter", sans-serif)',
                  fontSize: '0.98rem',
                  color: 'rgba(255, 255, 255, 0.92)',
                  lineHeight: 1.7,
                  minHeight: '5.2rem',
                }}
              >
                The Indian food and grocery market is described as the <strong>sixth largest in the world</strong>,
                with retail accounting for <strong>70% of total sales</strong> across dynamic urban and rural channels.
              </p>
            </div>

            <div style={{ marginTop: '2rem', paddingTop: '1.2rem', borderTop: '1px solid rgba(255, 255, 255, 0.15)', color: '#FFDB15', fontSize: '0.84rem', fontWeight: 700 }}>
              • High Retail Penetration
            </div>
          </div>

          {/* Stat 3: 164.7 Million Tonnes */}
          <div
            style={{
              backgroundColor: '#F8F9F3',
              borderRadius: '24px',
              padding: '2.6rem 2.2rem',
              border: '1.5px solid rgba(24, 36, 10, 0.08)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              transition: 'all 0.25s ease',
            }}
            className="market-stat-card"
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#293B14',
                  backgroundColor: '#E4ECCF',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  marginBottom: '1.4rem',
                }}
              >
                FY26 Foodgrain Forecast
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                  fontSize: 'clamp(2.5rem, 3.8vw, 3.2rem)',
                  fontWeight: 800,
                  color: '#1b4d35',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                  marginBottom: '1rem',
                }}
              >
                164.7M MT
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-body, "Inter", sans-serif)',
                  fontSize: '0.98rem',
                  color: '#4A583A',
                  lineHeight: 1.7,
                  minHeight: '5.2rem',
                }}
              >
                Total foodgrain production in India is estimated at <strong>164.7 million tonnes in FY26</strong>,
                based on the Kharif First Advance Estimates, emphasizing massive soil input requirements.
              </p>
            </div>

            <div style={{ marginTop: '2rem', paddingTop: '1.2rem', borderTop: '1px solid rgba(24, 36, 10, 0.08)', color: '#67A020', fontSize: '0.84rem', fontWeight: 700 }}>
              • Massive Scale Requirement
            </div>
          </div>
        </div>

        {/* Key Market Drivers Container */}
        <div
          style={{
            backgroundColor: '#F0F4E8',
            borderRadius: '24px',
            padding: '3rem',
            border: '1px solid rgba(103, 160, 32, 0.25)',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 800,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#4E6E10',
                display: 'block',
                marginBottom: '0.4rem',
              }}
            >
              CATALYSTS OF EXPANSION
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                fontSize: 'clamp(1.6rem, 2.5vw, 2rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: '#18240A',
              }}
            >
              Key Drivers Fueling Sustainable Agricultural Growth
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.2rem',
            }}
          >
            {drivers.map((d, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '14px',
                  padding: '1.2rem 1.4rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                  boxShadow: '0 4px 15px rgba(24, 36, 10, 0.04)',
                  border: '1px solid rgba(24, 36, 10, 0.06)',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: '#E4ECCF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#293B14',
                    flexShrink: 0,
                  }}
                >
                  <CheckCircle size={18} color="#293B14" />
                </div>
                <span style={{ fontSize: '0.98rem', fontWeight: 700, color: '#18240A' }}>
                  {d}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .market-stat-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 45px rgba(41, 59, 20, 0.1);
        }
      `}</style>
    </section>
  );
};
