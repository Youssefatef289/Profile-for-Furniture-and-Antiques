import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSlider from './components/HeroSlider/HeroSlider';
import ProductsSection from './components/Sections/ProductsSection';
import AboutUsSection from './components/Sections/AboutUsSection';
import ContactSection from './components/Sections/ContactSection';
import FeaturesSection from './components/Sections/FeaturesSection';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import ImageModal from './components/ImageModal/ImageModal';
import SectionDetails from './pages/SectionDetails/SectionDetails';
import { ModalProvider } from './context/ModalContext';

function HomePage() {
  return (
    <>
      <HeroSlider />
      <FeaturesSection />
      <AboutUsSection />
      <ProductsSection />
      <ContactSection />
    </>
  );
}

function App() {
  return (
    <ModalProvider>
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
      </div>
    </ModalProvider>
  );
}

export default App;

