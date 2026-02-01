import React, { useState } from 'react';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('شكراً لتواصلك معنا! سنرد عليك قريباً.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

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

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">الاسم</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="أدخل اسمك"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">البريد الإلكتروني</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="example@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">رقم الهاتف</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="01X XXX XXXX"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">الرسالة</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="اكتب رسالتك هنا..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              إرسال الرسالة
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

