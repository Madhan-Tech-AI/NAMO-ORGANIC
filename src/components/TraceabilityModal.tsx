import React, { useState } from 'react';
import { X, ShieldCheck, MapPin, Calendar, User, CheckCircle2 } from 'lucide-react';

interface TraceabilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialBatch?: string;
}

interface BatchRecord {
  code: string;
  product: string;
  farm: string;
  coords: string;
  leadFarmer: string;
  harvestDate: string;
  millingDate: string;
  soilCarbon: string;
  labReportNo: string;
  purityScore: string;
  tests: { name: string; result: string; limit: string }[];
}

const batchDatabase: Record<string, BatchRecord> = {
  'NAMO-SO-2026': {
    code: 'NAMO-SO-2026',
    product: 'Cold-Pressed Sesame Oil (500ml)',
    farm: 'Kallakurichi Organic Farm Cluster, Tamil Nadu',
    coords: '11.7380° N, 78.9639° E',
    leadFarmer: 'Thiru. Shanmugam & Co-op (32 Farmers)',
    harvestDate: 'February 2026 (Thai Pattam)',
    millingDate: 'March 2026 (Vaagai Marachekku)',
    soilCarbon: '1.48% (High Regenerative Biological Activity)',
    labReportNo: 'NABL-CHE-89412',
    purityScore: '100% PURE UNREFINED',
    tests: [
      { name: 'Hexane / Petroleum Solvents', result: 'Not Detected (0.00 ppm)', limit: '< 5.0 ppm' },
      { name: '180 Organophosphate Pesticides', result: 'Nil (Below 0.01 mg/kg)', limit: '< 0.05 mg/kg' },
      { name: 'Acid Value (FFA as Oleic)', result: '0.84% (Ultra Fresh)', limit: '< 2.0%' },
      { name: 'Argemone / Mineral Oil Adulterants', result: 'Negative', limit: 'Must be Absent' },
    ],
  },
  'NAMO-AG-5012': {
    code: 'NAMO-AG-5012',
    product: 'Desi Cow A2 Ghee (500ml)',
    farm: 'Gir Gaushala Pastures, Junagadh & Karnal',
    coords: '21.5222° N, 70.4579° E',
    leadFarmer: 'Gopalak Parivar Collective',
    harvestDate: 'Grass-fed Spring Milk Collection',
    millingDate: 'Traditional Bilona Curd Churned',
    soilCarbon: 'Regenerative Pastureland',
    labReportNo: 'NABL-DEL-40192',
    purityScore: '100% A2 CERTIFIED',
    tests: [
      { name: 'A2 Beta-Casein Protein Genetic Match', result: '100% Confirmed A2', limit: '100%' },
      { name: 'Reichert-Meissl (RM) Value', result: '30.2 (Danedar Purity)', limit: '26.0 - 32.0' },
      { name: 'Vegetable Fat / Vanaspati / Starch', result: 'Negative', limit: 'Must be Absent' },
      { name: 'Antibiotics & Synthetic Hormones', result: 'Not Detected', limit: 'Zero Tolerance' },
    ],
  },
  'NAMO-WH-7731': {
    code: 'NAMO-WH-7731',
    product: 'Raw Organic Wild Honey (340g)',
    farm: 'Nilgiri Biosphere Tribal Forest Reserve',
    coords: '11.4916° N, 76.7337° E',
    leadFarmer: 'Irula Tribal Honey Collector Guild',
    harvestDate: 'Wildflower Bloom Season 2026',
    millingDate: 'Gravity Filtered & Hand Poured',
    soilCarbon: 'Wild Virgin Canopy Forest',
    labReportNo: 'NABL-BLR-66230',
    purityScore: '100% RAW UNHEATED',
    tests: [
      { name: 'C4 Sugars / High Fructose Corn Syrup', result: '0.0% (Zero Adulteration)', limit: '< 7.0%' },
      { name: 'Natural Diastase Activity (Enzymes)', result: '24.8 DN (Living Enzyme Peak)', limit: '> 8.0 DN' },
      { name: 'Hydroxymethylfurfural (HMF)', result: '9.2 mg/kg (Unheated Freshness)', limit: '< 40.0 mg/kg' },
      { name: 'Pollen Grain Count', result: 'Over 45,000 grains/g', limit: '> 20,000 grains/g' },
    ],
  },
  'NAMO-WF-9043': {
    code: 'NAMO-WF-9043',
    product: 'Organic Wheat Flour (2kg)',
    farm: 'Narmada Valley Clay Loam Soils, Madhya Pradesh',
    coords: '22.8425° N, 77.4085° E',
    leadFarmer: 'Kisan Swaraj Organic Sangathan',
    harvestDate: 'March 2026 Winter Harvest',
    millingDate: 'Natural Chakki Stone Ground',
    soilCarbon: '1.25% (Zero Chemical Inputs)',
    labReportNo: 'NABL-BHO-31908',
    purityScore: '100% WHOLE GRAIN',
    tests: [
      { name: 'Synthetic Bleaching (Benzoyl Peroxide)', result: 'Absent', limit: 'Must be Absent' },
      { name: 'Potassium Bromate', result: 'Nil (Not Detected)', limit: 'Must be Absent' },
      { name: 'Wheat Bran & Germ Integrity', result: 'Intact (High Natural Fiber)', limit: 'Full Grain' },
      { name: 'Heavy Metals (Lead, Cadmium, Arsenic)', result: 'Below Detection Limit', limit: 'Stringent Organic' },
    ],
  },
};

