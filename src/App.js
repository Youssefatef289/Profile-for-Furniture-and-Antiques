import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSlider from './components/HeroSlider/HeroSlider';
import FeaturedFurniture from './components/Sections/FeaturedFurniture';
import AntiquesCollection from './components/Sections/AntiquesCollection';
import LivingCollection from './components/Sections/LivingCollection';
import DiningCollection from './components/Sections/DiningCollection';
import BedroomCollection from './components/Sections/BedroomCollection';
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
      <FeaturedFurniture />
      <AntiquesCollection />
      <div id="collections">
        <LivingCollection />
        <DiningCollection />
        <BedroomCollection />
      </div>
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

