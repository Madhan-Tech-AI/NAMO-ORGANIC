import React from 'react';
import { Users, MapPin, Heart, ShieldCheck, ArrowRight, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FarmersPage: React.FC = () => {
  const cooperatives = [
    {
      name: 'Thenpennai Organic Cultivators Collective',
      region: 'Villupuram & Cuddalore, Tamil Nadu',
      crops: 'Black Sesame, Cold-Pressed Groundnut & Heirloom Rice',
      members: '320+ Smallholder Families',
      soil: 'Rich alluvial and red loam soil free from chemicals for over 8 years',
      leadFarmer: 'Selvamurugan & Karpagam S.',
      practice: '100% Desi Cow Dung Compost & Jeevamrutha microbial bio-enhancers',
      quote:
        'When NAMO committed to fair upfront pricing for our sesame harvests, our village stopped using chemical pesticides entirely. Our soil is alive again with earthworms.',
      image: '/assets/farmers.jpg',
    },
    {
      name: 'Gau Seva Vedic Dairy Sangha',
      region: 'Karnal (Haryana) & Saurashtra (Gujarat)',
      crops: 'Pure Desi Gir & Sahiwal Cow A2 Milk & Cultured Bilona Ghee',
      members: '140+ Pastoral Caretakers',
      soil: 'Organic grass pastures and natural medicinal grazing paddocks',
      leadFarmer: 'Rambhai Bharwad',
      practice: 'Ethical ahimsa milking only after calves are fed. Traditional firewood bilona churning.',
      quote:
        'Our Gir cows roam freely in open pastures grazing on neem leaves and wild grass. We churn the butter by hand in clay pots as our ancestors taught us.',
      image: '/assets/product-ghee.jpg',
    },
    {
      name: 'Adivasi Forest Honey Stewards Council',
      region: 'Nilgiri Biosphere Reserve, Western Ghats',
      crops: 'Raw Multifloral Forest Honey & Wild Medicinal Herbs',
      members: '85 Indigenous Honey Hunters',
      soil: 'Protected UNESCO Biosphere mountain reserve untouched by human industry',
      leadFarmer: 'Maran & Bomman K.',
      practice: 'Non-destructive ethical harvest: only side combs taken, leaving the brood intact.',
      quote:
        'The forest provides for us only when we respect it. We never smoke or destroy a colony. NAMO ensures our tribal collectors receive fair wages without middlemen.',
      image: '/assets/product-honey.jpg',
    },
    {
      name: 'Narmada Valley Sharbati Grain Guild',
      region: 'Sehore & Vidisha, Madhya Pradesh',
      crops: 'Organic Sharbati Wheat, Chickpeas & Millets',
      members: '210+ Certified Organic Farmers',
      soil: 'Fertile deep black cotton soil fed by rainwater and deep tube wells',
      leadFarmer: 'Rajesh Patidar',
      practice: 'Zero chemical fertilizers. Traditional slow stone chakki flour milling.',
      quote:
        'Our wheat grains are naturally plump and sweet because the soil has not been hardened with urea. It produces the softest, most aromatic rotis you will ever taste.',
      image: '/assets/hero-mid.jpg',
    },
    {
      name: 'Valley Orchard Organic Alliance',
      region: 'Pulwama & Anantnag, Kashmir Valley',
      crops: 'Kashmiri Mamra Almonds & Mountain Snow Walnuts',
      members: '95 Orchard Families',
      soil: 'High altitude mountain terraces fed by glacial snowmelt',
      leadFarmer: 'Bashir Ahmad Mir',
      practice: 'Hand-picked, sun-dried, cold-shelled without propylene oxide gas or bleach.',
      quote:
        'Commercial California almonds are dipped in gas and chemicals. Our Kashmiri nuts are cracked gently by hand with wooden mallets. The oil inside is 100% natural.',
      image: '/assets/nuts-macro.jpg',
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
              SOIL STEWARDS OF BHARAT
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
            THE PEOPLE BEHIND EVERY HARVEST
          </h1>

          <p
            style={{
              fontSize: '1.2rem',
              lineHeight: 1.7,
              color: '#B5AFA4',
              maxWidth: '780px',
              margin: '0 auto',
            }}
          >
            Every single drops of oil, spoonful of ghee, and jar of honey begins with the dedicated hands of our farming collectives.
            We eliminate brokers and middlemen, paying above-market fair prices directly to our growers.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1440px', margin: '4rem auto 0', padding: '0 2rem' }}>
        {/* Core Pillars Ribbon */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
            marginBottom: '5rem',
          }}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              padding: '2rem',
              borderRadius: '20px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.04)',
              border: '1px solid rgba(99, 141, 8, 0.2)',
            }}
          >
            <Heart size={28} color="#4E6E10" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.2rem', color: '#18240A', marginBottom: '0.5rem' }}>Fair Price Pledge</h3>
            <p style={{ fontSize: '0.88rem', color: '#556345', lineHeight: 1.6 }}>
              We pay our farmer collectives 25% to 40% above prevailing APMC market rates, ensuring sustainable livelihoods and dignity.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#FFFFFF',
              padding: '2rem',
              borderRadius: '20px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.04)',
              border: '1px solid rgba(99, 141, 8, 0.2)',
            }}
          >
            <Leaf size={28} color="#4E6E10" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.2rem', color: '#18240A', marginBottom: '0.5rem' }}>100% Chemical-Free Soil</h3>
            <p style={{ fontSize: '0.88rem', color: '#556345', lineHeight: 1.6 }}>
              Every field is certified organic and tested for 180+ pesticide residues before seeds are sown.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#FFFFFF',
              padding: '2rem',
              borderRadius: '20px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.04)',
              border: '1px solid rgba(99, 141, 8, 0.2)',
            }}
          >
            <Users size={28} color="#4E6E10" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.2rem', color: '#18240A', marginBottom: '0.5rem' }}>Women Led Agrarian Teams</h3>
            <p style={{ fontSize: '0.88rem', color: '#556345', lineHeight: 1.6 }}>
              Over 60% of our seed grading and artisan pressing hubs are managed by self-help women agrarian cooperatives.
            </p>
          </div>
        </div>

        {/* Cooperatives In-Depth List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {cooperatives.map((c, i) => (
            <div
              key={i}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.05)',
                border: '1px solid rgba(99, 141, 8, 0.2)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
                alignItems: 'stretch',
              }}
            >
              <div style={{ position: 'relative', minHeight: '340px' }}>
                <img
                  src={c.image}
                  alt={c.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '1.2rem',
                    left: '1.2rem',
                    backgroundColor: '#FFDB15',
                    color: '#18240A',
                    fontSize: '0.72rem',
                    fontWeight: 900,
                    padding: '0.4rem 0.8rem',
                    borderRadius: '9999px',
                  }}
                >
                  {c.members}
                </div>
              </div>

              <div style={{ padding: 'clamp(2rem, 4vw, 3.5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#4E6E10', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.4rem' }}>
                  <MapPin size={15} /> {c.region}
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '2rem',
                    color: '#18240A',
                    marginBottom: '0.6rem',
                    lineHeight: 1.2,
                  }}
                >
                  {c.name}
                </h3>

                <p style={{ fontSize: '0.94rem', color: '#2C3B1C', fontWeight: 600, marginBottom: '1rem' }}>
                  Harvest: {c.crops}
                </p>

                <div
                  style={{
                    backgroundColor: '#F8F9F3',
                    padding: '1.2rem',
                    borderRadius: '14px',
                    fontStyle: 'italic',
                    color: '#3B5710',
                    fontSize: '0.92rem',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                    borderLeft: '3px solid #4E6E10',
                  }}
                >
                  "{c.quote}"
                  <span style={{ display: 'block', fontSize: '0.75rem', fontStyle: 'normal', color: '#6B7959', marginTop: '0.4rem', fontWeight: 700 }}>
                    — {c.leadFarmer}
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.82rem', color: '#556345' }}>
                  <div>
                    <strong style={{ color: '#18240A' }}>Farming Practice:</strong> {c.practice}
                  </div>
                  <div>
                    <strong style={{ color: '#18240A' }}>Soil & Water:</strong> {c.soil}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Traceability Callout */}
        <div
          style={{
            marginTop: '6rem',
            backgroundColor: '#F0F4E8',
            borderRadius: '24px',
            padding: '3rem',
            textAlign: 'center',
            border: '1.5px solid rgba(78, 110, 16, 0.25)',
          }}
        >
          <ShieldCheck size={36} color="#4E6E10" style={{ margin: '0 auto 1rem' }} />
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2.4rem',
              color: '#18240A',
              marginBottom: '0.8rem',
            }}
          >
            Want to see the exact farm behind your bottle?
          </h2>
          <p style={{ color: '#556345', maxWidth: '650px', margin: '0 auto 2rem', fontSize: '1.05rem' }}>
            Enter any batch code from your NAMO container to view geo-coordinates, harvest timestamps, and farmer certifications.
          </p>
          <Link to="/traceability" className="btn-primary" style={{ padding: '0.9rem 2rem' }}>
            LOOKUP A BATCH NOW <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};
