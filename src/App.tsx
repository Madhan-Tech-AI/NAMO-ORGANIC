import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { TraceabilityModal } from './components/TraceabilityModal';
import { CartDrawer } from './components/CartDrawer';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { OurStoryPage } from './pages/OurStoryPage';
import { FarmersPage } from './pages/FarmersPage';
import { WhyNamoPage } from './pages/WhyNamoPage';
import { JourneyPage } from './pages/JourneyPage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { QualityTraceabilityPage } from './pages/QualityTraceabilityPage';
import { ContactPage } from './pages/ContactPage';
import { CartPage } from './pages/CartPage';

import type { CartItem } from './components/CartDrawer';

gsap.registerPlugin(ScrollTrigger);

export function App() {
  const [isTraceabilityOpen, setIsTraceabilityOpen] = useState(false);
  const [activeBatchCode, setActiveBatchCode] = useState('NAMO-SO-2026');
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'item-1',
      name: 'Cold-Pressed Sesame Oil (500ml Glass Bottle)',
      price: '₹420',
      quantity: 1,
    },
    {
      id: 'item-2',
      name: 'Desi Cow A2 Cultured Ghee (500ml Glass Jar)',
      price: '₹1,250',
      quantity: 1,
    },
  ]);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, []);

  const handleAddToCart = (productName: string, price: string) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.name === productName);
      if (existing) {
        return prev.map((item) =>
          item.name === productName ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: `item-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
          name: productName,
          price: price,
          quantity: 1,
        },
      ];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleOpenTraceabilityWithBatch = (batchCode: string) => {
    setActiveBatchCode(batchCode);
    setIsTraceabilityOpen(true);
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <Router>
      <ScrollToTop />
      <AppContent
        cartItems={cartItems}
        handleAddToCart={handleAddToCart}
        handleUpdateQuantity={handleUpdateQuantity}
        handleRemoveItem={handleRemoveItem}
        handleClearCart={handleClearCart}
        handleOpenTraceabilityWithBatch={handleOpenTraceabilityWithBatch}
        isTraceabilityOpen={isTraceabilityOpen}
        setIsTraceabilityOpen={setIsTraceabilityOpen}
        activeBatchCode={activeBatchCode}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        totalCartCount={totalCartCount}
      />
    </Router>
  );
}

interface AppContentProps {
  cartItems: CartItem[];
  handleAddToCart: (productName: string, price: string) => void;
  handleUpdateQuantity: (id: string, delta: number) => void;
  handleRemoveItem: (id: string) => void;
  handleClearCart: () => void;
  handleOpenTraceabilityWithBatch: (batchCode: string) => void;
  isTraceabilityOpen: boolean;
  setIsTraceabilityOpen: (open: boolean) => void;
  activeBatchCode: string;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  totalCartCount: number;
}

function AppContent({
  cartItems,
  handleAddToCart,
  handleUpdateQuantity,
  handleRemoveItem,
  handleClearCart,
  handleOpenTraceabilityWithBatch,
  isTraceabilityOpen,
  setIsTraceabilityOpen,
  activeBatchCode,
  isCartOpen,
  setIsCartOpen,
  totalCartCount,
}: AppContentProps) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Subtle organic film grain texture overlay */}
      <div className="film-grain" />

      {/* 3-Tier Global Navigation Header:
          - On sub-pages: sticky at top: 0, immediately visible
          - On Home page: fixed at top: 0, reveals as the parallax flying logo docks */}
      <div
        id="global-navbar"
        style={{
          position: isHomePage ? 'fixed' : 'sticky',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1100,
          opacity: isHomePage ? 0 : 1,
          pointerEvents: isHomePage ? 'none' : 'auto',
          transition: 'opacity 0.2s ease',
        }}
      >
        <Navbar
          onOpenCart={() => setIsCartOpen(true)}
          cartCount={totalCartCount}
        />
      </div>

      {/* Dynamic Multi-Page Routes */}
      <div style={{ flex: 1 }}>
        <Routes>
          {/* Home Landing Page with Full-Screen Cinematic Parallax Intro */}
          <Route
            path="/"
            element={
              <HomePage
                onAddToCart={handleAddToCart}
                onOpenTraceabilityWithBatch={handleOpenTraceabilityWithBatch}
                onOpenTraceability={() => setIsTraceabilityOpen(true)}
              />
            }
          />

          {/* Dedicated Our Story Page */}
          <Route path="/story" element={<OurStoryPage />} />

          {/* Dedicated Our Farmers Page */}
          <Route path="/farmers" element={<FarmersPage />} />

          {/* Dedicated Why NAMO Page */}
          <Route path="/why-namo" element={<WhyNamoPage />} />

          {/* Dedicated Farm-to-Family Journey Page */}
          <Route path="/journey" element={<JourneyPage />} />

          {/* Dedicated All Products Catalog Page */}
          <Route
            path="/products"
            element={
              <ProductsPage
                onAddToCart={handleAddToCart}
                onOpenTraceabilityWithBatch={handleOpenTraceabilityWithBatch}
              />
            }
          />

          {/* Dedicated Individual Product Pages */}
          <Route
            path="/product/:id"
            element={
              <ProductDetailPage
                onAddToCart={handleAddToCart}
                onOpenTraceabilityWithBatch={handleOpenTraceabilityWithBatch}
              />
            }
          />

          {/* Dedicated Quality & Farm Traceability Page */}
          <Route
            path="/traceability"
            element={
              <QualityTraceabilityPage
                onOpenTraceabilityModalWithBatch={handleOpenTraceabilityWithBatch}
              />
            }
          />
          <Route
            path="/quality"
            element={
              <QualityTraceabilityPage
                onOpenTraceabilityModalWithBatch={handleOpenTraceabilityWithBatch}
              />
            }
          />

          {/* Dedicated Contact Page */}
          <Route path="/contact" element={<ContactPage />} />

          {/* Dedicated Cart & Checkout Page */}
          <Route
            path="/cart"
            element={
              <CartPage
                items={cartItems}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveItem={handleRemoveItem}
                onClearCart={handleClearCart}
              />
            }
          />

          {/* Catch-all redirect to products */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Traceability Modal */}
      <TraceabilityModal
        isOpen={isTraceabilityOpen}
        onClose={() => setIsTraceabilityOpen(false)}
        initialBatch={activeBatchCode}
      />

      {/* Interactive Shopping Basket Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}

export default App;
