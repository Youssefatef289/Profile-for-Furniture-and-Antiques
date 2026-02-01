import React from 'react';
import CardGrid from '../CardGrid/CardGrid';
import { bedroomCollection } from '../../data/products';

const BedroomCollection = () => {
  return (
    <div id="bedroom">
      <CardGrid
        items={bedroomCollection}
        title="مجموعة غرفة النوم"
        subtitle="أثاث أنيق يضفي لمسة من الفخامة على غرفتك الخاصة"
        showDescription={false}
        columns={3}
      />
    </div>
  );
};

export default BedroomCollection;

