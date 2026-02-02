import React from 'react';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaFacebook } from 'react-icons/fa';
import './ContactSection.css';

const ContactSection = () => {

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <h2 className="section-title">اتصل بنا</h2>
        <p className="section-subtitle">
          نحن هنا لمساعدتك في العثور على القطعة المثالية لمنزلك
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <FaPhone />
              </div>
              <div className="info-content">
                <h3>الهاتف</h3>
                <a href="tel:+201050894112">+20 10 50894112</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaWhatsapp />
              </div>
              <div className="info-content">
                <h3>واتساب</h3>
                <a href="http://wa.me/201050894112" target="_blank" rel="noopener noreferrer">
                  تواصل معنا عبر واتساب
                </a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div className="info-content">
                <h3>البريد الإلكتروني</h3>
                <a href="mailto:info@designsens.com">info@designsens.com</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-content">
                <h3>الموقع</h3>
                <p>بني سويف - اخر شارع حاتم رشدي من الروضه (الشارع الجديد) أمام صيدليه اريج جمال, Beni Suef, Egypt, 62511</p>
              </div>
              </div>
            </div>
          </div>

        {/* Floating Contact Buttons */}
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
      </div>
    </section>
  );
};

export default ContactSection;

