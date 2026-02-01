import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getSectionById } from '../../data/sections';
import CardGrid from '../../components/CardGrid/CardGrid';
import Hero from '../../components/Hero/Hero';
import { useModal } from '../../context/ModalContext';
import './SectionDetails.css';

const SectionDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { openModal } = useModal();
  const section = getSectionById(id);

  if (!section) {
    return (
      <div className="section-not-found">
        <Hero
          title="السكشن غير موجود"
          description="عذراً، السكشن الذي تبحث عنه غير موجود"
          showBreadcrumb={true}
          breadcrumbItems={[
            { label: 'الرئيسية', link: '/' },
            { label: 'غير موجود' }
          ]}
        />
        <div className="container">
          <div style={{ textAlign: 'center', padding: '3rem 0' }}>
            <button onClick={() => navigate('/')} className="btn btn-primary">
              العودة للصفحة الرئيسية
            </button>
          </div>
        </div>
      </div>
    );
  }

  // تحويل المنتجات إلى تنسيق CardGrid
  const products = section.products.map((image, index) => ({
    id: index + 1,
    name: `${section.name} - ${index + 1}`,
    description: `منتج من مجموعة ${section.name}`,
    image: image,
    price: null,
  }));

  const handleImageClick = (image) => {
    openModal(image, section.products);
  };

  return (
    <div className="section-details-page">
      <Hero
        title={section.name}
        subtitle={`${section.products.length} منتج متاح`}
        description={section.description}
        backgroundImage={section.image}
        showBreadcrumb={true}
        breadcrumbItems={[
          { label: 'الرئيسية', link: '/' },
          { label: 'المجموعات', link: '/#sections' },
          { label: section.name }
        ]}
      />
      <div className="section-details-content">
        <CardGrid
          items={products}
          columns={4}
          onImageClick={handleImageClick}
        />
      </div>
    </div>
  );
};

export default SectionDetails;

