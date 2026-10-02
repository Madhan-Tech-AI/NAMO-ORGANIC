export interface Product {
  id: string;
  numericId?: string;
  name: string;
  shortName: string;
  category: 'oils' | 'ghee' | 'honey' | 'jaggery' | 'grains' | 'dals' | 'spices' | 'nuts' | 'snacks' | 'fertilizers' | 'pesticides' | 'supplements';
  categoryLabel: string;
  subtitle: string;
  image: string;
  tagline: string;
  subheadline: string;
  description: string;
  story: string;
  highlights: string[];
  volume: string;
  availableSizes: string[];
  price: string;
  priceNum: number;
  mrp: string;
  mrpNum: number;
  status: string;
  badge?: string;
  origin: string;
  farmerGroup: string;
  method: string;
  batchCode: string;
  harvestDate: string;
  shelfLife: string;
  rating: number;
  reviewCount: number;
  usageGuide?: { label: string; text: string }[];
  nutrition: {
    servingSize: string;
    energy: string;
    protein: string;
    carbs: string;
    fat: string;
    keyNutrient: string;
  };
  purityTests: string[];
}

export const PRODUCTS: Product[] = [
  {
    "id": "sesame-oil",
    "numericId": "1",
    "name": "Cold-Pressed Sesame Oil",
    "shortName": "Sesame Oil",
    "category": "oils",
    "categoryLabel": "Cold-Pressed Oils",
    "subtitle": "The oil your grandmother used. Now certified.",
    "image": "/products/oils.jpg",
    "tagline": "The oil your grandmother used. Now certified.",
    "subheadline": "Extracted at low temperature - unrefined and untouched. Preserving every milligram of sesamin, sesamol, and Vitamin E. Excellent for cooking, tempering, oil pulling, and traditional hair care.",
    "description": "Extracted at low temperature - unrefined and untouched. Preserving every milligram of sesamin, sesamol, and Vitamin E. Excellent for cooking, tempering, oil pulling, and traditional hair care.",
    "story": "Sesame oil has been the backbone of South Indian cooking and Ayurvedic practice for over 2,000 years. Most commercial sesame oils are solvent-extracted using hexane and then refined, bleached, and deodorised — stripping the very compounds that made the oil valuable. NAMO's cold-pressed sesame oil is extracted mechanically at controlled low temperatures, ensuring the full sesamin and sesamol profile remains intact. What you receive is exactly what the seed always contained.",
    "highlights": [
      "Cold-pressed at low temperature — zero heat damage to nutrients",
      "Rich in sesamin, sesamol & Vitamin E — antioxidants fully preserved",
      "No bleaching, no deodorising, no chemical refining",
      "Certified organic — traceable from farm to bottle",
      "Dual use: cooking & traditional Ayurvedic hair care"
    ],
    "volume": "500ml / 1000ml",
    "availableSizes": [
      "Standard Farm Pack",
      "Bulk / Institutional Pack"
    ],
    "price": "Coming Soon",
    "priceNum": 0,
    "mrp": "Certified Organic",
    "mrpNum": 0,
    "status": "Coming Soon",
    "badge": "Best Seller",
    "origin": "Tamil Nadu & South India Certified Clusters",
    "farmerGroup": "NAMO Organic Farmers Network",
    "method": "Cold-Pressed at Low Temperature",
    "batchCode": "NAMO-SO-2026",
    "harvestDate": "Seasonal Harvest 2026",
    "shelfLife": "12 Months from pressing",
    "rating": 5,
    "reviewCount": 150,
    "usageGuide": [
      {
        "label": "Cooking & Tempering",
        "text": "Use as a finishing oil or for low-to-medium heat tempering. Adds a nutty depth to South Indian dishes."
      },
      {
        "label": "Oil Pulling",
        "text": "1 tablespoon on an empty stomach, swish for 10–15 minutes. Traditional practice for oral health."
      },
      {
        "label": "Hair & Scalp Care",
        "text": "Warm gently and massage into scalp. Leave for 30 minutes or overnight before washing."
      }
    ],
    "nutrition": {
      "servingSize": "15ml",
      "energy": "124 kcal",
      "protein": "0g",
      "carbs": "0g",
      "fat": "14g (PUFA 6.1g, MUFA 5.4g)",
      "keyNutrient": "Natural Sesamol, Sesamin & Vitamin E"
    },
    "purityTests": [
      "ISO 9001:2015 Quality Management Certified",
      "GeM Registered for Institutional Procurement",
      "FSSAI Licensed (100% Chemical & Pesticide Free)",
      "Zero Hexane, Solvents, or Chemical Bleaches",
      "Panchakavya-Nurtured Natural Farm Origin"
    ]
  },
  {
    "id": "coconut-oil",
    "numericId": "2",
    "name": "Cold-Pressed Coconut Oil",
    "shortName": "Coconut Oil",
    "category": "oils",
    "categoryLabel": "Cold-Pressed Oils",
    "subtitle": "Pure coconut oil does it all.",
    "image": "/products/oils.jpg",
    "tagline": "Pure coconut oil does it all.",
    "subheadline": "Virgin cold-pressed from fresh coconuts — not copra. Retains full MCTs, lauric acid, and natural coconut fragrance. No bleaching, no deodorising, no hydrogenation.",
    "description": "Virgin cold-pressed from fresh coconuts — not copra. Retains full MCTs, lauric acid, and natural coconut fragrance. No bleaching, no deodorising, no hydrogenation.",
    "story": "The difference between cold-pressed virgin coconut oil and refined coconut oil is not subtle — it is the difference between a living food and a processed commodity. Fresh coconut meat is pressed within hours of harvest, preserving the full MCT spectrum including lauric acid. Copra-based extraction uses dried coconut and requires bleaching to remove the off-flavours that develop during drying. NAMO uses only fresh coconut, cold-pressed the same day.",
    "highlights": [
      "Pressed from fresh coconuts — not dried copra",
      "Full MCT and lauric acid profile preserved",
      "Natural coconut fragrance — no deodorising",
      "Zero hydrogenation — no trans fats",
      "Multipurpose: cooking, skin, hair, and oral care"
    ],
    "volume": "500ml / 1000ml",
    "availableSizes": [
      "Standard Farm Pack",
      "Bulk / Institutional Pack"
    ],
    "price": "Coming Soon",
    "priceNum": 0,
    "mrp": "Certified Organic",
    "mrpNum": 0,
    "status": "Coming Soon",
    "origin": "Tamil Nadu & South India Certified Clusters",
    "farmerGroup": "NAMO Organic Farmers Network",
    "method": "Cold-Pressed at Low Temperature",
    "batchCode": "NAMO-CO-2026",
    "harvestDate": "Seasonal Harvest 2026",
    "shelfLife": "12 Months from pressing",
    "rating": 5,
    "reviewCount": 150,
    "usageGuide": [
      {
        "label": "Cooking",
        "text": "High smoke point makes it ideal for sautéing, baking, and stir-frying. Adds subtle coconut flavour."
      },
      {
        "label": "Skin Moisturiser",
        "text": "Apply directly to skin after bathing. Absorbs quickly and leaves no greasy residue."
      },
      {
        "label": "Hair Conditioning",
        "text": "Pre-wash treatment: massage into hair, leave for 30–60 minutes, then shampoo out."
      }
    ],
    "nutrition": {
      "servingSize": "15ml",
      "energy": "121 kcal",
      "protein": "0g",
      "carbs": "0g",
      "fat": "14g (MCTs 8.9g, Lauric Acid 7.1g)",
      "keyNutrient": "Medium-Chain Triglycerides (MCTs) & Lauric Acid"
    },
    "purityTests": [
      "ISO 9001:2015 Quality Management Certified",
      "GeM Registered for Institutional Procurement",
      "FSSAI Licensed (100% Chemical & Pesticide Free)",
      "Zero Hexane, Solvents, or Chemical Bleaches",
      "Panchakavya-Nurtured Natural Farm Origin"
    ]
  },
  {
    "id": "a2-ghee",
    "numericId": "3",
    "name": "Desi Cow A2 Ghee",
    "shortName": "Desi Cow A2 Ghee",
    "category": "ghee",
    "categoryLabel": "A2 Vedic Dairy",
    "subtitle": "Hand-churned since before factories existed.",
    "image": "/products/gee.jpg",
    "tagline": "Hand-churned since before factories existed.",
    "subheadline": "Made from indigenous desi cow A2 milk via traditional bilona (hand-churned curd) method. Rich in butyric acid, CLA, and fat-soluble vitamins — the real Ayurvedic gold your family deserves.",
    "description": "Made from indigenous desi cow A2 milk via traditional bilona (hand-churned curd) method. Rich in butyric acid, CLA, and fat-soluble vitamins — the real Ayurvedic gold your family deserves.",
    "story": "The bilona method is slower, more labour-intensive, and produces less ghee per litre of milk than the industrial process. Which is exactly why it matters. Industrial ghee separates cream directly from milk and clarifies it — skipping the fermentation step entirely. Bilona first ferments the milk into curd, which allows beneficial enzymes and probiotics to develop before churning. The resulting ghee carries a depth of flavour and a nutritional profile that industrial ghee cannot replicate. NAMO's A2 ghee is made only from the milk of indigenous desi cows — not crossbred — and the bilona process is maintained exactly as it has been for generations.",
    "highlights": [
      "Sourced exclusively from indigenous desi (A2) cows",
      "Traditional bilona method — curd churned, not cream-separated",
      "Rich in butyric acid for gut health and anti-inflammation",
      "CLA (conjugated linoleic acid) — intact fat-soluble vitamins A, D, E, K",
      "Zero A1 casein — easier to digest for lactose-sensitive individuals"
    ],
    "volume": "500ml / 1000ml",
    "availableSizes": [
      "Standard Farm Pack",
      "Bulk / Institutional Pack"
    ],
    "price": "Coming Soon",
    "priceNum": 0,
    "mrp": "Certified Organic",
    "mrpNum": 0,
    "status": "Coming Soon",
    "badge": "Most Gifted",
    "origin": "Tamil Nadu & South India Certified Clusters",
    "farmerGroup": "NAMO Organic Farmers Network",
    "method": "Traditional Vedic Bilona Churning",
    "batchCode": "NAMO-AG-5012",
    "harvestDate": "Seasonal Harvest 2026",
    "shelfLife": "12 Months from pressing",
    "rating": 5,
    "reviewCount": 150,
    "usageGuide": [
      {
        "label": "Cooking",
        "text": "Ideal for high-temperature cooking. Add a teaspoon to dal, rice, or rotis at the end for flavour and nutrition."
      },
      {
        "label": "Ayurvedic Use",
        "text": "Half teaspoon in warm milk before bed supports digestion and promotes restful sleep."
      },
      {
        "label": "Gifting",
        "text": "Our most gifted product — traditionally exchanged at festivals and housewarming ceremonies."
      }
    ],
    "nutrition": {
      "servingSize": "15ml",
      "energy": "130 kcal",
      "protein": "0g",
      "carbs": "0g",
      "fat": "15g (CLA, Butyric Acid)",
      "keyNutrient": "A2 Beta-Casein, Butyric Acid & CLA"
    },
    "purityTests": [
      "ISO 9001:2015 Quality Management Certified",
      "GeM Registered for Institutional Procurement",
      "FSSAI Licensed (100% Chemical & Pesticide Free)",
      "Zero Hexane, Solvents, or Chemical Bleaches",
      "Panchakavya-Nurtured Natural Farm Origin"
    ]
  },
  {
    "id": "organic-honey",
    "numericId": "4",
    "name": "Organic Honey",
    "shortName": "Honey",
    "category": "jaggery",
    "categoryLabel": "Natural Sweeteners",
    "subtitle": "Real honey doesn't crystallize your trust.",
    "image": "/products/honey.png",
    "tagline": "Real honey doesn't crystallize your trust.",
    "subheadline": "Raw, unheated, unfiltered — sourced from natural beehives in verified organic environments. Every enzyme, antioxidant, and antibacterial compound fully intact. No added sugar. No adulterants.",
    "description": "Raw, unheated, unfiltered — sourced from natural beehives in verified organic environments. Every enzyme, antioxidant, and antibacterial compound fully intact. No added sugar. No adulterants.",
    "story": "Most commercial honey has been pasteurised at high temperatures to prevent crystallisation and extend shelf life. The process also destroys diastase, invertase, glucose oxidase, and the full antioxidant profile — the very things that give honey its medicinal value. NAMO's honey is extracted from verified organic environments where no synthetic pesticides, herbicides, or antibiotic treatments have been used within a 5km radius of the hive. It is completely raw and cold-extracted — and if it crystallises over time, that is proof of authenticity.",
    "highlights": [
      "Raw and unheated — all enzymes, pollen, and propolis preserved",
      "Sourced from verified organic beehive environments",
      "Natural antibacterial and antioxidant profile fully intact",
      "No added sugar, no corn syrup, no adulterants",
      "Crystallisation is natural — a sign of real honey, not a defect"
    ],
    "volume": "500g / 1kg",
    "availableSizes": [
      "Standard Farm Pack",
      "Bulk / Institutional Pack"
    ],
    "price": "Coming Soon",
    "priceNum": 0,
    "mrp": "Certified Organic",
    "mrpNum": 0,
    "status": "Coming Soon",
    "badge": "Most Gifted",
    "origin": "Tamil Nadu & South India Certified Clusters",
    "farmerGroup": "NAMO Organic Farmers Network",
    "method": "Traditional Chemical-Free Processing",
    "batchCode": "NAMO-WH-7731",
    "harvestDate": "Seasonal Harvest 2026",
    "shelfLife": "9 Months from packing",
    "rating": 5,
    "reviewCount": 150,
    "usageGuide": [
      {
        "label": "Direct Consumption",
        "text": "One teaspoon on an empty stomach in the morning. Do not heat above 40°C — it destroys the enzymes."
      },
      {
        "label": "With Food & Drink",
        "text": "Stir into warm (not hot) water with lemon, or drizzle over yogurt and fruit."
      },
      {
        "label": "Topical Use",
        "text": "Apply directly to minor cuts, burns, or skin irritation — natural antibacterial properties support healing."
      }
    ],
    "nutrition": {
      "servingSize": "20g",
      "energy": "64 kcal",
      "protein": "0.1g",
      "carbs": "17g",
      "fat": "0g",
      "keyNutrient": "Living Enzymes (Diastase, Invertase) & Bee Pollen"
    },
    "purityTests": [
      "ISO 9001:2015 Quality Management Certified",
      "GeM Registered for Institutional Procurement",
      "FSSAI Licensed (100% Chemical & Pesticide Free)",
      "Zero Hexane, Solvents, or Chemical Bleaches",
      "Panchakavya-Nurtured Natural Farm Origin"
    ]
  },
  {
    "id": "jaggery-powder",
    "numericId": "5",
    "name": "Organic Jaggery Powder",
    "shortName": "Jaggery Powder",
    "category": "jaggery",
    "categoryLabel": "Natural Sweeteners",
    "subtitle": "Everything refined sugar removed. We put it back.",
    "image": "/products/jaggery.png",
    "tagline": "Everything refined sugar removed. We put it back.",
    "subheadline": "Sulphur-free, chemical-free traditional process. Rich in iron, calcium, potassium, and natural molasses. Dissolves easily — ideal for tea, baking, health drinks, and cooking.",
    "description": "Sulphur-free, chemical-free traditional process. Rich in iron, calcium, potassium, and natural molasses. Dissolves easily — ideal for tea, baking, health drinks, and cooking.",
    "story": "Refined sugar is sucrose stripped of everything — molasses, minerals, fibre — through chemical clarification using sulphur dioxide, phosphoric acid, and activated carbon. Jaggery retains the full mineral profile of sugarcane: iron from the cane juice, calcium from the processing vessels, potassium from the natural evaporation. NAMO's jaggery powder is made without sulphur — the chemical most commonly added to commercial jaggery to improve colour and shelf life. What you get is the real thing: deeply caramel-flavoured, nutrient-dense, and completely natural.",
    "highlights": [
      "Sulphur-free and chemical-free traditional process",
      "Rich in iron, calcium, potassium & natural molasses",
      "Powdered form dissolves instantly in hot and cold liquids",
      "Low glycaemic index compared to refined white sugar",
      "Small batch — made in limited quantities to maintain quality"
    ],
    "volume": "500g / 1kg",
    "availableSizes": [
      "Standard Farm Pack",
      "Bulk / Institutional Pack"
    ],
    "price": "Coming Soon",
    "priceNum": 0,
    "mrp": "Certified Organic",
    "mrpNum": 0,
    "status": "Coming Soon",
    "badge": "Small Batch",
    "origin": "Tamil Nadu & South India Certified Clusters",
    "farmerGroup": "NAMO Organic Farmers Network",
    "method": "Traditional Chemical-Free Processing",
    "batchCode": "NAMO-JP-2026",
    "harvestDate": "Seasonal Harvest 2026",
    "shelfLife": "9 Months from packing",
    "rating": 5,
    "reviewCount": 150,
    "usageGuide": [
      {
        "label": "Tea & Coffee",
        "text": "Replace white sugar 1:1. Adds a subtle caramel depth that refined sugar cannot."
      },
      {
        "label": "Baking",
        "text": "Use in cookies, cakes, and ladoo. Retains moisture better than white sugar."
      },
      {
        "label": "Health Drinks",
        "text": "Dissolve in warm water with ginger and lemon for a traditional post-meal digestive drink."
      }
    ],
    "nutrition": {
      "servingSize": "20g",
      "energy": "76 kcal",
      "protein": "0.2g",
      "carbs": "19g",
      "fat": "0g",
      "keyNutrient": "Natural Plant Iron, Potassium & Magnesium"
    },
    "purityTests": [
      "ISO 9001:2015 Quality Management Certified",
      "GeM Registered for Institutional Procurement",
      "FSSAI Licensed (100% Chemical & Pesticide Free)",
      "Zero Hexane, Solvents, or Chemical Bleaches",
      "Panchakavya-Nurtured Natural Farm Origin"
    ]
  },
  {
    "id": "raw-rices",
    "numericId": "6",
    "name": "Organic Raw Rices",
    "shortName": "Raw Rices",
    "category": "grains",
    "categoryLabel": "Heritage Grains",
    "subtitle": "Your roti remembers what real grain tastes like.",
    "image": "/products/rice.png",
    "tagline": "Your roti remembers what real grain tastes like.",
    "subheadline": "Heritage varieties — Ponni, Sona Masuri, Mappillai Samba — grown without synthetic fertilizers. No polishing agents, no chemical treatments. Naturally fragrant, nutritionally superior.",
    "description": "Heritage varieties — Ponni, Sona Masuri, Mappillai Samba — grown without synthetic fertilizers. No polishing agents, no chemical treatments. Naturally fragrant, nutritionally superior.",
    "story": "India has over 100,000 indigenous rice varieties — most now replaced by high-yield hybrid strains that require heavy chemical inputs and produce nutritionally inferior grain. Heritage varieties like Mappillai Samba were developed over centuries to thrive in Indian soil conditions without synthetic inputs. They are naturally pest-resistant, drought-tolerant, and nutritionally complete in ways modern hybrid rice cannot match. NAMO sources these varieties directly from farmers who have maintained traditional cultivation methods — no synthetic fertilisers, no pesticide treatments, no post-harvest chemical preservation.",
    "highlights": [
      "Heritage varieties: Ponni, Sona Masuri, Mappillai Samba",
      "Grown without synthetic fertilisers or pesticides",
      "No polishing agents or chemical treatments",
      "Naturally fragrant — aroma preserved from farm to table",
      "Nutritionally superior — full bran and germ profile intact"
    ],
    "volume": "1kg / 5kg",
    "availableSizes": [
      "Standard Farm Pack",
      "Bulk / Institutional Pack"
    ],
    "price": "Coming Soon",
    "priceNum": 0,
    "mrp": "Certified Organic",
    "mrpNum": 0,
    "status": "Coming Soon",
    "origin": "Tamil Nadu & South India Certified Clusters",
    "farmerGroup": "NAMO Organic Farmers Network",
    "method": "Slow Stone-Ground Mill",
    "batchCode": "NAMO-RR-2026",
    "harvestDate": "Seasonal Harvest 2026",
    "shelfLife": "9 Months from packing",
    "rating": 5,
    "reviewCount": 150,
    "nutrition": {
      "servingSize": "50g",
      "energy": "180 kcal",
      "protein": "4.2g",
      "carbs": "39g",
      "fat": "0.6g",
      "keyNutrient": "Complex Carbohydrates & Natural Dietary Fiber"
    },
    "purityTests": [
      "ISO 9001:2015 Quality Management Certified",
      "GeM Registered for Institutional Procurement",
      "FSSAI Licensed (100% Chemical & Pesticide Free)",
      "Zero Hexane, Solvents, or Chemical Bleaches",
      "Panchakavya-Nurtured Natural Farm Origin"
    ]
  },
  {
    "id": "wheat-flour",
    "numericId": "7",
    "name": "Organic Wheat Flour",
    "shortName": "Wheat Flour",
    "category": "grains",
    "categoryLabel": "Heritage Grains",
    "subtitle": "From stone-ground grain to your kitchen.",
    "image": "/products/rice.png",
    "tagline": "From stone-ground grain to your kitchen.",
    "subheadline": "Stone-ground with bran intact — no bleaching, no preservatives. The flour your roti was always meant to be. Freshly milled from organically grown wheat with zero chemical treatments.",
    "description": "Stone-ground with bran intact — no bleaching, no preservatives. The flour your roti was always meant to be. Freshly milled from organically grown wheat with zero chemical treatments.",
    "story": "Commercial atta — even the 'whole wheat' variety — is often roller-milled at high speed, generating heat that damages the germ oils and reduces nutritional value. Many commercial brands blend maida (refined flour) into whole wheat atta to improve texture. NAMO's wheat flour is stone-ground in small batches from organically grown wheat, retaining the complete bran and germ, which means the full fibre, B-vitamins, and natural wheat oils are all present in your roti.",
    "highlights": [
      "Stone-ground — bran and germ fully intact",
      "No bleaching agents, no preservatives, no maida mixing",
      "Higher fibre content than commercial whole wheat flour",
      "Freshly milled from organically grown wheat",
      "Natural wheat flavour — distinctive taste in rotis and breads"
    ],
    "volume": "1kg / 5kg",
    "availableSizes": [
      "Standard Farm Pack",
      "Bulk / Institutional Pack"
    ],
    "price": "Coming Soon",
    "priceNum": 0,
    "mrp": "Certified Organic",
    "mrpNum": 0,
    "status": "Coming Soon",
    "origin": "Tamil Nadu & South India Certified Clusters",
    "farmerGroup": "NAMO Organic Farmers Network",
    "method": "Slow Stone-Ground Mill",
    "batchCode": "NAMO-WF-9043",
    "harvestDate": "Seasonal Harvest 2026",
    "shelfLife": "9 Months from packing",
    "rating": 5,
    "reviewCount": 150,
    "usageGuide": [
      {
        "label": "Rotis & Chapatis",
        "text": "Knead with water and a small amount of oil. Rests for 20 minutes before rolling for the best pliability."
      },
      {
        "label": "Bread & Baking",
        "text": "Replace commercial whole wheat flour 1:1. Expect a denser, more flavourful loaf."
      },
      {
        "label": "Storage",
        "text": "Store in an airtight container in a cool, dry place. Use within 30 days of milling for best flavour."
      }
    ],
    "nutrition": {
      "servingSize": "50g",
      "energy": "170 kcal",
      "protein": "6.1g",
      "carbs": "36g",
      "fat": "1.1g",
      "keyNutrient": "100% Whole Wheat Bran, Germ & B-Vitamins"
    },
    "purityTests": [
      "ISO 9001:2015 Quality Management Certified",
      "GeM Registered for Institutional Procurement",
      "FSSAI Licensed (100% Chemical & Pesticide Free)",
      "Zero Hexane, Solvents, or Chemical Bleaches",
      "Panchakavya-Nurtured Natural Farm Origin"
    ]
  },
  {
    "id": "dals-pulses",
    "numericId": "8",
    "name": "Organic Dals & Pulses",
    "shortName": "Dals & Pulses",
    "category": "dals",
    "categoryLabel": "Unpolished Pulses",
    "subtitle": "The dal your dal used to be.",
    "image": "/products/dals.jpg",
    "tagline": "The dal your dal used to be.",
    "subheadline": "Toor, Moong, Urad — naturally sourced, cleaned without chemical washing agents. Farm-to-fork pulses delivering pure plant protein without pesticide residue. Nutritionally superior to commodity dals.",
    "description": "Toor, Moong, Urad — naturally sourced, cleaned without chemical washing agents. Farm-to-fork pulses delivering pure plant protein without pesticide residue. Nutritionally superior to commodity dals.",
    "story": "Commercial pulses are routinely polished with oil and washed with chemical agents to improve appearance and speed up cooking time. Polishing removes the outer bran layer — which contains a significant proportion of the protein, fibre, and micronutrient content. NAMO's dals are cleaned mechanically without any chemical treatments. They may take slightly longer to cook than their polished counterparts — and every minute of that extra cooking time is accounted for by the nutritional difference.",
    "highlights": [
      "Sourced from verified organic farms — zero synthetic fertilisers",
      "Cleaned without chemical washing agents or polishing",
      "Full plant protein profile intact — not stripped by over-processing",
      "No pesticide residue — farm-to-fork supply chain",
      "Varieties: Toor, Moong, Urad — traditional South Indian kitchen staples"
    ],
    "volume": "1kg / 5kg",
    "availableSizes": [
      "Standard Farm Pack",
      "Bulk / Institutional Pack"
    ],
    "price": "Coming Soon",
    "priceNum": 0,
    "mrp": "Certified Organic",
    "mrpNum": 0,
    "status": "Coming Soon",
    "origin": "Tamil Nadu & South India Certified Clusters",
    "farmerGroup": "NAMO Organic Farmers Network",
    "method": "Traditional Chemical-Free Processing",
    "batchCode": "NAMO-DP-2026",
    "harvestDate": "Seasonal Harvest 2026",
    "shelfLife": "9 Months from packing",
    "rating": 5,
    "reviewCount": 150,
    "nutrition": {
      "servingSize": "50g",
      "energy": "175 kcal",
      "protein": "12.4g",
      "carbs": "30g",
      "fat": "0.8g",
      "keyNutrient": "Unpolished Plant Protein & High Fiber"
    },
    "purityTests": [
      "ISO 9001:2015 Quality Management Certified",
      "GeM Registered for Institutional Procurement",
      "FSSAI Licensed (100% Chemical & Pesticide Free)",
      "Zero Hexane, Solvents, or Chemical Bleaches",
      "Panchakavya-Nurtured Natural Farm Origin"
    ]
  },
  {
    "id": "masala-spices",
    "numericId": "9",
    "name": "Traditional Masala & Spices",
    "shortName": "Masala & Spices",
    "category": "spices",
    "categoryLabel": "Single-Origin Spices",
    "subtitle": "The spice rack your kitchen has been missing.",
    "image": "/products/spices.png",
    "tagline": "The spice rack your kitchen has been missing.",
    "subheadline": "Handpicked, sun-dried spices processed without chemical treatments — preserving the potent aroma and flavour your recipes deserve. No bleaching. No artificial colour. No fillers.",
    "description": "Handpicked, sun-dried spices processed without chemical treatments — preserving the potent aroma and flavour your recipes deserve. No bleaching. No artificial colour. No fillers.",
    "story": "The global spice trade is one of the most adulterated commodity markets in the world. Chilli powders mixed with brick dust. Turmeric laced with lead chromate for colour. Cumin bulked with grass seeds. NAMO's spices are sourced directly from farmers, handpicked at optimal ripeness, and sun-dried naturally. No steam sterilisation (which reduces essential oil content), no chemical fumigation, no artificial colour. The aroma when you open a packet of NAMO spices should tell you everything you need to know about the difference.",
    "highlights": [
      "Handpicked and sun-dried — natural moisture reduction, zero nutrient damage",
      "No bleaching agents or artificial colour enhancement",
      "No fillers, no extenders, no starch additions",
      "Full essential oil content preserved — potent aroma and flavour",
      "Sourced from single-origin farms where possible"
    ],
    "volume": "1kg / 5kg",
    "availableSizes": [
      "Standard Farm Pack",
      "Bulk / Institutional Pack"
    ],
    "price": "Coming Soon",
    "priceNum": 0,
    "mrp": "Certified Organic",
    "mrpNum": 0,
    "status": "Coming Soon",
    "origin": "Tamil Nadu & South India Certified Clusters",
    "farmerGroup": "NAMO Organic Farmers Network",
    "method": "Traditional Chemical-Free Processing",
    "batchCode": "NAMO-MS-2026",
    "harvestDate": "Seasonal Harvest 2026",
    "shelfLife": "9 Months from packing",
    "rating": 5,
    "reviewCount": 150,
    "nutrition": {
      "servingSize": "5g",
      "energy": "15 kcal",
      "protein": "0.6g",
      "carbs": "2.5g",
      "fat": "0.5g",
      "keyNutrient": "Essential Volatile Oils & Curcumin / Piperine"
    },
    "purityTests": [
      "ISO 9001:2015 Quality Management Certified",
      "GeM Registered for Institutional Procurement",
      "FSSAI Licensed (100% Chemical & Pesticide Free)",
      "Zero Hexane, Solvents, or Chemical Bleaches",
      "Panchakavya-Nurtured Natural Farm Origin"
    ]
  },
  {
    "id": "nuts-dryfruits",
    "numericId": "10",
    "name": "Premium Nuts & Dry Fruits",
    "shortName": "Premium Nuts & Dry Fruits",
    "category": "nuts",
    "categoryLabel": "Nutritious Snacks & Dry Fruits",
    "subtitle": "Snack without the guilt. Nourish without shortcuts.",
    "image": "/products/nuts.png",
    "tagline": "Snack without the guilt. Nourish without shortcuts.",
    "subheadline": "Naturally sourced almonds, cashews, and walnuts — cleaned without chemical washing agents. Rich in healthy fats, protein, and micronutrients. Preservative-free with full source transparency.",
    "description": "Naturally sourced almonds, cashews, and walnuts — cleaned without chemical washing agents. Rich in healthy fats, protein, and micronutrients. Preservative-free with full source transparency.",
    "story": "Most commercial nuts are treated with sulphur dioxide to extend shelf life and preserve colour. Cashews are often steamed in caustic chemicals during shelling. NAMO sources nuts that have been cleaned mechanically and dried naturally. No sulphur treatments, no chemical washing, no artificial coating. The result is a product that tastes noticeably different — less uniform in colour but far more complex in flavour.",
    "highlights": [
      "Almonds, cashews, and walnuts — naturally sourced",
      "Cleaned without chemical washing agents",
      "No preservatives, no sulphur dioxide, no artificial coating",
      "Full healthy fat profile — omega-3s and monounsaturated fats intact",
      "Source-transparent supply chain"
    ],
    "volume": "1kg / 5kg",
    "availableSizes": [
      "Standard Farm Pack",
      "Bulk / Institutional Pack"
    ],
    "price": "Coming Soon",
    "priceNum": 0,
    "mrp": "Certified Organic",
    "mrpNum": 0,
    "status": "Coming Soon",
    "origin": "Tamil Nadu & South India Certified Clusters",
    "farmerGroup": "NAMO Organic Farmers Network",
    "method": "Traditional Chemical-Free Processing",
    "batchCode": "NAMO-ND-2026",
    "harvestDate": "Seasonal Harvest 2026",
    "shelfLife": "9 Months from packing",
    "rating": 5,
    "reviewCount": 150,
    "usageGuide": [
      {
        "label": "Snacking",
        "text": "A small handful (30g) as a mid-morning or afternoon snack. Paired with organic jaggery for sustained energy."
      },
      {
        "label": "Cooking",
        "text": "Add to rice dishes, halwa, and kheer for traditional preparation. Toast lightly before use to enhance flavour."
      },
      {
        "label": "Storage",
        "text": "Store in an airtight container away from moisture and direct sunlight. No refrigeration required."
      }
    ],
    "nutrition": {
      "servingSize": "30g",
      "energy": "185 kcal",
      "protein": "6.2g",
      "carbs": "6g",
      "fat": "16g (Omega-3 & Monounsaturated)",
      "keyNutrient": "Plant Protein, Vitamin E & Healthy Fats"
    },
    "purityTests": [
      "ISO 9001:2015 Quality Management Certified",
      "GeM Registered for Institutional Procurement",
      "FSSAI Licensed (100% Chemical & Pesticide Free)",
      "Zero Hexane, Solvents, or Chemical Bleaches",
      "Panchakavya-Nurtured Natural Farm Origin"
    ]
  },
  {
    "id": "sweets-snacks",
    "numericId": "11",
    "name": "Traditional Sweets & Snacks",
    "shortName": "Sweets & Snacks",
    "category": "nuts",
    "categoryLabel": "Nutritious Snacks & Dry Fruits",
    "subtitle": "What celebrations tasted like before shortcuts.",
    "image": "/products/sweets.jpg",
    "tagline": "What celebrations tasted like before shortcuts.",
    "subheadline": "Heritage recipes made with certified organic ingredients — jaggery, organic ghee, and native grains. Guilt-free indulgence rooted in India's oldest culinary traditions.",
    "description": "Heritage recipes made with certified organic ingredients — jaggery, organic ghee, and native grains. Guilt-free indulgence rooted in India's oldest culinary traditions.",
    "story": "Festival sweets in India have a long history of adulteration — substandard ghee, bleached sugar, synthetic colours, and artificial flavours. NAMO's traditional sweets are made from the same certified organic inputs that we sell individually: our own cold-pressed ghee, sulphur-free jaggery, and stone-ground flours. Every ingredient in the sweet is traceable to its source. The result is a product that tastes the way these sweets were always supposed to taste — before cost-cutting became the industry norm.",
    "highlights": [
      "Heritage recipes — unchanged for generations",
      "Made with certified organic jaggery, ghee, and native grains",
      "No refined sugar, no artificial colour, no preservatives",
      "Small-batch production — freshness guaranteed",
      "NAMO's most gifted product for festivals and celebrations"
    ],
    "volume": "1kg / 5kg",
    "availableSizes": [
      "Standard Farm Pack",
      "Bulk / Institutional Pack"
    ],
    "price": "Coming Soon",
    "priceNum": 0,
    "mrp": "Certified Organic",
    "mrpNum": 0,
    "status": "Coming Soon",
    "badge": "Most Gifted",
    "origin": "Tamil Nadu & South India Certified Clusters",
    "farmerGroup": "NAMO Organic Farmers Network",
    "method": "Traditional Chemical-Free Processing",
    "batchCode": "NAMO-TS-2026",
    "harvestDate": "Seasonal Harvest 2026",
    "shelfLife": "9 Months from packing",
    "rating": 5,
    "reviewCount": 150,
    "nutrition": {
      "servingSize": "30g",
      "energy": "140 kcal",
      "protein": "3.1g",
      "carbs": "18g",
      "fat": "6.5g",
      "keyNutrient": "Natural Jaggery Molasses & Cultured Ghee Fats"
    },
    "purityTests": [
      "ISO 9001:2015 Quality Management Certified",
      "GeM Registered for Institutional Procurement",
      "FSSAI Licensed (100% Chemical & Pesticide Free)",
      "Zero Hexane, Solvents, or Chemical Bleaches",
      "Panchakavya-Nurtured Natural Farm Origin"
    ]
  },
  {
    "id": "panchakavya-organic-fertilizer",
    "numericId": "12",
    "name": "NAMO Organic Fertilizers Based on Panchakavya",
    "shortName": "Organic Fertilizer",
    "category": "fertilizers",
    "categoryLabel": "Bio-Fertilizers & Soil Health",
    "subtitle": "Prepared from five sacred cow-derived ingredients for living, fertile soil.",
    "image": "/assets/NAMO Panchakavya Organic Fertilizer Bottle.png",
    "tagline": "Awaken the living microbiome of your soil.",
    "subheadline": "Natural agricultural inputs traditionally prepared using milk, urine, dung, curd, and ghee of native desi cows. Culturing billions of beneficial microbes to awaken soil life and accelerate root growth.",
    "description": "NAMO Organic Fertilizers based on Panchakavya are natural agricultural inputs designed to support healthy plant growth and sustainable farming practices. It is traditionally prepared using five cow-derived ingredients: milk, urine, dung, curd, and ghee.",
    "story": "For millennia, Indian agriculture flourished without synthetic chemical fertilizers, relying instead on Panchakavya — the five sacred offerings of the native desi cow (milk, urine, dung, curd, and ghee) fermented with natural bio-activators. Unlike chemical NPK inputs that burn organic matter and leave dead soil, NAMO's Panchakavya Organic Fertilizer reintroduces a thriving ecosystem of nitrogen-fixing bacteria, mycorrhizal fungi, and natural plant hormones. Every batch is naturally fermented under rigorous quality standards, restoring soil structure, maximizing moisture retention, and promoting resilient, nutrient-dense crops.",
    "highlights": [
      "Improves Soil Health",
      "Enhances Plant Growth",
      "Supports Sustainable Farming",
      "Traditionally prepared using 5 cow-derived ingredients (milk, urine, dung, curd, ghee)",
      "Rich in beneficial microorganisms, natural auxins & gibberellins",
      "100% biodegradable, residue-free & eco-friendly"
    ],
    "volume": "1 Litre / 5 Litres",
    "availableSizes": [
      "1 Litre Farm Pack",
      "5 Litres Canister",
      "Bulk / Institutional Pack (20L)"
    ],
    "price": "Coming Soon",
    "priceNum": 0,
    "mrp": "Certified Organic Input",
    "mrpNum": 0,
    "status": "Coming Soon",
    "badge": "Soil Nutrition",
    "origin": "Tamil Nadu Traditional Desi Cow Sanctuaries",
    "farmerGroup": "NAMO Organic Bio-Inputs Collective",
    "method": "Traditional Vedic 30-Day Bio-Fermentation",
    "batchCode": "NAMO-PKF-2026",
    "harvestDate": "Fresh Batch 2026",
    "shelfLife": "6 Months from bottling",
    "rating": 5,
    "reviewCount": 142,
    "usageGuide": [
      {
        "label": "Foliar Spray Application",
        "text": "Dilute 30ml (3%) per 1 Litre of clean water. Spray thoroughly on crop foliage during early morning or late evening."
      },
      {
        "label": "Soil Drenching & Drip Fertigation",
        "text": "Apply 20 to 30 Litres per acre through drip irrigation or direct soil drenching during active vegetative growth."
      },
      {
        "label": "Seedling Root Dipping",
        "text": "Dip roots in 3% solution for 15-20 minutes before transplanting to stimulate immediate root establishment."
      }
    ],
    "nutrition": {
      "servingSize": "30ml per Litre of water",
      "energy": "N/A (Bio-Input)",
      "protein": "Natural Microbial Peptides",
      "carbs": "Fermented Bio-Carbon",
      "fat": "Desi Cow Ghee Lipids",
      "keyNutrient": "Living Lactobacillus, Yeast, Actinomycetes & Bio-Auxins"
    },
    "purityTests": [
      "100% Free from Synthetic Chemicals & Heavy Metals",
      "ISO 9001:2015 Quality Management Certified",
      "Certified Bio-Input for NPOP Organic Cultivation",
      "Tested for Viable Microbial Colony Count (CFU > 10^7/ml)",
      "Panchakavya-Nurtured Natural Farm Origin"
    ]
  },
  {
    "id": "panchakavya-organic-pesticide",
    "numericId": "13",
    "name": "NAMO Organic Pesticides Based on Panchakavya",
    "shortName": "Organic Pesticide",
    "category": "pesticides",
    "categoryLabel": "Natural Crop Protection",
    "subtitle": "Zero-chemical botanical and cow-derived repellent for resilient crops.",
    "image": "/assets/NAMO Panchakavya Organic Fertilizer Bottle.png",
    "tagline": "Defend your harvest naturally while nurturing the ecosystem.",
    "subheadline": "Formulated with fermented Panchakavya infused with time-tested botanical bio-actives. Deters chewing and sucking pests while safeguarding beneficial honeybees, earthworms, and soil microbiology.",
    "description": "NAMO Organic Pesticides based on Panchakavya are natural crop protection solutions that help protect plants from pests and diseases while maintaining a healthy and balanced ecosystem.",
    "story": "Synthetic chemical pesticides create a dangerous cycle of soil toxicity, beneficial insect decimation, and hazardous residues in our food. NAMO Organic Pesticides based on Panchakavya offer a harmonious biological alternative. By combining the natural therapeutic properties of indigenous desi cow Panchakavya with potent botanical repellents, this formulation acts as a natural antifeedant, oviposition deterrent, and immunity-booster. Plants develop fortified cell walls resistant to fungal blights and insect damage, without leaving any harmful chemical residues on food or soil.",
    "highlights": [
      "Natural Pest Protection",
      "Healthier Crops",
      "Eco-friendly Farming",
      "Broad-spectrum deterrence against aphids, thrips, caterpillars & borers",
      "Safe for earthworms, honeybees, birds & non-target beneficial organisms",
      "Zero withholding period — harvests remain 100% safe and chemical-free"
    ],
    "volume": "1 Litre / 5 Litres",
    "availableSizes": [
      "1 Litre Farm Pack",
      "5 Litres Canister",
      "Bulk / Institutional Pack (20L)"
    ],
    "price": "Coming Soon",
    "priceNum": 0,
    "mrp": "Certified Organic Input",
    "mrpNum": 0,
    "status": "Coming Soon",
    "badge": "Crop Defense",
    "origin": "Tamil Nadu Traditional Desi Cow Sanctuaries",
    "farmerGroup": "NAMO Organic Bio-Inputs Collective",
    "method": "Botanical-Infused Anaerobic Panchakavya Brewing",
    "batchCode": "NAMO-PKP-2026",
    "harvestDate": "Fresh Batch 2026",
    "shelfLife": "6 Months from bottling",
    "rating": 5,
    "reviewCount": 128,
    "usageGuide": [
      {
        "label": "Preventative Protective Spray",
        "text": "Dilute 20ml to 30ml per Litre of water. Apply every 10–14 days during peak vegetative and flowering stages."
      },
      {
        "label": "Active Pest Infestation Treatment",
        "text": "Dilute 40ml per Litre of water. Spray every 4–5 days until pest populations subside."
      },
      {
        "label": "Foliage Application Technique",
        "text": "Ensure fine mist coverage on both upper and undersides of leaves during calm early morning hours."
      }
    ],
    "nutrition": {
      "servingSize": "25ml per Litre of water",
      "energy": "N/A (Bio-Input)",
      "protein": "Botanical Bio-Defense Enzymes",
      "carbs": "Organic Ferment Substrates",
      "fat": "Natural Plant Essential Oils",
      "keyNutrient": "Bio-Alkaloids, Phenols & Organic Cow Urine Bio-Actives"
    },
    "purityTests": [
      "100% Synthetic Chemical & Organophosphate-Free",
      "Zero Toxic Chemical Pesticide Residues (Tested to 0.01 ppm)",
      "Safe for Earthworms, Bees & Pollinating Insects",
      "ISO 9001:2015 Quality Management Certified",
      "Panchakavya-Nurtured Natural Farm Origin"
    ]
  },
  {
    "id": "algae-cattle-feed-supplement",
    "numericId": "14",
    "name": "Algae-Based Feed Supplement for Cattle",
    "shortName": "Algae Cattle Feed",
    "category": "supplements",
    "categoryLabel": "Cattle Feed & Livestock Wellness",
    "subtitle": "Pure marine algae superfood for superior bovine vitality and milk quality.",
    "image": "/assets/NAMO Algae Extract Bottle.png",
    "tagline": "Supercharge livestock vitality with concentrated aquatic nutrition.",
    "subheadline": "Rich in micro-algal amino acids, organic chelated trace minerals, omega-3 fatty acids, and natural prebiotic polysaccharides to balance rumen digestion, enhance fertility, and elevate dairy productivity.",
    "description": "Algae-Based Feed Supplement for Cattle provides natural nutrition to support better health, improved productivity, and overall wellness in dairy animals.",
    "story": "Nourishing dairy animals with natural superfoods produces cleaner, healthier milk. Modern commercial cattle feeds often contain synthetic fillers and hormone boosters that strain bovine metabolism. NAMO's Algae-Based Feed Supplement harnesses sustainably cultivated micro-algae from coastal waters. Packed with bio-available trace minerals (zinc, selenium, iodine), prebiotic polysaccharides, and natural omega fatty acids, it optimizes the rumen microbiome, improves feed conversion ratio, and enhances natural milk fat and SNF naturally without artificial hormones.",
    "highlights": [
      "Supports Cattle Health",
      "Improves Productivity",
      "Natural Nutrition",
      "Rich in Omega-3 fatty acids, chelated trace minerals & essential amino acids",
      "Enhances rumen digestion, feed conversion & milk fat percentage",
      "100% natural, antibiotic-free & hormone-free liquid formulation"
    ],
    "volume": "1 Litre / 5 Litres",
    "availableSizes": [
      "1 Litre Dose Pack",
      "5 Litres Dairy Canister",
      "Bulk Commercial Pack (20L)"
    ],
    "price": "Coming Soon",
    "priceNum": 0,
    "mrp": "Certified Organic Input",
    "mrpNum": 0,
    "status": "Coming Soon",
    "badge": "Cattle Care",
    "origin": "Coastal Tamil Nadu Certified Sustainable Algae Clusters",
    "farmerGroup": "NAMO Dairy & Livestock Stewardship Program",
    "method": "Cold Ultrasonic Cell-Disruption Extraction",
    "batchCode": "NAMO-AFC-2026",
    "harvestDate": "Fresh Batch 2026",
    "shelfLife": "12 Months from bottling",
    "rating": 5,
    "reviewCount": 116,
    "usageGuide": [
      {
        "label": "Milking Cows & Buffaloes",
        "text": "Administer 40ml to 50ml daily mixed into regular cattle feed, mash, or drinking water."
      },
      {
        "label": "Calves & Young Heifers",
        "text": "Administer 15ml to 20ml daily to promote healthy bone structure, coat shine, and immune resilience."
      },
      {
        "label": "Dry Cows & Transition Period",
        "text": "Administer 30ml daily to maintain metabolic balance and prepare cattle for smooth calving and lactation."
      }
    ],
    "nutrition": {
      "servingSize": "50ml per day per animal",
      "energy": "42 kcal per 100ml",
      "protein": "18.5% Crude Algal Protein",
      "carbs": "Prebiotic Polysaccharides (Beta-Glucans)",
      "fat": "Omega-3 EPA/DHA & Essential Lipids",
      "keyNutrient": "Bio-Chelated Zinc, Selenium, Iodine & Chlorophyll"
    },
    "purityTests": [
      "100% Free from Antibiotics, Hormones & Synthetic Preservatives",
      "Heavy Metal Screened (Zero Lead, Mercury, Arsenic)",
      "Compliant with FSSAI & Animal Husbandry Nutrition Standards",
      "ISO 9001:2015 Quality Management Certified",
      "Natural Coastal Farm Stewardship Origin"
    ]
  }
];

export function getProductById(id: string): Product | undefined {
  if (!id) return undefined;
  const normalized = id.toLowerCase().trim();
  return PRODUCTS.find(
    (p) =>
      p.id.toLowerCase() === normalized ||
      p.numericId === normalized ||
      p.batchCode.toLowerCase() === normalized
  );
}

export function getProductsByCategory(category: string): Product[] {
  if (!category || category === 'all') return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === category);
}

export function searchProducts(query: string): Product[] {
  if (!query) return PRODUCTS;
  const q = query.toLowerCase().trim();
  return PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.origin.toLowerCase().includes(q) ||
      p.batchCode.toLowerCase().includes(q)
  );
}
