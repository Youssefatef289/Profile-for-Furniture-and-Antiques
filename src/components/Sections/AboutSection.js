import React from 'react';
import { FaStar, FaPalette, FaTrophy } from 'react-icons/fa';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">من نحن</h2>
            <p className="about-description">
              في <strong>بروفايل فيرنتشر</strong>، نحن متخصصون في تقديم أثاث وتحف فاخرة تجمع بين الأناقة الكلاسيكية والتصميم العصري. 
              كل قطعة في مجموعتنا تم اختيارها بعناية فائقة لضمان الجودة العالية والجمال الخالد.
            </p>
            <p className="about-description">
              نحن نؤمن بأن الأثاث ليس مجرد قطع للاستخدام اليومي، بل هو تعبير عن شخصيتك وأسلوب حياتك. 
              لذلك نقدم لك مجموعة واسعة من القطع الفريدة التي تحمل قصة وتضفي لمسة من الفخامة على مساحتك.
            </p>
            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <FaStar />
                </div>
                <h3>جودة عالية</h3>
                <p>قطع مصنوعة من أفضل المواد</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <FaPalette />
                </div>
                <h3>تصميم فريد</h3>
                <p>كل قطعة تحمل بصمة خاصة</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <FaTrophy />
                </div>
                <h3>حرفية متميزة</h3>
                <p>صناعة يدوية باهتمام بالتفاصيل</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src="/img/Frame-48096262.png" alt="عن بروفايل فيرنتشر" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

