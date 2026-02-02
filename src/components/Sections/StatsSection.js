import React from 'react';
import { FaUsers, FaBox, FaAward, FaSmile } from 'react-icons/fa';
import './StatsSection.css';

const StatsSection = () => {
  const stats = [
    {
      id: 1,
      icon: <FaUsers />,
      number: '500+',
      label: 'عميل راضٍ',
      description: 'عملاء سعداء بخدماتنا',
    },
    {
      id: 2,
      icon: <FaBox />,
      number: '1000+',
      label: 'قطعة فاخرة',
      description: 'مجموعة متنوعة من الأثاث',
    },
    {
      id: 3,
      icon: <FaAward />,
      number: '15+',
      label: 'سنة خبرة',
      description: 'في مجال الأثاث والتحف',
    },
    {
      id: 4,
      icon: <FaSmile />,
      number: '98%',
      label: 'رضا العملاء',
      description: 'نسبة رضا عالية',
    },
  ];

  return (
    <section id="stats" className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-card">
              <div className="stat-icon-wrapper">
                {stat.icon}
              </div>
              <div className="stat-content">
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
                <p className="stat-description">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

