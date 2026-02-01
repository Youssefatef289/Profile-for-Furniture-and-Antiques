import React from 'react';
import CardGrid from '../CardGrid/CardGrid';
import { livingCollection } from '../../data/products';

const LivingCollection = () => {
  return (
    <div id="living">
      <CardGrid
        items={livingCollection}
        title="مجموعة غرفة المعيشة"
        subtitle="أثاث أنيق يجعل منزلك مكاناً للراحة والاسترخاء"
        showDescription={false}
        columns={3}
      />
    </div>
  );
};

export default LivingCollection;

