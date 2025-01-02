import React, { useState } from 'react';
import { Calendar, X } from 'lucide-react';
import { Product, RentalPeriod } from '../types';
import { formatPrice } from '../utils/format';

type Props = {
  product: Product;
  onClose: () => void;
  onSubmit: (period: RentalPeriod, duration: number) => void;
};

export function RentalModal({ product, onClose, onSubmit }: Props) {
  const [period, setPeriod] = useState<RentalPeriod>('daily');
  const [duration, setDuration] = useState(1);

  const rate = period === 'daily' ? product.dailyRate :
               period === 'weekly' ? product.weeklyRate :
               product.monthlyRate;

  const total = rate * duration;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Rent {product.name}</h3>
          <button onClick={onClose}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rental Period
            </label>
            <select
              value={period}
              onChange={(e) => setPeriod(e.target.value as RentalPeriod)}
              className="w-full px-3 py-2 border rounded-lg"
            >
              <option value="daily">Daily ({formatPrice(product.dailyRate)}/day)</option>
              <option value="weekly">Weekly ({formatPrice(product.weeklyRate)}/week)</option>
              <option value="monthly">Monthly ({formatPrice(product.monthlyRate)}/month)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Duration ({period === 'daily' ? 'days' : period === 'weekly' ? 'weeks' : 'months'})
            </label>
            <input
              type="number"
              min="1"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>

          <div className="flex items-center justify-between py-4 border-t">
            <span className="text-gray-600">Total Cost:</span>
            <span className="text-2xl font-bold text-blue-600">{formatPrice(total)}</span>
          </div>

          <button
            onClick={() => onSubmit(period, duration)}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}