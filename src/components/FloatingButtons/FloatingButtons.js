import React from 'react';
import { FaPhone, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import './FloatingButtons.css';

const FloatingButtons = () => {
  return (
    <div className="floating-contact-buttons">
      <a
        href="tel:+201050894112"
        className="floating-btn floating-btn-phone"
        aria-label="اتصل بنا"
        title="اتصل بنا"
      >
        <FaPhone />
        <span className="floating-btn-text">اتصل بنا</span>
      </a>
      <a
        href="http://wa.me/201050894112"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-btn-whatsapp"
        aria-label="واتساب"
        title="واتساب"
      >
        <FaWhatsapp />
        <span className="floating-btn-text">واتساب</span>
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=61553085327842"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-btn-facebook"
        aria-label="فيسبوك"
        title="فيسبوك"
      >
        <FaFacebook />
        <span className="floating-btn-text">فيسبوك</span>
      </a>
    </div>
  );
};

export default FloatingButtons;

