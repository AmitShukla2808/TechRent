import React from 'react';
import { Filter } from '../types';

type Props = {
  filters: Filter;
  onFilterChange: (filters: Filter) => void;
};

export function Filters({ filters, onFilterChange }: Props) {
  const categories = ['All', 'Laptop', 'Camera', 'Gaming', 'Audio', 'TV'];
  const conditions = ['All', 'Like New', 'Good', 'Fair'];

  return (
    <div className="bg-white rounded-lg shadow p-6 space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Category</h3>
        <div className="space-y-2">
          {categories.map(category => (
            <label key={category} className="flex items-center gap-2">
              <input
                type="radio"
                name="category"
                checked={filters.category === category || (category === 'All' && !filters.category)}
                onChange={() => onFilterChange({
                  ...filters,
                  category: category === 'All' ? undefined : category
                })}
                className="text-blue-600"
              />
              {category}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Price Range (per day)</h3>
        <div className="flex gap-4">
          <input
            type="number"
            placeholder="Min"
            value={filters.minPrice || ''}
            onChange={(e) => onFilterChange({
              ...filters,
              minPrice: e.target.value ? Number(e.target.value) : undefined
            })}
            className="w-24 px-3 py-2 border rounded"
          />
          <input
            type="number"
            placeholder="Max"
            value={filters.maxPrice || ''}
            onChange={(e) => onFilterChange({
              ...filters,
              maxPrice: e.target.value ? Number(e.target.value) : undefined
            })}
            className="w-24 px-3 py-2 border rounded"
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Condition</h3>
        <div className="space-y-2">
          {conditions.map(condition => (
            <label key={condition} className="flex items-center gap-2">
              <input
                type="radio"
                name="condition"
                checked={filters.condition === condition || (condition === 'All' && !filters.condition)}
                onChange={() => onFilterChange({
                  ...filters,
                  condition: condition === 'All' ? undefined : condition
                })}
                className="text-blue-600"
              />
              {condition}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.available}
            onChange={(e) => onFilterChange({
              ...filters,
              available: e.target.checked
            })}
            className="text-blue-600"
          />
          Available Now
        </label>
      </div>
    </div>
  );
}