import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProductsPage } from './pages/ProductsPage';
import { MarketPage } from './pages/MarketPage';
import { ContactPage } from './pages/ContactPage';

gsap.registerPlugin(ScrollTrigger);

export function App() {
  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    (window as any).lenis = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      (window as any).lenis = null;
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isParallaxDone =
    typeof window !== 'undefined' &&
    (sessionStorage.getItem('namo_parallax_done') === 'true' || window.scrollY > 200);
  const showNavImmediately = !isHomePage || isParallaxDone;

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Subtle organic film grain texture overlay */}
      <div className="film-grain" />

      {/* Global Corporate Navbar:
          - On sub-pages or when parallax is done: sticky/fixed at top: 0, immediately visible
          - On Home page on first fresh visit: fixed at top: 0, reveals smoothly as the hero parallax docks */}
      <div
        id="global-navbar"
        style={{
          position: isHomePage ? 'fixed' : 'sticky',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1100,
          opacity: showNavImmediately ? 1 : 0,
          pointerEvents: showNavImmediately ? 'auto' : 'none',
          transition: 'opacity 0.2s ease',
        }}
      >
        <Navbar />
      </div>

      {/* Dynamic Multi-Page Routes */}
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/market" element={<MarketPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Legacy route redirects */}
          <Route path="/story" element={<Navigate to="/about" replace />} />
          <Route path="/why-namo" element={<Navigate to="/products" replace />} />
          <Route path="/journey" element={<Navigate to="/about" replace />} />
          <Route path="/farmers" element={<Navigate to="/market" replace />} />
          <Route path="/traceability" element={<Navigate to="/products" replace />} />
          <Route path="/quality" element={<Navigate to="/products" replace />} />
          <Route path="/cart" element={<Navigate to="/" replace />} />

          {/* Catch-all redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      {/* Section 16 & Global Corporate Footer */}
      <Footer />
    </div>
  );
}

export default App;
