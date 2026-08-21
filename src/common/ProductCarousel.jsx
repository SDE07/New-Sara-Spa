import React from 'react';
import ProductCard from './ProductCard';

export default function ProductCarousel({ items = [] }) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {items.map((item, idx) => (
          <ProductCard key={idx} item={item} />
        ))}
      </div>
    </div>
  );
}
