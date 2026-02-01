import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSlider from './components/HeroSlider/HeroSlider';
import ProductsSection from './components/Sections/ProductsSection';
import AboutUsSection from './components/Sections/AboutUsSection';
import AboutSection from './components/Sections/AboutSection';
import ContactSection from './components/Sections/ContactSection';
import SectionsGrid from './components/SectionsGrid/SectionsGrid';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import ImageModal from './components/ImageModal/ImageModal';
import SectionDetails from './pages/SectionDetails/SectionDetails';
import { ModalProvider } from './context/ModalContext';

function HomePage() {
  return (
    <>
      <HeroSlider />
      <AboutUsSection />
      <ProductsSection />
      <Hero
        id="sections"
        title="مجموعاتنا المتنوعة"
        subtitle="اكتشف مجموعتنا الكاملة"
        description="استكشف مجموعتنا الشاملة من الأثاث والتحف الفاخرة، كل قطعة مصممة بعناية لتضفي لمسة من الأناقة على مساحتك"
      />
      <SectionsGrid />
      <AboutSection />
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