export const TraceabilityModal: React.FC<TraceabilityModalProps> = ({
  isOpen,
  onClose,
  initialBatch = 'NAMO-SO-2026',
}) => {
  const [selectedBatch, setSelectedBatch] = useState<BatchRecord>(
    batchDatabase[initialBatch] || batchDatabase['NAMO-SO-2026']
  );

  if (!isOpen) return null;

  const handleSelect = (code: string) => {
    setSelectedBatch(batchDatabase[code]);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(24, 36, 10, 0.45)',
        backdropFilter: 'blur(12px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(0.5rem, 2vw, 1.5rem)',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid rgba(99, 141, 8, 0.3)',
          borderRadius: '24px',
          width: '100%',
          maxWidth: '820px',
          maxHeight: '92vh',
          overflowY: 'auto',
          padding: 'clamp(1.2rem, 3.5vw, 2.5rem)',
          boxShadow: '0 30px 80px rgba(24, 36, 10, 0.2)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 'clamp(0.9rem, 2vw, 1.8rem)',
            right: 'clamp(0.9rem, 2vw, 1.8rem)',
            background: '#F0F4E8',
            border: 'none',
            color: '#18240A',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Title */}
        <div style={{ marginBottom: '1.8rem' }}>
          <span className="badge-organic" style={{ marginBottom: '0.6rem' }}>
            <ShieldCheck size={14} color="#4E6E10" /> LIVE BATCH TRACEABILITY
          </span>
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2rem',
              color: '#18240A',
              fontWeight: 500,
            }}
          >
            Trace Soil Origin & Purity Certificate
          </h3>
          <p style={{ fontSize: '0.88rem', color: '#556345' }}>
            Select any harvested batch below to inspect authentic soil GPS coordinates, lead farmer cooperatives, and third-party laboratory test parameters.
          </p>
        </div>

        {/* Quick Batch Selector Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2rem' }}>
          {Object.keys(batchDatabase).map((code) => (
            <button
              key={code}
              onClick={() => handleSelect(code)}
              style={{
                background: selectedBatch.code === code ? '#243810' : '#F0F4E8',
                color: selectedBatch.code === code ? '#FFFFFF' : '#2D3A1B',
                border: selectedBatch.code === code ? '1px solid #243810' : '1px solid rgba(24, 36, 10, 0.1)',
                padding: '0.45rem 0.9rem',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {code} — {batchDatabase[code].product.split('(')[0]}
            </button>
          ))}
        </div>

        {/* Active Batch Report Card */}
        <div
          style={{
            background: '#F8F9F3',
            border: '1px solid rgba(99, 141, 8, 0.25)',
            borderRadius: '20px',
            padding: 'clamp(1rem, 2.5vw, 2rem)',
            marginBottom: '2rem',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <span style={{ fontSize: '0.72rem', letterSpacing: '0.12em', color: '#4E6E10', fontWeight: 800 }}>
                VERIFIED HARVEST BATCH
              </span>
              <h4 style={{ fontSize: '1.35rem', color: '#18240A', fontWeight: 700, marginTop: '2px' }}>
                {selectedBatch.product}
              </h4>
              <p style={{ fontSize: '0.82rem', color: '#687656' }}>Batch Serial: {selectedBatch.code}</p>
            </div>
            <div
              style={{
                background: '#243810',
                color: '#A8E63A',
                padding: '0.4rem 1rem',
                borderRadius: '9999px',
                fontSize: '0.78rem',
                fontWeight: 800,
              }}
            >
              {selectedBatch.purityScore}
            </div>
          </div>

          {/* Details Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.2rem',
              marginBottom: '2rem',
              paddingBottom: '1.5rem',
              borderBottom: '1px solid rgba(24, 36, 10, 0.08)',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#4E6E10', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.2rem' }}>
                <MapPin size={13} /> GEOGRAPHIC ORIGIN
              </div>
              <p style={{ color: '#18240A', fontSize: '0.88rem', fontWeight: 600 }}>{selectedBatch.farm}</p>
              <span style={{ color: '#687656', fontSize: '0.75rem' }}>{selectedBatch.coords}</span>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#4E6E10', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.2rem' }}>
                <User size={13} /> AGRARIAN COLLECTIVE
              </div>
              <p style={{ color: '#18240A', fontSize: '0.88rem', fontWeight: 600 }}>{selectedBatch.leadFarmer}</p>
              <span style={{ color: '#687656', fontSize: '0.75rem' }}>Soil Carbon: {selectedBatch.soilCarbon}</span>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#4E6E10', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.2rem' }}>
                <Calendar size={13} /> HARVEST & PROCESSING
              </div>
              <p style={{ color: '#18240A', fontSize: '0.88rem', fontWeight: 600 }}>{selectedBatch.harvestDate}</p>
              <span style={{ color: '#687656', fontSize: '0.75rem' }}>{selectedBatch.millingDate}</span>
            </div>
          </div>

          {/* Lab Test Parameters Table */}
          <h5 style={{ fontSize: '0.88rem', color: '#18240A', letterSpacing: '0.06em', marginBottom: '1rem', textTransform: 'uppercase', fontWeight: 700 }}>
            NABL Laboratory Analytical Purity Results ({selectedBatch.labReportNo})
          </h5>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {selectedBatch.tests.map((t, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: '#FFFFFF',
                  border: '1px solid rgba(24, 36, 10, 0.06)',
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  fontSize: '0.82rem',
                }}
              >
                <div>
                  <span style={{ color: '#18240A', fontWeight: 600 }}>{t.name}</span>
                  <span style={{ color: '#687656', display: 'block', fontSize: '0.72rem' }}>Standard: {t.limit}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#3B5710', fontWeight: 700 }}>
                  <CheckCircle2 size={15} />
                  <span>{t.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button onClick={onClose} className="btn-primary" style={{ padding: '0.75rem 2rem', fontSize: '0.8rem' }}>
            CLOSE TRACEABILITY LEDGER
          </button>
        </div>
      </div>
    </div>
  );
};
