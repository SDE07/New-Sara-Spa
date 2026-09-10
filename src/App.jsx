import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
import Navbar from "./common/navbar";
import Footer from "./common/Footer";
import CommonCTA from "./common/CommonCTA";
import PageLoader from "./common/PageLoader";
import BookingModal from "./components/BookingModal";
import CustomCursor from "./common/CustomCursor";
import FloatingServiceWidget from "./common/FloatingServiceWidget";

// ── Lazy-loaded page components ──────────────────────────────────────────────
const LandingPage             = lazy(() => import("./components/Landingpage"));
const About                   = lazy(() => import("./components/About"));
const ServicesPage            = lazy(() => import("./components/ServicesPage"));
const PackagesPage            = lazy(() => import("./components/PackagesPage"));
const GalleryPage             = lazy(() => import("./components/GalleryPage"));
const Contactus               = lazy(() => import("./components/Contactus"));
const Thankyou                = lazy(() => import("./components/Thankyou"));
const ProductsPage            = lazy(() => import("./components/Productpage"));
const QualityPage             = lazy(() => import("./components/Qualitypage"));
const ExportPage              = lazy(() => import("./components/Exportpage"));
const MainProductCategoryPage = lazy(() => import("./components/MainProductCategoryPage"));
const RTEFoodCataloguePage    = lazy(() => import("./components/RTEFoodCataloguePage"));
const Leadership              = lazy(() => import("./components/Leadershippage"));

// Lightweight luxury fallback shown while a lazy chunk is downloading
function PageFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF7F2] text-[#2D241E]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-2 border-[#B07D54] border-t-transparent rounded-full animate-spin shadow-[0_0_15px_rgba(212,163,115,0.6)]" />
        <p className="text-[#8C6A43] font-serif-luxury text-sm tracking-[0.25em] uppercase font-semibold">Entering Sanctuary…</p>
      </div>
    </div>
  );
}

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#211A15] text-[#2D241E] antialiased selection:bg-[#D4A373] selection:text-white">
        
        {/* Entrance Luxury Animated Morphing SVG Page Loader */}
        <PageLoader />

        {/* Luxury Interactive Spa Custom Cursor */}
        <CustomCursor />
        
        {/* Transparent-to-Blurred Luxury Navbar */}
        <Navbar onOpenBooking={() => setIsBookingOpen(true)} />
        
        <main className="flex-1 bg-[#FDFAF6]">
          <Suspense fallback={<PageFallback />}>
            <Routes>
              {/* ── Main Navbar Routes ── */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<About onOpenBooking={() => setIsBookingOpen(true)} />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/packages" element={<PackagesPage />} />
              <Route path="/contact" element={<Contactus />} />
              <Route path="/contactus" element={<Contactus />} />
              <Route path="/Contact" element={<Contactus />} />
              <Route path="/thank-you" element={<Thankyou />} />
              <Route path="/thankyou" element={<Thankyou />} />

              {/* ── Secondary Pages ── */}
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/quality" element={<QualityPage />} />
              <Route path="/export" element={<ExportPage />} />
              <Route path="/products/frozen-vegetable-collection" element={<MainProductCategoryPage />} />
              <Route path="/products/service-catalogue" element={<MainProductCategoryPage />} />
              <Route path="/products/rte-food-products" element={<RTEFoodCataloguePage />} />

              {/* ── 404 Catch-All ── */}
              <Route path="*" element={<LandingPage />} />
            </Routes>
          </Suspense>
        </main>

        {/* Common Luxury CTA Before Footer on Every Page */}
        <CommonCTA onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Global Luxury Footer */}
        <Footer onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Global Floating Quick Access Services Widget */}
        <FloatingServiceWidget />

        {/* Global Booking Modal */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
        />
      </div>
    </Router>
  );
}

export default App;
