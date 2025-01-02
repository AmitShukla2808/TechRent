import React from 'react';
import { Star, Clock } from 'lucide-react';
import { Product } from '../types';
import { formatPrice } from '../utils/format';

type Props = {
  product: Product;
  onRentClick: (e: React.MouseEvent) => void;
};

export function ProductCard({ product, onRentClick }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <img 
        src={product.imageUrl} 
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.brand}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm ${
            product.condition === 'Like New' ? 'bg-green-100 text-green-700' :
            product.condition === 'Good' ? 'bg-blue-100 text-blue-700' :
            'bg-yellow-100 text-yellow-700'
          }`}>
            {product.condition}
          </span>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600">From {formatPrice(product.dailyRate)}/day</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-gray-600">4.8 (24 reviews)</span>
          </div>
        </div>

        <button
          onClick={onRentClick}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400"
          disabled={!product.available}
        >
          {product.available ? 'Rent Now' : 'Currently Rented'}
        </button>
      </div>
    </div>
  );
}