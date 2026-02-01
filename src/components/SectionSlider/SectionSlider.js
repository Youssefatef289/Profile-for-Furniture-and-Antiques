import React, { useState, useRef, useEffect } from 'react';
import { FaEye } from 'react-icons/fa';
import { useModal } from '../../context/ModalContext';
import './SectionSlider.css';

const SectionSlider = ({ 
  items, 
  title, 
  subtitle, 
  showDescription = true,
  autoPlay = true,
  autoPlayInterval = 5000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);
  const { openModal } = useModal();

  useEffect(() => {
    if (!autoPlay || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [items.length, autoPlay, autoPlayInterval, isHovered]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleImageClick = (item) => {
    const allImages = items.map(item => item.image);
    const currentImageIndex = items.findIndex(i => i.image === item.image);
    openModal(item.image, allImages, currentImageIndex);
  };

  return (
    <section className="section-slider">
      <div className="container">
        {title && (
          <div className="section-header">
            <h2 className="section-title">{title}</h2>
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </div>
        )}

        <div 
          className="slider-wrapper"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          ref={sliderRef}
        >
          <div 
            className="slider-container"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((item, index) => (
              <div key={index} className="slider-item">
                <div className="slider-card">
                  <div 
                    className="slider-image-wrapper"
                    onClick={() => handleImageClick(item)}
                  >
                    <img 
                      src={item.image} 
                      alt={item.name || item.title || `Item ${index + 1}`}
                      className="slider-image"
                    />
                    <div className="image-overlay">
                      <span className="view-icon">
                        <FaEye />
                      </span>
                    </div>
                  </div>
                  
                  {showDescription && (item.name || item.title || item.description) && (
                    <div className="slider-content">
                      {item.name && <h3 className="slider-item-title">{item.name}</h3>}
                      {item.title && <h3 className="slider-item-title">{item.title}</h3>}
                      {item.description && (
                        <p className="slider-item-description">{item.description}</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {items.length > 1 && (
            <>
              <button 
                className="slider-btn prev" 
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button 
                className="slider-btn next" 
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </>
          )}
        </div>

        {items.length > 1 && (
          <div className="slider-indicators">
            {items.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionSlider;

