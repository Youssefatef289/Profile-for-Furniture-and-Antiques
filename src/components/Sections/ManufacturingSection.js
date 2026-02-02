import React from 'react';
import { FaIndustry, FaTools, FaUsers, FaCheckCircle } from 'react-icons/fa';
import './ManufacturingSection.css';

const ManufacturingSection = () => {
  const features = [
    {
      id: 1,
      icon: <FaIndustry />,
      title: 'مصنعنا الخاص',
      description: 'نمتلك مصنعاً مجهزاً بأحدث المعدات والتقنيات لضمان أعلى معايير الجودة',
    },
    {
      id: 2,
      icon: <FaTools />,
      title: 'تصنيع بالعمولة',
      description: 'نقوم بتصنيع قطع الأثاث حسب طلبك وتصميمك الخاص مع ضمان الجودة العالية',
    },
    {
      id: 3,
      icon: <FaUsers />,
      title: 'فريق محترف',
      description: 'فريق من الحرفيين المهرة ذوي الخبرة الطويلة في صناعة الأثاث الفاخر',
    },
    {
      id: 4,
      icon: <FaCheckCircle />,
      title: 'ضمان الجودة',
      description: 'نضمن لك جودة عالية ودقة في التنفيذ مع متابعة مستمرة في جميع مراحل التصنيع',
    },
  ];

  const images = [
    '/img/collection/sofa-collection-banner.jpg',
    '/img/set-7.jpeg',
    '/img/dining table/dining table (1).jpg',
    '/img/Dressing Room/Dressing Room (1).jpg',
  ];

  return (
    <section id="manufacturing" className="manufacturing-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">التصنيع بالعمولة</h2>
          <p className="section-subtitle">
            مصنعنا الخاص جاهز لتحويل أفكارك إلى واقع ملموس
          </p>
        </div>

        <div className="manufacturing-content">
          <div className="manufacturing-text">
            <div className="manufacturing-intro">
              <h3>لماذا تختارنا للتصنيع بالعمولة؟</h3>
              <p>
                في <strong>بروفايل فيرنتشر</strong>، لا نكتفي ببيع الأثاث الجاهز فقط، بل نقدم لك خدمة التصنيع بالعمولة 
                لتحويل رؤيتك وتصميمك الخاص إلى قطع أثاث فاخرة مصنوعة خصيصاً لك. مصنعنا المجهز بأحدث المعدات 
                وفريقنا المحترف جاهزون لتنفيذ أي تصميم تريده.
              </p>
            </div>

            <div className="manufacturing-features-grid">
              {features.map((feature) => (
                <div key={feature.id} className="manufacturing-feature-card">
                  <div className="manufacturing-feature-icon">
                    {feature.icon}
                  </div>
                  <div className="manufacturing-feature-content">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="manufacturing-cta">
              <a href="#contact" className="btn btn-primary">
                اطلب تصنيع مخصص
              </a>
            </div>
          </div>

          <div className="manufacturing-visual">
            <div className="manufacturing-images-grid">
              {images.map((image, index) => (
                <div key={index} className="manufacturing-image-item">
                  <img src={image} alt={`مصنع بروفايل فيرنتشر ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingSection;

