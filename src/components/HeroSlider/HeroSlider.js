import React, { useState, useEffect } from 'react';
import './HeroSlider.css';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: '/img/slider/slider1.png',
      title: 'أثاث فاخر مصنوع لمساحات خالدة',
      description: 'اكتشف الأناقة التي تتجاوز الموضة، حيث تحكي كل قطعة قصة من الحرفية والأناقة.',
      buttonText: 'عرض المجموعة',
      buttonLink: '#featured',
    },
    {
      id: 2,
      image: '/img/slider/slider2.png',
      title: 'حيث تحكي التحف قصتها',
      description: 'كل قطعة أثرية تحمل تاريخاً وشخصية وجمالاً خالداً يثري مساحة معيشتك.',
      buttonText: 'استكشف المعرض',
      buttonLink: '#antiques',
    },
    {
      id: 3,
      image: '/img/slider/slider3.png',
      title: 'أناقة تعيش إلى الأبد',
      description: 'أثاث فاخر مصمم ليصبح إرثاً، يجمع بين الراحة العصرية والجماليات الكلاسيكية.',
      buttonText: 'اكتشف المزيد',
      buttonLink: '#collections',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const currentSlideData = slides[currentSlide];

  return (
    <section id="home" className="hero-slider">
      <div className="container">
        <div className="hero-content-wrapper">
          <div className="hero-image-section">
            <div className="hero-image-container">
              {slides.map((slide, index) => (
                <img
                  key={slide.id}
                  src={slide.image}
                  alt={slide.title}
                  className={`hero-image ${index === currentSlide ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>

          <div className="hero-text-section">
            <div className="hero-content">
              <h1 className="hero-title">{currentSlideData.title}</h1>
              <p className="hero-description">{currentSlideData.description}</p>
              <a href={currentSlideData.buttonLink} className="btn btn-primary">
                {currentSlideData.buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
