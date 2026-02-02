import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSlider from './components/HeroSlider/HeroSlider';
import ProductsSection from './components/Sections/ProductsSection';
import AboutUsSection from './components/Sections/AboutUsSection';
import FeaturesSection from './components/Sections/FeaturesSection';
import TestimonialsSection from './components/Sections/TestimonialsSection';
import StatsSection from './components/Sections/StatsSection';
import FAQSection from './components/Sections/FAQSection';
import Footer from './components/Footer/Footer';
import ImageModal from './components/ImageModal/ImageModal';
import SectionDetails from './pages/SectionDetails/SectionDetails';
import { ModalProvider } from './context/ModalContext';
import { CartProvider } from './context/CartContext';
import CartModal from './components/Cart/CartModal';
import FloatingButtons from './components/FloatingButtons/FloatingButtons';

function HomePage() {
  return (
    <>
      <HeroSlider />
      <FeaturesSection />
      <StatsSection />
      <AboutUsSection />
      <ProductsSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}

function App() {
  return (
    <ModalProvider>
      <CartProvider>
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/section/:id" element={<SectionDetails />} />
            </Routes>
          </main>
          <Footer />
          <ImageModal />
          <CartModal />
          <FloatingButtons />
        </div>
      </CartProvider>
    </ModalProvider>
  );
}

export default App;

