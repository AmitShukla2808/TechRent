import React from 'react';
import { ArrowLeft, Star, Clock, Shield, MessageCircle } from 'lucide-react';
import { Product } from '../types';
import { formatPrice } from '../utils/format';
import { ImageGallery } from './ImageGallery';
import { Reviews } from './Reviews';

type Props = {
  product: Product;
  onBack: () => void;
  onRentClick: (product: Product) => void;
};

export function ProductDetail({ product, onBack, onRentClick }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-lg">
      <div className="relative">
        <button 
          onClick={onBack}
          className="absolute top-4 left-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <ImageGallery images={product.images} alt={product.name} />
      </div>
      
      <div className="p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-xl text-gray-600">{product.brand}</p>
          </div>
          <span className={`px-4 py-2 rounded-full text-sm font-medium ${
            product.condition === 'Like New' ? 'bg-green-100 text-green-700' :
            product.condition === 'Good' ? 'bg-blue-100 text-blue-700' :
            'bg-yellow-100 text-yellow-700'
          }`}>
            {product.condition}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Specifications</h2>
            <dl className="space-y-2">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <dt className="text-gray-600 capitalize">{key}:</dt>
                  <dd className="font-medium">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Rental Rates</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Daily Rate:</span>
                  <span className="font-medium">{formatPrice(product.dailyRate)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Weekly Rate:</span>
                  <span className="font-medium">{formatPrice(product.weeklyRate)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Monthly Rate:</span>
                  <span className="font-medium">{formatPrice(product.monthlyRate)}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="font-medium">
                  {(product.reviews.reduce((acc, r) => acc + r.rating, 0) / product.reviews.length).toFixed(1)}
                </span>
                <span className="text-gray-600">({product.reviews.length} reviews)</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600">Quick Response</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between p-6 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-4">
            <Shield className="w-6 h-6 text-green-600" />
            <div>
              <h3 className="font-medium">Protected Rental</h3>
              <p className="text-sm text-gray-600">Insurance coverage included</p>
            </div>
          </div>
          <button
            onClick={() => onRentClick(product)}
            disabled={!product.available}
            className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400"
          >
            {product.available ? 'Rent Now' : 'Currently Rented'}
          </button>
        </div>

        <div className="mt-8">
          <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
            <MessageCircle className="w-5 h-5" />
            <span>Contact Owner</span>
          </button>
        </div>

        <Reviews reviews={product.reviews} />
      </div>
    </div>
  );
}