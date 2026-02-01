import React from 'react';
import CardGrid from '../CardGrid/CardGrid';
import { featuredFurniture } from '../../data/products';

const FeaturedFurniture = () => {
  return (
    <div id="featured">
      <CardGrid
        items={featuredFurniture}
        title="الأثاث المميز"
        subtitle="قطع فاخرة تجمع بين الأناقة والراحة والجودة العالية"
        showDescription={true}
        columns={3}
      />
    </div>
  );
};

export default FeaturedFurniture;

