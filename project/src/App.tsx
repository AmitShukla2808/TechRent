import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Filters } from './components/Filters';
import { ProductCard } from './components/ProductCard';
import { ProductDetail } from './components/ProductDetail';
import { RentalModal } from './components/RentalModal';
import { products } from './data/products';
import { Filter, Product, RentalPeriod } from './types';

export default function App() {
  const [filters, setFilters] = useState<Filter>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showDetail, setShowDetail] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      if (filters.category && product.category !== filters.category) return false;
      if (filters.condition && product.condition !== filters.condition) return false;
      if (filters.minPrice && product.dailyRate < filters.minPrice) return false;
      if (filters.maxPrice && product.dailyRate > filters.maxPrice) return false;
      if (filters.available && !product.available) return false;
      
      if (searchQuery) {
        const search = searchQuery.toLowerCase();
        return (
          product.name.toLowerCase().includes(search) ||
          product.brand.toLowerCase().includes(search) ||
          product.category.toLowerCase().includes(search)
        );
      }
      
      return true;
    });
  }, [filters, searchQuery]);

  const handleRentClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleRentalSubmit = (period: RentalPeriod, duration: number) => {
    console.log('Rental submitted:', { product: selectedProduct, period, duration });
    setSelectedProduct(null);
  };

  const handleProductClick = (product: Product) => {
    setShowDetail(product);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {showDetail ? (
          <ProductDetail 
            product={showDetail}
            onBack={() => setShowDetail(null)}
            onRentClick={handleRentClick}
          />
        ) : (
          <div className="flex gap-8">
            <aside className="w-64 flex-shrink-0">
              <Filters filters={filters} onFilterChange={setFilters} />
            </aside>

            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div 
                    key={product.id}
                    onClick={() => handleProductClick(product)}
                    className="cursor-pointer transition-transform hover:scale-105"
                  >
                    <ProductCard
                      product={product}
                      onRentClick={(e) => {
                        e.stopPropagation();
                        handleRentClick(product);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {selectedProduct && (
        <RentalModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onSubmit={handleRentalSubmit}
        />
      )}
    </div>
  );
}