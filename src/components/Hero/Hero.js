import React from 'react';
import './Hero.css';

const Hero = ({ 
  id,
  title, 
  subtitle, 
  description, 
  backgroundImage,
  showBreadcrumb = false,
  breadcrumbItems = []
}) => {
  return (
    <section 
      id={id}
      className="hero-section"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          {showBreadcrumb && breadcrumbItems.length > 0 && (
            <nav className="hero-breadcrumb" aria-label="breadcrumb">
              {breadcrumbItems.map((item, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <span className="breadcrumb-separator">/</span>}
                  {item.link ? (
                    <a href={item.link} className="breadcrumb-item">{item.label}</a>
                  ) : (
                    <span className="breadcrumb-item active">{item.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}
          <h1 className="hero-title">{title}</h1>
          {subtitle && <h2 className="hero-subtitle">{subtitle}</h2>}
          {description && <p className="hero-description">{description}</p>}
        </div>
      </div>
    </section>
  );
};

export default Hero;

