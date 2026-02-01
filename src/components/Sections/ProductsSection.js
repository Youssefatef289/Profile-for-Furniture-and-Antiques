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
    { label: 'الكل' },
    { label: 'الأثاث المميز' },
    { label: 'التحف' },
    { label: 'غرف المعيشة' },
    { label: 'طاولات الطعام' },
    { label: 'غرف النوم' },
  ];

  // دمج جميع المنتجات
  const allProducts = [
    ...featuredFurniture,
    ...antiquesCollection,
    ...livingCollection.map((item, index) => ({
      ...item,
      name: item.name || `مجموعة غرفة المعيشة ${index + 1}`,
      description: item.description || 'قطعة أنيقة لغرفة المعيشة',
    })),
    ...diningCollection.map((item, index) => ({
      ...item,
      name: item.name || `طاولة طعام ${index + 1}`,
      description: item.description || 'طاولة طعام فاخرة',
    })),
    ...bedroomCollection.map((item, index) => ({
      ...item,
      name: item.name || `قطعة غرفة نوم ${index + 1}`,
      description: item.description || 'قطعة أنيقة لغرفة النوم',
    })),
  ];

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
            items={allProducts}
            showDescription={true}
            columns={4}
          />
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
            items={livingCollection.map((item, index) => ({
              ...item,
              name: item.name || `مجموعة غرفة المعيشة ${index + 1}`,
              description: item.description || 'قطعة أنيقة لغرفة المعيشة',
            }))}
            showDescription={true}
            columns={4}
          />
          <CardGrid
            items={diningCollection.map((item, index) => ({
              ...item,
              name: item.name || `طاولة طعام ${index + 1}`,
              description: item.description || 'طاولة طعام فاخرة',
            }))}
            showDescription={true}
            columns={4}
          />
          <CardGrid
            items={bedroomCollection.map((item, index) => ({
              ...item,
              name: item.name || `قطعة غرفة نوم ${index + 1}`,
              description: item.description || 'قطعة أنيقة لغرفة النوم',
            }))}
            showDescription={true}
            columns={4}
          />
        </Tabs>
      </div>
    </section>
  );
};

export default ProductsSection;

