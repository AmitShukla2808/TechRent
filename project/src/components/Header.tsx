import React from 'react';
import { Laptop } from 'lucide-react';
import { SearchBar } from './SearchBar';

type Props = {
  searchQuery: string;
  onSearchChange: (query: string) => void;
};

export function Header({ searchQuery, onSearchChange }: Props) {
  return (
    <header className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div className="flex items-center gap-3">
            <Laptop className="w-8 h-8" />
            <h1 className="text-3xl font-bold">TechRent</h1>
          </div>
          <div className="flex items-center gap-4">
            <SearchBar value={searchQuery} onChange={onSearchChange} />
            <button className="px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50">
              List Your Device
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}