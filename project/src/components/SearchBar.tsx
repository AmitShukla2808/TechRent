import React from 'react';
import { Search } from 'lucide-react';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchBar({ value, onChange }: Props) {
  return (
    <div className="relative">
      <input
        type="search"
        placeholder="Search by name, brand, or category..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full md:w-96 px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
    </div>
  );
}