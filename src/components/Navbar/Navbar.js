import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CartIcon from '../Cart/CartIcon';
import { getAllSections } from '../../data/sections';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSectionsMenuOpen, setIsSectionsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const sections = getAllSections();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.navbar-menu') && !event.target.closest('.mobile-menu-toggle')) {
        setIsMobileMenuOpen(false);
      }
      if (isSectionsMenuOpen && !event.target.closest('.sections-dropdown')) {
        setIsSectionsMenuOpen(false);
      }
    };

    if (isMobileMenuOpen || isSectionsMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      if (isMobileMenuOpen) {
        document.body.style.overflow = 'hidden';
      }
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen, isSectionsMenuOpen]);

  // Smooth scroll function
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
    setIsSectionsMenuOpen(false);

    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation then scroll
      setTimeout(() => {
        scrollToSection(href);
      }, 300);
    } else {
      scrollToSection(href);
    }
  };

  const scrollToSection = (href) => {
    const targetId = href.replace('#', '');
    
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      const element = document.getElementById(targetId);
      
      if (element) {
        const offset = 120; // Offset for fixed navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 50);
  };

  const handleSectionClick = (sectionId) => {
    setIsMobileMenuOpen(false);
    setIsSectionsMenuOpen(false);
    navigate(`/section/${sectionId}`);
  };

  const menuItems = [
    { label: 'الرئيسية', href: '#home' },
    { label: 'المميزات', href: '#features' },
    { label: 'الإحصائيات', href: '#stats' },
    { label: 'من نحن', href: '#about-us' },
    { label: 'التصنيع بالعمولة', href: '#manufacturing' },
    { label: 'منتجاتنا', href: '#products' },
    { label: 'آراء العملاء', href: '#testimonials' },
    { label: 'الأسئلة الشائعة', href: '#faq' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : 'over-hero'}`}>
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <a href="#home">
              <img 
                src={isScrolled ? "/img/logo-black.png" : "/img/logo-white.png"} 
                alt="بروفايل فيرنتشر" 
                className="logo-image" 
              />
            </a>
          </div>
          
          {isMobileMenuOpen && (
            <div 
              className="mobile-menu-overlay"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}
          
          <ul className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
            {menuItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="sections-menu-item">
              <div className="sections-dropdown">
                <button
                  className="sections-dropdown-toggle"
                  onClick={() => setIsSectionsMenuOpen(!isSectionsMenuOpen)}
                >
                  السكاشن
                  <span className={`dropdown-arrow ${isSectionsMenuOpen ? 'open' : ''}`}>▼</span>
                </button>
                {isSectionsMenuOpen && (
                  <ul className="sections-dropdown-menu">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <button
                          onClick={() => handleSectionClick(section.id)}
                          className="section-link"
                        >
                          {section.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          </ul>

          <div className="navbar-actions">
            <CartIcon />
            <button
              className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

