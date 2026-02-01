import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'الرئيسية', href: '#home' },
    { label: 'الأثاث المميز', href: '#featured' },
    { label: 'التحف', href: '#antiques' },
    { label: 'المجموعات', href: '#collections' },
    { label: 'من نحن', href: '#about' },
    { label: 'اتصل بنا', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <a href="#home">بروفايل فيرنتشر</a>
          </div>
          
          <ul className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
            {menuItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

