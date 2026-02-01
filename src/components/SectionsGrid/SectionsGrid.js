import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SectionsGrid.css';
import { getAllSections } from '../../data/sections';

const SectionsGrid = () => {
  const navigate = useNavigate();
  const sections = getAllSections();

  const handleSectionClick = (sectionId) => {
    navigate(`/section/${sectionId}`);
  };

  return (
    <section className="sections-grid-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">مجموعاتنا</h2>
          <p className="section-subtitle">اكتشف مجموعتنا المتنوعة من الأثاث والتحف الفاخرة</p>
        </div>
        <div className="sections-grid">
          {sections.map((section) => (
            <div
              key={section.id}
              className="section-card"
              onClick={() => handleSectionClick(section.id)}
            >
              <div className="section-image-wrapper">
                <img
                  src={section.image}
                  alt={section.name}
                  className="section-image"
                  onError={(e) => {
                    e.target.src = '/img/placeholder.jpg';
                  }}
                />
                <div className="section-overlay">
                  <span className="view-section-text">عرض المجموعة</span>
                </div>
              </div>
              <div className="section-content">
                <h3 className="section-card-title">{section.name}</h3>
                <p className="section-card-description">{section.description}</p>
                <span className="section-count">{section.products.length} منتج</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionsGrid;

