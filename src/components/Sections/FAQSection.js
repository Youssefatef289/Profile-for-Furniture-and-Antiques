import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaCreditCard, FaTruck, FaTools, FaUndo, FaPalette, FaShieldAlt } from 'react-icons/fa';
import './FAQSection.css';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      icon: <FaCreditCard />,
      category: 'الدفع والتسليم',
      question: 'ما هي طرق الدفع المتاحة؟',
      answer: 'نوفر عدة طرق دفع مريحة: الدفع نقداً عند الاستلام، التحويل البنكي المباشر، والدفع عبر البطاقات الائتمانية. كما نوفر خيارات تقسيط مريحة للعملاء على القطع ذات القيمة العالية.',
    },
    {
      id: 2,
      icon: <FaTruck />,
      category: 'الدفع والتسليم',
      question: 'كم يستغرق التوصيل؟',
      answer: 'مدة التوصيل تتراوح بين 3-7 أيام عمل حسب الموقع. نوفر خدمة توصيل سريعة للمناطق القريبة مع إمكانية التوصيل في نفس اليوم للطلبات قبل الساعة 12 ظهراً. التوصيل مجاني للطلبات التي تزيد عن 10,000 جنيه.',
    },
    {
      id: 3,
      icon: <FaTools />,
      category: 'الخدمات',
      question: 'هل تقدمون خدمة التركيب؟',
      answer: 'نعم، نوفر خدمة التركيب المجانية لجميع القطع. فريقنا المحترف والمدرب يقوم بتركيب القطع في منزلك بكل احترافية ودقة. نضمن لك تركيباً آمناً وصحيحاً لجميع القطع.',
    },
    {
      id: 4,
      icon: <FaUndo />,
      category: 'سياسات الشراء',
      question: 'ما هي سياسة الإرجاع والاستبدال؟',
      answer: 'يمكنك إرجاع أو استبدال القطعة خلال 7 أيام من تاريخ الاستلام بشرط أن تكون بحالة جيدة وغير مستخدمة. يجب الحفاظ على التغليف الأصلي. نضمن لك رضاك التام ونوفر استبدالاً سريعاً.',
    },
    {
      id: 5,
      icon: <FaPalette />,
      category: 'الخدمات',
      question: 'هل تقدمون استشارات في التصميم؟',
      answer: 'نعم، نوفر استشارات مجانية في التصميم والديكور. خبراؤنا المتخصصون يساعدونك في اختيار القطع المناسبة لمساحتك مع مراعاة ذوقك الشخصي والميزانية المتاحة. يمكنك حجز استشارة مجانية عبر التواصل معنا.',
    },
    {
      id: 6,
      icon: <FaShieldAlt />,
      category: 'الضمان والصيانة',
      question: 'ما هي فترة الضمان؟',
      answer: 'نوفر ضماناً لمدة سنتين على جميع القطع من تاريخ الشراء. يشمل الضمان عيوب التصنيع والعيوب الهيكلية. كما نقدم خدمة صيانة دورية لضمان جودة القطع على المدى الطويل. نحن ملتزمون بجودة منتجاتنا.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">الأسئلة الشائعة</h2>
          <p className="section-subtitle">
            إجابات على أكثر الأسئلة شيوعاً من عملائنا
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <div className="faq-question-content">
                  <div className="faq-icon-wrapper">
                    {faq.icon}
                  </div>
                  <div className="faq-question-info">
                    <span className="faq-category">{faq.category}</span>
                    <span className="faq-question-text">{faq.question}</span>
                  </div>
                </div>
                <span className="faq-chevron">
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

