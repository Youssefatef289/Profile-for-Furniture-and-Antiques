import React from 'react';
import { FaTrophy, FaShieldAlt, FaTruck, FaHeadset } from 'react-icons/fa';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: <FaTrophy />,
      title: 'جودة عالية',
      subtitle: 'مصنوع من أفضل المواد',
    },
    {
      id: 2,
      icon: <FaShieldAlt />,
      title: 'ضمان الحماية',
      subtitle: 'أكثر من سنتين',
    },
    {
      id: 3,
      icon: <FaTruck />,
      title: 'شحن مجاني',
      subtitle: 'للطلبات أكثر من 10000 جنيه',
    },
    {
      id: 4,
      icon: <FaHeadset />,
      title: 'دعم 24/7',
      subtitle: 'دعم مخصص',
    },
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                {feature.subtitle && (
                  <p className="feature-subtitle">{feature.subtitle}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

