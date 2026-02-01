import React from 'react';
import Tabs from '../Tabs/Tabs';
import CardGrid from '../CardGrid/CardGrid';
import './ProductsSection.css';
import { 
  featuredFurniture, 
  antiquesCollection, 
  livingCollection,
  diningCollection,
  bedroomCollection 
} from '../../data/products';

const ProductsSection = () => {
  const tabs = [
    { label: 'الأثاث المميز' },
    { label: 'التحف' },
    { label: 'غرف المعيشة' },
    { label: 'طاولات الطعام' },
    { label: 'غرف النوم' },
  ];

  // تحضير البيانات مع إضافة الأسماء والأوصاف
  const preparedLivingCollection = livingCollection.map((item, index) => ({
    ...item,
    name: item.name || `مجموعة غرفة المعيشة ${index + 1}`,
    description: item.description || 'قطعة أنيقة لغرفة المعيشة',
  }));

  const preparedDiningCollection = diningCollection.map((item, index) => ({
    ...item,
    name: item.name || `طاولة طعام ${index + 1}`,
    description: item.description || 'طاولة طعام فاخرة',
  }));

  const preparedBedroomCollection = bedroomCollection.map((item, index) => ({
    ...item,
    name: item.name || `قطعة غرفة نوم ${index + 1}`,
    description: item.description || 'قطعة أنيقة لغرفة النوم',
  }));

  return (
    <section id="products" className="products-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">منتجاتنا</h2>
          <p className="section-subtitle">
            اكتشف مجموعتنا المتنوعة من الأثاث والتحف الفاخرة
          </p>
        </div>

        <Tabs tabs={tabs}>
          <CardGrid
            items={featuredFurniture}
            showDescription={true}
            columns={4}
          />
          <CardGrid
            items={antiquesCollection}
            showDescription={true}
            columns={4}
          />
          <CardGrid
            items={preparedLivingCollection}
            showDescription={true}
            columns={4}
          />
          <CardGrid
            items={preparedDiningCollection}
            showDescription={true}
            columns={4}
          />
          <CardGrid
            items={preparedBedroomCollection}
            showDescription={true}
            columns={4}
          />
        </Tabs>
      </div>
    </section>
  );
};

export default ProductsSection;

