import React from 'react';
import { FaEye } from 'react-icons/fa';
import { useModal } from '../../context/ModalContext';
import './CardGrid.css';

const CardGrid = ({ 
  items, 
  title, 
  subtitle,
  showDescription = true,
  columns = 3,
  onImageClick
}) => {
  const { openModal } = useModal();

  const handleImageClick = (item) => {
    if (onImageClick) {
      onImageClick(item.image);
    } else {
      const allImages = items.map(item => item.image);
      const currentImageIndex = items.findIndex(i => i.image === item.image);
      openModal(item.image, allImages, currentImageIndex);
    }
  };

  return (
    <section className="card-grid-section">
      <div className="container">
        {title && (
          <div className="section-header">
            <h2 className="section-title">{title}</h2>
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </div>
        )}

        <div className={`card-grid grid-cols-${columns}`}>
          {items.map((item, index) => (
            <div key={item.id || index} className="card-item">
              <div className="card-wrapper">
                <div 
                  className="card-image-wrapper"
                  onClick={() => handleImageClick(item)}
                >
                  <img 
                    src={item.image} 
                    alt={item.name || item.title || `Item ${index + 1}`}
                    className="card-image"
                  />
                  <div className="card-overlay">
                    <span className="view-icon">
                      <FaEye />
                    </span>
                    <span className="view-text">عرض الصورة</span>
                  </div>
                </div>
                
                {showDescription && (item.name || item.title || item.description) && (
                  <div className="card-content">
                    {item.name && <h3 className="card-title">{item.name}</h3>}
                    {item.title && <h3 className="card-title">{item.title}</h3>}
                    {item.description && (
                      <p className="card-description">{item.description}</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardGrid;

