import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const OurStoryPage: React.FC = () => {
  const [activeEra, setActiveEra] = useState<number>(0);

  const eras = [
    {
      era: '01 · VEDIC FOUNDATIONS',
      year: '3000 BCE — Classical Bharat',
      title: 'The Sacred Science of Vrikshayurveda',
      desc: 'Ancient Indian texts recognized that the health of the soil directly dictates the mental and physical vitality of human beings. Farming was sacred stewardship, synchronized with solar and lunar rhythms, rain cycles, and biological diversity.',
      image: '/assets/nature-soil.jpg',
      detail: 'Crop rotation, cow dung composts, herbal pest repellents, and natural tree shade formed the bedrock of India’s agricultural abundance for thousands of years.',
      milestone: 'Ancient texts document over 100 native varieties of sesame, grains, and medicinal herbs.',
    },
    {
      era: '02 · ANCESTRAL ARTISAN CRAFT',
      year: '12th — 19th Century',
      title: 'Vaagai Wooden Presses & Earthen Bilona Churns',
      desc: 'Every Indian village relied on artisan cold presses crafted from dense medicinal Vaagai timber (Albizia lebbeck) and earthen vessels. No artificial heat, no chemical bleaching. Pure golden nourishment made daily by agrarian guilds.',
      image: '/assets/product-oil.jpg',
      detail: 'Slow mechanical pressing at ambient room temperature preserved fragile sesamin, delicate vitamins, and pure authentic aromatics that are otherwise destroyed in modern factories.',
      milestone: 'Bilona churns powered by two-way wooden rods produced aromatic cultured ghee rich in butyric acid.',
    },
    {
      era: '03 · THE REGENERATIVE AWAKENING',
      year: '20th Century Transition',
      title: 'Resisting Industrial Shortcuts',
      desc: 'When chemical fertilizers, synthetic insecticides, and hexane solvent extraction swept through monoculture agriculture, native heirloom seeds and natural soil microbiomes faced near extinction. The need for an uncompromised organic revival was born.',
      image: '/assets/hero-mid.jpg',
      detail: 'Pioneering agrarian families conserved indigenous Gir cows, native drought-resilient seed lineages, and traditional agroecological wisdom in rural enclaves.',
      milestone: 'Founding families pledged never to spray synthetic neurotoxic chemicals on ancestral soil.',
    },
    {
      era: '04 · THE MODERN NAMO STANDARD',
      year: 'Present Day & Future',
      title: 'Certified Organic & Farm Traceability',
      desc: 'NAMO bridges this 5,000-year-old agricultural wisdom with modern international standards of food safety, lab certifications, and farm-to-family traceability. Every batch is screened for over 180 chemicals.',
      image: '/assets/hero-products.jpg',
      detail: 'From rural agrarian women collectives to conscious modern households across India, delivering uncompromising purity directly to your dining table.',
      milestone: 'Full transparency: every bottle features a verifiable batch code linking to harvest coordinates.',
    },
  ];

  const current = eras[activeEra];

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
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
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
              OUR HERITAGE & ORIGIN
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
            A BRIDGE BETWEEN GENERATIONS
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
            India has cultivated, processed and consumed natural foods for thousands of years.
            NAMO was founded to safeguard this sacred agrarian wisdom against the shortcuts of industrial food processing.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1440px', margin: '4rem auto 0', padding: '0 2rem' }}>
        {/* Founder Letter Section */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            padding: 'clamp(2rem, 5vw, 4rem)',
            boxShadow: '0 15px 40px rgba(24, 36, 10, 0.06)',
            border: '1px solid rgba(99, 141, 8, 0.2)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
            marginBottom: '5rem',
          }}
        >
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span className="badge-organic">LEADERSHIP NOTE</span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)',
                fontWeight: 500,
                color: '#18240A',
                marginBottom: '1.2rem',
                lineHeight: 1.2,
              }}
            >
              "Food is not an industrial product. It is a living covenant with the earth."
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#3D4A2D', marginBottom: '1.2rem' }}>
              When we started NAMO, modern grocery shelves were overflowing with clear plastic bottles of refined oil bleached with synthetic chemicals, deodorized at high temperatures, and stripped of all nutrients. Ghee was manufactured from dry milk powder, and honey was adulterated with high-fructose corn syrups.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#3D4A2D', marginBottom: '1.8rem' }}>
              We asked a simple question: What happened to the real food our grandmothers fed us? NAMO was founded to bring back pure, cold-pressed oils from traditional Vaagai wood presses, cultured A2 bilona ghee, and raw wild honey directly from forest tribes — verified with modern laboratory testing.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, #7EBE22 0%, #243810 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  fontWeight: 800,
                  fontSize: '1.2rem',
                }}
              >
                FA
              </div>
              <div>
                <strong style={{ fontSize: '1.1rem', color: '#18240A', display: 'block' }}>
                  Mrs. Fathima Ali
                </strong>
                <span style={{ fontSize: '0.82rem', color: '#4E6E10', fontWeight: 700 }}>
                  Founder & Managing Director, NAMO Organic
                </span>
              </div>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}>
              <img
                src="/assets/farmers.jpg"
                alt="NAMO Founder and farming collective in Tamil Nadu"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: '-1.5rem',
                left: '2rem',
                right: '2rem',
                backgroundColor: '#FFDB15',
                color: '#18240A',
                padding: '1rem 1.4rem',
                borderRadius: '14px',
                fontWeight: 800,
                fontSize: '0.85rem',
                boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                textAlign: 'center',
              }}
            >
              Supporting 500+ Rural Women Farmers & Traditional Harvesters
            </div>
          </div>
        </div>

        {/* The 4 Historical Eras Timeline */}
        <div style={{ marginTop: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="badge-organic">5,000 YEARS OF AGRARIAN WISDOM</span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.4rem, 4vw, 3.6rem)',
                color: '#18240A',
                marginTop: '0.8rem',
              }}
            >
              The Evolution of Natural Food
            </h2>
          </div>

          {/* Era Navigation Tabs */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1rem',
              marginBottom: '3rem',
            }}
          >
            {eras.map((era, idx) => (
              <button
                key={idx}
                onClick={() => setActiveEra(idx)}
                style={{
                  padding: '1.2rem',
                  borderRadius: '16px',
                  border: activeEra === idx ? '2px solid #243810' : '1px solid rgba(24, 36, 10, 0.1)',
                  backgroundColor: activeEra === idx ? '#243810' : '#FFFFFF',
                  color: activeEra === idx ? '#FFFFFF' : '#18240A',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: activeEra === idx ? '0 10px 25px rgba(36, 56, 16, 0.2)' : 'none',
                }}
              >
                <span
                  style={{
                    fontSize: '0.72rem',
                    letterSpacing: '0.12em',
                    color: activeEra === idx ? '#FFDB15' : '#4E6E10',
                    fontWeight: 800,
                    display: 'block',
                    marginBottom: '0.3rem',
                  }}
                >
                  {era.era}
                </span>
                <strong style={{ fontSize: '0.95rem', display: 'block' }}>{era.year}</strong>
              </button>
            ))}
          </div>

          {/* Active Era Detail Box */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.06)',
              border: '1px solid rgba(99, 141, 8, 0.2)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              alignItems: 'stretch',
            }}
          >
            <div style={{ position: 'relative', minHeight: '380px' }}>
              <img
                src={current.image}
                alt={current.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div style={{ padding: 'clamp(2rem, 4vw, 3.5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', color: '#4E6E10', fontWeight: 800, textTransform: 'uppercase' }}>
                {current.era} · {current.year}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2.4rem',
                  color: '#18240A',
                  margin: '0.6rem 0 1rem',
                  lineHeight: 1.2,
                }}
              >
                {current.title}
              </h3>
              <p style={{ fontSize: '1.02rem', lineHeight: 1.7, color: '#3D4A2D', marginBottom: '1.2rem' }}>
                {current.desc}
              </p>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: '#556345', marginBottom: '1.8rem' }}>
                {current.detail}
              </p>
              <div
                style={{
                  padding: '1rem 1.4rem',
                  backgroundColor: '#F0F4E8',
                  borderRadius: '14px',
                  borderLeft: '4px solid #4E6E10',
                  fontSize: '0.88rem',
                  color: '#243810',
                  fontWeight: 600,
                }}
              >
                🌾 <strong>Historical Legacy:</strong> {current.milestone}
              </div>
            </div>
          </div>
        </div>

        {/* CTA to Products */}
        <div style={{ textAlign: 'center', marginTop: '6rem' }}>
          <Link to="/products" className="btn-primary" style={{ padding: '1rem 2.2rem', fontSize: '0.9rem' }}>
            TASTE OUR HERITAGE HARVESTS <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};
