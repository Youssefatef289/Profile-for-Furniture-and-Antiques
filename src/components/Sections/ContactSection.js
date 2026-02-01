import React from 'react';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
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
                <a href="tel:+201055862183">+20 10 55862183</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaWhatsapp />
              </div>
              <div className="info-content">
                <h3>واتساب</h3>
                <a href="http://wa.me/201055862183" target="_blank" rel="noopener noreferrer">
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
                <p>القاهرة، مصر</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

