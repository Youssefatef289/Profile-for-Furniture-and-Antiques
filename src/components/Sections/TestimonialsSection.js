import React from 'react';
import { FaStar, FaQuoteRight } from 'react-icons/fa';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'أحمد محمد',
      role: 'عميل',
      rating: 5,
      text: 'تجربة رائعة! القطع التي اشتريتها كانت بجودة عالية وتصميم أنيق. فريق العمل محترف جداً وساعدني في اختيار القطع المناسبة.',
      image: '/img/clients/client1.jpg',
    },
    {
      id: 2,
      name: 'فاطمة علي',
      role: 'عميلة',
      rating: 5,
      text: 'أثاث فاخر بكل معنى الكلمة. التصميم الكلاسيكي يجمع بين الأناقة والراحة. أنصح الجميع بالتعامل معهم.',
      image: '/img/clients/client2.jpg',
    },
    {
      id: 3,
      name: 'خالد إبراهيم',
      role: 'عميل',
      rating: 5,
      text: 'خدمة ممتازة وتوصيل سريع. القطع وصلت بحالة ممتازة والتغليف كان احترافياً. شكراً لكم على الجودة العالية.',
      image: '/img/clients/client3.jpg',
    },
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">آراء عملائنا</h2>
          <p className="section-subtitle">
            نفتخر بثقة عملائنا ونعمل دائماً على تحسين تجربتهم
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  <div className="avatar-placeholder">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div className="testimonial-info">
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
                <div className="testimonial-quote-icon">
                  <FaQuoteRight />
                </div>
              </div>

              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="star-icon" />
                ))}
              </div>

              <p className="testimonial-text">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

