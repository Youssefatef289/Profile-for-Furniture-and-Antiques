import React from 'react';
import CardGrid from '../CardGrid/CardGrid';
import { antiquesCollection } from '../../data/products';

const AntiquesCollection = () => {
  return (
    <div id="antiques">
      <CardGrid
        items={antiquesCollection}
        title="مجموعة التحف"
        subtitle="قطع أثرية فريدة تحمل تاريخاً عريقاً وجمالاً خالداً"
        showDescription={true}
        columns={3}
      />
    </div>
  );
};

export default AntiquesCollection;

