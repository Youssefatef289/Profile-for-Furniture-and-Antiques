import React from 'react';
import './AboutUsSection.css';

const AboutUsSection = () => {
  const aboutItems = [
    {
      number: '1',
      title: 'من نحن',
      description: 'نحن متخصصون في تقديم أثاث وتحف فاخرة تجمع بين الأناقة الكلاسيكية والتصميم العصري. كل قطعة تم اختيارها بعناية.',
    },
    {
      number: '2',
      title: 'ماذا نفعل',
      description: 'نقدم لك مجموعة واسعة من القطع الفريدة التي تحمل قصة وتضفي لمسة من الفخامة على مساحتك.',
    },
    {
      number: '3',
      title: 'كيف نساعدك',
      description: 'نوفر لك استشارات مجانية في التصميم والديكور لمساعدتك في اختيار القطع المثالية لمنزلك.',
    },
    {
      number: '4',
      title: 'نصنع قصة نجاح',
      description: 'مع وصولك إلى مجموعتنا المتنوعة، يمكن لأي شخص تحويل مساحته إلى مكان أنيق وفاخر.',
    },
  ];

  const images = [
    '/img/collection/sofa-collection-banner.jpg',
    '/img/set-7.jpeg',
    '/img/dining table/dining table (1).jpg',
    '/img/Dressing Room/Dressing Room (1).jpg',
  ];

  return (
    <section id="about-us" className="about-us-section">
      <div className="container">
        <div className="about-us-content">
          <div className="about-us-text">
            <h2 className="about-us-title">من نحن</h2>
            <p className="about-us-intro">
              شغفنا بالحرفية الاستثنائية يدفعنا لاختيار أفضل القطع لكل غرفة في منزلك.
            </p>
            <div className="about-us-items">
              {aboutItems.map((item, index) => (
                <div key={index} className="about-us-item">
                  <span className="item-number">{item.number}</span>
                  <div className="item-content">
                    <h3 className="item-title">{item.title}</h3>
                    <p className="item-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-us-visual">
            <a href="#products" className="learn-more-btn">
              اعرف المزيد
            </a>
            <div className="about-us-images">
              {images.map((image, index) => (
                <div key={index} className="about-image-item">
                  <img src={image} alt={`صورة ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

