import React from 'react';
import CardGrid from '../CardGrid/CardGrid';
import { diningCollection } from '../../data/products';

const DiningCollection = () => {
  return (
    <div id="dining">
      <CardGrid
        items={diningCollection}
        title="مجموعة غرفة الطعام"
        subtitle="طاولات وكراسي فاخرة لوجبات عائلية لا تُنسى"
        showDescription={false}
        columns={3}
      />
    </div>
  );
};

export default DiningCollection;

