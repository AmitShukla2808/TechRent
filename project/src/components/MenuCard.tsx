import React from 'react';
import { Clock, Coffee, Sun, Moon } from 'lucide-react';

type Meal = {
  type: 'breakfast' | 'lunch' | 'snacks' | 'dinner';
  time: string;
  items: string[];
};

type MenuCardProps = {
  meal: Meal;
};

const icons = {
  breakfast: Coffee,
  lunch: Sun,
  snacks: Coffee,
  dinner: Moon,
};

export function MenuCard({ meal }: MenuCardProps) {
  const Icon = icons[meal.type];
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-6 h-6 text-orange-500" />
        <h3 className="text-xl font-semibold capitalize">{meal.type}</h3>
      </div>
      <div className="flex items-center gap-2 text-gray-600 mb-4">
        <Clock className="w-4 h-4" />
        <span>{meal.time}</span>
      </div>
      <ul className="space-y-2">
        {meal.items.map((item, index) => (
          <li key={index} className="text-gray-700">{item}</li>
        ))}
      </ul>
    </div>
  );
}